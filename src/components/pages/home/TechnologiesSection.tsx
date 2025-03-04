"use client"

import parse from 'html-react-parser';
import { useEffect, useState } from "react";
import Image from 'next/image';
import { supabase } from "@/lib/supabaseClient";

type ImageItem = {
    src: string;
    width: number;
    height: number;
    type?: string;
};

export default function TechnologiesSection() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [images, setImages] = useState<ImageItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from("home")
                .select("title, content")
                .eq("pageType", "technology")
                .limit(1)
                .single();
            
            if (error) {
                console.error("Error fetching data:", error);
            } else {
                setTitle(data?.title || "No title found");
                setContent(data?.content || "No content found");
            }
        }

        const fetchTechImages = async () => {
            const { data, error } = await supabase
                .from("tech_images")
                .select("src, width, height, type")
            
            if (error) {
                console.error("Error fetching data:", error);
            } else {
                console.log('data: ', data);
                setImages(data);
            }
        }

        fetchData();
        fetchTechImages();
    }, []);

    return (
        <section className='section cutting-edge-tech'>
            <div className='section-content'>
                <h1 className="title fade-up">
                    {title}
                </h1>
                <div className='section-item-list '>
                    {
                        images.map((item: ImageItem, index: number) => (
                            <div className='section-item' key={index}>
                                <Image
                                    src={item.src}
                                    alt="Tech images"
                                    width={item.width}
                                    height={item.height}
                                    unoptimized
                                    className='object-contain'
                                />
                            </div>
                        ))
                    }                        
                </div>
                <div className='section-footer fade-up'>
                    {parse(content)}
                </div>
            </div>
        </section>
    );
}