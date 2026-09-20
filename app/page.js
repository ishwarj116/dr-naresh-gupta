import Image from 'next/image';
import { site } from '../lib/siteConfig';
import doctorPhoto from '../public/doctor-clinic.jpg';

const specialties = [
  {
    icon: '🦶',
    title: 'एड़ी एवं तलवे का दर्द',
    desc: 'तलवे में सुई जैसी चुभन और तेज़ दर्द (प्लांटर फेशिआइटिस / कैल्केनियल स्पर) — जिसमें सुबह ज़मीन पर पैर रखते ही असहनीय पीड़ा होती है, उसका सफल होम्योपैथिक उपचार।',
  },
  {
    icon: '🌿',
    title: 'मस्से (Warts)',
    desc: 'शरीर के किसी भी भाग पर होने वाले छोटे-बड़े मस्सों का बिना चीर-फाड़ के, दवाओं द्वारा सौम्य उपचार।',
  },
  {
    icon: '👣',
    title: 'गोखरू / कॉर्न',
    desc: 'पैर के तलवे में बनने वाली कठोर, फफोले जैसी गांठ जिससे चलने में दर्द होता है — उसका जड़ से होम्योपैथिक समाधान।',
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
    desc: 'मिर्गी के दौरों से पीड़ित रोगियों के दीर्घकालिक प्रबंधन का अनुभव — नियमित परामर्श और सतत होम्योपैथिक चिकित्सा के साथ।',
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

export default function Home() {
  return (
    <>
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">
            <span className="brand-mark">ॐ</span>
            <div>
              <p className="brand-name">{site.doctorName}</p>
              <p className="brand-sub">होम्योपैथिक चिकित्सक</p>
            </div>
          </div>
          <a className="btn btn-solid topbar-call" href={`tel:${site.phone}`}>
            📞 कॉल करें
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-text">
              <p className="eyebrow">पिछले {site.experienceYears} वर्षों से आपकी सेवा में</p>
              <h1>
                अनुभव, विश्वास और सौम्य चिकित्सा —
                <br />
                <span className="accent">{site.doctorName}</span>
              </h1>
              <p className="lead">
                आदर्श कॉलोनी, रामपुर में {site.experienceYears} वर्षों से होम्योपैथिक
                चिकित्सा द्वारा हज़ारों रोगियों को स्वास्थ्य लाभ। एड़ी व तलवे का दर्द,
                मस्से, गोखरू, बुखार तथा जटिल एवं पुरानी बीमारियों का सौम्य उपचार।
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
                sizes="(min-width: 720px) 300px, 75vw"
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
              {site.doctorName} विगत {site.experienceYears} वर्षों से आदर्श कॉलोनी,
              रामपुर में होम्योपैथिक चिकित्सा के माध्यम से रोगियों की सेवा कर रहे हैं।
              पाँच दशकों से भी लंबी इस यात्रा में उन्होंने साधारण सर्दी-बुखार से लेकर
              वर्षों पुरानी जटिल बीमारियों तक, हर प्रकार के रोगियों का उपचार किया है।
            </p>
            <p>
              उनकी पहचान किसी विज्ञापन से नहीं, बल्कि स्वस्थ हुए रोगियों के विश्वास से
              बनी है — आज भी उनके पास आने वाले अधिकांश रोगी पुराने रोगियों की सलाह पर ही
              आते हैं। यही उनकी चिकित्सा की सबसे बड़ी पहचान है।
            </p>
          </div>
        </section>

        <section className="section section-tint" id="specialties">
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

        <section className="section section-tint" id="contact">
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
          <p>
            © {new Date().getFullYear()} {site.clinicName} — {site.address}
          </p>
          <p className="disclaimer">
            यह वेबसाइट केवल सामान्य जानकारी हेतु है। किसी भी रोग की चिकित्सा के लिए
            कृपया चिकित्सक से व्यक्तिगत परामर्श अवश्य लें।
          </p>
        </div>
      </footer>
    </>
  );
}
