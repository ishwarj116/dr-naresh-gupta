import Image from 'next/image';
import Link from 'next/link';
import { site } from '../../lib/siteConfig';
import { PhoneIcon, WhatsAppIcon } from '../../components/Icons';
import hahnemannPortrait from '../../public/hahnemann-portrait.jpg';
import organonTitle from '../../public/organon-title.jpg';
import globulesPhoto from '../../public/homeo-flower.jpg';

export const metadata = {
  title: 'होम्योपैथी क्या है? इतिहास, सिद्धांत और डॉ. सैमुअल हानेमान',
  description:
    'होम्योपैथी का संपूर्ण परिचय: डॉ. सैमुअल हानेमान का जीवन, उनके ग्रंथ (ऑर्गेनन ऑफ़ मेडिसिन, मटेरिया मेडिका प्यूरा, क्रॉनिक डिज़ीज़ेज़), होम्योपैथी के मूल सिद्धांत और भारत में इसकी मान्यता।',
};

const principles = [
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
];

const books = [
  {
    year: '1810',
    title: 'ऑर्गेनन ऑफ़ मेडिसिन',
    original: 'Organon der Heilkunst',
    desc: 'होम्योपैथी का मूल ग्रंथ, जिसमें डॉ. हानेमान ने चिकित्सा के संपूर्ण सिद्धांत सूत्रबद्ध किए। उनके जीवनकाल और उसके बाद कुल छह संस्करण प्रकाशित हुए। आज भी विश्व भर के होम्योपैथिक कॉलेजों में यही ग्रंथ पढ़ाया जाता है।',
  },
  {
    year: '1811–1821',
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
];

const indiaFacts = [
  'भारत में होम्योपैथी का आगमन 19वीं शताब्दी के आरंभ में हुआ। डॉ. जॉन मार्टिन होनिगबर्गर ने महाराजा रणजीत सिंह का उपचार होम्योपैथी से किया था।',
  'आज भारत विश्व में होम्योपैथी का सबसे बड़ा केंद्र है, जहाँ सैकड़ों होम्योपैथिक मेडिकल कॉलेज और लाखों पंजीकृत चिकित्सक हैं।',
  'भारत सरकार के आयुष मंत्रालय के अंतर्गत होम्योपैथी एक मान्यता प्राप्त चिकित्सा पद्धति है।',
  'राष्ट्रीय होम्योपैथी आयोग (NCH) शिक्षा और पंजीकरण का नियमन करता है, तथा केंद्रीय होम्योपैथी अनुसंधान परिषद (CCRH) शोध कार्य करती है।',
  'डॉ. हानेमान के जन्मदिवस 10 अप्रैल को प्रतिवर्ष विश्व होम्योपैथी दिवस मनाया जाता है।',
];

const myths = [
  {
    myth: 'होम्योपैथी बहुत धीमा असर करती है।',
    fact: 'नई शिकायतों (बुखार, चोट, सर्दी) में होम्योपैथिक दवाएँ प्रायः तेज़ी से काम करती हैं। वर्षों पुराने रोगों में समय लगना स्वाभाविक है, क्योंकि उपचार जड़ से किया जाता है।',
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
];

export default function HomeopathyPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="crumbs">
            <Link href="/">मुखपृष्ठ</Link> <span aria-hidden="true">›</span>{' '}
            होम्योपैथी
          </p>
          <h1>होम्योपैथी: एक संपूर्ण परिचय</h1>
          <p className="lead">
            दो सौ वर्षों से अधिक पुरानी, विश्व की प्रमुख सौम्य चिकित्सा
            पद्धतियों में से एक। इसका इतिहास, सिद्धांत और भारत में स्थान।
          </p>
        </div>
      </section>

      <section className="section" id="intro">
        <div className="container narrow">
          <h2>होम्योपैथी क्या है?</h2>
          <p>
            होम्योपैथी चिकित्सा की वह वैकल्पिक पद्धति है, जिसमें रोग के लक्षणों
            को दबाने के बजाय शरीर की अपनी रोग-प्रतिरोधक क्षमता (जीवनी शक्ति) को
            जाग्रत कर रोग को जड़ से दूर करने का प्रयास किया जाता है। दवाएँ
            वनस्पतियों, खनिजों तथा अन्य प्राकृतिक स्रोतों से अत्यंत सूक्ष्म
            मात्रा में तैयार की जाती हैं, इसीलिए ये सौम्य होती हैं और मीठी
            गोलियों के रूप में बच्चों से लेकर बुज़ुर्गों तक को आसानी से दी जा
            सकती हैं।
          </p>
          <p>
            "होम्योपैथी" शब्द ग्रीक भाषा के <em>homoios</em> (समान) और{' '}
            <em>pathos</em> (पीड़ा) से बना है, अर्थात "समान से समान की
            चिकित्सा"।
          </p>
        </div>
      </section>

      <section className="section section-tint" id="hahnemann">
        <div className="container split">
          <figure className="split-photo portrait">
            <Image
              src={hahnemannPortrait}
              alt="डॉ. सैमुअल हानेमान का 1838 में बना तैलचित्र"
              sizes="(min-width: 720px) 420px, 88vw"
            />
            <figcaption>
              डॉ. सैमुअल हानेमान (1755-1843), 1838 में पेरिस में बना तैलचित्र
            </figcaption>
          </figure>
          <div className="split-text">
            <h2>संस्थापक: डॉ. सैमुअल हानेमान</h2>
            <p>
              डॉ. क्रिश्चियन फ्रेडरिक सैमुअल हानेमान का जन्म 10 अप्रैल 1755 को
              जर्मनी के माइसन नगर में हुआ। वे असाधारण प्रतिभा के धनी थे: कई
              भाषाओं के ज्ञाता, रसायनशास्त्री और चिकित्सक। सन् 1779 में उन्होंने
              चिकित्सा की उपाधि प्राप्त की, परंतु उस युग की कठोर चिकित्सा
              विधियों (रक्त निकालना, विषैली औषधियाँ) से असंतुष्ट होकर उन्होंने
              चिकित्सा छोड़ अनुवाद कार्य अपना लिया।
            </p>
            <p>
              सन् 1790 में एक पुस्तक का अनुवाद करते समय उन्होंने सिनकोना
              (कुनैन) की छाल का स्वयं पर प्रयोग किया और पाया कि स्वस्थ शरीर में
              वह मलेरिया जैसे लक्षण उत्पन्न करती है। यहीं से "समान से समान की
              चिकित्सा" के सिद्धांत का जन्म हुआ। वर्षों के परीक्षणों के बाद सन्
              1810 में उन्होंने अपना प्रसिद्ध ग्रंथ <em>ऑर्गेनन</em> प्रकाशित
              किया और होम्योपैथी को एक व्यवस्थित चिकित्सा पद्धति का रूप दिया।
            </p>
            <p>
              जीवन के अंतिम वर्ष उन्होंने पेरिस में बिताए, जहाँ 2 जुलाई 1843 को
              88 वर्ष की आयु में उनका निधन हुआ। आज उनके जन्मदिवस को विश्व
              होम्योपैथी दिवस के रूप में मनाया जाता है।
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="principles">
        <div className="container">
          <h2>होम्योपैथी के मूल सिद्धांत</h2>
          <div className="cards">
            {principles.map((p) => (
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
          <h2>डॉ. हानेमान के प्रमुख ग्रंथ</h2>
          <div className="books-grid">
            <div className="books-list">
              {books.map((b) => (
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
                alt="ऑर्गेनन ऑफ़ मेडिसिन के अंग्रेज़ी संस्करण का मुखपृष्ठ"
                sizes="(min-width: 900px) 420px, 92vw"
              />
              <figcaption>
                "ऑर्गेनन" के अंग्रेज़ी संस्करण का मुखपृष्ठ
                <span className="credit">
                  चित्र: Wellcome Collection (CC BY 4.0)
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section" id="india">
        <div className="container split">
          <div className="split-text">
            <h2>होम्योपैथी भारत में</h2>
            <ul className="checklist">
              {indiaFacts.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <figure className="split-photo">
            <Image
              src={globulesPhoto}
              alt="होम्योपैथिक दवा की गोलियाँ और पुष्प"
              sizes="(min-width: 720px) 480px, 92vw"
            />
          </figure>
        </div>
      </section>

      <section className="section section-tint" id="myths">
        <div className="container narrow">
          <h2>मिथक बनाम सच</h2>
          <div className="myth-list">
            {myths.map((m) => (
              <div className="myth-card" key={m.myth}>
                <p className="myth-line">
                  <span className="tag tag-myth">मिथक</span> {m.myth}
                </p>
                <p className="fact-line">
                  <span className="tag tag-fact">सच</span> {m.fact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>क्या होम्योपैथी आपके रोग में सहायक हो सकती है?</h2>
            <p>
              {site.experienceYears} वर्षों के अनुभवी चिकित्सक से परामर्श लें।
              {' '}{site.address}
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
