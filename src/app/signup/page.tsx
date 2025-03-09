"use client";
import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { getObserver } from "@/utils/observer";
import { supabase } from "@/lib/supabaseClient";
import bcrypt from "bcryptjs";
import ColorToast from "@/components/ui/toastColor";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [form, setForm] = useState({
    uemail: "",
    upwd: "",
    urePwd: "",
    ufirstName: "",
    ulastName: "",
    uaddress: "",
    ubirth: "",
    is_admin: 1,
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("home")
        .select("title, subTitle, content")
        .eq("pageType", "signup")
        .limit(1)
        .single();

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setTitle(data?.title || "No title found");
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

  const handleSignup = async () => {
    const hashed_pwd = await bcrypt.hash(form.upwd, 10);
    if (form.upwd != form.urePwd) {
      ColorToast("Passwords don't match!", "warning");
      return;
    }
    if (
      !form.uemail ||
      !form.upwd ||
      !form.ufirstName ||
      !form.ulastName ||
      !form.uaddress ||
      !form.ubirth
    ) {
      ColorToast("Please fill in all fields", "warning");
      return;
    }

    const { error: dbError } = await supabase.from("user").insert([
      {
        // id: data.user?.id, //Match auth user ID
        uemail: form.uemail,
        ufirstName: form.ufirstName,
        ulastName: form.ulastName,
        uaddress: form.uaddress,
        ubirth: form.ubirth,
        is_admin: form.is_admin,
        upwd: hashed_pwd,
      },
    ]);

    if (dbError) {
      console.log("db error occured: ", dbError);
      return;
    }

    ColorToast(
      "Sign-up successful! Check your email to confirm your account.",
      "success"
    );
    router.push("/signin");
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
          <h1 className="title">{title}</h1>
        </div>
        <div className="form-container fade-up">
          <div className="mx-auto space-y-6 p-4">
            {/* Name */}
            <div>
              <Label className="required-text">
                Name <span>(required)</span>
              </Label>
              <div className="grid grid-cols-2 gap-4 mt-1">
                <div>
                  <Label>First Name</Label>
                  <Input
                    type="text"
                    name="ufirstName"
                    value={form.ufirstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label>Last Name</Label>
                  <Input
                    type="text"
                    name="ulastName"
                    value={form.ulastName}
                    onChange={handleChange}
                  />
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
                name="uemail"
                className="mt-1"
                value={form.uemail}
                onChange={handleChange}
              />
            </div>

            {/* address, birthday */}
            <div>
              <Label className="required-text">Personal Data</Label>
              <div className="grid grid-cols-2 gap-4 mt-1">
                <div>
                  <Label>Address</Label>
                  <Input
                    type="text"
                    name="uaddress"
                    value={form.uaddress}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label>Birthday</Label>
                  <Input
                    type="text"
                    name="ubirth"
                    value={form.ubirth}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* password */}
            <div>
              <Label className="required-text">
                Password <span>(required)</span>
              </Label>
              <div className="grid grid-cols-2 gap-4 mt-1">
                <div>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    name="upwd"
                    value={form.upwd}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label>Re-password</Label>
                  <Input
                    type="password"
                    name="urePwd"
                    value={form.urePwd}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button className="default-btn primary" onClick={handleSignup}>
              Signup
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
