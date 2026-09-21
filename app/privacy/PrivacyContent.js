'use client';

import Link from 'next/link';
import { site } from '../../lib/siteConfig';
import { useLang } from '../../lib/i18n';

const T = {
  hi: {
    crumbHome: 'मुखपृष्ठ',
    crumbHere: 'गोपनीयता नीति',
    h1: 'गोपनीयता नीति एवं अस्वीकरण',
    lead: 'यह पृष्ठ बताता है कि यह वेबसाइट आपकी जानकारी के साथ कैसा व्यवहार करती है, और चिकित्सा संबंधी महत्वपूर्ण सूचनाएँ देता है।',
    sections: [
      {
        h: 'हम कोई व्यक्तिगत जानकारी एकत्र नहीं करते',
        ps: [
          'यह एक सूचनात्मक (informational) वेबसाइट है। इस पर कोई फ़ॉर्म, अकाउंट या लॉगिन नहीं है, और हम आपकी कोई व्यक्तिगत जानकारी (नाम, फ़ोन नंबर, स्वास्थ्य विवरण आदि) एकत्र, संग्रहीत या साझा नहीं करते।',
          'भाषा की पसंद (हिन्दी/English) केवल आपके अपने डिवाइस पर सहेजी जाती है; वह हम तक नहीं पहुँचती।',
        ],
      },
      {
        h: 'बाहरी सेवाओं के लिंक',
        ps: [
          'वेबसाइट पर फ़ोन कॉल, WhatsApp और Google Maps के लिंक हैं। इन पर क्लिक करने के बाद आप संबंधित सेवा (WhatsApp/Google) की गोपनीयता नीतियों के अधीन होते हैं। WhatsApp या फ़ोन पर आपके द्वारा साझा की गई जानकारी सीधे क्लिनिक तक जाती है और पूरी तरह गोपनीय रखी जाती है।',
        ],
      },
      {
        h: 'एनालिटिक्स एवं विज्ञापन मापन',
        ps: [
          'विज्ञापन अभियानों के दौरान यह वेबसाइट Google Analytics तथा Google Ads कन्वर्ज़न ट्रैकिंग का उपयोग कर सकती है। ये सेवाएँ कुकीज़ के माध्यम से गुमनाम उपयोग-आँकड़े (जैसे पेज व्यू, कॉल या WhatsApp बटन पर क्लिक) एकत्र करती हैं, ताकि हम समझ सकें कि वेबसाइट कैसे उपयोग हो रही है। इनसे न आपकी व्यक्तिगत पहचान होती है, न ही कोई स्वास्थ्य-जानकारी एकत्र होती है।',
          'आप अपने ब्राउज़र की सेटिंग से कुकीज़ को कभी भी रोक या हटा सकते हैं।',
        ],
      },
      {
        h: 'चिकित्सा अस्वीकरण',
        ps: [
          'इस वेबसाइट की सारी सामग्री केवल सामान्य जानकारी हेतु है। यह किसी रोग के निदान या उपचार की गारंटी नहीं है, और न ही यह योग्य चिकित्सक के व्यक्तिगत परामर्श का विकल्प है।',
          'उपचार के परिणाम हर रोगी की स्थिति, रोग की प्रकृति और नियमितता के अनुसार भिन्न हो सकते हैं।',
          'पहले से चल रही कोई भी दवा (एलोपैथिक आदि) अपने मन से बंद न करें। गंभीर या आपातकालीन स्थिति में तुरंत निकटतम अस्पताल से संपर्क करें।',
        ],
      },
      {
        h: 'संपर्क',
        ps: [
          `इस नीति से जुड़े किसी भी प्रश्न के लिए आप क्लिनिक से संपर्क कर सकते हैं: ${site.phoneDisplay} · राधा रोड, रोशन बाग़, रामपुर (उ.प्र.) एवं मकान नं. 303, सेक्टर 14, गुरुग्राम (हरियाणा)।`,
        ],
      },
    ],
    back: '← मुखपृष्ठ पर लौटें',
  },
  en: {
    crumbHome: 'Home',
    crumbHere: 'Privacy Policy',
    h1: 'Privacy Policy & Disclaimer',
    lead: 'This page explains how this website handles your information, along with important medical notices.',
    sections: [
      {
        h: 'We Do Not Collect Personal Information',
        ps: [
          'This is an informational website. It has no forms, accounts or logins, and we do not collect, store or share any personal information about you (name, phone number, health details, etc.).',
          'Your language preference (हिन्दी/English) is saved only on your own device; it never reaches us.',
        ],
      },
      {
        h: 'Links to External Services',
        ps: [
          'The website contains links for phone calls, WhatsApp and Google Maps. Once you use them, you are subject to the privacy policies of those services (WhatsApp/Google). Anything you share with the clinic by phone or WhatsApp goes directly to the clinic and is kept fully confidential.',
        ],
      },
      {
        h: 'Analytics and Advertising Measurement',
        ps: [
          'During advertising campaigns this website may use Google Analytics and Google Ads conversion tracking. These services collect anonymous usage statistics through cookies (such as page views and clicks on the call or WhatsApp buttons) so we can understand how the website is used. They do not personally identify you and collect no health information.',
          'You can block or delete cookies at any time in your browser settings.',
        ],
      },
      {
        h: 'Medical Disclaimer',
        ps: [
          'All content on this website is for general information only. It is not a guarantee of diagnosis or cure, nor a substitute for personal consultation with a qualified physician.',
          'Treatment results vary from patient to patient, depending on the condition, its nature, and regularity of treatment.',
          'Do not stop any medicine you are already taking (allopathic or otherwise) on your own. In a serious or emergency situation, contact the nearest hospital immediately.',
        ],
      },
      {
        h: 'Contact',
        ps: [
          `For any questions about this policy, you can contact the clinic: ${site.phoneDisplay} · Radha Road, Roshan Bagh, Rampur (UP) and House No. 303, Sector 14, Gurugram (Haryana).`,
        ],
      },
    ],
    back: '← Back to home',
  },
};

export default function PrivacyContent() {
  const { lang } = useLang();
  const t = T[lang];

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="crumbs">
            <Link href="/">{t.crumbHome}</Link> <span aria-hidden="true">›</span>{' '}
            {t.crumbHere}
          </p>
          <h1>{t.h1}</h1>
          <p className="lead">{t.lead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          {t.sections.map((s) => (
            <div className="policy-block" key={s.h}>
              <h2>{s.h}</h2>
              {s.ps.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          ))}
          <p className="mt-20">
            <Link className="btn btn-outline" href="/">
              {t.back}
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
