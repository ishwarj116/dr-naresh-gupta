import { Tiro_Devanagari_Hindi, Mukta } from 'next/font/google';
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

export const metadata = {
  title: 'डॉ. नरेश कुमार गुप्ता — होम्योपैथिक चिकित्सक | आदर्श कॉलोनी, रामपुर',
  description:
    '51 वर्षों के अनुभव के साथ होम्योपैथिक चिकित्सा। एड़ी व तलवे का दर्द, मस्से, गोखरू, बुखार तथा जटिल एवं पुरानी बीमारियों का सौम्य होम्योपैथिक उपचार।',
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
