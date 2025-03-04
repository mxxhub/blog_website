"use client"

import parse from 'html-react-parser';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from '@/components/ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { supabase } from "@/lib/supabaseClient";

interface ServicesSectionProps {
    servicesRef: React.RefObject<HTMLElement | null>;
}

interface AccordionProps {
    title: string;
    content: string;
}

export default function ServicesSection({ servicesRef }: ServicesSectionProps) {
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [accordions, setAccordions] = useState<AccordionProps[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from("home")
                .select("title, content")
                .eq("pageType", "services")
                .limit(1)
                .single();
            
            if (error) {
                console.error("Error fetching data:", error);
            } else {
                setTitle(data?.title || "No title found");
                setContent(data?.content || "No content found");
            }
        }

        const fetchAccordion = async () => {
            const { data, error } = await supabase
                .from("services-accordion")
                .select("title, content")
            
            if (error) {
                console.error("Error fetching data:", error);
            } else {
                setAccordions(data);
            }
        }

        fetchData();
        fetchAccordion();
    }, []);

    const handleContactClick = () => {
        router.push("/contact");
    };

    return (
        <section ref={servicesRef} className='section services'>
            <div className='section-content'>
                <div className='section-left-container'>
                    <h1 className='title fade-up'>{title}</h1>
                    <div className='fade-up'>
                        {parse(content)}
                    </div>
                </div>
                <div className='section-right-container'>
                    <Accordion type="single" collapsible className="w-full fade-up">
                        {
                            accordions.map((accordion, index) => (
                                <AccordionItem className='accordion-item' key={index} value={`item-${index + 1}`}>
                                    <AccordionTrigger>
                                        {accordion.title}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {parse(accordion.content)}
                                    </AccordionContent>
                                </AccordionItem>
                            ))
                        }
                    </Accordion>
                </div>
                <div className='section-action-container fade-up'>
                    <Button className='default-btn get-started-btn' onClick={handleContactClick}>
                        <span>
                            Get Started
                        </span>
                    </Button>
                </div>
            </div>
        </section>
    );
}