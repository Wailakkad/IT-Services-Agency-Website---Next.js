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
    // Debug: Log environment variables status
    console.log('Environment Variables Check:', {
      hasAdminEmail: !!process.env.ADMIN_EMAIL,
      hasPassword: !!process.env.ADMIN_EMAIL_PASSWORD,
      adminEmail: process.env.ADMIN_EMAIL, // Safe to log email
      passwordLength: process.env.ADMIN_EMAIL_PASSWORD?.length || 0,
      passwordFirstChar: process.env.ADMIN_EMAIL_PASSWORD?.charAt(0) || 'none',
      allEnvKeys: Object.keys(process.env).filter(key => key.includes('ADMIN')),
    });

    // Check if environment variables exist
    if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_EMAIL_PASSWORD) {
      console.error('Missing environment variables:', {
        ADMIN_EMAIL: !!process.env.ADMIN_EMAIL,
        ADMIN_EMAIL_PASSWORD: !!process.env.ADMIN_EMAIL_PASSWORD,
      });
      return NextResponse.json(
        { 
          error: 'Server configuration error: Missing email credentials',
          debug: {
            hasEmail: !!process.env.ADMIN_EMAIL,
            hasPassword: !!process.env.ADMIN_EMAIL_PASSWORD,
          }
        },
        { status: 500 }
      );
    }

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

    // Normalize password (remove spaces for consistency)
    const normalizedPassword = process.env.ADMIN_EMAIL_PASSWORD.replace(/\s+/g, '');
    
    console.log('Password normalization:', {
      originalLength: process.env.ADMIN_EMAIL_PASSWORD.length,
      normalizedLength: normalizedPassword.length,
      hasSpaces: process.env.ADMIN_EMAIL_PASSWORD.includes(' '),
    });

    // Create nodemailer transporter with enhanced configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: normalizedPassword, // Use normalized password without spaces
      },
      // Add these options for better compatibility
      tls: {
        rejectUnauthorized: false
      },
      // Enable debug logging
      debug: true,
      logger: true,
    });

    // Test SMTP connection before sending
    console.log('Testing SMTP connection...');
    try {
      await transporter.verify();
      console.log('✅ SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('❌ SMTP verification failed:', {
        error: verifyError,
        message: verifyError instanceof Error ? verifyError.message : 'Unknown error',
        code: verifyError instanceof Error && 'code' in verifyError ? verifyError.code : 'No code',
      });
      
      return NextResponse.json(
        { 
          error: 'Email service authentication failed',
          details: {
            message: verifyError instanceof Error ? verifyError.message : 'Unknown error',
            code: verifyError instanceof Error && 'code' in verifyError ? verifyError.code : 'No code',
            suggestion: 'Please check your Gmail app password and ensure 2FA is enabled',
          }
        },
        { status: 500 }
      );
    }

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

    console.log('Attempting to send email...');
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email sent successfully:', {
      messageId: info.messageId,
      response: info.response,
    });

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        timestamp: new Date().toISOString(),
        messageId: info.messageId
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Contact form error:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack trace',
      code: error instanceof Error && 'code' in error ? error.code : 'No code',
    });
    
    return NextResponse.json(
      { 
        error: 'Failed to send email. Please try again later.',
        details: {
          message: error instanceof Error ? error.message : 'Unknown error',
          code: error instanceof Error && 'code' in error ? error.code : 'No code',
          timestamp: new Date().toISOString(),
        }
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

// Debug endpoint to check environment variables
export async function HEAD() {
  return NextResponse.json({
    hasAdminEmail: !!process.env.ADMIN_EMAIL,
    hasPassword: !!process.env.ADMIN_EMAIL_PASSWORD,
    adminEmail: process.env.ADMIN_EMAIL,
    passwordLength: process.env.ADMIN_EMAIL_PASSWORD?.length || 0,
    envKeys: Object.keys(process.env).filter(key => key.includes('ADMIN')),
  });
}