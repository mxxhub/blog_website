"use client"

import Image from 'next/image';

export default function DigitalSection() {
    return (
        <section className='section digital-potential'>
            <div className='section-content'>
                <div className='section-left-container fade-up'>
                    <Image
                        src='/digital-potential.png'
                        alt="Blog home"
                        width={550}
                        height={550}
                        className='home-img'
                    />
                </div>
                <div className='section-right-container'>
                    <h1 className='title mb-8 fade-up'>Unlock your digital potential</h1>
                    <div className='fade-up'>
                        <p className='sub-title mb-5'>
                            At ADK Interactive, we’re committed to helping your business thrive in the digital landscape. 
                        </p>
                        <p className='sub-title mb-5'>
                            With over two decades of expertise in <strong>retail</strong>, <strong>e-commerce</strong>, <strong>cloud</strong> <strong>infrastructure</strong>, and <strong>cybersecurity</strong>, we craft bespoke software solutions tailored to meet your specific needs.
                        </p>
                        <p className='sub-title mb-5'>
                            Our services are designed to optimize your business processes, enhance customer engagement, and drive growth. 
                        </p>
                        <p className='sub-title'>
                            Partner with us to <strong className='italic'>unlock</strong> the full potential of your digital capabilities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}