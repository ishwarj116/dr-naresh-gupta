import Image from 'next/image';
import Navbar from '../components/Navbar';
import { site } from '../lib/siteConfig';
import doctorPhoto from '../public/doctor-clinic.jpg';
import bottlesPhoto from '../public/homeo-bottles.jpg';
import globulesPhoto from '../public/homeo-globules.jpg';

const specialties = [
  {
    icon: '🦶',
    title: 'एड़ी एवं तलवे का दर्द',
    desc: 'तलवे में सुई जैसी चुभन और तेज़ दर्द (प्लांटर फ़ेशिआइटिस / कैल्केनियल स्पर) — जिसमें सुबह ज़मीन पर पैर रखते ही असहनीय पीड़ा होती है, उसका सफल होम्योपैथिक उपचार।',
  },
  {
    icon: '🌿',
    title: 'मस्से (Warts)',
    desc: 'शरीर के किसी भी भाग पर होने वाले छोटे-बड़े मस्सों का बिना चीर-फाड़, दवाओं द्वारा सौम्य उपचार।',
  },
  {
    icon: '👣',
    title: 'गोखरू / कॉर्न',
    desc: 'पैर के तलवे में बनने वाली कठोर, फफोले जैसी गाँठ, जिससे चलने में दर्द होता है — उसका जड़ से होम्योपैथिक समाधान।',
  },
  {
    icon: '🌡️',
    title: 'तेज़ एवं बार-बार आने वाला बुखार',
    desc: 'तेज़ी से चढ़ने वाले तथा बार-बार लौटने वाले बुखार का कारण समझकर संतुलित होम्योपैथिक चिकित्सा।',
  },
  {
    icon: '🪷',
    title: 'बवासीर (Piles)',
    desc: 'खूनी एवं बादी बवासीर में बिना ऑपरेशन, होम्योपैथिक दवाओं द्वारा राहत दिलाने का लंबा अनुभव।',
  },
  {
    icon: '🧠',
    title: 'मिर्गी के दौरे (Seizures)',
    desc: 'मिर्गी के दौरों से पीड़ित रोगियों की दीर्घकालिक देखभाल का अनुभव — नियमित परामर्श एवं सतत होम्योपैथिक चिकित्सा के साथ।',
  },
  {
    icon: '🦴',
    title: 'सर्वाइकल (गर्दन का दर्द)',
    desc: 'सर्वाइकल स्पॉन्डिलाइटिस — गर्दन की जकड़न, दर्द तथा हाथों में झनझनाहट का सौम्य होम्योपैथिक उपचार।',
  },
  {
    icon: '💧',
    title: 'हाइड्रोसील (Hydrocele)',
    desc: 'अंडकोष में पानी भरने की समस्या (हाइड्रोसील) का बिना ऑपरेशन, होम्योपैथिक दवाओं से उपचार करने का लंबा अनुभव।',
  },
  {
    icon: '👂',
    title: 'कान बहना (Ear Discharge)',
    desc: 'बच्चों और बड़ों में कान से पानी या मवाद बहने की पुरानी शिकायत का जड़ से होम्योपैथिक उपचार।',
  },
  {
    icon: '🩺',
    title: 'जटिल एवं पुरानी बीमारियाँ',
    desc: 'वर्षों से चली आ रही जटिल, गंभीर एवं पुरानी बीमारियों के प्रबंधन का पाँच दशकों से अधिक का गहन अनुभव।',
  },
  {
    icon: '🤝',
    title: 'परिवार की संपूर्ण चिकित्सा',
    desc: 'बच्चों से लेकर बुज़ुर्गों तक — हर आयु के रोगियों के लिए सुरक्षित और सौम्य होम्योपैथिक परामर्श।',
  },
];

const processSteps = [
  {
    num: '१',
    title: 'विस्तृत बातचीत',
    desc: 'रोग के लक्षण, पुरानी बीमारियाँ, खान-पान और दिनचर्या — सब कुछ आराम से, विस्तार में सुना और समझा जाता है।',
  },
  {
    num: '२',
    title: 'मूल कारण की पहचान',
    desc: 'केवल ऊपरी लक्षणों को नहीं, रोग की जड़ को समझने का प्रयास किया जाता है, ताकि उपचार स्थायी हो।',
  },
  {
    num: '३',
    title: 'व्यक्तिगत दवा का चयन',
    desc: 'हर रोगी की प्रकृति के अनुसार दवा और उसकी शक्ति (पोटेंसी) का चुनाव किया जाता है — एक ही रोग में भी अलग-अलग रोगियों को अलग दवा।',
  },
  {
    num: '४',
    title: 'नियमित फ़ॉलो-अप',
    desc: 'दवा के प्रभाव के अनुसार समय-समय पर परामर्श और आवश्यकता होने पर दवा में बदलाव किया जाता है।',
  },
];

const whyPoints = [
  {
    title: 'सौम्य एवं सुरक्षित',
    desc: 'होम्योपैथिक दवाएँ मीठी गोलियों के रूप में दी जाती हैं — बच्चे और बुज़ुर्ग भी सहजता से ले सकते हैं।',
  },
  {
    title: 'जड़ से उपचार का प्रयास',
    desc: 'केवल लक्षण दबाने के बजाय रोग के मूल कारण को समझकर चिकित्सा की जाती है।',
  },
  {
    title: 'हर रोगी के लिए अलग दवा',
    desc: 'रोगी का स्वभाव, दिनचर्या और पूरी जीवनशैली समझकर ही दवा का चयन किया जाता है।',
  },
];

const faqs = [
  {
    q: 'क्या पहले से समय (अपॉइंटमेंट) लेना ज़रूरी है?',
    a: 'नहीं, आप क्लिनिक के समय में सीधे आ सकते हैं। दूर से आने वाले रोगी फ़ोन या WhatsApp पर पहले जानकारी ले लें, तो सुविधा रहेगी।',
  },
  {
    q: 'क्या होम्योपैथिक दवाओं के दुष्प्रभाव (साइड इफ़ेक्ट) होते हैं?',
    a: 'योग्य चिकित्सक के परामर्श से ली गई होम्योपैथिक दवाएँ अत्यंत सौम्य होती हैं और बच्चों से लेकर बुज़ुर्गों तक के लिए सुरक्षित मानी जाती हैं।',
  },
  {
    q: 'क्या पुरानी जाँच रिपोर्ट साथ लानी चाहिए?',
    a: 'हाँ, यदि आपने पहले कोई जाँच करवाई है या कोई दवाएँ चल रही हैं, तो उनकी रिपोर्ट और सूची अवश्य साथ लाएँ। इससे रोग को समझने में सहायता मिलती है।',
  },
  {
    q: 'असर दिखने में कितना समय लगता है?',
    a: 'यह रोग की प्रकृति पर निर्भर करता है। नई शिकायतों में असर प्रायः जल्दी दिखता है, जबकि वर्षों पुराने रोगों में धैर्य के साथ नियमित दवा लेना आवश्यक होता है।',
  },
];

export default function Home() {
  return (
    <div id="top">
      <Navbar />

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-text">
              <p className="eyebrow">
                पिछले {site.experienceYears} वर्षों से आपकी सेवा में
              </p>
              <h1>
                अनुभव, विश्वास और सौम्य चिकित्सा —
                <br />
                <span className="accent">{site.doctorName}</span>
              </h1>
              <p className="lead">
                आदर्श कॉलोनी, रामपुर में {site.experienceYears} वर्षों से
                होम्योपैथिक चिकित्सा द्वारा हज़ारों रोगियों को स्वास्थ्य लाभ। एड़ी व
                तलवे का दर्द, मस्से, गोखरू, बवासीर, बुखार तथा जटिल एवं पुरानी
                बीमारियों का सौम्य उपचार।
              </p>
              <div className="hero-actions">
                <a className="btn btn-solid" href={`tel:${site.phone}`}>
                  📞 अभी संपर्क करें
                </a>
                <a
                  className="btn btn-outline"
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 WhatsApp पर पूछें
                </a>
              </div>
            </div>
            <figure className="hero-photo">
              <Image
                src={doctorPhoto}
                alt={`${site.doctorName} अपने क्लिनिक में रोगियों को परामर्श देते हुए`}
                priority
                sizes="(min-width: 720px) 340px, 80vw"
              />
              <figcaption>क्लिनिक में रोगियों को परामर्श देते हुए</figcaption>
            </figure>
          </div>
        </section>

        <section className="stats">
          <div className="container stats-grid">
            <div className="stat">
              <p className="stat-num">{site.experienceYears}+</p>
              <p className="stat-label">वर्षों का अनुभव</p>
            </div>
            <div className="stat">
              <p className="stat-num">हज़ारों</p>
              <p className="stat-label">संतुष्ट रोगी</p>
            </div>
            <div className="stat">
              <p className="stat-num">3</p>
              <p className="stat-label">पीढ़ियों का विश्वास</p>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container narrow">
            <h2>परिचय</h2>
            <p>
              {site.doctorName} विगत {site.experienceYears} वर्षों से आदर्श
              कॉलोनी, रामपुर में होम्योपैथिक चिकित्सा के माध्यम से रोगियों की सेवा
              कर रहे हैं। पाँच दशकों से भी लंबी इस यात्रा में उन्होंने साधारण
              सर्दी-बुखार से लेकर वर्षों पुरानी जटिल बीमारियों तक, हर प्रकार के
              रोगियों का उपचार किया है।
            </p>
            <p>
              उनकी पहचान किसी विज्ञापन से नहीं, बल्कि स्वस्थ हुए रोगियों के
              विश्वास से बनी है — आज भी उनके पास आने वाले अधिकांश रोगी पुराने
              रोगियों की सलाह पर ही आते हैं। यही उनकी चिकित्सा की सबसे बड़ी पहचान
              है।
            </p>
          </div>
        </section>

        <section className="section section-tint" id="homeopathy">
          <div className="container split">
            <div className="split-text">
              <h2>होम्योपैथी क्या है?</h2>
              <p>
                होम्योपैथी चिकित्सा की वह पद्धति है, जिसकी खोज जर्मन चिकित्सक डॉ.
                सैमुअल हानेमान ने लगभग दो सौ वर्ष पूर्व की थी। यह इस सिद्धांत पर
                आधारित है कि रोग के लक्षणों को दबाने के बजाय शरीर की अपनी
                रोग-प्रतिरोधक क्षमता को जगाकर रोग को जड़ से ठीक करने का प्रयास
                किया जाए।
              </p>
              <ul className="checklist">
                <li>प्राकृतिक स्रोतों से बनी अत्यंत सौम्य दवाएँ</li>
                <li>मीठी गोलियों के रूप में — बच्चे भी आसानी से लेते हैं</li>
                <li>भारत सरकार के आयुष मंत्रालय द्वारा मान्यता प्राप्त पद्धति</li>
                <li>पुराने एवं बार-बार लौटने वाले रोगों में विशेष उपयोगी</li>
              </ul>
            </div>
            <figure className="split-photo">
              <Image
                src={bottlesPhoto}
                alt="होम्योपैथिक दवाओं की शीशियाँ"
                sizes="(min-width: 720px) 480px, 92vw"
              />
            </figure>
          </div>
        </section>

        <section className="section" id="specialties">
          <div className="container">
            <h2>किन रोगों का उपचार</h2>
            <p className="section-sub">
              जिन रोगों के उपचार का डॉक्टर साहब को विशेष अनुभव है:
            </p>
            <div className="cards">
              {specialties.map((s) => (
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

        <section className="section section-tint" id="process">
          <div className="container">
            <h2>चिकित्सा-पद्धति — परामर्श कैसे होता है</h2>
            <div className="process-grid">
              <ol className="process-steps">
                {processSteps.map((p) => (
                  <li key={p.num}>
                    <span className="step-num" aria-hidden="true">
                      {p.num}
                    </span>
                    <div>
                      <h3>{p.title}</h3>
                      <p>{p.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <figure className="process-photo">
                <Image
                  src={globulesPhoto}
                  alt="होम्योपैथिक दवा की मीठी गोलियाँ"
                  sizes="(min-width: 900px) 380px, 92vw"
                />
                <figcaption>
                  होम्योपैथिक दवाएँ — मीठी गोलियों के रूप में
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section" id="why">
          <div className="container">
            <h2>होम्योपैथी ही क्यों?</h2>
            <div className="why-grid">
              {whyPoints.map((w) => (
                <div className="why-item" key={w.title}>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-tint" id="faq">
          <div className="container narrow">
            <h2>प्रश्न-उत्तर</h2>
            <div className="faq-list">
              {faqs.map((f) => (
                <details className="faq-item" key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container contact-grid">
            <div>
              <h2>क्लिनिक का समय</h2>
              <table className="timings">
                <tbody>
                  {site.timings.map((t) => (
                    <tr key={t.days + t.hours}>
                      <td>{t.days}</td>
                      <td>{t.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <h2>संपर्क करें</h2>
              <p className="contact-line">
                📍 {site.address}
                <br />
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Google Maps पर रास्ता देखें →
                </a>
              </p>
              <p className="contact-line">
                📞 <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
              </p>
              <div className="hero-actions">
                <a className="btn btn-solid" href={`tel:${site.phone}`}>
                  📞 कॉल करें
                </a>
                <a
                  className="btn btn-outline"
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <nav className="footer-links" aria-label="फ़ुटर मेन्यू">
            <a href="#about">परिचय</a>
            <a href="#specialties">रोग व उपचार</a>
            <a href="#process">चिकित्सा-पद्धति</a>
            <a href="#faq">प्रश्न-उत्तर</a>
            <a href="#contact">संपर्क</a>
          </nav>
          <p>
            © {new Date().getFullYear()} {site.clinicName} — {site.address}
          </p>
          <p className="disclaimer">
            यह वेबसाइट केवल सामान्य जानकारी हेतु है। किसी भी रोग की चिकित्सा के
            लिए कृपया चिकित्सक से व्यक्तिगत परामर्श अवश्य लें।
          </p>
        </div>
      </footer>
    </div>
  );
}
