import Image from 'next/image';
import Link from 'next/link';
import { site } from '../../lib/siteConfig';
import { PhoneIcon, WhatsAppIcon } from '../../components/Icons';
import bottlesPhoto from '../../public/homeo-bottles.jpg';
import globulesPhoto from '../../public/homeo-globules.jpg';

export const metadata = {
  title: 'होम्योपैथिक औषधियाँ: स्रोत, रूप और चयन की विधि',
  description:
    'होम्योपैथिक दवाएँ कैसे बनती हैं, किन रूपों में दी जाती हैं, और हर रोगी के लिए दवा का चयन कैसे होता है। दवा लेने के नियम और सावधानियाँ भी जानें।',
};

const sources = [
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
];

const forms = [
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
];

const rules = [
  'दवा हमेशा साफ़ मुँह में लें। दवा लेने से लगभग आधे घंटे पहले और बाद कुछ न खाएँ-पिएँ।',
  'गोलियों को हाथ में लेने के बजाय शीशी के ढक्कन या साफ़ काग़ज़ से सीधे मुँह में डालें।',
  'दवा के दौरान कपूर, तेज़ गंध वाले तेल-बाम आदि से दूर रहें, ये दवा का असर घटा सकते हैं।',
  'दवा को धूप और तेज़ गंध से दूर, ठंडी सूखी जगह पर रखें।',
  'चिकित्सक की बताई मात्रा और समय का पालन करें। अपने मन से दवा घटाएँ-बढ़ाएँ नहीं।',
  'पहले से चल रही कोई भी दवा (एलोपैथिक आदि) अपने मन से अचानक बंद न करें। चिकित्सक से परामर्श के बाद ही कोई बदलाव करें।',
];

export default function MedicinesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="crumbs">
            <Link href="/">मुखपृष्ठ</Link> <span aria-hidden="true">›</span>{' '}
            औषधियाँ
          </p>
          <h1>होम्योपैथिक औषधियाँ</h1>
          <p className="lead">
            हज़ारों प्रामाणिक औषधियाँ, अनेक रूप, और हर रोगी के लिए अलग चयन। जानिए
            होम्योपैथिक दवाएँ कैसे बनती हैं और कैसे दी जाती हैं।
          </p>
        </div>
      </section>

      <section className="section" id="range">
        <div className="container split">
          <div className="split-text">
            <h2>हर रोग के लिए अनेक औषधियाँ</h2>
            <p>
              होम्योपैथिक औषधि-भंडार (मटेरिया मेडिका) में हज़ारों प्रामाणिक
              औषधियाँ हैं। एड़ी के दर्द से लेकर वर्षों पुराने जटिल रोगों तक, हर
              प्रकार की समस्या के लिए अनेक औषधियाँ उपलब्ध हैं। हमारे क्लिनिक में
              भी सैकड़ों औषधियाँ रहती हैं, जिनमें से रोगी की स्थिति के अनुसार
              दवा चुनी जाती है।
            </p>
            <p>
              महत्वपूर्ण बात यह है कि एक ही रोग के दो रोगियों को अलग-अलग दवा दी
              जा सकती है, क्योंकि होम्योपैथी में दवा रोग के नाम से नहीं, बल्कि
              रोगी के संपूर्ण लक्षण, प्रकृति और स्वभाव को देखकर चुनी जाती है।
              इसीलिए हम वेबसाइट पर किसी रोग की "एक निश्चित दवा" नहीं बताते।
              सही दवा वही है, जो आपको देखकर, समझकर चुनी जाए।
            </p>
            <div className="note-box">
              कृपया बिना योग्य चिकित्सक के परामर्श के कोई भी दवा स्वयं न लें।
              सही दवा, सही शक्ति और सही मात्रा केवल परामर्श के बाद ही तय होती
              है।
            </div>
          </div>
          <figure className="split-photo">
            <Image
              src={bottlesPhoto}
              alt="होम्योपैथिक औषधियों की शीशियाँ"
              sizes="(min-width: 720px) 480px, 92vw"
            />
            <figcaption>क्लिनिक में सैकड़ों प्रामाणिक औषधियाँ उपलब्ध</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section-tint" id="sources">
        <div className="container">
          <h2>औषधियाँ बनती कहाँ से हैं?</h2>
          <p className="section-sub">
            सभी होम्योपैथिक औषधियाँ प्राकृतिक स्रोतों से, होम्योपैथिक
            फ़ार्माकोपिया के नियमों के अनुसार तैयार की जाती हैं:
          </p>
          <div className="cards">
            {sources.map((s) => (
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
          <h2>किन रूपों में दी जाती हैं?</h2>
          <div className="cards">
            {forms.map((f) => (
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
              alt="होम्योपैथिक दवा की मीठी गोलियाँ"
              sizes="(min-width: 720px) 480px, 92vw"
            />
          </figure>
          <div className="split-text">
            <h2>दवा का चयन कैसे होता है?</h2>
            <p>
              परामर्श के समय रोग के लक्षणों के साथ-साथ रोगी की दिनचर्या,
              खान-पान, नींद, स्वभाव और पुरानी बीमारियों को विस्तार से समझा जाता
              है। इसी संपूर्ण चित्र के आधार पर औषधि और उसकी शक्ति (पोटेंसी) का
              निर्णय किया जाता है।
            </p>
            <p>
              यही कारण है कि {site.experienceYears} वर्षों का अनुभव इतना
              महत्वपूर्ण है। हज़ारों रोगियों को देखने के बाद ही यह समझ विकसित
              होती है कि किस रोगी को कौन-सी दवा, किस शक्ति में और कब देनी है।
            </p>
            <p className="mt-20">
              <Link className="btn btn-outline" href="/#process">
                हमारी परामर्श-प्रक्रिया देखें →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="rules">
        <div className="container narrow">
          <h2>दवा लेने के नियम</h2>
          <p className="section-sub">
            होम्योपैथिक दवा का पूरा लाभ पाने के लिए इन बातों का ध्यान रखें:
          </p>
          <ul className="checklist">
            {rules.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>अपने रोग की सही दवा जानने के लिए परामर्श लें</h2>
            <p>
              {site.doctorName}, {site.address}
            </p>
          </div>
          <div className="hero-actions">
            <a className="btn btn-light" href={`tel:${site.phone}`}>
              <PhoneIcon /> कॉल करें
            </a>
            <a
              className="btn btn-light-outline"
              href={site.waHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
