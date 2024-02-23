'use client'

import Message from '../components/message';
import { UserProps } from '../props/user';
import React, { useEffect, useState } from 'react';
import { MessageProps } from '../props/message';
type ChatProps = {
    user: UserProps,
}

export default function Chat({user}: ChatProps) {
    const [newMessage, setNewMessage] = useState('')
    const welcomeMessage = `Olá ${user.name}, como podemos lhe ajudar?`

    // messages are going to be pulled from api
    // const messages = [
    //   {
    //     text: 'Olá, estou interessado na vaga, comecarei agora mesmo.',
    //     user,
    //     sender: true,
    //   },
    // ];
    const [messages, setMessages] = useState<MessageProps[]>([])
    useEffect(() => {
        setTimeout(() => {
          setMessages([...messages, {
                text: 'Olá, estou interessado na vaga, comecarei agora mesmo.',
                user,
                sender: true,
              },])
        }, 2000)
    }, [])

    function handleSetNewMessage(e: React.ChangeEvent<HTMLInputElement>) {
      setNewMessage(e.target.value)
    }

    function handleSubmitNewMessage(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
      if (newMessage === '') return

      setMessages([
        ...messages, 
        {
          text: newMessage,
          user,
          sender: false
        }
      ])

      setNewMessage('')
    }

    return (
    <div className="flex flex-col w-full max-w-sm border border-gray-200 rounded-lg overflow-hidden">
      <header className="flex items-center p-4 border-b">
        <div className="flex items-center space-x-4">
          <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
            <img
              alt="Logo"
              height="40"
              src={user.image ? user.image : "/logo.png"}
              style={{ aspectRatio: '40/40', objectFit: 'cover' }}
              width="40"
            />
          </span>
          <h1 className="text-xl font-bold">{user.name}</h1>
        </div>
      </header>
      <div className="flex flex-col p-4 overflow-hidden">
        <div className="flex flex-col gap-4">
          <div className="rounded-lg bg-gray-100 p-4 text-sm max-w-[85%] self-start">
            {welcomeMessage}
          </div>
        </div>
        {messages.map(m => (
          <Message text={m.text} user={m.user} sender={m.sender} />
        ))}
        
        <form onSubmit={handleSubmitNewMessage} className="flex items-center gap-4 border-t p-4">
          <input
            type="text"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 min-w-0"
            placeholder="Digite sua mensagem aqui..."
            value={newMessage}
            onChange={handleSetNewMessage}
          />
          <button
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-full w-10 h-10"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </button>
        </form>
      </div>
    </div>
    )
}