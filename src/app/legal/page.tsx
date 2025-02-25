"use client"

import { useEffect } from "react";
import { getObserver } from "@/utils/observer";

export default function LegalPage() {
    useEffect(() => {
        const observer = getObserver();
        document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    }, []);

    return (
        <section className="section legal">
            {/* Top divider */}
            <div className="divider">
                <div className="divider-content"></div>
            </div>
            <div className='section-content'>
                <div className='mb-8 fade-up'>
                    <h1 className='title'>Legal</h1>
                </div>
                <div className='section-title fade-up'>
                    <p className="sub-title">
                        ADK Interactive and the ADK Interactive logo are trademarks or registered trademarks of ADK Interactive, LLC. All other trademarks or logos that appear on this site are the property of their respective owners. ADK Interactive protects and defends vigorously its trade name, trademarks, patents, designs, copyrights, and other intellectual property rights. Unless otherwise specified, no person has permission to copy, redistribute, reproduce, or republish in any form the information on this website.
                    </p>
                    <p className="sub-title">
                        The information provided on ADK Interactive’s website, including text, images, and links, is for informational purposes only and does not create a business or professional services relationship between you and ADK Interactive. Links on this site may lead to other sites not operated by ADK Interactive or that may be the property of our clients. No judgment, endorsement, or warranty is made with respect to other sites, their security, or the content they contain, and ADK Interactive takes no responsibility for them. Any use you make of the information provided on this site, or any site or service linked to by this site, is at your own risk.
                    </p>
                    <p className="sub-title">
                        This site and its contents are provided “as is”; ADK Interactive makes no representation or warranty of any kind, whether expressed or implied, regarding this site or any site accessible through this site. ADK Interactive expressly disclaims all explicit or implicit warranties including, but not limited to, the implied warranties of fiscal benefits, fitness for a particular purpose, title, and non-infringement. In no event will ADK Interactive be liable to any party for any damages (whether direct, indirect, special, incidental, or consequential) incurred due to implicit or explicit warranty or content in connection with this site, or sites accessed through this site.
                    </p>
                    <p className="sub-title">
                        ADK Interactive respects your privacy and seeks to take reasonable efforts to protect it. When you voluntarily submit your contact information or when we collect information, such as your name and email address, we use it to provide you with a response to your inquiry or with information targeted to your needs. By using this website, you’re providing your consent to let us collect and use your information as described below, and you consent to the policies and practices described in this statement. When you request information from ADK Interactive, we need to know your name, company, and email address. In addition, we may require additional information, like your phone number. We use this information so that we can send you a response and best tailor that response to you.
                    </p>
                    <p className="sub-title">
                        Our website also automatically collects clickstream information about your visit. This can include the address of the website from which you originated before visiting our website, the pages you visit on our website, and the browser you use. This information is largely non-personal and we use it to improve our website.
                    </p>
                    <p className="sub-title">
                        We don’t share or sell your personal information. As necessary, we may share non-personal information with our trusted third party service providers to perform services on our behalf. They typically use non-personal, anonymous information-like clickstream information regarding visit duration-that isn’t identifiable with a particular visitor to further improve the website.
                    </p>
                    <p className="sub-title">
                        With respect to this website, ADK Interactive will only collect, store, or use personally identifiable information (“Your Information”), when it is voluntarily submitted to us. You will have the option not to provide the information, and in the future you will be able to “opt out” of certain uses of your information.
                    </p>
                    <p className="sub-title">
                        Certain third parties working with ADK Interactive, such as our clients or prospective clients, may have access to extranet sites. While ADK Interactive maintains the security of content on extranet sites used by our clients for account management and project management, ADK Interactive is not responsible for client posts or file transfer.
                    </p>
                </div>
            </div>
        </section>
    );
}