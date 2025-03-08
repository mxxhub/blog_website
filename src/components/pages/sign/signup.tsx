"use client";

import parse from "html-react-parser";
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

console.log(supabase);

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

  const onSubmit = async (data: FormData) => {
    console.log("Form Submitted", data);
    try {
      const { error } = await supabase.from("contacts").insert([data]);

      if (error) {
        console.error("Error saving form data:", error);
        toast.error("Failed to send message. Please try again.");
      } else {
        toast.success("Message sent successfully!");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

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
      <div className="section-content">
        <div className="mb-8 fade-up">
          <h1 className="title">{title}</h1>
          {parse(content)}
        </div>
        <div className="form-container fade-up">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto space-y-6 p-4"
          >
            {/* Name */}
            <div>
              <Label className="required-text">
                Name <span>(required)</span>
              </Label>
              <div className="grid grid-cols-2 gap-4 mt-1">
                <div>
                  <Label>First Name</Label>
                  <Input {...register("firstName", { required: true })} />
                  {errors.firstName && (
                    <ErrorAlert message="First name is required" />
                  )}
                </div>
                <div>
                  <Label>Last Name</Label>
                  <Input {...register("lastName", { required: true })} />
                  {errors.lastName && (
                    <ErrorAlert message="Last name is required" />
                  )}
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <Label className="required-text">
                Email <span>(required)</span>
              </Label>
              <Input
                type="email"
                {...register("email", { required: true })}
                className="mt-1"
              />
              {errors.email && <ErrorAlert message="Email is required" />}
            </div>

            {/* Phone */}
            <div>
              <Label className="required-text">Phone</Label>
              <Input type="tel" {...register("phone")} className="mt-1" />
            </div>

            {/* Message */}
            <div>
              <Label className="required-text">
                Message <span>(required)</span>
              </Label>
              <Textarea
                {...register("message", { required: true })}
                rows={4}
                className="mt-1"
              />
              {errors.message && <ErrorAlert message="Message is required" />}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="default-btn primary">
              Send
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
