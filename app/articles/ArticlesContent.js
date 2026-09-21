'use client';

import Link from 'next/link';
import { site } from '../../lib/siteConfig';
import { useLang } from '../../lib/i18n';
import { PhoneIcon, WhatsAppIcon } from '../../components/Icons';

const T = {
  hi: {
    crumbHome: 'मुखपृष्ठ',
    crumbHere: 'स्वास्थ्य लेख',
    h1: 'स्वास्थ्य लेख',
    lead: 'सामान्य समस्याओं को सरल भाषा में समझिए, होम्योपैथिक दृष्टिकोण के साथ। ये लेख केवल जानकारी हेतु हैं; उपचार के लिए परामर्श अवश्य लें।',
    readCta: 'इस समस्या के लिए परामर्श लें →',
    articles: [
      {
        id: 'heel-pain',
        icon: '🦶',
        title: 'एड़ी और तलवे का दर्द: सुबह का पहला क़दम इतना कठिन क्यों?',
        sections: [
          {
            h: 'यह होता क्या है?',
            p: 'तलवे में एड़ी से पंजे तक एक मज़बूत पट्टी (प्लांटर फ़ेशिया) होती है। बार-बार खिंचाव से उसमें सूजन आ जाती है, जिसे प्लांटर फ़ेशिआइटिस कहते हैं। कई बार एड़ी की हड्डी में काँटे जैसी बढ़त (कैल्केनियल स्पर) भी बन जाती है। सुबह उठकर ज़मीन पर पैर रखते ही सुई चुभने जैसा तेज़ दर्द इसकी सबसे बड़ी पहचान है।',
          },
          {
            h: 'किन्हें ज़्यादा होता है?',
            p: 'देर तक खड़े रहकर काम करने वालों, अधिक वज़न वाले व्यक्तियों, सख़्त चप्पल-जूते पहनने वालों और 40 वर्ष से अधिक आयु के लोगों में यह समस्या अधिक देखी जाती है।',
          },
          {
            h: 'होम्योपैथिक दृष्टिकोण',
            p: 'होम्योपैथी में दर्द की प्रकृति (चुभन, जलन, किस समय बढ़ता है), रोगी की दिनचर्या और शरीर की बनावट के अनुसार दवा चुनी जाती है। डॉक्टर साहब को इस समस्या के उपचार का विशेष रूप से लंबा अनुभव है; यह उनके क्लिनिक में सबसे अधिक आने वाली शिकायतों में से एक है।',
          },
          {
            h: 'घर पर क्या ध्यान रखें?',
            p: 'नरम तलवे वाले जूते पहनें, नंगे पाँव सख़्त फ़र्श पर चलने से बचें, पिंडली व तलवे की हल्की स्ट्रेचिंग करें और वज़न नियंत्रित रखें। दर्द लगातार बना रहे तो परामर्श में देर न करें।',
          },
        ],
      },
      {
        id: 'piles',
        icon: '🪷',
        title: 'बवासीर: जिस तकलीफ़ को लोग छिपाते हैं, उसे समझिए',
        sections: [
          {
            h: 'यह होता क्या है?',
            p: 'गुदा-मार्ग की रक्त-वाहिकाएँ फूलकर मस्सों का रूप ले लेती हैं। खूनी बवासीर में मल त्याग के समय रक्त आता है; बादी बवासीर में जलन, खुजली और दर्द अधिक रहता है। लंबे समय तक क़ब्ज़ इसकी सबसे बड़ी जड़ है।',
          },
          {
            h: 'सबसे बड़ी भूल',
            p: 'संकोच के कारण लोग वर्षों तक इसे छिपाते हैं और तकलीफ़ बढ़ती जाती है। याद रखिए, यह अत्यंत सामान्य समस्या है और शुरुआती अवस्था में इसका प्रबंधन कहीं आसान होता है।',
          },
          {
            h: 'होम्योपैथिक दृष्टिकोण',
            p: 'होम्योपैथी में बिना ऑपरेशन, दवाओं द्वारा राहत का प्रयास किया जाता है। साथ ही क़ब्ज़ जैसी जड़ की समस्या पर भी काम होता है, ताकि शिकायत बार-बार न लौटे। डॉक्टर साहब के पास इसके उपचार का दशकों का अनुभव है।',
          },
          {
            h: 'घर पर क्या ध्यान रखें?',
            p: 'भोजन में रेशा (हरी सब्ज़ियाँ, फल, साबुत अनाज) बढ़ाएँ, पानी खूब पिएँ, मल त्याग के समय ज़ोर लगाने से बचें और मिर्च-मसाले कम करें। रक्त अधिक आए या गाँठ बहुत बढ़ जाए तो तुरंत चिकित्सक से मिलें।',
          },
        ],
      },
      {
        id: 'skin',
        icon: '🌼',
        title: 'चर्म रोग और एलर्जी: बार-बार लौटती खुजली का असली कारण',
        sections: [
          {
            h: 'समस्या की प्रकृति',
            p: 'दाग-धब्बे, छाजन (एक्ज़िमा), खाज-खुजली और पित्ती जैसी शिकायतें अक्सर मौसम, धूल, या खान-पान से भड़कती हैं। मरहम लगाने से ऊपर से आराम तो मिलता है, पर कई बार शिकायत कुछ समय बाद फिर लौट आती है।',
          },
          {
            h: 'बार-बार क्यों लौटती है?',
            p: 'त्वचा शरीर के भीतर की स्थिति का आईना है। जब तक भीतर की प्रवृत्ति (एलर्जी की प्रकृति, पाचन, तनाव) पर काम न हो, केवल ऊपरी उपचार से बात प्रायः अधूरी रहती है।',
          },
          {
            h: 'होम्योपैथिक दृष्टिकोण',
            p: 'होम्योपैथी में त्वचा की शिकायत को दबाने के बजाय रोगी की पूरी प्रकृति समझकर मूल कारण पर केंद्रित दवा दी जाती है। पुराने से पुराने मामलों में भी धैर्य के साथ नियमित उपचार से अच्छे परिणाम देखे जाते हैं; परिणाम रोगी की स्थिति के अनुसार भिन्न हो सकते हैं।',
          },
          {
            h: 'घर पर क्या ध्यान रखें?',
            p: 'जिस चीज़ से शिकायत भड़कती है उसे पहचानकर उससे बचें, त्वचा को बहुत गर्म पानी से न धोएँ, खुजलाने से बचें और कपड़े नरम-सूती रखें। शिकायत फैलती जाए तो परामर्श लें।',
          },
        ],
      },
    ],
  },
  en: {
    crumbHome: 'Home',
    crumbHere: 'Health Articles',
    h1: 'Health Articles',
    lead: 'Common health problems explained in simple language, with the homeopathic perspective. These articles are for information only; please consult for treatment.',
    readCta: 'Consult for this problem →',
    articles: [
      {
        id: 'heel-pain',
        icon: '🦶',
        title: 'Heel & Sole Pain: Why Is the First Step of the Morning So Hard?',
        sections: [
          {
            h: 'What is it?',
            p: 'A strong band of tissue (the plantar fascia) runs under the sole from heel to toes. Repeated strain inflames it, a condition called plantar fasciitis. Sometimes a thorn-like bony growth (calcaneal spur) also forms on the heel bone. Its signature sign: needle-like, stabbing pain the moment you step down after waking.',
          },
          {
            h: 'Who gets it more?',
            p: 'People who stand for long hours, those who are overweight, wearers of hard-soled footwear, and people above 40 see this problem more often.',
          },
          {
            h: 'The homeopathic view',
            p: 'In homeopathy the medicine is chosen by the nature of the pain (stabbing, burning, when it worsens), the patient\'s routine and constitution. Dr. Gupta has particularly long experience with this problem; it is among the most common complaints at his clinic.',
          },
          {
            h: 'What to do at home',
            p: 'Wear soft-soled footwear, avoid walking barefoot on hard floors, do gentle calf and sole stretches, and keep weight in check. If the pain persists, do not delay a consultation.',
          },
        ],
      },
      {
        id: 'piles',
        icon: '🪷',
        title: 'Piles: Understanding the Problem People Hide',
        sections: [
          {
            h: 'What is it?',
            p: 'Blood vessels of the anal passage swell into lumps. In bleeding piles, blood appears during bowel movements; in non-bleeding ("badi") piles, burning, itching and pain dominate. Long-standing constipation is its biggest root.',
          },
          {
            h: 'The biggest mistake',
            p: 'Out of hesitation, people hide it for years while the trouble grows. Remember: it is an extremely common problem, and managing it early is far easier.',
          },
          {
            h: 'The homeopathic view',
            p: 'Homeopathy attempts relief with medicines, without operation, while also working on root issues like constipation so the complaint does not keep returning. Dr. Gupta has decades of experience treating it.',
          },
          {
            h: 'What to do at home',
            p: 'Increase fibre (green vegetables, fruit, whole grains), drink plenty of water, avoid straining, and cut down chillies and spices. If bleeding is heavy or a lump grows quickly, see a physician at once.',
          },
        ],
      },
      {
        id: 'skin',
        icon: '🌼',
        title: 'Skin Diseases & Allergy: The Real Reason the Itch Keeps Returning',
        sections: [
          {
            h: 'The nature of the problem',
            p: 'Spots, eczema, itching and hives often flare with weather, dust or food. Ointments soothe the surface, yet the complaint frequently returns after some time.',
          },
          {
            h: 'Why does it keep coming back?',
            p: 'The skin mirrors what is happening inside the body. Until the inner tendency (allergic disposition, digestion, stress) is addressed, surface-only treatment often remains incomplete.',
          },
          {
            h: 'The homeopathic view',
            p: 'Rather than suppressing the skin complaint, homeopathy studies the patient\'s whole constitution and gives medicine focused on the underlying cause. Even in old cases, patient and regular treatment shows good outcomes; results vary from person to person.',
          },
          {
            h: 'What to do at home',
            p: 'Identify and avoid your triggers, avoid very hot water on the skin, resist scratching, and wear soft cotton clothing. If the complaint spreads, take a consultation.',
          },
        ],
      },
    ],
  },
};

export default function ArticlesContent() {
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

      {t.articles.map((a, i) => (
        <section
          className={i % 2 ? 'section section-tint' : 'section'}
          id={a.id}
          key={a.id}
        >
          <div className="container narrow">
            <article className="health-article">
              <h2>
                <span aria-hidden="true">{a.icon}</span> {a.title}
              </h2>
              {a.sections.map((sec) => (
                <div key={sec.h}>
                  <h3>{sec.h}</h3>
                  <p>{sec.p}</p>
                </div>
              ))}
              <p className="mt-20">
                <a className="btn btn-outline" href={`tel:${site.phone}`}>
                  <PhoneIcon /> {t.readCta}
                </a>
              </p>
            </article>
          </div>
        </section>
      ))}

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>
              {lang === 'hi'
                ? 'अपनी समस्या के बारे में बात करें'
                : 'Talk to us about your problem'}
            </h2>
            <p>{site.phoneDisplay}</p>
          </div>
          <div className="hero-actions">
            <a className="btn btn-light" href={`tel:${site.phone}`}>
              <PhoneIcon /> {lang === 'hi' ? 'कॉल करें' : 'Call Now'}
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
