import Image from "next/image";
import Link from "next/link";
import ScrollTop from "./ScrollTop";
import { CookiePreferences } from "./CookieDialog";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="left-section-container fade-up">
          <Image
            src="/footer-logo.png"
            alt="home img"
            width={120}
            height={60}
          />
          <p className="mt-2">ADK Interactive, LLC</p>
          <p>418 Broadway #4332</p>
          <p>Albany, NY 12207</p>
        </div>

        {/* Right Section */}
        <div className="right-section-container fade-up">
          <ul className="space-y-2">
            <li>
              <Link href="/accessibility">
                <span className="hover:underline">Accessibility Statement</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="hover:underline">Contact Us</span>
              </Link>
            </li>
            <li>
              <Link href="/legal">
                <span className="hover:underline">Legal</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="copy-right-container fade-up">
        <p>© 2024 ADK Interactive, LLC. All rights reserved.</p>
      </div>

      {/* Cookie Preferences */}
      <div className="cookie-preferences fade-up">
        <CookiePreferences />
      </div>

      {/* Scroll Top */}
      <div>
        <ScrollTop />
      </div>
    </footer>
  );
}
