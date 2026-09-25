// सभी संपर्क विवरण एक ही जगह; असली जानकारी मिलने पर सिर्फ़ यहीं बदलें।
export const site = {
  doctorName: 'डॉ. नरेश कुमार गुप्ता',
  clinicName: 'गुप्ता होम्योपैथिक क्लिनिक',
  experienceYears: 45,
  phone: '+919719547096',
  phoneDisplay: '+91 97195 47096',
  whatsapp: '919719547096',
  address: 'राधा रोड, रोशन बाग़, SBI ADB बैंक के पास, रामपुर',
  mapsUrl: 'https://maps.app.goo.gl/ppknPs5H9QC3mmin9',
  mapsUrlGurugram:
    'https://www.google.com/maps/search/?api=1&query=House+303+Sector+14+Gurugram',
  timings: [
    { days: 'सोमवार - शनिवार', hours: 'सुबह 10:00 - 2:00 · शाम 5:00 - 8:00' },
    { days: 'रविवार', hours: 'अवकाश' },
  ],
};

// Google Ads / Analytics ट्रैकिंग IDs
// खाली रहने पर कोई ट्रैकिंग स्क्रिप्ट लोड नहीं होती।
// अकाउंट बनने पर यहाँ IDs भरें:
export const analytics = {
  ga4: '', // GA4 Measurement ID, जैसे 'G-XXXXXXXXXX'
  adsId: '', // Google Ads ID, जैसे 'AW-XXXXXXXXX'
  // Google Ads में बनाए गए conversion actions के labels:
  labels: { call: '', whatsapp: '' },
};

// WhatsApp लिंक: पहले से लिखा संदेश, ताकि रोगी को सिर्फ़ भेजना पड़े
site.waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  'नमस्ते डॉक्टर साहब, मुझे परामर्श लेना है।'
)}`;
