import type { DonationSource } from "../types";

export const donationSources: DonationSource[] = [
  {
    name: "جمعية البركة الجزائرية",
    local: true,
    wilaya: "الجزائر العاصمة",
    logo: {
      src: "/images/associations/elbarakah-logo.png",
      alt: "El Barakah association logo"
    },
    paymentMethods: [
      {
        label: "CCP",
        accountNumber: "210 243 29 Clé 40"
      },
      {
        label: "CPA",
        accountNumber: "004 001 854 100 009 720 30"
      }
    ],
    contactDetails: {
      website: "https://elbarakahdz.com/",
      facebook: "https://www.facebook.com/Albarakahdz/",
      instagram: "https://www.instagram.com/elbarakahdz/",
      phoneNumbers: ["0797691031", "0782018936"],
      location: {
        text: "بئر مراد رايس (لاكوت)، الجزائر",
        link: "https://maps.app.goo.gl/r8THTB3meG1zX9W67"
      }
    }
  },
  {
    name: "جمعية العلماء المسلمين",
    local: true,
    wilaya: "الجزائر العاصمة",
    logo: {
      src: "/images/associations/oulama-logo.png",
      alt: "Association of the muslim scolars logo"
    },
    paymentMethods: [
      {
        label: "BNA",
        accountNumber: "001 006 200 200 650 061 41"
      }
    ],
    contactDetails: {
      website: "https://oulama.dz/",
      facebook: "https://www.facebook.com/officieloulamas",
      phoneNumbers: ["023738684", "023738511", "0770719911"],
      location: {
        text: "17 شارع محمد مربوش حسين داي، الجزائر",
        link: "https://maps.app.goo.gl/ECQKLn7i5YDjV3mN6"
      }
    }
  },
  {
    name: "هيئة الإغاثة الإنسانية iHH",
    local: false,
    country: "تركيا",
    logo: {
      src: "/images/associations/ihh-logo.svg",
      alt: "IHH Humanitarian Relief Foundation logo"
    },
    donationLink: "https://ihh.org.tr/en/donate/palestine-gaza",
    contactDetails: {
      website: "https://ihh.org.tr/ar",
      facebook: "https://www.facebook.com/ihhen",
      instagram: "https://www.instagram.com/humanitarianrelief/",
      twitter: "https://twitter.com/IHHen",
      location: {
        text: "Ali Kuşçu, Büyük Karaman Cd. 15 34083 Fatih/İstanbul",
        link: "https://maps.app.goo.gl/2dCUexhZAsuCDBjF6"
      }
    }
  },
  {
    name: "وقف الأمة",
    local: false,
    country: "تركيا",
    logo: {
      src: "/images/associations/ummetvakfi-logo.png",
      alt: "Ummet waqf association logo"
    },
    donationLink:
      "https://ummetvakfi.org/ar//proje/%D8%AD%D9%85%D9%84%D8%A9%20%D8%A5%D8%BA%D8%A7%D8%AB%D9%8A%D8%A9%20%D8%B9%D8%A7%D8%AC%D9%84%D8%A9-%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86/304",
    contactDetails: {
      website: "https://ummetvakfi.org/ar/",
      facebook: "https://www.facebook.com/ummetvakf/",
      instagram: "https://www.instagram.com/ummetvakf/",
      twitter: "https://twitter.com/ummetvakf",
      location: {
        text: "Akşemsettin Mahallesi Sürreemini Sokak 15 34080 Fatih/İstanbul",
        link: "https://maps.app.goo.gl/uh5VDVkAgqY41yoL8"
      }
    }
  },
  {
    name: "حملة إنصروا غزة - دار القرآن الكريم والسنة",
    local: false,
    country: "تركيا",
    logo: {
      src: "/images/associations/dar-quraan-sunnah-logo.png",
      alt: "Dar Quraan and Sunnah association logo"
    },
    donationLink: "https://dkvsturkiye.ensany.com/campaign/6531",
    contactDetails: {
      website: "https://dkvsturkiye.ensany.com/",
      facebook: "https://web.facebook.com/DQWS.TURKEY",
      instagram: "https://www.instagram.com/dqws.turkey/",
      whatsapp:
        "https://wa.me/+90%20531%20269%2080%2009?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D8%B9%D9%86%D8%AF%D9%8A%20%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1.",
      phoneNumbers: ["+905312698009"],
      location: {
        text: "Kayabaşı mahallesi sefahat sokak no 7/E A1-1 blok Daire 6 Başakşehir İstanbul"
      }
    }
  },
  {
    name: "مؤسسة مرسال للأعمال الخيرية و التنموية",
    local: false,
    country: "مصر",
    logo: {
      src: "/images/associations/mersal-logo.png",
      alt: "Mersal foundation logo"
    },
    donationLink: "https://www.every.org/mersal",
    contactDetails: {
      website: "https://mersal-ngo.org/",
      facebook: "https://web.facebook.com/Mersalfoundation",
      instagram: "https://www.instagram.com/mersal_foundation/",
      twitter: "https://twitter.com/Mersalcharity",
      location: {
        text: "276 شارع عبد السلام عارف، السيوف بحري، قسم المنتزه، الإسكندرية،",
        link: "https://maps.app.goo.gl/UDYXd8nrvfrsbFXi7"
      }
    }
  }
];
