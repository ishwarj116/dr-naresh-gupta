'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { PhoneIcon, WhatsAppIcon } from '../components/Icons';
import { site } from '../lib/siteConfig';
import { useLang } from '../lib/i18n';
import doctorPhoto from '../public/doctor-clinic.jpg';
import doctorPortrait from '../public/doctor-portrait.jpg';
import doctorPoster from '../public/doctor-poster.jpg';
import bottlesPhoto from '../public/homeo-bottles.jpg';
import globulesPhoto from '../public/homeo-globules.jpg';

const Hero3D = dynamic(() => import('../components/Hero3D'), { ssr: false });

// परिचय सेक्शन की सजावट: तैरती सफ़ेद गोलियाँ (होम्योपैथिक गोलियों जैसी) + चमकते सितारे
const globules = [
  { left: '4%', top: '12%', size: 18, dur: '7s', delay: '0s' },
  { left: '10%', top: '68%', size: 12, dur: '9s', delay: '1.2s' },
  { left: '20%', top: '30%', size: 9, dur: '8s', delay: '0.6s' },
  { left: '46%', top: '8%', size: 14, dur: '10s', delay: '2s' },
  { left: '60%', top: '80%', size: 16, dur: '8.5s', delay: '0.3s' },
  { left: '78%', top: '16%', size: 11, dur: '7.5s', delay: '1.6s' },
  { left: '90%', top: '55%', size: 20, dur: '11s', delay: '0.9s' },
  { left: '94%', top: '86%', size: 10, dur: '9.5s', delay: '2.4s' },
];

const sparkles = [
  { left: '7%', top: '40%', size: 15, dur: '3.6s', delay: '0s' },
  { left: '28%', top: '78%', size: 11, dur: '4.4s', delay: '1s' },
  { left: '52%', top: '90%', size: 13, dur: '3.9s', delay: '0.5s' },
  { left: '70%', top: '6%', size: 12, dur: '4.8s', delay: '1.8s' },
  { left: '86%', top: '32%', size: 16, dur: '4.1s', delay: '0.8s' },
  { left: '96%', top: '10%', size: 10, dur: '3.4s', delay: '2.2s' },
];

function GlobuleField() {
  return (
    <div className="float-globules" aria-hidden="true">
      {globules.map((g, i) => (
        <span
          key={`g${i}`}
          className="globule"
          style={{
            left: g.left,
            top: g.top,
            width: g.size,
            height: g.size,
            animationDuration: g.dur,
            animationDelay: g.delay,
          }}
        />
      ))}
      {sparkles.map((s, i) => (
        <span
          key={`s${i}`}
          className="sparkle"
          style={{
            left: s.left,
            top: s.top,
            fontSize: s.size,
            animationDuration: s.dur,
            animationDelay: s.delay,
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}

const T = {
  hi: {
    hero: {
      eyebrow: `पिछले ${site.experienceYears} वर्षों से आपकी सेवा में`,
      title: 'अनुभव, विश्वास और सौम्य चिकित्सा',
      name: 'डॉ. नरेश कुमार गुप्ता',
      lead: 'आदर्श कॉलोनी, रामपुर एवं सेक्टर 14, गुरुग्राम में होम्योपैथिक चिकित्सा द्वारा हज़ारों रोगियों को स्वास्थ्य-लाभ। एड़ी व तलवे का दर्द, मस्से, गोखरू, बवासीर, बुखार तथा जटिल पुरानी बीमारियों का सौम्य उपचार।',
      callBtn: 'अभी संपर्क करें',
      waBtn: 'WhatsApp पर पूछें',
      chips: [
        `✓ ${site.experienceYears}+ वर्षों का अनुभव`,
        '✓ प्रमाणित एवं पंजीकृत चिकित्सक',
        '✓ सौम्य व सुरक्षित दवाएँ',
        '✓ हज़ारों स्वस्थ रोगी',
      ],
      photoCaption: 'क्लिनिक में रोगियों को परामर्श देते हुए',
    },
    stats: [
      { num: `${site.experienceYears}+`, label: 'वर्षों का अनुभव' },
      { num: 'हज़ारों', label: 'संतुष्ट रोगी' },
      { num: '2', label: 'क्लिनिक — रामपुर व गुरुग्राम' },
    ],
    about: {
      heading: 'परिचय',
      p1: `डॉ. नरेश कुमार गुप्ता विगत ${site.experienceYears} वर्षों से होम्योपैथिक चिकित्सा के माध्यम से रोगियों की सेवा कर रहे हैं। पाँच दशकों से भी लंबी इस यात्रा में उन्होंने साधारण सर्दी-बुखार से लेकर वर्षों पुरानी जटिल बीमारियों तक, हर प्रकार के रोगियों का उपचार किया है। वे प्रमाणित होम्योपैथिक चिकित्सक हैं और भारत में होम्योपैथिक चिकित्सा हेतु आवश्यक सभी योग्यताएँ एवं पंजीकरण रखते हैं। अब वे रामपुर (उ.प्र.) के साथ-साथ गुरुग्राम में भी उपलब्ध हैं।`,
      p2: 'उनकी पहचान किसी विज्ञापन से नहीं, बल्कि स्वस्थ हुए रोगियों के विश्वास से बनी है। आज भी उनके पास आने वाले अधिकांश रोगी पुराने रोगियों की सलाह पर ही आते हैं। यही उनकी चिकित्सा की सबसे बड़ी पहचान है।',
    },
    homeo: {
      heading: 'होम्योपैथी क्या है?',
      p: 'होम्योपैथी चिकित्सा की वह पद्धति है, जिसकी खोज जर्मन चिकित्सक डॉ. सैमुअल हानेमान ने लगभग दो सौ वर्ष पूर्व की थी। यह इस सिद्धांत पर आधारित है कि रोग के लक्षणों को दबाने के बजाय शरीर की अपनी रोग-प्रतिरोधक क्षमता को जगाकर रोग को दूर करने का प्रयास किया जाए।',
      list: [
        'प्राकृतिक स्रोतों से बनी अत्यंत सौम्य दवाएँ',
        'मीठी गोलियाँ, जिन्हें बच्चे भी आसानी से लेते हैं',
        'भारत सरकार के आयुष मंत्रालय द्वारा मान्यता प्राप्त पद्धति',
        'पुराने एवं बार-बार लौटने वाले रोगों में विशेष उपयोगी',
      ],
      more: 'होम्योपैथी के बारे में विस्तार से जानें →',
      imgAlt: 'होम्योपैथिक दवाओं की शीशियाँ',
    },
    specialties: {
      heading: 'किन रोगों का उपचार',
      sub: 'जिन रोगों के उपचार का डॉक्टर साहब को विशेष अनुभव है:',
      items: [
        {
          icon: '🦶',
          title: 'एड़ी एवं तलवे का दर्द',
          desc: 'तलवे में सुई जैसी चुभन और तेज़ दर्द (प्लांटर फ़ेशिआइटिस / कैल्केनियल स्पर), जिसमें सुबह ज़मीन पर पैर रखते ही असहनीय पीड़ा होती है। इसके उपचार का लंबा अनुभव।',
        },
        {
          icon: '🌿',
          title: 'मस्से (Warts)',
          desc: 'शरीर के किसी भी भाग पर होने वाले छोटे-बड़े मस्सों का बिना चीर-फाड़, दवाओं द्वारा सौम्य उपचार।',
        },
        {
          icon: '👣',
          title: 'गोखरू / कॉर्न',
          desc: 'पैर के तलवे में बनने वाली कठोर, फफोले जैसी गाँठ, जिससे चलने में दर्द होता है। मूल कारण पर केंद्रित होम्योपैथिक उपचार।',
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
          icon: '🦴',
          title: 'सर्वाइकल (गर्दन का दर्द)',
          desc: 'सर्वाइकल स्पॉन्डिलाइटिस से होने वाली गर्दन की जकड़न, दर्द तथा हाथों में झनझनाहट का सौम्य होम्योपैथिक उपचार।',
        },
        {
          icon: '💧',
          title: 'हाइड्रोसील (Hydrocele)',
          desc: 'अंडकोष में पानी भरने की समस्या (हाइड्रोसील) में बिना ऑपरेशन, होम्योपैथिक दवाओं से उपचार का लंबा अनुभव।',
        },
        {
          icon: '👂',
          title: 'कान बहना (Ear Discharge)',
          desc: 'बच्चों और बड़ों में कान से पानी या मवाद बहने की पुरानी शिकायत का मूल कारण समझकर उपचार।',
        },
        {
          icon: '🌼',
          title: 'चर्म रोग (दाग, छाजन, खुजली)',
          desc: 'त्वचा के दाग-धब्बे, छाजन (एक्ज़िमा), खाज-खुजली और बार-बार उभरने वाली त्वचा की शिकायतों का मूल कारण पर केंद्रित उपचार।',
        },
        {
          icon: '🤧',
          title: 'एलर्जी (Allergy)',
          desc: 'धूल, धूप, मौसम या खान-पान से होने वाली एलर्जी में त्वचा पर चकत्ते, खुजली, बार-बार छींकें व ज़ुकाम का सौम्य उपचार।',
        },
        {
          icon: '🩺',
          title: 'जटिल एवं पुरानी बीमारियाँ',
          desc: 'वर्षों से चली आ रही जटिल, गंभीर एवं पुरानी बीमारियों के प्रबंधन का पाँच दशकों से अधिक का गहन अनुभव।',
        },
        {
          icon: '🤝',
          title: 'परिवार की संपूर्ण चिकित्सा',
          desc: 'बच्चों से लेकर बुज़ुर्गों तक, हर आयु के रोगियों के लिए सुरक्षित और सौम्य होम्योपैथिक परामर्श।',
        },
      ],
    },
    cta1: {
      heading: 'इनमें से कोई समस्या है?',
      sub: `बिना झिझक संपर्क करें, ${site.experienceYears} वर्षों का अनुभव आपकी सेवा में है।`,
    },
    common: { call: 'कॉल करें', wa: 'WhatsApp' },
    process: {
      heading: 'चिकित्सा-पद्धति: परामर्श कैसे होता है',
      steps: [
        {
          num: '१',
          title: 'विस्तृत बातचीत',
          desc: 'रोग के लक्षण, पुरानी बीमारियाँ, खान-पान और दिनचर्या, सब कुछ आराम से, विस्तार में सुना और समझा जाता है।',
        },
        {
          num: '२',
          title: 'मूल कारण की पहचान',
          desc: 'केवल ऊपरी लक्षणों को नहीं, रोग की जड़ को समझने का प्रयास किया जाता है, ताकि उपचार स्थायी हो।',
        },
        {
          num: '३',
          title: 'व्यक्तिगत दवा का चयन',
          desc: 'हर रोगी की प्रकृति के अनुसार दवा और उसकी शक्ति (पोटेंसी) का चुनाव किया जाता है। एक ही रोग में भी अलग-अलग रोगियों को अलग दवा दी जा सकती है।',
        },
        {
          num: '४',
          title: 'नियमित फ़ॉलो-अप',
          desc: 'दवा के प्रभाव के अनुसार समय-समय पर परामर्श और आवश्यकता होने पर दवा में बदलाव किया जाता है।',
        },
      ],
      photoCaption: 'होम्योपैथिक दवाएँ, मीठी गोलियों के रूप में',
      imgAlt: 'होम्योपैथिक दवा की मीठी गोलियाँ',
    },
    why: {
      heading: 'होम्योपैथी ही क्यों?',
      points: [
        {
          title: 'सौम्य एवं सुरक्षित',
          desc: 'होम्योपैथिक दवाएँ मीठी गोलियों के रूप में दी जाती हैं, इसलिए बच्चे और बुज़ुर्ग भी इन्हें सहजता से ले सकते हैं।',
        },
        {
          title: 'मूल कारण पर काम',
          desc: 'केवल लक्षण दबाने के बजाय रोग के मूल कारण को समझकर चिकित्सा की जाती है।',
        },
        {
          title: 'हर रोगी के लिए अलग दवा',
          desc: 'रोगी का स्वभाव, दिनचर्या और पूरी जीवनशैली समझकर ही दवा का चयन किया जाता है।',
        },
      ],
      imgAlt: 'होम्योपैथी: सुरक्षित, प्राकृतिक एवं संपूर्ण चिकित्सा',
    },
    testimonials: {
      heading: 'रोगियों के अनुभव',
      sub: 'हमारी सबसे बड़ी पूँजी: स्वस्थ हुए रोगियों का विश्वास',
      note: 'ये रोगियों के निजी अनुभव हैं। परिणाम हर रोगी की स्थिति के अनुसार भिन्न हो सकते हैं।',
      items: [
        {
          name: 'श्री रमीस कुमार सिंह',
          meta: 'सर्वाइकल (गर्दन का दर्द), 10 वर्ष पुरानी समस्या',
          text: 'पिछले दस वर्षों से गर्दन के दर्द से परेशान था। उठने-बैठने तक में कष्ट होता था। डॉक्टर साहब की दवा नियमित लेने से धीरे-धीरे पूरा आराम मिल गया। अब बिना किसी तकलीफ़ के अपना काम कर पाता हूँ।',
        },
        {
          name: 'श्री अमित कुमार सिंह',
          place: 'रामपुर, उत्तर प्रदेश',
          meta: 'चर्म रोग, 2 वर्ष पुरानी समस्या',
          text: 'दो साल से त्वचा के रोग से परेशान था। अंग्रेज़ी दवाएँ खाते-खाते थक गया, पर कोई लाभ नहीं हुआ। डॉक्टर साहब की होम्योपैथिक दवा से कुछ ही महीनों में त्वचा बिल्कुल साफ़ हो गई। मैं उनका हृदय से आभारी हूँ।',
        },
      ],
    },
    faq: {
      heading: 'प्रश्न-उत्तर',
      items: [
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
        {
          q: 'पहली मुलाक़ात में क्या होगा?',
          a: 'पहली मुलाक़ात में डॉक्टर साहब आपकी पूरी बात (लक्षण, इतिहास, खान-पान और दिनचर्या) विस्तार से सुनते हैं, इसलिए थोड़ा समय लेकर आएँ। आपकी बताई हर बात पूरी तरह गोपनीय रखी जाती है।',
        },
        {
          q: 'परामर्श शुल्क (फ़ीस) कितना है?',
          a: 'परामर्श शुल्क सामान्य एवं किफ़ायती रखा गया है, और दवाएँ क्लिनिक से ही मिल जाती हैं। विवरण के लिए फ़ोन या WhatsApp पर पूछ सकते हैं।',
        },
        {
          q: 'दूर रहने वाले रोगी क्या करें?',
          a: 'दूसरे शहर या गाँव से आने वाले रोगी आने से पहले फ़ोन या WhatsApp पर संपर्क कर लें, ताकि क्लिनिक के समय और ज़रूरी जानकारी की पुष्टि हो जाए और आपको असुविधा न हो।',
        },
      ],
    },
    contact: {
      timingsHeading: 'क्लिनिक का समय',
      timings: [
        { days: 'सोमवार – शनिवार', hours: 'सुबह 10:00 – 2:00 · शाम 5:00 – 8:00' },
        { days: 'रविवार', hours: 'अवकाश' },
      ],
      clinicsHeading: 'हमारे क्लिनिक',
      clinics: [
        {
          name: 'रामपुर क्लिनिक',
          address: 'आदर्श कॉलोनी, रामपुर (उत्तर प्रदेश)',
          mapsUrl: site.mapsUrl,
        },
        {
          name: 'गुरुग्राम क्लिनिक',
          address: 'मकान नं. 303, सेक्टर 14, गुरुग्राम (हरियाणा)',
          mapsUrl: site.mapsUrlGurugram,
        },
      ],
      mapsLabel: 'Google Maps पर रास्ता देखें →',
    },
  },
  en: {
    hero: {
      eyebrow: `Serving patients for the last ${site.experienceYears} years`,
      title: 'Experience, Trust and Gentle Healing',
      name: 'Dr. Naresh Kumar Gupta',
      lead: 'Homeopathic care that has helped thousands of patients, at Adarsh Colony, Rampur and Sector 14, Gurugram. Gentle treatment of heel and sole pain, warts, corns, piles, fevers and long-standing chronic illnesses.',
      callBtn: 'Contact Now',
      waBtn: 'Ask on WhatsApp',
      chips: [
        `✓ ${site.experienceYears}+ years of experience`,
        '✓ Certified & registered physician',
        '✓ Gentle, safe medicines',
        '✓ Thousands of happy patients',
      ],
      photoCaption: 'Consulting patients at the clinic',
    },
    stats: [
      { num: `${site.experienceYears}+`, label: 'Years of Experience' },
      { num: 'Thousands', label: 'of Satisfied Patients' },
      { num: '2', label: 'Clinics — Rampur & Gurugram' },
    ],
    about: {
      heading: 'About the Doctor',
      p1: `Dr. Naresh Kumar Gupta has been serving patients through homeopathy for the last ${site.experienceYears} years. Over this journey of more than five decades, he has treated everything from common colds and fevers to complex illnesses that had lasted for years. He is a certified homeopathic physician and holds all the qualifications and registration required to practise homeopathy in India. He now consults in Gurugram along with Rampur (UP).`,
      p2: 'His reputation was built not by advertising but by the trust of recovered patients — even today, most people who visit him come on the recommendation of former patients. That trust is the true hallmark of his practice.',
    },
    homeo: {
      heading: 'What is Homeopathy?',
      p: 'Homeopathy is a system of medicine founded about two hundred years ago by the German physician Dr. Samuel Hahnemann. It is based on the principle of awakening the body’s own healing capacity rather than merely suppressing symptoms.',
      list: [
        'Extremely gentle medicines made from natural sources',
        'Sweet pills that even children take happily',
        'A system recognised by the Ministry of AYUSH, Government of India',
        'Especially useful in chronic and recurring illnesses',
      ],
      more: 'Learn more about homeopathy →',
      imgAlt: 'Homeopathic medicine bottles',
    },
    specialties: {
      heading: 'Conditions We Treat',
      sub: 'Conditions in which the doctor has particular experience:',
      items: [
        {
          icon: '🦶',
          title: 'Heel & Sole Pain',
          desc: 'Needle-like stabbing pain in the sole (plantar fasciitis / calcaneal spur), often unbearable with the first steps in the morning. Decades of experience treating it.',
        },
        {
          icon: '🌿',
          title: 'Warts',
          desc: 'Gentle, medicine-based care for warts of all sizes anywhere on the body, without cutting or surgery.',
        },
        {
          icon: '👣',
          title: 'Corns',
          desc: 'Hard, blister-like growths on the sole that make walking painful. Treatment focused on the underlying cause.',
        },
        {
          icon: '🌡️',
          title: 'High & Recurring Fever',
          desc: 'Balanced homeopathic care for rapidly rising and frequently returning fevers, by understanding their cause.',
        },
        {
          icon: '🪷',
          title: 'Piles',
          desc: 'Long experience of relieving bleeding and non-bleeding piles with medicines, without operation.',
        },
        {
          icon: '🦴',
          title: 'Cervical (Neck Pain)',
          desc: 'Gentle homeopathic care for neck stiffness, pain and tingling in the arms caused by cervical spondylitis.',
        },
        {
          icon: '💧',
          title: 'Hydrocele',
          desc: 'Long experience of medicine-based treatment of hydrocele, without operation.',
        },
        {
          icon: '👂',
          title: 'Ear Discharge',
          desc: 'Chronic ear discharge in children and adults, treated by understanding its underlying cause.',
        },
        {
          icon: '🌼',
          title: 'Skin Problems (Spots, Eczema, Itching)',
          desc: 'Skin blemishes, eczema, itching and recurring skin complaints, with treatment focused on the underlying cause.',
        },
        {
          icon: '🤧',
          title: 'Allergy',
          desc: 'Allergies from dust, sunlight, weather or food: rashes, itching, frequent sneezing and colds, treated gently.',
        },
        {
          icon: '🩺',
          title: 'Complex & Chronic Illnesses',
          desc: 'Over five decades of deep experience in managing complex, serious and long-standing diseases.',
        },
        {
          icon: '🤝',
          title: 'Whole-Family Care',
          desc: 'Safe and gentle homeopathic consultation for every age, from children to the elderly.',
        },
      ],
    },
    cta1: {
      heading: 'Facing any of these problems?',
      sub: `Reach out without hesitation — ${site.experienceYears} years of experience at your service.`,
    },
    common: { call: 'Call Now', wa: 'WhatsApp' },
    process: {
      heading: 'Our Approach: How a Consultation Works',
      steps: [
        {
          num: '1',
          title: 'A Detailed Conversation',
          desc: 'Your symptoms, medical history, diet and daily routine are all heard and understood carefully, without hurry.',
        },
        {
          num: '2',
          title: 'Finding the Root Cause',
          desc: 'We try to understand the root of the illness, not just its surface symptoms, so that treatment can be lasting.',
        },
        {
          num: '3',
          title: 'Individualised Medicine',
          desc: 'The medicine and its potency are chosen according to each patient’s constitution. Two patients with the same disease may receive different medicines.',
        },
        {
          num: '4',
          title: 'Regular Follow-up',
          desc: 'Progress is reviewed periodically and the medicine is adjusted whenever needed.',
        },
      ],
      photoCaption: 'Homeopathic medicines, given as sweet pills',
      imgAlt: 'Homeopathic sweet pills',
    },
    why: {
      heading: 'Why Homeopathy?',
      points: [
        {
          title: 'Gentle and Safe',
          desc: 'Homeopathic medicines are given as sweet pills, so children and the elderly take them with ease.',
        },
        {
          title: 'Works on the Root Cause',
          desc: 'Rather than only suppressing symptoms, treatment is based on understanding the underlying cause of illness.',
        },
        {
          title: 'A Different Medicine for Every Patient',
          desc: 'The medicine is chosen only after understanding the patient’s nature, routine and whole lifestyle.',
        },
      ],
      imgAlt: 'Homeopathy: safe, natural and holistic care',
    },
    testimonials: {
      heading: 'Patient Stories',
      sub: 'Our greatest asset: the trust of recovered patients',
      note: 'These are individual patient experiences. Results vary from person to person.',
      items: [
        {
          name: 'Shri Ramis Kumar Singh',
          meta: 'Cervical (neck pain), a 10-year-old problem',
          text: 'I had suffered from neck pain for ten years — even sitting and getting up was painful. With the doctor’s medicine taken regularly, the pain eased step by step until it was gone. I now do my work without any trouble.',
        },
        {
          name: 'Shri Amit Kumar Singh',
          place: 'Rampur, Uttar Pradesh',
          meta: 'Skin disease, a 2-year-old problem',
          text: 'I struggled with a skin disease for two years and got no benefit from conventional medicines. With the doctor’s homeopathic treatment my skin cleared completely within months. I am deeply grateful to him.',
        },
      ],
    },
    faq: {
      heading: 'Frequently Asked Questions',
      items: [
        {
          q: 'Do I need an appointment in advance?',
          a: 'No, you can walk in during clinic hours. If you are coming from far away, it helps to confirm details on phone or WhatsApp first.',
        },
        {
          q: 'Do homeopathic medicines have side effects?',
          a: 'Taken under the guidance of a qualified physician, homeopathic medicines are extremely gentle and considered safe for everyone from children to the elderly.',
        },
        {
          q: 'Should I bring my old test reports?',
          a: 'Yes. If you have had any tests done or are taking any medicines, please bring the reports and a list of medicines — it helps in understanding your illness.',
        },
        {
          q: 'How long does it take to see results?',
          a: 'It depends on the nature of the illness. Recent complaints often respond quickly, while long-standing conditions need patience and regular medicine.',
        },
        {
          q: 'What happens at the first visit?',
          a: 'At the first visit the doctor listens to your full story — symptoms, history, diet and routine — in detail, so please come with a little time in hand. Everything you share is kept fully confidential.',
        },
        {
          q: 'What is the consultation fee?',
          a: 'The consultation fee is modest and affordable, and medicines are provided at the clinic itself. Please ask on phone or WhatsApp for details.',
        },
        {
          q: 'What about patients living far away?',
          a: 'If you are coming from another town or village, please call or message on WhatsApp before travelling, so clinic timings and details are confirmed and you face no inconvenience.',
        },
      ],
    },
    contact: {
      timingsHeading: 'Clinic Hours',
      timings: [
        { days: 'Monday – Saturday', hours: '10:00 am – 2:00 pm · 5:00 – 8:00 pm' },
        { days: 'Sunday', hours: 'Closed' },
      ],
      clinicsHeading: 'Our Clinics',
      clinics: [
        {
          name: 'Rampur Clinic',
          address: 'Adarsh Colony, Rampur (Uttar Pradesh)',
          mapsUrl: site.mapsUrl,
        },
        {
          name: 'Gurugram Clinic',
          address: 'House No. 303, Sector 14, Gurugram (Haryana)',
          mapsUrl: site.mapsUrlGurugram,
        },
      ],
      mapsLabel: 'Get directions on Google Maps →',
    },
  },
};

export default function Home() {
  const { lang } = useLang();
  const t = T[lang];

  return (
    <div id="top">
      <main>
        <section className="hero">
          <Hero3D />
          <div className="container hero-inner">
            <div className="hero-text">
              <p className="eyebrow">{t.hero.eyebrow}</p>
              <h1>
                {t.hero.title} <span className="accent">{t.hero.name}</span>
              </h1>
              <p className="lead">{t.hero.lead}</p>
              <div className="hero-actions">
                <a className="btn btn-solid" href={`tel:${site.phone}`}>
                  <PhoneIcon /> {t.hero.callBtn}
                </a>
                <a
                  className="btn btn-outline"
                  href={site.waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon /> {t.hero.waBtn}
                </a>
              </div>
              <ul className="trust-chips">
                {t.hero.chips.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <figure className="hero-photo">
              <Image
                src={doctorPhoto}
                alt={t.hero.name}
                priority
                sizes="(min-width: 720px) 340px, 80vw"
              />
              <figcaption>{t.hero.photoCaption}</figcaption>
            </figure>
          </div>
        </section>

        <section className="stats">
          <div className="container stats-grid">
            {t.stats.map((s) => (
              <div className="stat" key={s.label}>
                <p className="stat-num">{s.num}</p>
                <p className="stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section has-globules" id="about">
          <GlobuleField />
          <div className="container split">
            <div className="split-text">
              <h2>{t.about.heading}</h2>
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
            <figure className="split-photo portrait">
              <Image
                src={doctorPortrait}
                alt={t.hero.name}
                sizes="(min-width: 720px) 400px, 82vw"
              />
              <figcaption>{t.hero.name}</figcaption>
            </figure>
          </div>
        </section>

        <section className="section section-tint" id="homeopathy">
          <div className="container split">
            <div className="split-text">
              <h2>{t.homeo.heading}</h2>
              <p>{t.homeo.p}</p>
              <ul className="checklist">
                {t.homeo.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
              <p className="mt-20">
                <Link className="btn btn-outline" href="/homeopathy">
                  {t.homeo.more}
                </Link>
              </p>
            </div>
            <figure className="split-photo">
              <Image
                src={bottlesPhoto}
                alt={t.homeo.imgAlt}
                sizes="(min-width: 720px) 480px, 92vw"
              />
            </figure>
          </div>
        </section>

        <section className="section" id="specialties">
          <div className="container">
            <h2>{t.specialties.heading}</h2>
            <p className="section-sub">{t.specialties.sub}</p>
            <div className="cards">
              {t.specialties.items.map((s) => (
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

        <section className="cta-band">
          <div className="container cta-inner">
            <div>
              <h2>{t.cta1.heading}</h2>
              <p>{t.cta1.sub}</p>
            </div>
            <div className="hero-actions">
              <a className="btn btn-light" href={`tel:${site.phone}`}>
                <PhoneIcon /> {t.common.call}
              </a>
              <a
                className="btn btn-light-outline"
                href={site.waHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon /> {t.common.wa}
              </a>
            </div>
          </div>
        </section>

        <section className="section section-tint" id="process">
          <div className="container">
            <h2>{t.process.heading}</h2>
            <div className="process-grid">
              <ol className="process-steps">
                {t.process.steps.map((p) => (
                  <li key={p.title}>
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
                  alt={t.process.imgAlt}
                  sizes="(min-width: 900px) 380px, 92vw"
                />
                <figcaption>{t.process.photoCaption}</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section" id="why">
          <div className="container split">
            <div className="split-text">
              <h2>{t.why.heading}</h2>
              <div className="why-stack">
                {t.why.points.map((w) => (
                  <div className="why-item" key={w.title}>
                    <h3>{w.title}</h3>
                    <p>{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <figure className="split-photo portrait">
              <Image
                src={doctorPoster}
                alt={t.why.imgAlt}
                sizes="(min-width: 720px) 400px, 82vw"
              />
            </figure>
          </div>
        </section>

        <section className="section section-tint" id="testimonials">
          <div className="container">
            <h2>{t.testimonials.heading}</h2>
            <p className="section-sub">{t.testimonials.sub}</p>
            <div className="testimonial-grid">
              {t.testimonials.items.map((tm) => (
                <blockquote className="testimonial-card" key={tm.name}>
                  <p className="t-text">{tm.text}</p>
                  <footer>
                    <p className="t-name">{tm.name}</p>
                    <p className="t-meta">
                      {tm.meta}
                      {tm.place ? ` · ${tm.place}` : ''}
                    </p>
                  </footer>
                </blockquote>
              ))}
            </div>
            <p className="fineprint">{t.testimonials.note}</p>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container narrow">
            <h2>{t.faq.heading}</h2>
            <div className="faq-list" key={lang}>
              {t.faq.items.map((f) => (
                <details className="faq-item" key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-tint" id="contact">
          <div className="container contact-grid">
            <div>
              <h2>{t.contact.timingsHeading}</h2>
              <table className="timings">
                <tbody>
                  {t.contact.timings.map((row) => (
                    <tr key={row.days}>
                      <td>{row.days}</td>
                      <td>{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <h2>{t.contact.clinicsHeading}</h2>
              {t.contact.clinics.map((c) => (
                <p className="contact-line" key={c.name}>
                  <strong>{c.name}</strong>
                  <br />
                  📍 {c.address}
                  <br />
                  <a href={c.mapsUrl} target="_blank" rel="noopener noreferrer">
                    {t.contact.mapsLabel}
                  </a>
                </p>
              ))}
              <p className="contact-line">
                <PhoneIcon />{' '}
                <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
              </p>
              <div className="hero-actions">
                <a className="btn btn-solid" href={`tel:${site.phone}`}>
                  <PhoneIcon /> {t.common.call}
                </a>
                <a
                  className="btn btn-outline"
                  href={site.waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon /> {t.common.wa}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
