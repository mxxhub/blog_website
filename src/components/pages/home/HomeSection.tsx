"use client"

import parse from 'html-react-parser';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { supabase } from "@/lib/supabaseClient";

export default function HomeSection() {
    const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState("/home.png");
    const router = useRouter();

    useEffect(() => {
        async function fetchMessage() {
            const { data, error } = await supabase
                .from("home")
                .select("content, image")
                .limit(1)
                .single();
            
            if (error) {
                console.error("Error fetching data:", error);
            } else {
                setContent(data?.content || "No content found");
                setImageUrl(data?.image || "No image found");
            }
        }

        fetchMessage();
    }, []);

    const handleContactClick = () => {
        router.push("/contact");
    };

    return (
        <section className="section home">
            <div className='section-content'>
                <h1 className="title fade-up">
                    {parse(content)}
                </h1>
                <Image
                    src={imageUrl}
                    alt="Blog home"
                    width={695}
                    height={405}
                    unoptimized
                    className='home-img fade-up'
                />
                <div className='section-action-container fade-up'>
                    <Button className='default-btn' onClick={handleContactClick}>
                        <span>
                            Contact Us
                        </span>
                    </Button>
                </div>
            </div>
        </section>
    );
}