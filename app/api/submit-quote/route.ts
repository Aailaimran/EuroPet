import { NextRequest, NextResponse } from 'next/server'
import { sendQuoteRequestEmail } from '@/lib/sendEmail'
import { appendToSheet, initSheetHeaders } from '@/lib/googleSheets'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

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

    // Validate required fields
    if (!fullName || !email || 
        !petName || !collectionCity || 
        !deliveryCity) {
      return NextResponse.json(
        { error: 'Required fields missing' },
        { status: 400 }
      )
    }

    if (!consent) {
      return NextResponse.json(
        { error: 'Consent required' },
        { status: 400 }
      )
    }

    // Run email and sheets in parallel
    await Promise.allSettled([
      // Send email notification
      sendQuoteRequestEmail({
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
      }),

      // Save to Google Sheets
      initSheetHeaders().then(() =>
        appendToSheet('Quote Requests', [
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
      ),
    ])

    return NextResponse.json({ 
      success: true,
      message: 'Quote request submitted successfully'
    })

  } catch (error) {
    console.error('Quote submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again or contact us directly.' },
      { status: 500 }
    )
  }
}
