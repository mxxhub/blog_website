"use client"

import parse from 'html-react-parser';
import { useEffect, useState } from "react";
import Image from 'next/image';
import { supabase } from "@/lib/supabaseClient";


export default function DigitalSection() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState("/digital-potential.png");

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from("home")
                .select("title, content, image")
                .eq("pageType", "digital")
                .limit(1)
                .single();
            
            if (error) {
                console.error("Error fetching data:", error);
            } else {
                setTitle(data?.title || "No title found");
                setContent(data?.content || "No content found");
                setImageUrl(data?.image || "No image found");
            }
        }

        fetchData();
    }, []);

    return (
        <section className='section digital-potential'>
            <div className='section-content'>
                <div className='section-left-container fade-up'>
                    <Image
                        src={imageUrl}
                        alt="Blog home"
                        width={550}
                        height={550}
                        unoptimized
                        className='home-img'
                    />
                </div>
                <div className='section-right-container'>
                    <h1 className='title mb-8 fade-up'>{title}</h1>
                    <div className='fade-up'>
                        {parse(content)}
                    </div>
                </div>
            </div>
        </section>
    );
}