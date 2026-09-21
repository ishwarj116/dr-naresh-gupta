'use client';

import Image from 'next/image';
import Link from 'next/link';
import { site } from '../../lib/siteConfig';
import { useLang } from '../../lib/i18n';
import { PhoneIcon, WhatsAppIcon } from '../../components/Icons';
import bottlesPhoto from '../../public/homeo-bottles.jpg';
import globulesPhoto from '../../public/homeo-globules.jpg';

const T = {
  hi: {
    crumbHome: 'मुखपृष्ठ',
    crumbHere: 'औषधियाँ',
    h1: 'होम्योपैथिक औषधियाँ',
    lead: 'हज़ारों प्रामाणिक औषधियाँ, अनेक रूप, और हर रोगी के लिए अलग चयन। जानिए होम्योपैथिक दवाएँ कैसे बनती हैं और कैसे दी जाती हैं।',
    rangeHeading: 'हर रोग के लिए अनेक औषधियाँ',
    rangeP1:
      'होम्योपैथिक औषधि-भंडार (मटेरिया मेडिका) में हज़ारों प्रामाणिक औषधियाँ हैं। एड़ी के दर्द से लेकर वर्षों पुराने जटिल रोगों तक, हर प्रकार की समस्या के लिए अनेक औषधियाँ उपलब्ध हैं। हमारे क्लिनिक में भी सैकड़ों औषधियाँ रहती हैं, जिनमें से रोगी की स्थिति के अनुसार दवा चुनी जाती है।',
    rangeP2:
      'महत्वपूर्ण बात यह है कि एक ही रोग के दो रोगियों को अलग-अलग दवा दी जा सकती है, क्योंकि होम्योपैथी में दवा रोग के नाम से नहीं, बल्कि रोगी के संपूर्ण लक्षण, प्रकृति और स्वभाव को देखकर चुनी जाती है। इसीलिए हम वेबसाइट पर किसी रोग की "एक निश्चित दवा" नहीं बताते। सही दवा वही है, जो आपको देखकर, समझकर चुनी जाए।',
    note: 'कृपया बिना योग्य चिकित्सक के परामर्श के कोई भी दवा स्वयं न लें। सही दवा, सही शक्ति और सही मात्रा केवल परामर्श के बाद ही तय होती है।',
    bottlesAlt: 'होम्योपैथिक औषधियों की शीशियाँ',
    bottlesCaption: 'क्लिनिक में सैकड़ों प्रामाणिक औषधियाँ उपलब्ध',
    sourcesHeading: 'औषधियाँ बनती कहाँ से हैं?',
    sourcesSub:
      'सभी होम्योपैथिक औषधियाँ प्राकृतिक स्रोतों से, होम्योपैथिक फ़ार्माकोपिया के नियमों के अनुसार तैयार की जाती हैं:',
    sources: [
      {
        icon: '🌿',
        title: 'वनस्पति जगत से',
        desc: 'अधिकांश होम्योपैथिक औषधियाँ पौधों, जड़ी-बूटियों, फूलों और छालों से तैयार की जाती हैं।',
      },
      {
        icon: '⛰️',
        title: 'खनिज जगत से',
        desc: 'अनेक औषधियाँ प्राकृतिक खनिजों, धातुओं और लवणों से बनाई जाती हैं।',
      },
      {
        icon: '🐝',
        title: 'प्राणिज स्रोतों से',
        desc: 'कुछ विशेष औषधियाँ प्राणिज स्रोतों से अत्यंत सूक्ष्म एवं सुरक्षित मात्रा में तैयार होती हैं।',
      },
    ],
    formsHeading: 'किन रूपों में दी जाती हैं?',
    forms: [
      {
        icon: '⚪',
        title: 'मीठी गोलियाँ',
        desc: 'सबसे प्रचलित रूप। दवा की बूँदें मीठी गोलियों पर डालकर दी जाती हैं, जिन्हें बच्चे भी आसानी से ले लेते हैं।',
      },
      {
        icon: '💧',
        title: 'ड्रॉप्स (डाइल्यूशन)',
        desc: 'तरल रूप में दवा, जो सीधे या पानी में मिलाकर ली जाती है।',
      },
      {
        icon: '🌱',
        title: 'मदर टिंक्चर',
        desc: 'औषधीय पौधों का मूल अर्क, जो कुछ रोगों में बूँदों के रूप में दिया जाता है।',
      },
      {
        icon: '🧂',
        title: 'बायोकेमिक औषधियाँ',
        desc: 'शरीर के आवश्यक लवणों पर आधारित गोलियाँ, जो होम्योपैथी की सहायक पद्धति के रूप में दी जाती हैं।',
      },
    ],
    selectionHeading: 'दवा का चयन कैसे होता है?',
    selectionP1:
      'परामर्श के समय रोग के लक्षणों के साथ-साथ रोगी की दिनचर्या, खान-पान, नींद, स्वभाव और पुरानी बीमारियों को विस्तार से समझा जाता है। इसी संपूर्ण चित्र के आधार पर औषधि और उसकी शक्ति (पोटेंसी) का निर्णय किया जाता है।',
    selectionP2: `यही कारण है कि ${site.experienceYears} वर्षों का अनुभव इतना महत्वपूर्ण है। हज़ारों रोगियों को देखने के बाद ही यह समझ विकसित होती है कि किस रोगी को कौन-सी दवा, किस शक्ति में और कब देनी है।`,
    processLink: 'हमारी परामर्श-प्रक्रिया देखें →',
    globulesAlt: 'होम्योपैथिक दवा की मीठी गोलियाँ',
    rulesHeading: 'दवा लेने के नियम',
    rulesSub: 'होम्योपैथिक दवा का पूरा लाभ पाने के लिए इन बातों का ध्यान रखें:',
    rules: [
      'दवा हमेशा साफ़ मुँह में लें। दवा लेने से लगभग आधे घंटे पहले और बाद कुछ न खाएँ-पिएँ।',
      'गोलियों को हाथ में लेने के बजाय शीशी के ढक्कन या साफ़ काग़ज़ से सीधे मुँह में डालें।',
      'दवा के दौरान कपूर, तेज़ गंध वाले तेल-बाम आदि से दूर रहें, ये दवा का असर घटा सकते हैं।',
      'दवा को धूप और तेज़ गंध से दूर, ठंडी सूखी जगह पर रखें।',
      'चिकित्सक की बताई मात्रा और समय का पालन करें। अपने मन से दवा घटाएँ-बढ़ाएँ नहीं।',
      'पहले से चल रही कोई भी दवा (एलोपैथिक आदि) अपने मन से अचानक बंद न करें। चिकित्सक से परामर्श के बाद ही कोई बदलाव करें।',
    ],
    ctaHeading: 'अपने रोग की सही दवा जानने के लिए परामर्श लें',
    ctaSub: `डॉ. नरेश कुमार गुप्ता · रामपुर (उ.प्र.) एवं सेक्टर 14, गुरुग्राम`,
    call: 'कॉल करें',
    wa: 'WhatsApp',
  },
  en: {
    crumbHome: 'Home',
    crumbHere: 'Medicines',
    h1: 'Homeopathic Medicines',
    lead: 'Thousands of authentic medicines, many forms, and an individual choice for every patient. Learn how homeopathic medicines are made and given.',
    rangeHeading: 'Many Medicines for Every Condition',
    rangeP1:
      'The homeopathic materia medica contains thousands of authentic medicines. From heel pain to complex illnesses that have lasted for years, there are many medicines available for every kind of problem. Our clinic itself stocks hundreds of them, from which the medicine is chosen according to the patient’s condition.',
    rangeP2:
      'What matters most is that two patients with the same disease may receive different medicines: in homeopathy the medicine is chosen not by the disease’s name but by the patient’s complete symptoms, constitution and temperament. That is why we do not list "the one medicine" for any disease on this website. The right medicine is the one chosen after seeing and understanding you.',
    note: 'Please do not take any medicine on your own without consulting a qualified physician. The right medicine, potency and dose can only be decided after consultation.',
    bottlesAlt: 'Bottles of homeopathic medicines',
    bottlesCaption: 'Hundreds of authentic medicines available at the clinic',
    sourcesHeading: 'Where Do the Medicines Come From?',
    sourcesSub:
      'All homeopathic medicines are prepared from natural sources according to the Homoeopathic Pharmacopoeia:',
    sources: [
      {
        icon: '🌿',
        title: 'From the Plant Kingdom',
        desc: 'Most homeopathic medicines are prepared from plants, herbs, flowers and barks.',
      },
      {
        icon: '⛰️',
        title: 'From the Mineral Kingdom',
        desc: 'Many medicines are made from natural minerals, metals and salts.',
      },
      {
        icon: '🐝',
        title: 'From Animal Sources',
        desc: 'Some special medicines are prepared from animal sources in extremely minute, safe quantities.',
      },
    ],
    formsHeading: 'In What Forms Are They Given?',
    forms: [
      {
        icon: '⚪',
        title: 'Sweet Pills',
        desc: 'The most common form. Drops of medicine are poured onto sweet pills, which even children take easily.',
      },
      {
        icon: '💧',
        title: 'Drops (Dilutions)',
        desc: 'Medicine in liquid form, taken directly or mixed in water.',
      },
      {
        icon: '🌱',
        title: 'Mother Tinctures',
        desc: 'The base extract of medicinal plants, given as drops in certain conditions.',
      },
      {
        icon: '🧂',
        title: 'Biochemic Medicines',
        desc: 'Tablets based on the body’s essential tissue salts, given as a supporting branch of homeopathy.',
      },
    ],
    selectionHeading: 'How Is the Medicine Chosen?',
    selectionP1:
      'During consultation, along with the symptoms of the illness, the patient’s routine, diet, sleep, temperament and past illnesses are understood in detail. The medicine and its potency are decided on the basis of this complete picture.',
    selectionP2: `This is why ${site.experienceYears} years of experience matters so much. Only after seeing thousands of patients does one develop the judgement of which medicine to give, in what potency, and when.`,
    processLink: 'See how a consultation works →',
    globulesAlt: 'Homeopathic sweet pills',
    rulesHeading: 'How to Take the Medicine',
    rulesSub: 'To get the full benefit of homeopathic medicine, keep these in mind:',
    rules: [
      'Always take the medicine with a clean mouth. Avoid eating or drinking for about half an hour before and after.',
      'Do not touch the pills. Tip them into your mouth from the bottle cap or clean paper.',
      'Stay away from camphor and strong-smelling balms and oils during treatment; they can reduce the medicine’s effect.',
      'Store the medicine away from sunlight and strong smells, in a cool, dry place.',
      'Follow the dose and timing prescribed by the physician. Do not increase or decrease it on your own.',
      'Never abruptly stop any medicine you are already taking (allopathic or otherwise) on your own. Make changes only after consulting the physician.',
    ],
    ctaHeading: 'Consult to know the right medicine for your condition',
    ctaSub: 'Dr. Naresh Kumar Gupta · Rampur (UP) and Sector 14, Gurugram',
    call: 'Call Now',
    wa: 'WhatsApp',
  },
};

export default function MedicinesContent() {
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

      <section className="section" id="range">
        <div className="container split">
          <div className="split-text">
            <h2>{t.rangeHeading}</h2>
            <p>{t.rangeP1}</p>
            <p>{t.rangeP2}</p>
            <div className="note-box">{t.note}</div>
          </div>
          <figure className="split-photo">
            <Image
              src={bottlesPhoto}
              alt={t.bottlesAlt}
              sizes="(min-width: 720px) 480px, 92vw"
            />
            <figcaption>{t.bottlesCaption}</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section-tint" id="sources">
        <div className="container">
          <h2>{t.sourcesHeading}</h2>
          <p className="section-sub">{t.sourcesSub}</p>
          <div className="cards">
            {t.sources.map((s) => (
              <article className="card" key={s.title}>
                <span className="card-icon" aria-hidden="true">
                  {s.icon}
                </span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="forms">
        <div className="container">
          <h2>{t.formsHeading}</h2>
          <div className="cards">
            {t.forms.map((f) => (
              <article className="card" key={f.title}>
                <span className="card-icon" aria-hidden="true">
                  {f.icon}
                </span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint" id="selection">
        <div className="container split">
          <figure className="split-photo">
            <Image
              src={globulesPhoto}
              alt={t.globulesAlt}
              sizes="(min-width: 720px) 480px, 92vw"
            />
          </figure>
          <div className="split-text">
            <h2>{t.selectionHeading}</h2>
            <p>{t.selectionP1}</p>
            <p>{t.selectionP2}</p>
            <p className="mt-20">
              <Link className="btn btn-outline" href="/#process">
                {t.processLink}
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="rules">
        <div className="container narrow">
          <h2>{t.rulesHeading}</h2>
          <p className="section-sub">{t.rulesSub}</p>
          <ul className="checklist">
            {t.rules.map((r) => (
              <li key={r.slice(0, 24)}>{r}</li>
            ))}
          </ul>
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
