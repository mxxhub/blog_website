"use client"

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import ErrorAlert from "@/components/ErrorAlert";
import { useEffect } from "react";
import { getObserver } from "@/utils/observer";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    message: string;
}

export default function HomePage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Form Submitted", data);
    };

    useEffect(() => {
        const observer = getObserver();
        document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    }, []);

    return (
        <section className="section contact">
            {/* Top divider */}
            <div className="divider">
                <div className="divider-content"></div>
            </div>
            <div className='section-content'>
                <div className='mb-8 fade-up'>
                    <h1 className='title'>Let’s work together</h1>
                    <p className='sub-title'>Fill out some info and we will be in touch shortly! We can't wait to hear from you!</p>
                </div>
                <div className='form-container fade-up'>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mx-auto space-y-6 p-4"
                    >
                        {/* Name */}
                        <div>
                            <Label className="required-text">
                                Name <span>(required)</span>
                            </Label>
                            <div className="grid grid-cols-2 gap-4 mt-1">
                                <div>
                                    <Label>First Name</Label>
                                    <Input {...register("firstName", { required: true })} />
                                    {errors.firstName && (
                                        <ErrorAlert message="First name is required" />
                                    )}
                                </div>
                            <div>
                                <Label>Last Name</Label>
                                <Input {...register("lastName", { required: true })} />
                                {errors.lastName && (
                                    <ErrorAlert message="Last name is required" />
                                )}
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
                                {...register("email", { required: true })}
                                className="mt-1"
                            />
                            {errors.email && (
                                <ErrorAlert message="Email is required" />
                            )}
                        </div>

                        {/* Phone */}
                        <div>
                            <Label className="required-text">Phone</Label>
                            <Input type="tel" {...register("phone")} className="mt-1" />
                        </div>

                        {/* Message */}
                        <div>
                            <Label className="required-text">
                                Message <span>(required)</span>
                            </Label>
                            <Textarea
                                {...register("message", { required: true })}
                                rows={4}
                                className="mt-1"
                            />
                            {errors.message && (
                                <ErrorAlert message="Message is required" />
                            )}
                        </div>

                        {/* Submit Button */}
                        <Button type="submit" className="default-btn primary">
                            Send
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}