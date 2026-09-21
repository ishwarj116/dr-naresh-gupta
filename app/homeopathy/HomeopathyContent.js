'use client';

import Image from 'next/image';
import Link from 'next/link';
import { site } from '../../lib/siteConfig';
import { useLang } from '../../lib/i18n';
import { PhoneIcon, WhatsAppIcon } from '../../components/Icons';
import hahnemannPortrait from '../../public/hahnemann-portrait.jpg';
import organonTitle from '../../public/organon-title.jpg';
import globulesPhoto from '../../public/homeo-flower.jpg';

// शोध-संदर्भ: मानक अकादमिक शैली में, दोनों भाषाओं में एक जैसे रहते हैं
const REFS = [
  'Hahnemann S. Organon of Medicine. 6th edition (translated by W. Boericke). Philadelphia: Boericke & Tafel; 1921.',
  'Ministry of AYUSH, Government of India. Homoeopathy [Internet]. Available from: https://ayush.gov.in',
  'Central Council for Research in Homoeopathy (CCRH), New Delhi [Internet]. Available from: https://ccrhindia.nic.in',
  'The National Commission for Homoeopathy Act, 2020. The Gazette of India; 2020 Sep 21.',
  'US Department of Health & Human Services; National Institutes of Health; National Center for Complementary and Alternative Medicine. Homeopathy: An Introduction [Internet]. Bethesda (MD): NCCAM; 2009 Jul [updated 2013 May; cited 2014 Feb].',
  'National Center for Complementary and Integrative Health (NIH). Homeopathy: What You Need To Know [Internet]. Available from: https://www.nccih.nih.gov/health/homeopathy',
  'World Health Organization. WHO Traditional Medicine Strategy: 2014-2023. Geneva: WHO; 2013.',
  'Altunc U, Pittler MH, Ernst E. Homeopathy for childhood and adolescence ailments: systematic review of randomized clinical trials. Mayo Clin Proc. 2007;82(1):69-75.',
  'Kemper KJ, Vohra S, Walls R. The use of complementary and alternative medicine in pediatrics. Pediatrics. 2008;122(6):1374-1386. Reaffirmed January 2013.',
  'Kuehn BM. Despite health claims by manufacturers, little oversight for homeopathic products. JAMA. 2009;302(15):1631-1634.',
  'US Food and Drug Administration. Manual of Compliance Policy Guides, Sec. 400.400: Conditions Under Which Homeopathic Drugs May Be Marketed [Internet]; 1988 May 31 [updated 1995 Mar; cited 2014 Feb 6].',
];

const T = {
  hi: {
    crumbHome: 'मुखपृष्ठ',
    crumbHere: 'होम्योपैथी',
    h1: 'होम्योपैथी: एक संपूर्ण परिचय',
    lead: 'दो सौ वर्षों से अधिक पुरानी, विश्व की प्रमुख सौम्य चिकित्सा पद्धतियों में से एक। इसका इतिहास, सिद्धांत और भारत में स्थान।',
    introHeading: 'होम्योपैथी क्या है?',
    introP1:
      'होम्योपैथी चिकित्सा की वह वैकल्पिक पद्धति है, जिसमें रोग के लक्षणों को दबाने के बजाय शरीर की अपनी रोग-प्रतिरोधक क्षमता (जीवनी शक्ति) को जाग्रत कर रोग को दूर करने का प्रयास किया जाता है। दवाएँ वनस्पतियों, खनिजों तथा अन्य प्राकृतिक स्रोतों से अत्यंत सूक्ष्म मात्रा में तैयार की जाती हैं, इसीलिए ये सौम्य होती हैं और मीठी गोलियों के रूप में बच्चों से लेकर बुज़ुर्गों तक को आसानी से दी जा सकती हैं।',
    introP2a: '"होम्योपैथी" शब्द ग्रीक भाषा के ',
    introP2b: ' (समान) और ',
    introP2c: ' (पीड़ा) से बना है, अर्थात "समान से समान की चिकित्सा"।',
    hahnemannHeading: 'संस्थापक: डॉ. सैमुअल हानेमान',
    portraitAlt: 'डॉ. सैमुअल हानेमान का 1838 में बना तैलचित्र',
    portraitCaption: 'डॉ. सैमुअल हानेमान (1755-1843), 1838 में पेरिस में बना तैलचित्र',
    bio: [
      'डॉ. क्रिश्चियन फ्रेडरिक सैमुअल हानेमान का जन्म 10 अप्रैल 1755 को जर्मनी के माइसन नगर में हुआ। वे असाधारण प्रतिभा के धनी थे: कई भाषाओं के ज्ञाता, रसायनशास्त्री और चिकित्सक। सन् 1779 में उन्होंने चिकित्सा की उपाधि प्राप्त की, परंतु उस युग की कठोर चिकित्सा विधियों (रक्त निकालना, विषैली औषधियाँ) से असंतुष्ट होकर उन्होंने चिकित्सा छोड़ अनुवाद कार्य अपना लिया।',
      'सन् 1790 में एक पुस्तक का अनुवाद करते समय उन्होंने सिनकोना (कुनैन) की छाल का स्वयं पर प्रयोग किया और पाया कि स्वस्थ शरीर में वह मलेरिया जैसे लक्षण उत्पन्न करती है। यहीं से "समान से समान की चिकित्सा" के सिद्धांत का जन्म हुआ। वर्षों के परीक्षणों के बाद सन् 1810 में उन्होंने अपना प्रसिद्ध ग्रंथ ऑर्गेनन प्रकाशित किया और होम्योपैथी को एक व्यवस्थित चिकित्सा पद्धति का रूप दिया।',
      'जीवन के अंतिम वर्ष उन्होंने पेरिस में बिताए, जहाँ 2 जुलाई 1843 को 88 वर्ष की आयु में उनका निधन हुआ। आज उनके जन्मदिवस को विश्व होम्योपैथी दिवस के रूप में मनाया जाता है।',
    ],
    principlesHeading: 'होम्योपैथी के मूल सिद्धांत',
    principles: [
      {
        icon: '⚖️',
        title: 'समरूपता का सिद्धांत',
        desc: '"Similia Similibus Curentur", अर्थात जो पदार्थ स्वस्थ व्यक्ति में किसी रोग जैसे लक्षण उत्पन्न करता है, वही पदार्थ अत्यंत सूक्ष्म मात्रा में उन लक्षणों वाले रोगी को ठीक कर सकता है। यही होम्योपैथी की आधारशिला है।',
      },
      {
        icon: '💧',
        title: 'न्यूनतम मात्रा',
        desc: 'दवा उतनी ही दी जाती है जितनी रोग को ठीक करने के लिए आवश्यक हो। इससे दवा का कोई हानिकारक प्रभाव शरीर पर नहीं पड़ता।',
      },
      {
        icon: '🔄',
        title: 'शक्तिकरण (पोटेंसी)',
        desc: 'दवाओं को एक विशेष विधि से घोलकर और क्रमबद्ध झटके देकर तैयार किया जाता है, जिससे उनकी रोगनाशक शक्ति बढ़ती है और भौतिक मात्रा घटती है।',
      },
      {
        icon: '🧍',
        title: 'संपूर्ण व्यक्ति की चिकित्सा',
        desc: 'होम्योपैथी रोग का नहीं, रोगी का उपचार करती है। शरीर, मन और स्वभाव को एक साथ देखकर दवा चुनी जाती है। इसीलिए एक ही रोग में दो रोगियों को अलग-अलग दवा दी जा सकती है।',
      },
    ],
    booksHeading: 'डॉ. हानेमान के प्रमुख ग्रंथ',
    books: [
      {
        year: '1810',
        title: 'ऑर्गेनन ऑफ़ मेडिसिन',
        original: 'Organon der Heilkunst',
        desc: 'होम्योपैथी का मूल ग्रंथ, जिसमें डॉ. हानेमान ने चिकित्सा के संपूर्ण सिद्धांत सूत्रबद्ध किए। उनके जीवनकाल और उसके बाद कुल छह संस्करण प्रकाशित हुए। आज भी विश्व भर के होम्योपैथिक कॉलेजों में यही ग्रंथ पढ़ाया जाता है।',
      },
      {
        year: '1811-1821',
        title: 'मटेरिया मेडिका प्यूरा',
        original: 'Reine Arzneimittellehre',
        desc: 'छह खंडों का ग्रंथ, जिसमें स्वस्थ मनुष्यों पर दवाओं के परीक्षण (प्रूविंग) से प्राप्त लक्षणों का शुद्ध, व्यवस्थित विवरण है। होम्योपैथिक दवाओं के ज्ञान का आधार यही ग्रंथ है।',
      },
      {
        year: '1828',
        title: 'द क्रॉनिक डिज़ीज़ेज़',
        original: 'Die chronischen Krankheiten',
        desc: 'पुराने (जीर्ण) रोगों की गहराई पर लिखा ग्रंथ। क्यों कुछ रोग बार-बार लौटते हैं और उनकी जड़ (मायाज़्म) तक पहुँचकर स्थायी उपचार कैसे किया जाए, इसका सिद्धांत यहीं दिया गया।',
      },
    ],
    organonAlt: 'ऑर्गेनन ऑफ़ मेडिसिन के अंग्रेज़ी संस्करण का मुखपृष्ठ',
    organonCaption: '"ऑर्गेनन" के अंग्रेज़ी संस्करण का मुखपृष्ठ',
    credit: 'चित्र: Wellcome Collection (CC BY 4.0)',
    indiaHeading: 'होम्योपैथी भारत में',
    indiaFacts: [
      'भारत में होम्योपैथी का आगमन 19वीं शताब्दी के आरंभ में हुआ। डॉ. जॉन मार्टिन होनिगबर्गर ने महाराजा रणजीत सिंह का उपचार होम्योपैथी से किया था।',
      'आज भारत विश्व में होम्योपैथी का सबसे बड़ा केंद्र है, जहाँ सैकड़ों होम्योपैथिक मेडिकल कॉलेज और लाखों पंजीकृत चिकित्सक हैं।',
      'भारत सरकार के आयुष मंत्रालय के अंतर्गत होम्योपैथी एक मान्यता प्राप्त चिकित्सा पद्धति है।',
      'राष्ट्रीय होम्योपैथी आयोग (NCH) शिक्षा और पंजीकरण का नियमन करता है, तथा केंद्रीय होम्योपैथी अनुसंधान परिषद (CCRH) शोध कार्य करती है।',
      'डॉ. हानेमान के जन्मदिवस 10 अप्रैल को प्रतिवर्ष विश्व होम्योपैथी दिवस मनाया जाता है।',
    ],
    globulesAlt: 'होम्योपैथिक दवा की गोलियाँ और पुष्प',
    mythsHeading: 'मिथक बनाम सच',
    mythTag: 'मिथक',
    factTag: 'सच',
    myths: [
      {
        myth: 'होम्योपैथी बहुत धीमा असर करती है।',
        fact: 'नई शिकायतों (बुखार, चोट, सर्दी) में होम्योपैथिक दवाएँ प्रायः तेज़ी से काम करती हैं। वर्षों पुराने रोगों में समय लगना स्वाभाविक है, क्योंकि उपचार मूल कारण पर किया जाता है।',
      },
      {
        myth: 'सभी सफ़ेद मीठी गोलियाँ एक जैसी होती हैं।',
        fact: 'मीठी गोलियाँ केवल दवा पहुँचाने का माध्यम हैं। असली दवा उन पर डाली गई औषधि होती है, जो हज़ारों अलग-अलग स्रोतों से बनती है और हर रोगी के लिए अलग चुनी जाती है।',
      },
      {
        myth: 'होम्योपैथी में बहुत कठिन परहेज़ रखना पड़ता है।',
        fact: 'सामान्यतः केवल दवा के आसपास तेज़ गंध वाली चीज़ों (कपूर, कच्चा प्याज़-लहसुन आदि) से बचने की सलाह दी जाती है। परहेज़ रोग के अनुसार होता है, पद्धति के कारण नहीं।',
      },
      {
        myth: 'होम्योपैथिक दवा पहले रोग को बढ़ा देती है।',
        fact: 'कुछ रोगियों में आरंभ में लक्षण थोड़े उभर सकते हैं, जिसे चिकित्सक की देखरेख में शुभ संकेत माना जाता है। यह अल्पकालिक होता है और हर रोगी में नहीं होता।',
      },
    ],
    refsHeading: 'संदर्भ (References)',
    refsIntro:
      'इस पृष्ठ की ऐतिहासिक एवं संस्थागत जानकारी हेतु प्रमुख स्रोत, तथा अधिक अध्ययन के लिए शोध-संदर्भ:',
    ctaHeading: 'क्या होम्योपैथी आपके रोग में सहायक हो सकती है?',
    ctaSub: `${site.experienceYears} वर्षों के अनुभवी चिकित्सक से परामर्श लें। रामपुर (उ.प्र.) एवं सेक्टर 14, गुरुग्राम।`,
    call: 'कॉल करें',
    wa: 'WhatsApp',
  },
  en: {
    crumbHome: 'Home',
    crumbHere: 'Homeopathy',
    h1: 'Homeopathy: A Complete Introduction',
    lead: 'One of the world’s leading systems of gentle medicine, more than two hundred years old. Its history, principles and place in India.',
    introHeading: 'What is Homeopathy?',
    introP1:
      'Homeopathy is an alternative system of medicine that seeks to relieve illness by awakening the body’s own defensive capacity (vital force) rather than merely suppressing symptoms. Its medicines are prepared in extremely minute quantities from plants, minerals and other natural sources, which is why they are gentle, and as sweet pills can be given easily to everyone from children to the elderly.',
    introP2a: 'The word "homeopathy" comes from the Greek ',
    introP2b: ' (similar) and ',
    introP2c: ' (suffering), that is, "treating like with like".',
    hahnemannHeading: 'The Founder: Dr. Samuel Hahnemann',
    portraitAlt: 'An 1838 oil portrait of Dr. Samuel Hahnemann',
    portraitCaption: 'Dr. Samuel Hahnemann (1755-1843), painted in Paris in 1838',
    bio: [
      'Dr. Christian Friedrich Samuel Hahnemann was born on 10 April 1755 in Meissen, Germany. A man of extraordinary talent, a polyglot, chemist and physician, he earned his medical degree in 1779, but grew disillusioned with the harsh medical practices of his era (bloodletting, toxic drugs), gave up practice and turned to translation work.',
      'In 1790, while translating a book, he experimented on himself with cinchona (quinine) bark and found that in a healthy body it produced malaria-like symptoms. From this was born the principle of "treating like with like". After years of careful testing he published his famous work, the Organon, in 1810, giving homeopathy the form of a systematic school of medicine.',
      'He spent his final years in Paris, where he died on 2 July 1843 at the age of 88. His birthday is now celebrated every year as World Homeopathy Day.',
    ],
    principlesHeading: 'The Core Principles of Homeopathy',
    principles: [
      {
        icon: '⚖️',
        title: 'The Law of Similars',
        desc: '"Similia Similibus Curentur": a substance that produces disease-like symptoms in a healthy person can, in an extremely minute dose, help cure those very symptoms in a patient. This is the foundation of homeopathy.',
      },
      {
        icon: '💧',
        title: 'The Minimum Dose',
        desc: 'Only as much medicine is given as is needed to stimulate healing, so it leaves no harmful burden on the body.',
      },
      {
        icon: '🔄',
        title: 'Potentisation',
        desc: 'Medicines are prepared by a special process of serial dilution and succussion, which enhances their healing power while reducing the material dose.',
      },
      {
        icon: '🧍',
        title: 'Treating the Whole Person',
        desc: 'Homeopathy treats the patient, not the disease. Body, mind and temperament are considered together, which is why two patients with the same disease may receive different medicines.',
      },
    ],
    booksHeading: 'Dr. Hahnemann’s Major Works',
    books: [
      {
        year: '1810',
        title: 'Organon of Medicine',
        original: 'Organon der Heilkunst',
        desc: 'The foundational text of homeopathy, in which Dr. Hahnemann set out its complete principles. Six editions appeared during and after his lifetime, and it is still taught in homeopathic colleges around the world.',
      },
      {
        year: '1811-1821',
        title: 'Materia Medica Pura',
        original: 'Reine Arzneimittellehre',
        desc: 'A six-volume work containing the pure, systematic record of symptoms obtained by testing medicines (provings) on healthy people, the basis of homeopathic drug knowledge.',
      },
      {
        year: '1828',
        title: 'The Chronic Diseases',
        original: 'Die chronischen Krankheiten',
        desc: 'His deep study of chronic illness: why some diseases keep returning, and how lasting treatment must reach their underlying root (miasm).',
      },
    ],
    organonAlt: 'Title page of an English edition of the Organon of Medicine',
    organonCaption: 'Title page of an English edition of the "Organon"',
    credit: 'Image: Wellcome Collection (CC BY 4.0)',
    indiaHeading: 'Homeopathy in India',
    indiaFacts: [
      'Homeopathy reached India in the early 19th century. Dr. John Martin Honigberger treated Maharaja Ranjit Singh with it.',
      'Today India is the world’s largest centre of homeopathy, with hundreds of homeopathic medical colleges and lakhs of registered practitioners.',
      'Homeopathy is a recognised system of medicine under the Ministry of AYUSH, Government of India.',
      'The National Commission for Homoeopathy (NCH) regulates education and registration, while the CCRH conducts research.',
      'World Homeopathy Day is celebrated every year on 10 April, Dr. Hahnemann’s birthday.',
    ],
    globulesAlt: 'Homeopathic pills and a flower',
    mythsHeading: 'Myths vs Facts',
    mythTag: 'Myth',
    factTag: 'Fact',
    myths: [
      {
        myth: 'Homeopathy works very slowly.',
        fact: 'In recent complaints (fever, injury, cold) homeopathic medicines often act quickly. Long-standing illnesses naturally take time, because treatment addresses the underlying cause.',
      },
      {
        myth: 'All those white sweet pills are the same.',
        fact: 'The sweet pills are only the carrier. The real medicine is what is poured onto them, made from thousands of different sources and chosen individually for each patient.',
      },
      {
        myth: 'Homeopathy demands very difficult dietary restrictions.',
        fact: 'Generally you are only advised to avoid strong-smelling substances (camphor, raw onion-garlic etc.) around the time of taking medicine. Restrictions depend on the illness, not on the system itself.',
      },
      {
        myth: 'Homeopathic medicine first makes the disease worse.',
        fact: 'In some patients symptoms may briefly surface at the start, which under a physician’s supervision is considered a good sign. It is short-lived and does not happen to everyone.',
      },
    ],
    refsHeading: 'References',
    refsIntro:
      'Key sources for the historical and institutional information on this page, and research references for further reading:',
    ctaHeading: 'Could homeopathy help with your condition?',
    ctaSub: `Consult a physician with ${site.experienceYears} years of experience. Rampur (UP) and Sector 14, Gurugram.`,
    call: 'Call Now',
    wa: 'WhatsApp',
  },
};

export default function HomeopathyContent() {
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

      <section className="section" id="intro">
        <div className="container narrow">
          <h2>{t.introHeading}</h2>
          <p>{t.introP1}</p>
          <p>
            {t.introP2a}
            <em>homoios</em>
            {t.introP2b}
            <em>pathos</em>
            {t.introP2c}
          </p>
        </div>
      </section>

      <section className="section section-tint" id="hahnemann">
        <div className="container split">
          <figure className="split-photo portrait">
            <Image
              src={hahnemannPortrait}
              alt={t.portraitAlt}
              sizes="(min-width: 720px) 420px, 88vw"
            />
            <figcaption>{t.portraitCaption}</figcaption>
          </figure>
          <div className="split-text">
            <h2>{t.hahnemannHeading}</h2>
            {t.bio.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="principles">
        <div className="container">
          <h2>{t.principlesHeading}</h2>
          <div className="cards">
            {t.principles.map((p) => (
              <article className="card" key={p.title}>
                <span className="card-icon" aria-hidden="true">
                  {p.icon}
                </span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint" id="books">
        <div className="container">
          <h2>{t.booksHeading}</h2>
          <div className="books-grid">
            <div className="books-list">
              {t.books.map((b) => (
                <article className="book-card" key={b.title}>
                  <p className="book-year">{b.year}</p>
                  <h3>{b.title}</h3>
                  <p className="book-original">{b.original}</p>
                  <p>{b.desc}</p>
                </article>
              ))}
            </div>
            <figure className="books-photo">
              <Image
                src={organonTitle}
                alt={t.organonAlt}
                sizes="(min-width: 900px) 420px, 92vw"
              />
              <figcaption>
                {t.organonCaption}
                <span className="credit">{t.credit}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section" id="india">
        <div className="container split">
          <div className="split-text">
            <h2>{t.indiaHeading}</h2>
            <ul className="checklist">
              {t.indiaFacts.map((f) => (
                <li key={f.slice(0, 24)}>{f}</li>
              ))}
            </ul>
          </div>
          <figure className="split-photo">
            <Image
              src={globulesPhoto}
              alt={t.globulesAlt}
              sizes="(min-width: 720px) 480px, 92vw"
            />
          </figure>
        </div>
      </section>

      <section className="section section-tint" id="myths">
        <div className="container narrow">
          <h2>{t.mythsHeading}</h2>
          <div className="myth-list">
            {t.myths.map((m) => (
              <div className="myth-card" key={m.myth}>
                <p className="myth-line">
                  <span className="tag tag-myth">{t.mythTag}</span> {m.myth}
                </p>
                <p className="fact-line">
                  <span className="tag tag-fact">{t.factTag}</span> {m.fact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="references">
        <div className="container narrow">
          <h2>{t.refsHeading}</h2>
          <p className="section-sub">{t.refsIntro}</p>
          <ol className="refs">
            {REFS.map((r) => (
              <li key={r.slice(0, 40)}>{r}</li>
            ))}
          </ol>
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
