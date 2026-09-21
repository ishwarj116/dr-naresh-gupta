'use client';

import Image from 'next/image';
import Link from 'next/link';
import { site } from '../../lib/siteConfig';
import { useLang } from '../../lib/i18n';
import { PhoneIcon, WhatsAppIcon } from '../../components/Icons';
import doctorPortrait from '../../public/doctor-portrait.jpg';
import doctorClinic from '../../public/doctor-clinic.jpg';
import doctorConsult from '../../public/doctor-consult.jpg';
import doctorGarden from '../../public/doctor-garden.jpg';
import medicinesPoster from '../../public/medicines-poster.jpg';

const T = {
  hi: {
    crumbHome: 'मुखपृष्ठ',
    crumbHere: 'डॉक्टर परिचय',
    h1: 'डॉ. नरेश कुमार गुप्ता',
    lead: 'प्रमाणित एवं पंजीकृत होम्योपैथिक चिकित्सक · 51 वर्षों का अनुभव · रामपुर (उ.प्र.) एवं गुरुग्राम',
    bioHeading: 'एक परिचय',
    bio: [
      'डॉ. नरेश कुमार गुप्ता उत्तर प्रदेश के रामपुर नगर के जाने-माने होम्योपैथिक चिकित्सक हैं। पाँच दशकों से भी लंबे अपने चिकित्सा-जीवन में उन्होंने साधारण सर्दी-बुखार से लेकर वर्षों पुरानी जटिल बीमारियों तक, हर आयु के हज़ारों रोगियों का उपचार किया है।',
      'वे प्रमाणित होम्योपैथिक चिकित्सक हैं और भारत में होम्योपैथिक चिकित्सा हेतु आवश्यक सभी योग्यताएँ एवं पंजीकरण रखते हैं। उनकी पहचान किसी विज्ञापन से नहीं, बल्कि स्वस्थ हुए रोगियों के विश्वास से बनी है: आज भी उनके अधिकांश नए रोगी पुराने रोगियों की सलाह पर ही आते हैं।',
      'रामपुर के साथ-साथ अब वे गुरुग्राम (सेक्टर 14) में भी परामर्श देते हैं, ताकि दिल्ली-एनसीआर के रोगियों को भी सुविधा मिल सके।',
    ],
    portraitAlt: 'डॉ. नरेश कुमार गुप्ता',
    timelineHeading: 'पाँच दशकों की यात्रा',
    timeline: [
      {
        year: '1970 का दशक',
        title: 'चिकित्सा-सेवा का आरंभ',
        desc: 'होम्योपैथिक चिकित्सा की शिक्षा और पंजीकरण के साथ रामपुर में प्रैक्टिस की शुरुआत।',
      },
      {
        year: '1980–2000',
        title: 'रामपुर का विश्वास',
        desc: 'मुँह-ज़ुबानी सलाह से रोगियों की संख्या बढ़ती गई; कई परिवारों की दो-तीन पीढ़ियाँ उपचार से जुड़ीं।',
      },
      {
        year: '2000–2020',
        title: 'जटिल रोगों में गहराई',
        desc: 'एड़ी के दर्द, बवासीर, चर्म रोग, एलर्जी जैसी ज़िद्दी समस्याओं के हज़ारों मामलों का अनुभव।',
      },
      {
        year: 'आज',
        title: '51+ वर्ष, दो क्लिनिक',
        desc: 'रामपुर एवं गुरुग्राम में नियमित परामर्श; वही सौम्यता, वही निष्ठा।',
      },
    ],
    philosophyHeading: 'चिकित्सा-दर्शन',
    philosophy:
      '"रोग का नाम नहीं, रोगी को समझना ज़रूरी है। जो चिकित्सक रोगी की पूरी बात धैर्य से सुन लेता है, उसका आधा काम वहीं हो जाता है। दवा तो उसके बाद आती है।"',
    galleryHeading: 'क्लिनिक की झलकियाँ',
    gallery: [
      { img: 'clinic', alt: 'क्लिनिक में रोगियों को परामर्श देते हुए' },
      { img: 'consult', alt: 'परामर्श के दौरान' },
      { img: 'garden', alt: 'क्लिनिक परिसर में' },
      { img: 'portrait', alt: 'डॉ. नरेश कुमार गुप्ता' },
      { img: 'poster', alt: 'क्लिनिक में उपलब्ध औषधियाँ' },
    ],
    credNote:
      'योग्यता एवं पंजीकरण से जुड़े प्रमाणपत्र क्लिनिक पर उपलब्ध हैं। कोई भी रोगी परामर्श के समय इन्हें देख सकता है।',
    ctaHeading: 'डॉक्टर साहब से परामर्श लें',
    ctaSub: `${site.phoneDisplay} · रामपुर (रोशन बाग़) एवं सेक्टर 14, गुरुग्राम`,
    call: 'कॉल करें',
    wa: 'WhatsApp',
  },
  en: {
    crumbHome: 'Home',
    crumbHere: 'About the Doctor',
    h1: 'Dr. Naresh Kumar Gupta',
    lead: 'Certified & registered homeopathic physician · 51 years of experience · Rampur (UP) and Gurugram',
    bioHeading: 'An Introduction',
    bio: [
      'Dr. Naresh Kumar Gupta is a well-known homeopathic physician of Rampur, Uttar Pradesh. In a medical journey spanning more than five decades, he has treated thousands of patients of every age, from common colds and fevers to complex illnesses that had persisted for years.',
      'He is a certified homeopathic physician and holds all the qualifications and registration required to practise homeopathy in India. His reputation was built not by advertising but by the trust of recovered patients: even today, most of his new patients come on the recommendation of old ones.',
      'Along with Rampur, he now also consults in Gurugram (Sector 14), bringing the same care within reach of patients in Delhi-NCR.',
    ],
    portraitAlt: 'Dr. Naresh Kumar Gupta',
    timelineHeading: 'A Journey of Five Decades',
    timeline: [
      {
        year: '1970s',
        title: 'The Beginning',
        desc: 'Started practice in Rampur with formal training and registration in homeopathic medicine.',
      },
      {
        year: '1980–2000',
        title: 'The Trust of Rampur',
        desc: 'Word of mouth grew the practice; two and three generations of many families became patients.',
      },
      {
        year: '2000–2020',
        title: 'Depth in Chronic Illness',
        desc: 'Thousands of cases of stubborn problems like heel pain, piles, skin diseases and allergies.',
      },
      {
        year: 'Today',
        title: '51+ Years, Two Clinics',
        desc: 'Regular consultation in Rampur and Gurugram, with the same gentleness and dedication.',
      },
    ],
    philosophyHeading: 'His Philosophy of Care',
    philosophy:
      '"It is the patient, not the name of the disease, that must be understood. A physician who listens to the patient\'s whole story with patience has already done half the work. The medicine comes after."',
    galleryHeading: 'Glimpses of the Clinic',
    gallery: [
      { img: 'clinic', alt: 'Consulting patients at the clinic' },
      { img: 'consult', alt: 'During a consultation' },
      { img: 'garden', alt: 'At the clinic premises' },
      { img: 'portrait', alt: 'Dr. Naresh Kumar Gupta' },
      { img: 'poster', alt: 'Medicines available at the clinic' },
    ],
    credNote:
      'Certificates of qualification and registration are available at the clinic. Any patient may see them at the time of consultation.',
    ctaHeading: 'Consult Dr. Gupta',
    ctaSub: `${site.phoneDisplay} · Roshan Bagh, Rampur and Sector 14, Gurugram`,
    call: 'Call Now',
    wa: 'WhatsApp',
  },
};

const IMAGES = {
  portrait: doctorPortrait,
  clinic: doctorClinic,
  consult: doctorConsult,
  garden: doctorGarden,
  poster: medicinesPoster,
};

export default function DoctorContent() {
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

      <section className="section" id="bio">
        <div className="container split">
          <figure className="split-photo portrait">
            <Image
              src={doctorPortrait}
              alt={t.portraitAlt}
              sizes="(min-width: 720px) 400px, 82vw"
              priority
            />
          </figure>
          <div className="split-text">
            <h2>{t.bioHeading}</h2>
            {t.bio.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <div className="note-box">{t.credNote}</div>
          </div>
        </div>
      </section>

      <section className="section section-tint" id="journey">
        <div className="container narrow">
          <h2>{t.timelineHeading}</h2>
          <ol className="timeline">
            {t.timeline.map((tl) => (
              <li className="timeline-item" key={tl.title}>
                <span className="timeline-year">{tl.year}</span>
                <div>
                  <h3>{tl.title}</h3>
                  <p>{tl.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="philosophy">
        <div className="container narrow">
          <h2>{t.philosophyHeading}</h2>
          <p className="doctor-quote">{t.philosophy}</p>
        </div>
      </section>

      <section className="section section-tint" id="gallery">
        <div className="container">
          <h2>{t.galleryHeading}</h2>
          <div className="gallery-grid">
            {t.gallery.map((g) => (
              <figure className="gallery-item" key={g.img}>
                <Image
                  src={IMAGES[g.img]}
                  alt={g.alt}
                  sizes="(min-width: 720px) 340px, 92vw"
                />
                <figcaption>{g.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>{t.ctaHeading}</h2>
            <p>{t.ctaSub}</p>
          </div>
          <div className="hero-actions">
            <a className="btn btn-light" href={`tel:${site.phone}`}>
              <PhoneIcon /> {t.call}
            </a>
            <a
              className="btn btn-light-outline"
              href={site.waHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> {t.wa}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
