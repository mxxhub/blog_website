"use client"

import Image from 'next/image';

type ImageItem = {
    src: string;
    width: number;
    height: number;
    type?: string;
};

export default function TechnologiesSection() {
    const imgList: ImageItem[] = [
        { src: '/tech/shopify.png', width: 114, height: 71 },
        { src: '/tech/wordpress.png', width: 165, height: 56 },
        { src: '/tech/salesforce.png', width: 102, height: 71 },
        { src: '/tech/woocommerce.png', width: 165, height: 51 },
        { src: '/tech/openai.png', width: 165, height: 45 },
        { src: '/tech/n8n.png', width: 165, height: 53 },
        { src: '/tech/cloud.png', width: 71, height: 71 },
        { src: '/tech/googlecloud.png', width: 224, height: 35 },
        { src: '/tech/aws.png', width: 96, height: 71 },
        { src: '/tech/github.png', width: 107, height: 44 },
        { src: '/tech/docker.png', width: 165, height: 38 },
        { src: '/tech/node.png', width: 165, height: 44 },
    ];

    return (
        <section className='section cutting-edge-tech'>
            <div className='section-content'>
                <h1 className="title fade-up">
                    Empowering Your Business with Cutting-Edge Technologies
                </h1>
                <div className='section-item-list '>
                    {
                        imgList.map((item: ImageItem, index: number) => (
                            <div className='section-item' key={index}>
                                <Image
                                    src={item.src}
                                    alt="Blog home"
                                    width={item.width}
                                    height={item.height}
                                    className='object-contain'
                                />
                            </div>
                        ))
                    }                        
                </div>
                <div className='section-footer fade-up'>
                    <p>
                        Don’t see your stack here? We work with many more. Contact us for details.
                    </p>
                </div>
            </div>
        </section>
    );
}