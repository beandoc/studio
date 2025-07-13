
"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import Link from "next/link";
import { Bot, User, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Header from "@/components/header";
import { chat, type ChatInput } from "@/ai/flows/diet-coach-chat";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useProfile } from "@/context/profile-context";
import ReactMarkdown from 'react-markdown';
import type { Message } from "genkit/experimental/ai";


// This is the simple message format for our UI state
export type UiMessage = {
  role: 'user' | 'model';
  content: string;
};


export default function DietCoachPage() {
  const [messages, setMessages] = useState<UiMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { activeProfile } = useProfile();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This logic ensures the scroll area keeps the latest message in view.
    if (scrollAreaRef.current) {
        // We use a timeout to allow the DOM to update before we try to scroll
        setTimeout(() => {
             if (scrollAreaRef.current) {
                scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: "smooth" });
             }
        }, 100);
    }
  }, [messages]);
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input || isLoading || !activeProfile) return;

    const userMessage: UiMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // 1. Convert our simple UI messages into the format Genkit expects.
      //    We also need to add the newest user message to the history.
      const historyForGenkit: Message[] = [...messages, userMessage].map(m => ({
        role: m.role,
        content: [{text: m.content}]
      }));
      
      const chatInput: ChatInput = {
        history: historyForGenkit,
        profile: activeProfile,
      };
      
      // 2. The response from the flow is the full Message object.
      const response = await chat(chatInput);
      
      // 3. Extract the text content from the AI's response message.
      const responseText = response.content.map(c => c.text).join('') || '';


      if (responseText) {
        const modelMessage: UiMessage = { role: "model", content: responseText };
        setMessages((prev) => [...prev, modelMessage]);
      } else {
        // Handle cases where the AI gives an empty response
         const errorMessage: UiMessage = { role: "model", content: "I'm sorry, I couldn't generate a response. Please try again." };
         setMessages((prev) => [...prev, errorMessage]);
      }

    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: UiMessage = { role: "model", content: "Sorry, I encountered an error. Please try again." };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full h-screen">
      <Header
        title="AI Diet Coach"
        description="Ask me anything about food and nutrition!"
      />
      <div className="flex-1 overflow-hidden p-4 md:p-8">
        <Card className="h-full flex flex-col">
          <CardHeader>
            <CardTitle>Chat with your Coach</CardTitle>
            <CardDescription>
              {activeProfile ? `You are now chatting as ${activeProfile.fullName}.` : 'Select a profile to enable the chat.'}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-hidden">
            <ScrollArea className="h-full pr-4" ref={scrollAreaRef}>
              {!activeProfile ? (
                 <div className="text-center text-muted-foreground p-8 h-full flex flex-col items-center justify-center">
                    <User className="mx-auto h-12 w-12" />
                    <p className="mt-4 font-semibold">Please select a profile to activate the Diet Coach.</p>
                    <p className="mt-1 text-sm">Krutrim needs an active profile to provide personalized advice.</p>
                    <Button asChild className="mt-4">
                      <Link href="/profiles">Select Profile</Link>
                    </Button>
                </div>
              ) : (
              <div className="space-y-4">
                {messages.length === 0 && (
                    <div className="text-center text-muted-foreground p-8">
                        <Bot className="mx-auto h-12 w-12" />
                        <p className="mt-2">I'm Krutrim, your AI Diet Coach. Ask me questions like "How much protein is in paneer?" or "Is watermelon a good snack for someone on dialysis?".</p>
                    </div>
                )}
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-start gap-4",
                      message.role === "user" ? "justify-end" : ""
                    )}
                  >
                    {message.role === "model" && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>AI</AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={cn(
                        "max-w-[75%] rounded-lg p-3 text-sm",
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      )}
                    >
                      <ReactMarkdown className="prose prose-sm dark:prose-invert max-w-none">
                        {message.content}
                      </ReactMarkdown>
                    </div>
                    {message.role === "user" && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{activeProfile?.fullName.charAt(0) || 'U'}</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                {isLoading && (
                    <div className="flex items-start gap-4">
                        <Avatar className="h-8 w-8">
                            <AvatarFallback>AI</AvatarFallback>
                        </Avatar>
                        <div className="max-w-[75%] rounded-lg p-3 text-sm bg-muted">
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-slate-400 animate-pulse"></span>
                                <span className="h-2 w-2 rounded-full bg-slate-400 animate-pulse delay-75"></span>
                                <span className="h-2 w-2 rounded-full bg-slate-400 animate-pulse delay-150"></span>
                            </div>
                        </div>
                    </div>
                )}
              </div>
              )}
            </ScrollArea>
          </CardContent>
          <CardFooter className="pt-4 border-t">
            <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={activeProfile ? "Ask a personalized nutrition question..." : "Select a profile to chat"}
                disabled={isLoading || !activeProfile}
              />
              <Button type="submit" disabled={isLoading || !input || !activeProfile}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
