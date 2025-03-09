"use client";
import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { getObserver } from "@/utils/observer";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import bcrypt from "bcryptjs";
import { useRouter } from "next/navigation";
import ColorToast from "@/components/ui/toastColor";

export default function HomePage() {
  const [content, setContent] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [form, setForm] = useState({
    uemail: "",
    upwd: "",
  });
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("home")
        .select("subTitle, content")
        .eq("pageType", "signup")
        .limit(1)
        .single();

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setContent(data?.content || "No content found");
        setSubtitle(data?.subTitle || "No subtitle found");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const observer = getObserver();
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSignin = async () => {
    if (!form.uemail || !form.upwd) {
      ColorToast("Please fill in all fields!", "warning");
      return;
    }

    const { data, error } = await supabase
      .from("user")
      .select("id, upwd") // Get the hashed password
      .eq("uemail", form.uemail)
      .single();

    if (error || !data) {
      ColorToast("User not found!", "error");
      return;
    }

    // Compare input password with the hashed password
    const passwordMatch = await bcrypt.compare(form.upwd, data.upwd);

    if (!passwordMatch) {
      ColorToast("Invalid password!", "error");
      return;
    }

    // Redirect to home page after successful login
    ColorToast("Login successful!", "success");
    router.push("/home");
    console.log("User ID:", data.id);
  };

  return (
    <section className="section contact">
      <Toaster position="top-right" />
      {/* Top divider */}
      <div className="divider">
        <div className="divider-content"></div>
      </div>
      <div className="section-content">
        <div className="mb-8 fade-up">
          <h1 className="title">Signin</h1>
          {content}
          <Link href="/signup" passHref>
            {subtitle}
          </Link>
        </div>

        <div className="form-container fade-up">
          <div className="mx-auto space-y-6 p-4">
            {/* Email */}
            <div>
              <Label className="required-text">
                Email <span>(required)</span>
              </Label>
              <Input
                type="email"
                name="uemail"
                className="mt-1"
                value={form.uemail}
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div>
              <Label className="required-text">
                Password <span>(required)</span>
              </Label>
              <Input
                type="password"
                className="mt-1"
                name="upwd"
                value={form.upwd}
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <Button className="default-btn primary" onClick={handleSignin}>
              Signin
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
