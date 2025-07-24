// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Types for the contact form data
interface ContactFormData {
  fullname: string;
  email: string;
  subject: string;
  message: string;
}

// Email validation function
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Sanitize input to prevent XSS
const sanitizeInput = (input: string): string => {
  return input.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
};

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body: ContactFormData = await request.json();
    
    // Validate required fields
    const { fullname, email, subject, message } = body;
    
    if (!fullname || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      fullname: sanitizeInput(fullname),
      email: sanitizeInput(email),
      subject: sanitizeInput(subject),
      message: sanitizeInput(message),
    };

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can change this to your email provider
      auth: {
        user: process.env.ADMIN_EMAIL, // Your admin email
        pass: process.env.ADMIN_EMAIL_PASSWORD, // Your app password
      },
    });

   

    // Custom email template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8f9fa;
          }
          .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
          }
          .header h1 {
            font-size: 24px;
            margin-bottom: 8px;
          }
          .header p {
            opacity: 0.9;
            font-size: 16px;
          }
          .content {
            padding: 30px;
          }
          .field {
            margin-bottom: 24px;
            border-bottom: 1px solid #eee;
            padding-bottom: 16px;
          }
          .field:last-child {
            border-bottom: none;
            margin-bottom: 0;
          }
          .field-label {
            font-weight: 600;
            color: #4a5568;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
          }
          .field-value {
            font-size: 16px;
            color: #2d3748;
            word-wrap: break-word;
          }
          .message-field {
            background: #f7fafc;
            padding: 16px;
            border-radius: 8px;
            border-left: 4px solid #667eea;
          }
          .footer {
            background: #f8f9fa;
            padding: 20px 30px;
            text-align: center;
            color: #718096;
            font-size: 14px;
          }
          .timestamp {
            color: #a0aec0;
            font-size: 13px;
            margin-top: 8px;
          }
          .reply-button {
            display: inline-block;
            background: #667eea;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            margin-top: 16px;
            font-weight: 500;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>✨ New Contact Form Submission</h1>
            <p>You have received a new message from your website</p>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="field-label">Full Name</div>
              <div class="field-value">${sanitizedData.fullname}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Email Address</div>
              <div class="field-value">
                <a href="mailto:${sanitizedData.email}" style="color: #667eea; text-decoration: none;">
                  ${sanitizedData.email}
                </a>
              </div>
            </div>
            
            <div class="field">
              <div class="field-label">Subject</div>
              <div class="field-value">${sanitizedData.subject}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Message</div>
              <div class="field-value message-field">
                ${sanitizedData.message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <a href="mailto:${sanitizedData.email}?subject=Re: ${sanitizedData.subject}" class="reply-button">
              Reply to ${sanitizedData.fullname}
            </a>
          </div>
          
          <div class="footer">
            <p>This message was sent from your website contact form.</p>
            <div class="timestamp">
              Received on ${new Date().toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Plain text version for email clients that don't support HTML
    const textTemplate = `
NEW CONTACT FORM SUBMISSION
==========================

Full Name: ${sanitizedData.fullname}
Email: ${sanitizedData.email}
Subject: ${sanitizedData.subject}

Message:
${sanitizedData.message}

---
Received on ${new Date().toLocaleString()}
Reply to: ${sanitizedData.email}
    `;

    // Email options
    const mailOptions = {
      from: `"Website Contact Form" <${process.env.ADMIN_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: sanitizedData.email,
      subject: `🔔 New Contact: ${sanitizedData.subject}`,
      text: textTemplate,
      html: htmlTemplate,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Send confirmation email to the user
    // const confirmationEmail = {
    //   from: `"Your Website" <${process.env.ADMIN_EMAIL}>`,
    //   to: sanitizedData.email,
    //   subject: `Thank you for contacting us, ${sanitizedData.fullname}!`,
    //   html: `
    //     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
    //       <h2 style="color: #333;">Thank you for your message!</h2>
    //       <p>Hi ${sanitizedData.fullname},</p>
    //       <p>We've received your message and will get back to you as soon as possible.</p>
    //       <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
    //         <h3>Your message:</h3>
    //         <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
    //         <p><strong>Message:</strong> ${sanitizedData.message}</p>
    //       </div>
    //       <p>Best regards,<br>Your Website Team</p>
    //     </div>
    //   `,
    // };

    

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send email. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint. Use POST to submit contact forms.' },
    { status: 405 }
  );
}