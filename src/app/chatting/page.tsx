"use client";
import { MessageSquare, Send, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import ErrorAlert from "@/components/ErrorAlert";
import { getObserver } from "@/utils/observer";
import { supabase } from "@/lib/supabaseClient";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

export default function HomePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  //   chatting
  const [messages, setMessages] = useState([
    { id: 1, sender: "admin", text: "Hello! How can I help you?" },
    { id: 2, sender: "user", text: "I need help with my order." },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([
        ...messages,
        { id: messages.length + 1, sender: "user", text: input },
      ]);
      setInput("");
    }
  };
  //   chatting

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("home")
        .select("title, content")
        .eq("pageType", "contact")
        .limit(1)
        .single();

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setTitle(data?.title || "No title found");
        setContent(data?.content || "No content found");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const observer = getObserver();
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="section contact">
      <Toaster position="top-right" />
      {/* Top divider */}
      <div className="divider">
        <div className="divider-content"></div>
      </div>
      <div className="flex h-screen bg-gray-100 px-[80px] py-[30px]">
        {/* Sidebar */}
        <div className="w-1/4 bg-white border-r p-4 mr-4 rounded-[20px]">
          <h2 className="text-md font-semibold mb-4">Messages</h2>
          <div className="flex items-center space-x-3 p-3 bg-gray-100 rounded-lg cursor-pointer">
            <User className="w-6 h-6" />
            <span>Admin</span>
          </div>
        </div>

        {/* Chat Window */}
        <div className="w-3/4 flex flex-col border-[1px] rounded-[20px] bg-white">
          <div className="p-4 bg-white shadow-md flex items-center rounded-[20px]">
            <MessageSquare className="w-6 h-6 text-gray-500" />
            <h2 className="ml-3 text-md font-semibold">Admin</h2>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto rounded-[20px]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`p-2 rounded-[15px] max-w-[30vw] mt-[5px] w-fit overflow-visible ${
                  msg.sender === "user"
                    ? "ml-auto bg-blue-500 text-white text-[14px]"
                    : "mr-auto bg-gray-200 text-[14px]"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="p-4 bg-white flex items-center border-t rounded-[20px]">
            <input
              type="text"
              className="flex-1 p-2 border rounded-lg"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="ml-2 bg-blue-500 text-white p-2 rounded-lg"
              onClick={sendMessage}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
