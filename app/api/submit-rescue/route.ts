import { NextRequest, NextResponse } from 'next/server'
import { sendRescueInfoEmail } from '@/lib/sendEmail'
import { appendToSheet, initSheetHeaders } from '@/lib/googleSheets'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      fullName,
      email,
      phone,
      bestTimeToCall,
      dogName,
      dogBreed,
      dogLocation,
      questions,
      howDidTheyHear,
      consent,
    } = body

    if (!fullName || !email || !questions) {
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

    await Promise.allSettled([
      sendRescueInfoEmail({
        fullName,
        email,
        phone,
        bestTimeToCall,
        dogName,
        dogBreed,
        dogLocation,
        questions,
        howDidTheyHear,
      }),

      initSheetHeaders().then(() =>
        appendToSheet('Rescue Enquiries', [
          fullName,
          email,
          phone || '',
          bestTimeToCall || '',
          dogName || '',
          dogBreed || '',
          dogLocation || '',
          questions,
          howDidTheyHear || '',
          consent ? 'Yes' : 'No',
        ])
      ),
    ])

    return NextResponse.json({ 
      success: true 
    })

  } catch (error) {
    console.error('Rescue submission error:', error)
    return NextResponse.json(
      { error: 'Submission failed. Please try again.' },
      { status: 500 }
    )
  }
}
