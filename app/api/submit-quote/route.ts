import { NextRequest, NextResponse } from 'next/server'
import { sendQuoteRequestEmail } from '@/lib/sendEmail'
import { appendToSheet, initSheetHeaders } from '@/lib/googleSheets'

export async function POST(req: NextRequest) {
  console.log('[QUOTE API] Route hit at', new Date().toISOString())
  
  try {
    console.log('[QUOTE API] Step 1: Parsing request body...')
    const body = await req.json()
    console.log('[QUOTE API] Step 1 SUCCESS — Body parsed')

    const {
      fullName,
      email,
      phone,
      petType,
      petName,
      breed,
      petAge,
      petWeight,
      route,
      collectionCity,
      deliveryCity,
      preferredDate,
      serviceType,
      message,
      consent,
    } = body

    console.log('[QUOTE API] Step 2: Validating required fields...', {
      fullName: !!fullName,
      email: !!email,
      petName: !!petName,
      collectionCity: !!collectionCity,
      deliveryCity: !!deliveryCity,
    })

    // Validate required fields
    if (!fullName || !email || 
        !petName || !collectionCity || 
        !deliveryCity) {
      console.error('[QUOTE API] Step 2 FAILED — Missing required fields')
      return NextResponse.json(
        { error: 'Required fields missing', step: 'validation' },
        { status: 400 }
      )
    }

    if (!consent) {
      console.error('[QUOTE API] Step 2 FAILED — Consent not given')
      return NextResponse.json(
        { error: 'Consent required', step: 'validation' },
        { status: 400 }
      )
    }

    console.log('[QUOTE API] Step 2 SUCCESS — All validations passed')

    console.log('[QUOTE API] Step 3: Sending email and saving to sheets...')
    // Run email and sheets in parallel
    const results = await Promise.allSettled([
      // Send email notification
      (async () => {
        console.log('[QUOTE API] Step 3a: Calling sendQuoteRequestEmail...')
        const result = await sendQuoteRequestEmail({
          fullName,
          email,
          phone,
          petType,
          petName,
          breed,
          petAge,
          petWeight,
          route,
          collectionCity,
          deliveryCity,
          preferredDate,
          serviceType,
          message,
        })
        console.log('[QUOTE API] Step 3a SUCCESS — Email function completed')
        return result
      })(),

      // Save to Google Sheets
      (async () => {
        console.log('[QUOTE API] Step 3b: Saving to Google Sheets...')
        await initSheetHeaders()
        await appendToSheet('Quote Requests', [
          fullName,
          email,
          phone || '',
          petType || '',
          petName,
          breed || '',
          petAge || '',
          petWeight || '',
          route || '',
          collectionCity,
          deliveryCity,
          preferredDate || '',
          serviceType || '',
          message || '',
          consent ? 'Yes' : 'No',
        ])
        console.log('[QUOTE API] Step 3b SUCCESS — Sheets saved')
      })(),
    ])

    // Log results
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`[QUOTE API] Task ${index} fulfilled`)
      } else {
        console.error(`[QUOTE API] Task ${index} rejected:`, result.reason)
      }
    })

    console.log('[QUOTE API] SUCCESS — All tasks complete')
    return NextResponse.json({ 
      success: true,
      message: 'Quote request submitted successfully'
    })

  } catch (error) {
    console.error('[QUOTE API] UNHANDLED ERROR:', error)
    if (error instanceof Error) {
      console.error('[QUOTE API] Error message:', error.message)
      console.error('[QUOTE API] Error stack:', error.stack)
    }
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again or contact us directly.', step: 'unknown' },
      { status: 500 }
    )
  }
}
