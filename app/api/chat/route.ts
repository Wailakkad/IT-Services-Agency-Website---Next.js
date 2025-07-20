import { NextRequest, NextResponse } from 'next/server'
import knowledge from '@/DATA/knowledge.json'

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    const systemPrompt = `You are a helpful AI assistant for Webloom, a web agency in Casablanca. 

IMPORTANT FORMATTING RULES:
- Keep responses concise and conversational
- Do not use markdown formatting (**, *, etc.)
- Do not use excessive emojis 
- Write in plain text with simple sentences
- Be direct and helpful

Agency info: ${JSON.stringify(knowledge)}

Always respond in a friendly, professional tone without lengthy introductions unless specifically asked about the company.`

    const openRouterRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://it-services-agency-website-next-js-git-main-wailakkads-projects.vercel.app', // Optional
        'X-Title': 'Webloom AI Assistant' // Optional
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-r1-0528:free',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ]
      })
    })

    const data = await openRouterRes.json()
    let reply = data?.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.'
    
    // Clean up formatting
    reply = reply
      .replace(/<think>[\s\S]*?<\/think>/gi, '') // Remove thinking tags and content
      .replace(/\*\*/g, '') // Remove bold markdown
      .replace(/\*/g, '') // Remove italic markdown
      .replace(/\n{3,}/g, '\n\n') // Limit line breaks
      .replace(/✉️|💻|✨|⚙️|🌴/g, '') // Remove emojis
      .trim()
    
    return NextResponse.json({ message: reply })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' }, 
      { status: 500 }
    )
  }
}