"use client"

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function HomeSection() {
    return (
        <section className="section home">
            <div className='section-content'>
                <h1 className="title fade-up">
                    ADK Interactive is Nick Penree’s small but <span>mighty</span> software development company in Upstate New York. 
                </h1>
                <Image
                    src='/home.png'
                    alt="Blog home"
                    width={695}
                    height={405}
                    className='home-img fade-up'
                />
                <div className='section-action-container fade-up'>
                    <Button className='default-btn'>
                        <span>
                            Contact Us
                        </span>
                    </Button>
                </div>
            </div>
        </section>
    );
}