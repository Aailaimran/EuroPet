import { Resend } from 'resend'

const resend = new Resend(
  process.env.RESEND_API_KEY || 'placeholder-key'
)

const FROM = process.env.FROM_EMAIL || 
  'noreply@europetexpress.co.uk'

const TO = process.env.RECIPIENT_EMAIL || 
  'Info@europetexpress.co.uk'

// ============================================
// QUOTE REQUEST EMAIL
// ============================================

export async function sendQuoteRequestEmail(
  data: {
    fullName: string
    email: string
    phone?: string
    petType: string
    petName: string
    breed?: string
    petAge?: string
    petWeight?: string
    route?: string
    collectionCity: string
    deliveryCity: string
    preferredDate?: string
    serviceType?: string
    message?: string
  }
): Promise<void> {
  // Skip sending if API key is not configured
  if (!process.env.RESEND_API_KEY) {
    console.warn('[sendEmail] RESEND_API_KEY not configured. Skipping email send.')
    return
  }
  
  await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: data.email,
    subject: `New Transport Quote Request — ${data.petName} (${data.petType}) — ${data.fullName}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            color: #333; 
            max-width: 600px; 
            margin: 0 auto; 
          }
          .header { 
            background: #0a0e1a; 
            color: #C9A84C; 
            padding: 24px; 
            text-align: center; 
          }
          .header h1 { 
            margin: 0; 
            font-size: 20px; 
            letter-spacing: 2px; 
          }
          .content { 
            padding: 24px; 
            background: #f8f7f4; 
          }
          .section { 
            background: white; 
            border-radius: 8px; 
            padding: 16px; 
            margin-bottom: 16px; 
            border-left: 4px solid #C9A84C; 
          }
          .section h2 { 
            color: #0a0e1a; 
            font-size: 14px; 
            text-transform: uppercase; 
            letter-spacing: 1px; 
            margin: 0 0 12px 0; 
          }
          .field { 
            margin-bottom: 8px; 
            font-size: 14px; 
          }
          .label { 
            font-weight: bold; 
            color: #666; 
            min-width: 140px; 
            display: inline-block; 
          }
          .value { color: #333; }
          .message-box { 
            background: #f0ede8; 
            border-radius: 6px; 
            padding: 12px; 
            font-size: 14px; 
            line-height: 1.6; 
            margin-top: 8px; 
          }
          .footer { 
            background: #0a0e1a; 
            color: #666; 
            padding: 16px; 
            text-align: center; 
            font-size: 12px; 
          }
          .reply-btn {
            display: inline-block;
            background: #C9A84C;
            color: #0a0e1a;
            padding: 10px 24px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: bold;
            font-size: 14px;
            margin: 16px 0;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🐾 EURO PET EXPRESS</h1>
          <p style="margin:8px 0 0 0; color:#999; font-size:13px;">
            New Transport Quote Request
          </p>
        </div>
        
        <div class="content">
          
          <div class="section">
            <h2>👤 Customer Details</h2>
            <div class="field">
              <span class="label">Name:</span>
              <span class="value">${data.fullName}</span>
            </div>
            <div class="field">
              <span class="label">Email:</span>
              <span class="value"><a href="mailto:${data.email}">${data.email}</a></span>
            </div>
            <div class="field">
              <span class="label">Phone:</span>
              <span class="value">${data.phone || 'Not provided'}</span>
            </div>
          </div>

          <div class="section">
            <h2>🐕 Pet Details</h2>
            <div class="field">
              <span class="label">Pet Type:</span>
              <span class="value">${data.petType}</span>
            </div>
            <div class="field">
              <span class="label">Pet Name:</span>
              <span class="value">${data.petName}</span>
            </div>
            <div class="field">
              <span class="label">Breed:</span>
              <span class="value">${data.breed || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="label">Age:</span>
              <span class="value">${data.petAge || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="label">Weight:</span>
              <span class="value">${data.petWeight ? data.petWeight + ' kg' : 'Not provided'}</span>
            </div>
          </div>

          <div class="section">
            <h2>🗺️ Journey Details</h2>
            <div class="field">
              <span class="label">Route:</span>
              <span class="value">${data.route || 'Not specified'}</span>
            </div>
            <div class="field">
              <span class="label">Collection:</span>
              <span class="value">${data.collectionCity}</span>
            </div>
            <div class="field">
              <span class="label">Delivery:</span>
              <span class="value">${data.deliveryCity}</span>
            </div>
            <div class="field">
              <span class="label">Preferred Date:</span>
              <span class="value">${data.preferredDate || 'Flexible'}</span>
            </div>
            <div class="field">
              <span class="label">Service Type:</span>
              <span class="value">${data.serviceType || 'Not specified'}</span>
            </div>
          </div>

          ${data.message ? `
          <div class="section">
            <h2>💬 Customer Message</h2>
            <div class="message-box">
              ${data.message.replace(/\n/g, '<br/>')}
            </div>
          </div>
          ` : ''}

          <div style="text-align: center; padding: 8px 0;">
            <a href="mailto:${data.email}?subject=Re: Transport Quote for ${data.petName}" class="reply-btn">
              Reply to ${data.fullName}
            </a>
          </div>

        </div>
        
        <div class="footer">
          <p>This email was sent from the Euro Pet Express website contact form.</p>
          <p>europetexpress.co.uk</p>
        </div>
      </body>
      </html>
    `,
  })
}

// ============================================
// RESCUE INFO REQUEST EMAIL
// ============================================

export async function sendRescueInfoEmail(
  data: {
    fullName: string
    email: string
    phone?: string
    bestTimeToCall?: string
    dogName?: string
    dogBreed?: string
    dogLocation?: string
    questions: string
    howDidTheyHear?: string
  }
): Promise<void> {
  // Skip sending if API key is not configured
  if (!process.env.RESEND_API_KEY) {
    console.warn('[sendEmail] RESEND_API_KEY not configured. Skipping email send.')
    return
  }
  
  await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: data.email,
    subject: `New Rescue Enquiry — ${data.dogName || 'Dog not specified'} — ${data.fullName}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            color: #333; 
            max-width: 600px; 
            margin: 0 auto; 
          }
          .header { 
            background: #0a0e1a; 
            color: #C9A84C; 
            padding: 24px; 
            text-align: center; 
          }
          .content { 
            padding: 24px; 
            background: #f8f7f4; 
          }
          .section { 
            background: white; 
            border-radius: 8px; 
            padding: 16px; 
            margin-bottom: 16px; 
            border-left: 4px solid #C9A84C; 
          }
          .section h2 { 
            color: #0a0e1a; 
            font-size: 14px; 
            text-transform: uppercase; 
            letter-spacing: 1px; 
            margin: 0 0 12px 0; 
          }
          .field { 
            margin-bottom: 8px; 
            font-size: 14px; 
          }
          .label { 
            font-weight: bold; 
            color: #666; 
            min-width: 140px; 
            display: inline-block; 
          }
          .message-box { 
            background: #f0ede8; 
            border-radius: 6px; 
            padding: 12px; 
            font-size: 14px; 
            line-height: 1.6; 
          }
          .footer { 
            background: #0a0e1a; 
            color: #666; 
            padding: 16px; 
            text-align: center; 
            font-size: 12px; 
          }
          .reply-btn {
            display: inline-block;
            background: #C9A84C;
            color: #0a0e1a;
            padding: 10px 24px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: bold;
            font-size: 14px;
            margin: 16px 0;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🐾 EURO PET EXPRESS</h1>
          <p style="margin:8px 0 0 0; color:#999; font-size:13px;">
            New Rescue Dog Enquiry
          </p>
        </div>

        <div class="content">

          <div class="section">
            <h2>👤 Enquirer Details</h2>
            <div class="field">
              <span class="label">Name:</span>
              <span class="value">${data.fullName}</span>
            </div>
            <div class="field">
              <span class="label">Email:</span>
              <span class="value"><a href="mailto:${data.email}">${data.email}</a></span>
            </div>
            <div class="field">
              <span class="label">Phone:</span>
              <span class="value">${data.phone || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="label">Best Time to Call:</span>
              <span class="value">${data.bestTimeToCall || 'Any time'}</span>
            </div>
          </div>

          <div class="section">
            <h2>🐕 Dog They're Interested In</h2>
            <div class="field">
              <span class="label">Dog Name:</span>
              <span class="value">${data.dogName || 'Not specified'}</span>
            </div>
            <div class="field">
              <span class="label">Breed:</span>
              <span class="value">${data.dogBreed || 'Not specified'}</span>
            </div>
            <div class="field">
              <span class="label">Location:</span>
              <span class="value">${data.dogLocation || 'Not specified'}</span>
            </div>
          </div>

          <div class="section">
            <h2>💬 Their Questions</h2>
            <div class="message-box">
              ${data.questions.replace(/\n/g, '<br/>')}
            </div>
          </div>

          ${data.howDidTheyHear ? `
          <div class="section">
            <h2>📣 How They Found Us</h2>
            <div class="field">
              ${data.howDidTheyHear}
            </div>
          </div>
          ` : ''}

          <div style="text-align: center; padding: 8px 0;">
            <a href="mailto:${data.email}?subject=Re: Rescue Dog Enquiry — ${data.dogName || 'Your Enquiry'}" class="reply-btn">
              Reply to ${data.fullName}
            </a>
          </div>

        </div>

        <div class="footer">
          <p>This email was sent from the Euro Pet Express Rescue a Dog page.</p>
          <p>europetexpress.co.uk/rescue</p>
        </div>
      </body>
      </html>
    `,
  })
}

// ============================================
// NEWSLETTER SIGNUP EMAIL NOTIFICATION
// ============================================

export async function sendNewsletterNotification(
  email: string
): Promise<void> {
  // Skip sending if API key is not configured
  if (!process.env.RESEND_API_KEY) {
    console.warn('[sendEmail] RESEND_API_KEY not configured. Skipping email send.')
    return
  }
  
  await resend.emails.send({
    from: FROM,
    to: TO,
    subject: `New Newsletter Subscriber — ${email}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 24px; background: #f8f7f4;">
        <div style="background: #0a0e1a; color: #C9A84C; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
          <h2 style="margin: 0; font-size: 16px;">
            🐾 New Newsletter Subscriber
          </h2>
        </div>
        <div style="background: white; padding: 20px; border-radius: 0 0 8px 8px; border: 1px solid #eee;">
          <p style="font-size: 15px; color: #333; margin: 0;">
            <strong>Email:</strong> <a href="mailto:${email}">${email}</a>
          </p>
          <p style="font-size: 13px; color: #999; margin: 12px 0 0 0;">
            Subscribed via the website footer newsletter form.
          </p>
        </div>
      </div>
    `,
  })
}
