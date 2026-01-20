import { Bot, Send, Maximize2, Sparkles, X } from "lucide-react";
import { useState } from "react";
import {Button} from '@/components/Ui/button'
import {Input} from '@/components/Ui/input'

const quickPrompts = [
    "What's my food cost this week ? ",
    "Show labor expense trend",
    "Generate P&L report",
];

export function AIChatWidget() {
    const [isOpen, setIsOpen] = useState(true)
    const [isExpanded, setIsExpanded] = useState(false)
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([
        {
            id : "1",
            role: "assistant",
            content: "Hello! I'm your Ai accounting assistant.."
        },
    ])

    const handleSend = () =>{
        if(!input.trim()) return;

        const userMessage = {
            id : Date.now().toString(),
            role : "user",
            content : input,
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');

        setTimeout (() =>{
            const aiMessage = {
                id : (Date.now() + 1).toString(),
                role: "assistant",
                content: getAIResponse(input),
            };
            setMessages((prev) => [...prev, aiMessage])
        }, 1000)

    };

    const getAIResponse = (query ) => {
        const q = query.toLowerCase();
        if(q.includes("food cost")){
            return "Your food cost this week is Rs- 10549(30% of revenue) . That's higher than you target of 28%. I noticed increased spending on proteins - consider checking supplier prices.";

        }
        if(q.includes("labor")){
            return "Labor expenses are tracking at $12,200 this week (28% of revenue). You're within your 30% target. Peak staffing costs are Friday-Saturday"
        }
        if(q.includes("report") || q.includes(p&l)){
            return "I can help you with financial insghts , expense tracking, and report generation. Try asking about food costs, labor expenses, or request a P&L report!"
        }
        return "I can help you with financial insights, expense tracking, and report generation. Try asking about food costs, labor expenses, or request a P&L report!";
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-600 text-slate-200 shadow-glow transition-transform hover:scale-105 active:scale-95"
      >
        <Bot className="h-8 w-8" />
      </button>
    );
  }

  return (
    <div
      className={
        `fixed bottom-6 right-6 z-999 flex flex-col rounded-2xl border border-slate-200 dark:border-slate-600 dark:bg-slate-800 bg-slate-50 shadow-medium transition-all duration-300
        ${isExpanded ? "h-150 w-112.5" : "h-125 w-95"}`
      }
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-400 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/10">
            <Sparkles className="h-5 w-5 text-yellow-500" />
          </div>
          <div>
            <h3 className="font-semibold dark:text-gray-300 text-gray-700">AI Assistant</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Powered by smart analytics
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="rounded-lg p-2 text-gray-600 dark:text-gray-400 transition-colors duration-200  hover:bg-gray-500/10"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 text-gray-600 dark:text-gray-400 transition-colors duration-200  hover:bg-gray-500/10"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={(
              "flex",
              message.role === "user" ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={
                `max-w-[85%] rounded-2xl px-4 py-2.5 text-sm",
                ${message.role === "user"
                  ? "bg-yellow-500 text-gray-100"
                  : "bg-amber-500/10 dark:bg-amber-400/70  text-amber-950/80 "}`
              }
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Prompts */}
      {messages.length <= 2 && (
        <div className="flex flex-wrap gap-2 border-t border-gray-400 p-3">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              onClick={() => setInput(prompt)}
              className="rounded-full bg-yellow-500/30 px-3 py-1.5 text-xs font-medium text-amber-900/90 dark:text-amber-400 transition-colors hover:bg-accent/80"
            >
              {prompt}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="border-t border-gray-400 p-4">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask about your finances..."
            className="flex-1 border px-3 py-2 rounded-xl text-gray-800 dark:text-slate-300"
          />
          <button onClick={handleSend} className="p-2 w-10 flex items-center justify-centertext-white bg-yellow-500 dark:bg-yellow-600 rounded-xl">
            <Send className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
