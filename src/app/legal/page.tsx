"use client";

import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { getObserver } from "@/utils/observer";
import { supabase } from "@/lib/supabaseClient";

export default function LegalPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const observer = getObserver();
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("home")
        .select("title, content")
        .eq("pageType", "legal")
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

  return (
    <section className="section legal">
      {/* Top divider */}
      <div className="divider">
        <div className="divider-content"></div>
      </div>
      <div className="section-content">
        <div className="mb-8 fade-up">
          <h1 className="title">{parse(title)}</h1>
        </div>
        <div className="section-title fade-up">{parse(content)}</div>
      </div>
    </section>
  );
}
