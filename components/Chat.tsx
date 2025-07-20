'use client'
import { useState } from 'react'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return

    const newUserMessage: Message = { role: 'user', content: input }
    const updatedMessages = [...messages, newUserMessage]
    setMessages(updatedMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages })
      })

      const data = await res.json()
      const reply: Message = { role: 'assistant', content: data.message }
      setMessages([...updatedMessages, reply])
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') sendMessage()
  }

  return (
    <div className="chat-container" style={{ maxWidth: 600, margin: 'auto', padding: 16 }}>
      <div className="chat-box" style={{ border: '1px solid #ccc', padding: 16, minHeight: 300 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: 12 }}>
            <strong>{msg.role === 'user' ? '🧑 You' : '🤖 Webloom Bot'}:</strong>
            <p style={{ margin: 0 }}>{msg.content}</p>
          </div>
        ))}
        {loading && <p>🤖 Typing...</p>}
      </div>
      <div className="input-area" style={{ marginTop: 12 }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask something about Webloom..."
          style={{ width: '80%', padding: 8 }}
        />
        <button onClick={sendMessage} style={{ padding: 8, marginLeft: 8 }}>
          Send
        </button>
      </div>
    </div>
  )
}
