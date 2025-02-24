"use client"

import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ServicesSectionProps {
    servicesRef: React.RefObject<HTMLElement | null>;
}

export default function ServicesSection({ servicesRef }: ServicesSectionProps) {
    return (
        <section ref={servicesRef} className='section services'>
            <div className='section-content'>
                <div className='section-left-container'>
                    <h1 className='title fade-up'>Services</h1>
                    <div className='fade-up'>
                        <p className='sub-title mb-4'>
                            Harnessing advanced software development methodologies and the power of <strong>open-source</strong> technology, we deliver <strong>scalable</strong>, high-performance solutions with exceptional efficiency.
                        </p>
                        <p className='sub-title'>
                            Elevate your business with our all-encompassing digital technology services designed to <strong>drive growth</strong> and <strong>innovation</strong>.
                        </p>
                    </div>
                </div>
                <div className='section-right-container'>
                    <Accordion type="single" collapsible className="w-full fade-up">
                        <AccordionItem className='accordion-item' value="item-1">
                            <AccordionTrigger>Software Development</AccordionTrigger>
                            <AccordionContent>
                                <p className='mb-3'>
                                    We develop custom software solutions to optimize your business operations, encompassing web and mobile applications, as well as robust backend systems.
                                </p>
                                <p>
                                    Leveraging our expertise in machine learning and AI, we deliver intelligent, innovative solutions that drive efficiency and growth for your projects.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className='accordion-item' value="item-2">
                            <AccordionTrigger>Custom E-commerce Solutions</AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    Tailored online store development, including shopping cart integration, payment processing, and inventory management to enhance user experience and increase sales.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className='accordion-item' value="item-3">
                            <AccordionTrigger>Digital Strategy Consulting</AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    Comprehensive analysis and strategy development to identify growth opportunities and optimize digital operations for businesses.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className='accordion-item' value="item-4">
                            <AccordionTrigger>IT Consulting Services</AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    Expert advice on IT infrastructure, cloud services, cybersecurity, and data management to improve business efficiency and security.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className='accordion-item' value="item-5">
                            <AccordionTrigger>Support & Maintenance</AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    Ongoing support and maintenance services to ensure digital tools and platforms remain up-to-date, secure, and efficient.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className='section-action-container fade-up'>
                    <Button className='default-btn get-started-btn'>
                        <span>
                            Get Started
                        </span>
                    </Button>
                </div>
            </div>
        </section>
    );
}