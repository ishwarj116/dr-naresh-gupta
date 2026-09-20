import { Tiro_Devanagari_Hindi, Mukta } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Effects from '../components/Effects';
import { PhoneIcon, WhatsAppIcon } from '../components/Icons';
import { site } from '../lib/siteConfig';
import './globals.css';

const headingFont = Tiro_Devanagari_Hindi({
  subsets: ['devanagari'],
  weight: '400',
  variable: '--font-heading',
});

const bodyFont = Mukta({
  subsets: ['devanagari'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
});

const SITE_URL = 'https://ishwarj116.github.io/dr-naresh-gupta';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'डॉ. नरेश कुमार गुप्ता | होम्योपैथिक चिकित्सक | आदर्श कॉलोनी, रामपुर',
  description:
    '51 वर्षों के अनुभव के साथ होम्योपैथिक चिकित्सा। एड़ी व तलवे का दर्द, मस्से, गोखरू, बवासीर, बुखार तथा जटिल एवं पुरानी बीमारियों का सौम्य होम्योपैथिक उपचार।',
  openGraph: {
    title: 'डॉ. नरेश कुमार गुप्ता | होम्योपैथिक चिकित्सक',
    description:
      '51 वर्षों का अनुभव। जटिल एवं पुरानी बीमारियों का सौम्य होम्योपैथिक उपचार। आदर्श कॉलोनी, रामपुर।',
    images: ['/og.jpg'],
    locale: 'hi_IN',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#3e5c3a',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'डॉ. नरेश कुमार गुप्ता',
  medicalSpecialty: 'Homeopathic',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rampur',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  telephone: '+919719547096',
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/og.jpg`,
  openingHours: ['Mo-Sa 10:00-14:00', 'Mo-Sa 17:00-20:00'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Effects />
        <Navbar />
        {children}
        <Footer />
        <div className="callbar">
          <a href={`tel:${site.phone}`}>
            <PhoneIcon /> कॉल करें
          </a>
          <a href={site.waHref} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> WhatsApp
          </a>
        </div>
      </body>
    </html>
  );
}
