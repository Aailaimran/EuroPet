import { NextRequest, NextResponse } from 'next/server'
import { sendNewsletterNotification } from '@/lib/sendEmail'
import { appendToSheet, initSheetHeaders } from '@/lib/googleSheets'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email required' },
        { status: 400 }
      )
    }

    await Promise.allSettled([
      sendNewsletterNotification(email),

      initSheetHeaders().then(() =>
        appendToSheet(
          'Newsletter Subscribers', 
          [email, 'Footer Signup']
        )
      ),
    ])

    return NextResponse.json({ 
      success: true 
    })

  } catch (error) {
    console.error(
      'Newsletter signup error:', error
    )
    return NextResponse.json(
      { error: 'Signup failed. Please try again.' },
      { status: 500 }
    )
  }
}
