// रोगों की श्रेणियाँ एवं विवरण — दोनों भाषाओं में।
// होमपेज का सारांश और /conditions विस्तार-पेज, दोनों यहीं से डेटा लेते हैं।

export const categories = [
  {
    id: 'pain',
    icon: '🦴',
    hi: 'दर्द, हड्डी व जोड़',
    en: 'Pain, Bone & Joint',
    hiSub: 'एड़ी, गर्दन, कमर व पुराने दर्द',
    enSub: 'Heel, neck, back and chronic pain',
  },
  {
    id: 'skin',
    icon: '🌿',
    hi: 'त्वचा रोग',
    en: 'Skin',
    hiSub: 'मस्से, खुजली, पित्ती व बिवाई',
    enSub: 'Warts, itching, hives and fissures',
  },
  {
    id: 'ent',
    icon: '👂',
    hi: 'कान, नाक व गला',
    en: 'Ear, Nose & Throat',
    hiSub: 'कान, टॉन्सिल, पॉलिप व छाले',
    enSub: 'Ear, tonsils, polyps and ulcers',
  },
  {
    id: 'menwomen',
    icon: '🔒',
    hi: 'पुरुष एवं महिला रोग',
    en: "Men's & Women's Health",
    hiSub: 'गोपनीय परामर्श',
    enSub: 'Confidential consultation',
  },
  {
    id: 'general',
    icon: '🩺',
    hi: 'सामान्य एवं बाल रोग',
    en: 'General & Child',
    hiSub: 'बुखार, एलर्जी, चक्कर व बाल-रोग',
    enSub: 'Fever, allergy, vertigo and child care',
  },
];

export const conditions = [
  // ---------- दर्द, हड्डी व जोड़ ----------
  {
    id: 'heel-pain',
    cat: 'pain',
    icon: '🦶',
    hi: {
      title: 'एड़ी एवं तलवे का दर्द',
      short: 'तलवे में सुई जैसी चुभन व तेज़ दर्द (प्लांटर फ़ेशिआइटिस / कैल्केनियल स्पर)।',
      detail:
        'सुबह ज़मीन पर पैर रखते ही असहनीय पीड़ा इसकी पहचान है। डॉक्टर साहब को इस समस्या के उपचार का विशेष रूप से लंबा अनुभव है; यह उनके क्लिनिक की सबसे आम शिकायतों में से एक है।',
    },
    en: {
      title: 'Heel & Sole Pain',
      short: 'Needle-like stabbing pain in the sole (plantar fasciitis / calcaneal spur).',
      detail:
        'Its hallmark is unbearable pain with the first steps of the morning. Dr. Gupta has particularly long experience with this problem; it is among the most common complaints at his clinic.',
    },
  },
  {
    id: 'cervical',
    cat: 'pain',
    icon: '🦴',
    hi: {
      title: 'सर्वाइकल (गर्दन का दर्द)',
      short: 'सर्वाइकल स्पॉन्डिलाइटिस से गर्दन की जकड़न, दर्द व हाथों में झनझनाहट।',
      detail:
        'लगातार झुककर काम करने या मोबाइल-कंप्यूटर के अधिक उपयोग से यह समस्या बढ़ती है। रोगी की प्रकृति के अनुसार सौम्य होम्योपैथिक उपचार किया जाता है।',
    },
    en: {
      title: 'Cervical (Neck Pain)',
      short: 'Neck stiffness, pain and tingling in the arms from cervical spondylitis.',
      detail:
        'Long hours of bending, or heavy phone and computer use, worsen it. Gentle homeopathic treatment is chosen according to the patient’s constitution.',
    },
  },
  {
    id: 'sciatica',
    cat: 'pain',
    icon: '🦵',
    hi: {
      title: 'साइटिका',
      short: 'कमर से पैर तक जाने वाली नस का दर्द (साइटिका)।',
      detail:
        'बैठने-उठने, झुकने या खाँसने पर दर्द बढ़ सकता है और पैर में झनझनाहट होती है। मूल कारण समझकर उपचार पर ज़ोर दिया जाता है।',
    },
    en: {
      title: 'Sciatica',
      short: 'Pain running along the nerve from the lower back down the leg.',
      detail:
        'The pain can worsen on sitting, rising, bending or coughing, with tingling down the leg. Treatment focuses on understanding the underlying cause.',
    },
  },
  {
    id: 'back-pain',
    cat: 'pain',
    icon: '🧍',
    hi: {
      title: 'कमर दर्द',
      short: 'पुराना कमर दर्द जो उठने-बैठने व झुकने में तकलीफ़ देता है।',
      detail:
        'गलत मुद्रा, भारी वज़न उठाने या लंबे समय बैठे रहने से कमर दर्द पुराना हो जाता है। नियमित होम्योपैथिक उपचार व सही दिनचर्या से राहत का प्रयास किया जाता है।',
    },
    en: {
      title: 'Back Pain',
      short: 'Long-standing lower-back pain that makes sitting, rising and bending hard.',
      detail:
        'Poor posture, lifting heavy weights or long sitting turn back pain chronic. Relief is attempted through regular homeopathic treatment and better daily habits.',
    },
  },
  {
    id: 'headache',
    cat: 'pain',
    icon: '🤕',
    hi: {
      title: 'पुराना सिरदर्द',
      short: 'वर्षों पुराना सिरदर्द व माइग्रेन जैसी बार-बार लौटने वाली पीड़ा।',
      detail:
        'सिरदर्द का समय, स्थान और कारण (तनाव, नींद, पाचन) समझकर दवा चुनी जाती है, ताकि केवल दर्द दबाने के बजाय उसका बार-बार लौटना कम हो।',
    },
    en: {
      title: 'Chronic Headache',
      short: 'Long-standing headaches and migraine-like pain that keeps returning.',
      detail:
        'The timing, location and cause (stress, sleep, digestion) are studied, so that rather than only dulling the pain, its recurrence is reduced.',
    },
  },

  // ---------- त्वचा रोग ----------
  {
    id: 'skin',
    cat: 'skin',
    icon: '🌼',
    hi: {
      title: 'चर्म रोग (दाग, छाजन, खुजली)',
      short: 'दाग-धब्बे, छाजन (एक्ज़िमा), खाज-खुजली व बार-बार उभरने वाली त्वचा की शिकायतें।',
      detail:
        'त्वचा भीतर की स्थिति का आईना है; इसलिए ऊपरी मरहम के बजाय रोगी की पूरी प्रकृति देखकर मूल कारण पर उपचार किया जाता है।',
    },
    en: {
      title: 'Skin Diseases (Spots, Eczema, Itching)',
      short: 'Spots, eczema, itching and recurring skin complaints.',
      detail:
        'The skin mirrors the body’s inner state; so instead of surface ointments, treatment addresses the root cause after studying the whole constitution.',
    },
  },
  {
    id: 'warts',
    cat: 'skin',
    icon: '🌿',
    hi: {
      title: 'मस्से (Warts)',
      short: 'शरीर के किसी भी भाग पर छोटे-बड़े मस्से।',
      detail:
        'बिना चीर-फाड़, दवाओं द्वारा सौम्य उपचार किया जाता है, जिससे मस्से जड़ से हटने का प्रयास होता है।',
    },
    en: {
      title: 'Warts',
      short: 'Warts of all sizes anywhere on the body.',
      detail:
        'Gentle, medicine-based care without cutting, aiming to remove warts from the root.',
    },
  },
  {
    id: 'urticaria',
    cat: 'skin',
    icon: '🫧',
    hi: {
      title: 'पित्ती (शीतपित्त)',
      short: 'शरीर पर अचानक उभरने वाले लाल चकत्ते व खुजली।',
      detail:
        'ठंड, धूप या किसी खाद्य पदार्थ से भड़कने वाली पित्ती में रोगी की संवेदनशीलता समझकर सौम्य उपचार किया जाता है।',
    },
    en: {
      title: 'Urticaria (Hives)',
      short: 'Sudden red welts and itching on the body.',
      detail:
        'For hives triggered by cold, sun or certain foods, gentle treatment is chosen after understanding the patient’s sensitivity.',
    },
  },
  {
    id: 'corns',
    cat: 'skin',
    icon: '👣',
    hi: {
      title: 'गोखरू / कॉर्न',
      short: 'पैर के तलवे में कठोर, दर्दभरी गाँठ।',
      detail:
        'जिससे चलने में दर्द होता है; मूल कारण पर केंद्रित होम्योपैथिक उपचार से आराम का प्रयास किया जाता है।',
    },
    en: {
      title: 'Corns',
      short: 'Hard, painful growths on the sole.',
      detail:
        'These make walking painful; relief is attempted with homeopathic treatment focused on the underlying cause.',
    },
  },
  {
    id: 'cracked-heels',
    cat: 'skin',
    icon: '🩹',
    hi: {
      title: 'बिवाई (फटी एड़ियाँ)',
      short: 'सर्दियों में फटी, दर्दभरी एड़ियाँ।',
      detail:
        'सूखी त्वचा व ठंड से एड़ियाँ फट जाती हैं; भीतरी प्रवृत्ति को ध्यान में रखकर उपचार किया जाता है, केवल ऊपरी नहीं।',
    },
    en: {
      title: 'Cracked Heels',
      short: 'Cracked, painful heels (fissures), common in winter.',
      detail:
        'Dry skin and cold split the heels; treatment considers the underlying tendency, not just the surface.',
    },
  },
  {
    id: 'chilblains',
    cat: 'skin',
    icon: '❄️',
    hi: {
      title: 'चिलब्लेन्स (ठंड से सूजन)',
      short: 'ठंड से हाथ-पैर की उँगलियों में सूजन, लाली व खुजली।',
      detail:
        'सर्दियों में बार-बार होने वाली इस शिकायत में रोगी की ठंड-संवेदनशीलता के अनुसार सौम्य दवा दी जाती है।',
    },
    en: {
      title: 'Chilblains',
      short: 'Cold-induced swelling, redness and itching of fingers and toes.',
      detail:
        'For this recurring winter complaint, gentle medicine is given according to the patient’s sensitivity to cold.',
    },
  },
  {
    id: 'nails',
    cat: 'skin',
    icon: '💅',
    hi: {
      title: 'नाखूनों के रोग',
      short: 'नाखूनों का टेढ़ा होना, टूटना, रंग बदलना या फफूँद-संक्रमण।',
      detail:
        'नाखूनों के रोग अक्सर भीतरी स्वास्थ्य से जुड़े होते हैं; कारण समझकर धैर्य के साथ उपचार किया जाता है।',
    },
    en: {
      title: 'Nail Diseases',
      short: 'Deformed, brittle or discoloured nails and fungal infection.',
      detail:
        'Nail diseases are often linked to inner health; treatment is patient and cause-based.',
    },
  },

  // ---------- कान, नाक व गला ----------
  {
    id: 'ear-discharge',
    cat: 'ent',
    icon: '👂',
    hi: {
      title: 'कान बहना',
      short: 'बच्चों व बड़ों में कान से पानी या मवाद बहना।',
      detail:
        'पुरानी शिकायत का मूल कारण समझकर उपचार किया जाता है, ताकि बार-बार बहना रुके।',
    },
    en: {
      title: 'Ear Discharge',
      short: 'Discharge of water or pus from the ear in children and adults.',
      detail:
        'The chronic complaint is treated by understanding its root cause, so the discharge stops recurring.',
    },
  },
  {
    id: 'tinnitus',
    cat: 'ent',
    icon: '🔔',
    hi: {
      title: 'कान से आवाज़ आना',
      short: 'कान में सीटी, घंटी या भनभनाहट जैसी आवाज़ आना।',
      detail:
        'कान से आवाज़ आने की शिकायत कई कारणों से होती है; रोगी की पूरी स्थिति देखकर सौम्य उपचार किया जाता है।',
    },
    en: {
      title: 'Ringing in the Ear (Tinnitus)',
      short: 'Ringing, whistling or buzzing sounds in the ear.',
      detail:
        'Sounds in the ear arise from many causes; gentle treatment follows a full assessment of the patient.',
    },
  },
  {
    id: 'nasal-polyp',
    cat: 'ent',
    icon: '👃',
    hi: {
      title: 'नाक का मस्सा (नेज़ल पॉलिप)',
      short: 'नाक के अंदर मांस का बढ़ना, जिससे साँस लेने में रुकावट।',
      detail:
        'बिना ऑपरेशन, दवाओं द्वारा पॉलिप घटाने और बार-बार बनने से रोकने का प्रयास किया जाता है।',
    },
    en: {
      title: 'Nasal Polyps',
      short: 'Fleshy growths inside the nose that block breathing.',
      detail:
        'Without operation, medicines aim to shrink the polyps and prevent them from recurring.',
    },
  },
  {
    id: 'tonsils',
    cat: 'ent',
    icon: '😷',
    hi: {
      title: 'टॉन्सिल',
      short: 'गले के टॉन्सिल का बार-बार सूजना, दर्द व बुखार, विशेषकर बच्चों में।',
      detail:
        'बार-बार टॉन्सिल बढ़ने पर बिना ऑपरेशन, होम्योपैथिक दवाओं से रोग-प्रतिरोधक क्षमता बढ़ाने का प्रयास किया जाता है।',
    },
    en: {
      title: 'Tonsillitis',
      short: 'Repeatedly swollen, painful tonsils with fever, especially in children.',
      detail:
        'For recurrent tonsillitis, homeopathic medicines aim to strengthen immunity without operation.',
    },
  },
  {
    id: 'mouth-ulcers',
    cat: 'ent',
    icon: '👄',
    hi: {
      title: 'मुँह के छाले',
      short: 'मुँह व जीभ पर बार-बार होने वाले दर्दभरे छाले।',
      detail:
        'पेट की गर्मी, कब्ज़ या कमज़ोरी से जुड़े छालों में मूल कारण पर काम किया जाता है, ताकि बार-बार न हों।',
    },
    en: {
      title: 'Mouth Ulcers',
      short: 'Recurring painful ulcers in the mouth and on the tongue.',
      detail:
        'For ulcers linked to digestion, constipation or weakness, the root cause is addressed so they stop recurring.',
    },
  },

  // ---------- पुरुष एवं महिला रोग ----------
  {
    id: 'piles',
    cat: 'menwomen',
    icon: '🪷',
    hi: {
      title: 'बवासीर (Piles)',
      short: 'खूनी एवं बादी बवासीर।',
      detail:
        'बिना ऑपरेशन, दवाओं द्वारा राहत का प्रयास किया जाता है; साथ ही क़ब्ज़ जैसी जड़ पर भी काम होता है। दशकों का अनुभव।',
    },
    en: {
      title: 'Piles',
      short: 'Bleeding and non-bleeding piles.',
      detail:
        'Relief is attempted with medicines, without operation, while also addressing roots like constipation. Decades of experience.',
    },
  },
  {
    id: 'hydrocele',
    cat: 'menwomen',
    icon: '💧',
    hi: {
      title: 'हाइड्रोसील (Hydrocele)',
      short: 'अंडकोष में पानी भरने की समस्या।',
      detail:
        'बिना ऑपरेशन, होम्योपैथिक दवाओं से उपचार का लंबा अनुभव।',
    },
    en: {
      title: 'Hydrocele',
      short: 'Fluid collection in the scrotum.',
      detail: 'Long experience of treating it with homeopathic medicines, without operation.',
    },
  },
  {
    id: 'infertility',
    cat: 'menwomen',
    icon: '🤍',
    hi: {
      title: 'बांझपन (संतान-प्राप्ति में कठिनाई)',
      short: 'संतान-प्राप्ति में कठिनाई पर परामर्श एवं मार्गदर्शन।',
      detail:
        'दंपती की पूरी स्थिति को समझकर, धैर्य एवं पूर्ण गोपनीयता के साथ परामर्श दिया जाता है। किसी भी परिणाम की गारंटी नहीं दी जाती।',
    },
    en: {
      title: 'Difficulty in Conceiving',
      short: 'Consultation and guidance for difficulty in conceiving.',
      detail:
        'With patience and full confidentiality, guidance is given after understanding the couple’s complete situation. No result is guaranteed.',
    },
  },
  {
    id: 'gupt-rog',
    cat: 'menwomen',
    icon: '🔒',
    hi: {
      title: 'गुप्त एवं मूत्र-सम्बन्धी रोग',
      short: 'पुरुषों एवं महिलाओं की गुप्त व मूत्र-सम्बन्धी शिकायतों में गोपनीय परामर्श।',
      detail:
        'संकोच छोड़कर संपर्क करें; हर बात पूरी तरह गोपनीय रखी जाती है और सम्मान के साथ परामर्श दिया जाता है।',
    },
    en: {
      title: 'Private & Urinary Complaints',
      short: 'Confidential consultation for private and urinary complaints in men and women.',
      detail:
        'Reach out without hesitation; everything is kept fully confidential and consultation is given with respect.',
    },
  },

  // ---------- सामान्य एवं बाल रोग ----------
  {
    id: 'fever',
    cat: 'general',
    icon: '🌡️',
    hi: {
      title: 'तेज़ एवं बार-बार आने वाला बुखार',
      short: 'तेज़ी से चढ़ने व बार-बार लौटने वाला बुखार।',
      detail: 'बुखार का कारण समझकर संतुलित होम्योपैथिक चिकित्सा की जाती है।',
    },
    en: {
      title: 'High & Recurring Fever',
      short: 'Rapidly rising and frequently returning fevers.',
      detail: 'Balanced homeopathic care is given after understanding the cause of the fever.',
    },
  },
  {
    id: 'allergy',
    cat: 'general',
    icon: '🤧',
    hi: {
      title: 'एलर्जी (Allergy)',
      short: 'धूल, धूप, मौसम या खान-पान से होने वाली एलर्जी।',
      detail:
        'त्वचा पर चकत्ते, खुजली, बार-बार छींकें व ज़ुकाम में रोगी की संवेदनशीलता के अनुसार सौम्य उपचार।',
    },
    en: {
      title: 'Allergy',
      short: 'Allergies from dust, sun, weather or food.',
      detail:
        'For rashes, itching, frequent sneezing and colds, gentle treatment follows the patient’s sensitivity.',
    },
  },
  {
    id: 'vertigo',
    cat: 'general',
    icon: '💫',
    hi: {
      title: 'चक्कर आना (सिर चकराना)',
      short: 'सिर चकराना, चक्कर आना व संतुलन बिगड़ना।',
      detail:
        'उठते-बैठते या सिर घुमाते समय चक्कर आने की शिकायत में कारण समझकर सौम्य दवा दी जाती है।',
    },
    en: {
      title: 'Vertigo (Dizziness)',
      short: 'Dizziness, spinning sensations and loss of balance.',
      detail:
        'For dizziness on rising or turning the head, gentle medicine is given after finding the cause.',
    },
  },
  {
    id: 'bedwetting',
    cat: 'general',
    icon: '🛏️',
    hi: {
      title: 'बच्चों का बिस्तर में पेशाब',
      short: 'बच्चों का सोते समय बिस्तर में पेशाब कर देना।',
      detail:
        'यह प्रायः बढ़ती उम्र के साथ ठीक हो जाता है, पर होम्योपैथिक उपचार व स्नेहपूर्ण मार्गदर्शन से बच्चे को जल्दी सहायता मिलती है।',
    },
    en: {
      title: 'Bed-wetting in Children',
      short: 'Bed-wetting during sleep in children.',
      detail:
        'It often settles with age, but homeopathic treatment and gentle guidance help the child sooner.',
    },
  },
  {
    id: 'chronic',
    cat: 'general',
    icon: '🩺',
    hi: {
      title: 'जटिल एवं पुरानी बीमारियाँ',
      short: 'वर्षों से चली आ रही जटिल, गंभीर एवं पुरानी बीमारियाँ।',
      detail:
        'पाँच दशकों से अधिक के अनुभव से इन बीमारियों के प्रबंधन में गहरी समझ।',
    },
    en: {
      title: 'Complex & Chronic Illnesses',
      short: 'Complex, serious and long-standing chronic illnesses.',
      detail:
        'Over five decades of experience bring deep understanding to managing these illnesses.',
    },
  },
  {
    id: 'family',
    cat: 'general',
    icon: '🤝',
    hi: {
      title: 'परिवार की संपूर्ण चिकित्सा',
      short: 'बच्चों से लेकर बुज़ुर्गों तक, हर आयु के लिए सुरक्षित परामर्श।',
      detail: 'पूरे परिवार के लिए सौम्य होम्योपैथिक चिकित्सा एक ही छत के नीचे।',
    },
    en: {
      title: 'Whole-Family Care',
      short: 'Safe consultation for every age, from children to the elderly.',
      detail: 'Gentle homeopathic care for the whole family under one roof.',
    },
  },
];
