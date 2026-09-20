import Link from 'next/link';
import { site } from '../lib/siteConfig';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer-links" aria-label="फ़ुटर मेन्यू">
          <Link href="/#about">परिचय</Link>
          <Link href="/homeopathy">होम्योपैथी</Link>
          <Link href="/#specialties">रोग व उपचार</Link>
          <Link href="/#process">चिकित्सा-पद्धति</Link>
          <Link href="/#faq">प्रश्न-उत्तर</Link>
          <Link href="/#contact">संपर्क</Link>
        </nav>
        <p>
          © {new Date().getFullYear()} {site.clinicName}, {site.address}
        </p>
        <p className="disclaimer">
          यह वेबसाइट केवल सामान्य जानकारी हेतु है। किसी भी रोग की चिकित्सा के लिए
          कृपया चिकित्सक से व्यक्तिगत परामर्श अवश्य लें।
        </p>
      </div>
    </footer>
  );
}
