// Bollywood Stars category
export interface CharadesItem {
  id: string;
  term: string;
  category: string;
  difficulty: number; // 1 = easy, 2 = medium, 3 = hard
  ageBands: string[];
  alt?: string[];
  hints?: string[];
  locale?: string;
  tags?: string[];
}

export const bollywoodStarsItems: CharadesItem[] = [
  // Male Stars - Current Generation (Easy)
  {
    id: "bollywood-stars_shah-rukh-khan",
    term: "Shah Rukh Khan",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["SRK", "King Khan"],
    hints: ["King of Bollywood"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_salman-khan",
    term: "Salman Khan",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Bhaijaan", "Sallu"],
    hints: ["Dabangg star"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_aamir-khan",
    term: "Aamir Khan",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Mr. Perfectionist"],
    hints: ["3 Idiots actor"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_akshay-kumar",
    term: "Akshay Kumar",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Khiladi"],
    hints: ["Action star"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_hrithik-roshan",
    term: "Hrithik Roshan",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Krrish actor"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_ranbir-kapoor",
    term: "Ranbir Kapoor",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Kapoor family"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_ranveer-singh",
    term: "Ranveer Singh",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Energetic actor"],
    locale: "en-IN",
    tags: []
  },

  // Male Legends (Easy)
  {
    id: "bollywood-stars_amitabh-bachchan",
    term: "Amitabh Bachchan",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Big B"],
    hints: ["Angry Young Man"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_abhishek-bachchan",
    term: "Abhishek Bachchan",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Amitabh's son"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_saif-ali-khan",
    term: "Saif Ali Khan",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Nawab"],
    hints: ["Pataudi family"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_ajay-devgn",
    term: "Ajay Devgn",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Singham star"],
    locale: "en-IN",
    tags: []
  },

  // Male Stars - New Generation (Easy to Medium)
  {
    id: "bollywood-stars_varun-dhawan",
    term: "Varun Dhawan",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["David Dhawan's son"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_vicky-kaushal",
    term: "Vicky Kaushal",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Uri actor"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_ayushmann-khurrana",
    term: "Ayushmann Khurrana",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Social message films"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_kartik-aaryan",
    term: "Kartik Aaryan",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Romantic comedy star"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_tiger-shroff",
    term: "Tiger Shroff",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Action and dance"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_rajkummar-rao",
    term: "Rajkummar Rao",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Versatile actor"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_sidharth-malhotra",
    term: "Sidharth Malhotra",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Student of the Year"],
    locale: "en-IN",
    tags: []
  },

  // Male Stars - 90s and 2000s (Medium)
  {
    id: "bollywood-stars_sunny-deol",
    term: "Sunny Deol",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Dharmendra's son"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_bobby-deol",
    term: "Bobby Deol",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Deol family"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_govinda",
    term: "Govinda",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Chi Chi"],
    hints: ["Comedy and dance king"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_sanjay-dutt",
    term: "Sanjay Dutt",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Sanju Baba"],
    hints: ["Munna Bhai"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_arshad-warsi",
    term: "Arshad Warsi",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Circuit from Munna Bhai"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_paresh-rawal",
    term: "Paresh Rawal",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Character actor"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_nawazuddin-siddiqui",
    term: "Nawazuddin Siddiqui",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Method actor"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_pankaj-tripathi",
    term: "Pankaj Tripathi",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Character actor"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_irrfan-khan",
    term: "Irrfan Khan",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["International star"],
    locale: "en-IN",
    tags: []
  },

  // Male Legends - Golden Era (Medium to Hard)
  {
    id: "bollywood-stars_rajesh-khanna",
    term: "Rajesh Khanna",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: ["Kaka"],
    hints: ["First superstar"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_dharmendra",
    term: "Dharmendra",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["He-Man"],
    hints: ["Sholay's Veeru"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_jeetendra",
    term: "Jeetendra",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: ["Jumping Jack"],
    hints: ["White shoes"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_rishi-kapoor",
    term: "Rishi Kapoor",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: ["Chintu"],
    hints: ["Kapoor family legend"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_anil-kapoor",
    term: "Anil Kapoor",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Lakhan"],
    hints: ["Slumdog Millionaire"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_jackie-shroff",
    term: "Jackie Shroff",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: ["Jaggu Dada"],
    hints: ["Tiger's father"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_mithun-chakraborty",
    term: "Mithun Chakraborty",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: ["Mithun Da"],
    hints: ["Disco Dancer"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_manoj-bajpayee",
    term: "Manoj Bajpayee",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Intense actor"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_boman-irani",
    term: "Boman Irani",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Character actor"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_shatrughan-sinha",
    term: "Shatrughan Sinha",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: ["Shotgun"],
    hints: ["Khamosh!"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_dev-anand",
    term: "Dev Anand",
    category: "bollywood-stars",
    difficulty: 3,
    ageBands: ["18+"],
    alt: [],
    hints: ["Evergreen hero"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_dilip-kumar",
    term: "Dilip Kumar",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: ["Tragedy King"],
    hints: ["Legendary actor"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_raj-kapoor",
    term: "Raj Kapoor",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: ["Showman"],
    hints: ["Kapoor dynasty founder"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_rajendra-kumar",
    term: "Rajendra Kumar",
    category: "bollywood-stars",
    difficulty: 3,
    ageBands: ["18+"],
    alt: ["Jubilee Kumar"],
    hints: ["Golden era star"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_shashi-kapoor",
    term: "Shashi Kapoor",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Mere paas maa hai"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_feroz-khan",
    term: "Feroz Khan",
    category: "bollywood-stars",
    difficulty: 3,
    ageBands: ["18+"],
    alt: [],
    hints: ["Stylish actor-director"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_vinod-khanna",
    term: "Vinod Khanna",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Handsome star"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_akshaye-khanna",
    term: "Akshaye Khanna",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Vinod Khanna's son"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_suniel-shetty",
    term: "Suniel Shetty",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: ["Anna"],
    hints: ["Action star"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_arjun-rampal",
    term: "Arjun Rampal",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Model turned actor"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_emraan-hashmi",
    term: "Emraan Hashmi",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: ["Serial Kisser"],
    hints: ["Romantic thriller star"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_john-abraham",
    term: "John Abraham",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Action hero"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_shahid-kapoor",
    term: "Shahid Kapoor",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Kapoor family"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_sushant-singh-rajput",
    term: "Sushant Singh Rajput",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["MS Dhoni actor"],
    locale: "en-IN",
    tags: []
  },

  // Female Stars - Current Generation (Easy)
  {
    id: "bollywood-stars_kareena-kapoor-khan",
    term: "Kareena Kapoor Khan",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Bebo"],
    hints: ["Kapoor family"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_priyanka-chopra",
    term: "Priyanka Chopra",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["PeeCee"],
    hints: ["Global star"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_deepika-padukone",
    term: "Deepika Padukone",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Padmaavat actress"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_katrina-kaif",
    term: "Katrina Kaif",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["British-Indian actress"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_aishwarya-rai",
    term: "Aishwarya Rai",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Aishwarya Rai Bachchan"],
    hints: ["Miss World 1994"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_madhuri-dixit",
    term: "Madhuri Dixit",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Dhak Dhak Girl"],
    hints: ["Dancing queen"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_juhi-chawla",
    term: "Juhi Chawla",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["90s romantic star"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_raveena-tandon",
    term: "Raveena Tandon",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["90s actress"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_karisma-kapoor",
    term: "Karisma Kapoor",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: ["Lolo"],
    hints: ["Kapoor family"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_preity-zinta",
    term: "Preity Zinta",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Dimpled beauty"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_kajol",
    term: "Kajol",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["DDLJ actress"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_rani-mukerji",
    term: "Rani Mukerji",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Kuch Kuch Hota Hai"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_vidya-balan",
    term: "Vidya Balan",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Strong female roles"],
    locale: "en-IN",
    tags: []
  },

  // Female Stars - New Generation (Easy to Medium)
  {
    id: "bollywood-stars_alia-bhatt",
    term: "Alia Bhatt",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Mahesh Bhatt's daughter"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_kiara-advani",
    term: "Kiara Advani",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Kabir Singh actress"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_shraddha-kapoor",
    term: "Shraddha Kapoor",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Aashiqui 2 star"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_kriti-sanon",
    term: "Kriti Sanon",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Heropanti actress"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_disha-patani",
    term: "Disha Patani",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["MS Dhoni actress"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_parineeti-chopra",
    term: "Parineeti Chopra",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Priyanka's cousin"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_anushka-sharma",
    term: "Anushka Sharma",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Producer and actress"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_taapsee-pannu",
    term: "Taapsee Pannu",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Pink actress"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_bhumi-pednekar",
    term: "Bhumi Pednekar",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Dum Laga Ke Haisha"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_tabu",
    term: "Tabu",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Intense actress"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_sushmita-sen",
    term: "Sushmita Sen",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Miss Universe 1994"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_lara-dutta",
    term: "Lara Dutta",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Miss Universe 2000"],
    locale: "en-IN",
    tags: []
  },

  // Female Legends (Medium to Hard)
  {
    id: "bollywood-stars_hema-malini",
    term: "Hema Malini",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: ["Dream Girl"],
    hints: ["Sholay's Basanti"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_rekha",
    term: "Rekha",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Timeless beauty"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_sridevi",
    term: "Sridevi",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["First female superstar"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_jaya-bachchan",
    term: "Jaya Bachchan",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: ["Jaya Bhaduri"],
    hints: ["Amitabh's wife"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_zeenat-aman",
    term: "Zeenat Aman",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Western style icon"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_sharmila-tagore",
    term: "Sharmila Tagore",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Saif's mother"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_waheeda-rehman",
    term: "Waheeda Rehman",
    category: "bollywood-stars",
    difficulty: 3,
    ageBands: ["18+"],
    alt: [],
    hints: ["Golden era actress"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_nargis",
    term: "Nargis",
    category: "bollywood-stars",
    difficulty: 3,
    ageBands: ["18+"],
    alt: [],
    hints: ["Mother India"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_meena-kumari",
    term: "Meena Kumari",
    category: "bollywood-stars",
    difficulty: 3,
    ageBands: ["18+"],
    alt: ["Tragedy Queen"],
    hints: ["Pakeezah star"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_nutan",
    term: "Nutan",
    category: "bollywood-stars",
    difficulty: 3,
    ageBands: ["18+"],
    alt: [],
    hints: ["Classic actress"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_madhubala",
    term: "Madhubala",
    category: "bollywood-stars",
    difficulty: 3,
    ageBands: ["18+"],
    alt: [],
    hints: ["Mughal-e-Azam beauty"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_neetu-kapoor",
    term: "Neetu Kapoor",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: ["Neetu Singh"],
    hints: ["Rishi Kapoor's wife"],
    locale: "en-IN",
    tags: []
  },

  // Female Stars - Star Kids and New Gen (Medium)
  {
    id: "bollywood-stars_sonam-kapoor",
    term: "Sonam Kapoor",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Fashion icon"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_sara-ali-khan",
    term: "Sara Ali Khan",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Saif's daughter"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_janhvi-kapoor",
    term: "Janhvi Kapoor",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Sridevi's daughter"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_nora-fatehi",
    term: "Nora Fatehi",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Dance sensation"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_yami-gautam",
    term: "Yami Gautam",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Vicky Donor actress"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_radhika-apte",
    term: "Radhika Apte",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Netflix queen"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_konkona-sen-sharma",
    term: "Konkona Sen Sharma",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Parallel cinema"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_kangana-ranaut",
    term: "Kangana Ranaut",
    category: "bollywood-stars",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Queen actress"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_kriti-kharbanda",
    term: "Kriti Kharbanda",
    category: "bollywood-stars",
    difficulty: 3,
    ageBands: ["18+"],
    alt: [],
    hints: ["Housefull 4 actress"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_vaani-kapoor",
    term: "Vaani Kapoor",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Shuddh Desi Romance"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "bollywood-stars_sunny-leone",
    term: "Sunny Leone",
    category: "bollywood-stars",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Item number queen"],
    locale: "en-IN",
    tags: []
  },
];

export default bollywoodStarsItems;
