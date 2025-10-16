// Iconic Characters category
export interface CharadesItem {
  id: string;
  term: string;
  category: string;
  difficulty: number;
  ageBands: string[];
  alt?: string[];
  hints?: string[];
  locale?: string;
  tags?: string[];
}

export const iconicCharactersItems: CharadesItem[] = [
  // DDLJ Characters (Easy - Everyone knows)
  {
    id: "iconic-characters_raj-ddlj",
    term: "Raj",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Raj Malhotra"],
    hints: ["DDLJ, SRK"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_simran-ddlj",
    term: "Simran",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Simran Singh"],
    hints: ["DDLJ, Kajol"],
    locale: "en-IN",
    tags: []
  },

  // Munna Bhai Series (Easy)
  {
    id: "iconic-characters_munna-bhai",
    term: "Munna Bhai",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Munna"],
    hints: ["Sanjay Dutt, MBBS"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_circuit",
    term: "Circuit",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Munna Bhai's friend"],
    locale: "en-IN",
    tags: []
  },

  // Recent Popular Characters (Easy to Medium)
  {
    id: "iconic-characters_kabir-singh",
    term: "Kabir Singh",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Shahid Kapoor"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_geet",
    term: "Geet",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Geet Dhillon"],
    hints: ["Jab We Met, Kareena"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_poo",
    term: "Poo",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Pooja"],
    hints: ["K3G, Kareena"],
    locale: "en-IN",
    tags: []
  },

  // YJHD Characters (Easy)
  {
    id: "iconic-characters_bunny-yjhd",
    term: "Bunny",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Kabir Thapar"],
    hints: ["YJHD, Ranbir"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_naina-talwar",
    term: "Naina Talwar",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Naina"],
    hints: ["YJHD, Deepika"],
    locale: "en-IN",
    tags: []
  },

  // 3 Idiots Characters (Easy)
  {
    id: "iconic-characters_rancho",
    term: "Rancho",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Phunsukh Wangdu"],
    hints: ["3 Idiots, Aamir Khan"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_virus",
    term: "Virus",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Viru Sahastrabuddhe"],
    hints: ["3 Idiots principal"],
    locale: "en-IN",
    tags: []
  },

  // Hera Pheri Characters (Easy)
  {
    id: "iconic-characters_baburao",
    term: "Baburao",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Baburao Ganpatrao Apte"],
    hints: ["Hera Pheri, Paresh Rawal"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_raju-hera-pheri",
    term: "Raju",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Hera Pheri, Akshay Kumar"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_shyam",
    term: "Shyam",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Hera Pheri, Suniel Shetty"],
    locale: "en-IN",
    tags: []
  },

  // Dabangg (Easy)
  {
    id: "iconic-characters_chulbul-pandey",
    term: "Chulbul Pandey",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Robinhood Pandey"],
    hints: ["Dabangg, Salman"],
    locale: "en-IN",
    tags: []
  },

  // Tere Naam (Easy)
  {
    id: "iconic-characters_radhe",
    term: "Radhe",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Tere Naam, Salman"],
    locale: "en-IN",
    tags: []
  },

  // KKHH Characters (Easy)
  {
    id: "iconic-characters_rahul-kkhh",
    term: "Rahul",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Rahul Khanna"],
    hints: ["KKHH, SRK"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_anjali-kkhh",
    term: "Anjali",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["KKHH, Kajol"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_tina-kkhh",
    term: "Tina",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["KKHH, Rani"],
    locale: "en-IN",
    tags: []
  },

  // Sholay Characters (Easy - Iconic)
  {
    id: "iconic-characters_basanti",
    term: "Basanti",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Sholay, Hema Malini"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_gabbar-singh",
    term: "Gabbar Singh",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Gabbar"],
    hints: ["Sholay villain"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_veeru",
    term: "Veeru",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Sholay, Dharmendra"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_thakur",
    term: "Thakur",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: ["Thakur Baldev Singh"],
    hints: ["Sholay, armless"],
    locale: "en-IN",
    tags: []
  },

  // Mr. India Characters (Easy)
  {
    id: "iconic-characters_mogambo",
    term: "Mogambo",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Mr. India villain"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_mr-india",
    term: "Mr. India",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Arun Verma"],
    hints: ["Invisible hero"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_seema",
    term: "Seema",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Mr. India, Sridevi"],
    locale: "en-IN",
    tags: []
  },

  // Andaz Apna Apna (Easy to Medium)
  {
    id: "iconic-characters_crime-master-gogo",
    term: "Crime Master Gogo",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Gogo"],
    hints: ["Andaz Apna Apna"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_amar-aaa",
    term: "Amar",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Andaz Apna Apna, Aamir"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_prem-aaa",
    term: "Prem",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Andaz Apna Apna, Salman"],
    locale: "en-IN",
    tags: []
  },

  // Multiple Film Characters
  {
    id: "iconic-characters_raj-malhotra",
    term: "Raj Malhotra",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Raj"],
    hints: ["Multiple SRK films"],
    locale: "en-IN",
    tags: []
  },

  // Devdas Characters (Easy)
  {
    id: "iconic-characters_devdas",
    term: "Devdas",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Tragic lover, SRK"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_paro",
    term: "Paro",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Parvati"],
    hints: ["Devdas, Aishwarya"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_chandramukhi",
    term: "Chandramukhi",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Devdas, Madhuri"],
    locale: "en-IN",
    tags: []
  },

  // Action Heroes (Easy)
  {
    id: "iconic-characters_karan-arjun",
    term: "Karan Arjun",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["SRK and Salman"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_singham",
    term: "Singham",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Bajirao Singham"],
    hints: ["Ajay Devgn cop"],
    locale: "en-IN",
    tags: []
  },

  // Historical Characters (Medium)
  {
    id: "iconic-characters_bajirao",
    term: "Bajirao",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Bajirao Mastani, Ranveer"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_mastani",
    term: "Mastani",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Bajirao Mastani, Deepika"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_alauddin-khilji",
    term: "Alauddin Khilji",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: ["Khilji"],
    hints: ["Padmaavat villain, Ranveer"],
    locale: "en-IN",
    tags: []
  },

  // Veer-Zaara (Easy)
  {
    id: "iconic-characters_veer",
    term: "Veer",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Squadron Leader Veer Pratap Singh"],
    hints: ["Veer-Zaara, SRK"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_zaara",
    term: "Zaara",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Zaara Hayat Khan"],
    hints: ["Veer-Zaara, Preity"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_meera-veer-zaara",
    term: "Meera",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Veer-Zaara lawyer, Rani"],
    locale: "en-IN",
    tags: []
  },

  // Thriller Characters (Medium)
  {
    id: "iconic-characters_rahul-mehra-darr",
    term: "Rahul Mehra",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Darr obsessed lover, SRK"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_raj-aryan",
    term: "Raj Aryan",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Mohabbatein, SRK"],
    locale: "en-IN",
    tags: []
  },

  // HDDCS Characters (Medium)
  {
    id: "iconic-characters_nandini-hddcs",
    term: "Nandini",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Hum Dil De Chuke Sanam, Aishwarya"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_sameer-hddcs",
    term: "Sameer",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["HDDCS, Salman"],
    locale: "en-IN",
    tags: []
  },

  // Wake Up Sid (Medium)
  {
    id: "iconic-characters_aisha-wus",
    term: "Aisha",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Wake Up Sid, Konkona"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_sid-mehra",
    term: "Sid Mehra",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: ["Sid"],
    hints: ["Wake Up Sid, Ranbir"],
    locale: "en-IN",
    tags: []
  },

  // Cocktail (Medium)
  {
    id: "iconic-characters_veronica",
    term: "Veronica",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Cocktail, Deepika"],
    locale: "en-IN",
    tags: []
  },

  // Chennai Express (Easy)
  {
    id: "iconic-characters_meenamma",
    term: "Meenamma",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Chennai Express, Deepika"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_radha-chennai-express",
    term: "Radha",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Chennai Express"],
    locale: "en-IN",
    tags: []
  },

  // Superhero Characters (Easy)
  {
    id: "iconic-characters_ra-one",
    term: "Ra.One",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["SRK villain"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_g-one",
    term: "G.One",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Ra.One hero, SRK"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_pathaan",
    term: "Pathaan",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["SRK spy"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_jawan",
    term: "Jawan",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["SRK double role"],
    locale: "en-IN",
    tags: []
  },

  // Web Series Characters (Medium)
  {
    id: "iconic-characters_gaitonde",
    term: "Gaitonde",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: ["Ganesh Gaitonde"],
    hints: ["Sacred Games, Nawazuddin"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_sartaj-singh",
    term: "Sartaj Singh",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Sacred Games cop"],
    locale: "en-IN",
    tags: []
  },

  // South Indian Crossovers (Easy)
  {
    id: "iconic-characters_pushpa-raj",
    term: "Pushpa Raj",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Pushpa"],
    hints: ["Allu Arjun"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_rocky-bhai",
    term: "Rocky Bhai",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Rocky"],
    hints: ["KGF, Yash"],
    locale: "en-IN",
    tags: []
  },

  // Action Franchise Characters (Easy to Medium)
  {
    id: "iconic-characters_kabir-war",
    term: "Kabir",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["War, Hrithik"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_tiger",
    term: "Tiger",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Ek Tha Tiger, Salman"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_agent-vinod",
    term: "Agent Vinod",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Saif Ali Khan spy"],
    locale: "en-IN",
    tags: []
  },

  // Sports Characters (Easy)
  {
    id: "iconic-characters_kabir-khan-chak-de",
    term: "Kabir Khan",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Coach Kabir"],
    hints: ["Chak De India, SRK"],
    locale: "en-IN",
    tags: []
  },

  // Regional Cinema (Medium)
  {
    id: "iconic-characters_rinku-rajguru",
    term: "Rinku Rajguru",
    category: "iconic-characters",
    difficulty: 3,
    ageBands: ["18+"],
    alt: [],
    hints: ["Sairat"],
    locale: "en-IN",
    tags: []
  },

  // ZNMD Characters (Easy)
  {
    id: "iconic-characters_laila",
    term: "Laila",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["ZNMD, Katrina"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_arjun-znmd",
    term: "Arjun",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["ZNMD, Hrithik"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_farhan-znmd",
    term: "Farhan",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["ZNMD, Farhan Akhtar"],
    locale: "en-IN",
    tags: []
  },

  // Tanu Weds Manu (Medium)
  {
    id: "iconic-characters_tanu",
    term: "Tanu",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: ["Tanuja"],
    hints: ["Tanu Weds Manu, Kangana"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_manu",
    term: "Manu",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: ["Manoj"],
    hints: ["Tanu Weds Manu, R Madhavan"],
    locale: "en-IN",
    tags: []
  },

  // Comedy Characters (Medium)
  {
    id: "iconic-characters_bala-housefull",
    term: "Bala",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Housefull, Akshay"],
    locale: "en-IN",
    tags: []
  },

  // Lagaan Characters (Easy)
  {
    id: "iconic-characters_bhuvan",
    term: "Bhuvan",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Lagaan, Aamir Khan"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_hera-singh",
    term: "Hera Singh",
    category: "iconic-characters",
    difficulty: 3,
    ageBands: ["18+"],
    alt: [],
    hints: ["Lagaan"],
    locale: "en-IN",
    tags: []
  },

  // Taare Zameen Par (Easy)
  {
    id: "iconic-characters_ishaan",
    term: "Ishaan",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Taare Zameen Par kid"],
    locale: "en-IN",
    tags: []
  },

  // Ram Leela (Easy)
  {
    id: "iconic-characters_ram-ram-leela",
    term: "Ram",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Ram Leela, Ranveer"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_leela",
    term: "Leela",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Ram Leela, Deepika"],
    locale: "en-IN",
    tags: []
  },

  // Om Shanti Om (Easy)
  {
    id: "iconic-characters_om",
    term: "Om",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Om Prakash Makhija"],
    hints: ["Om Shanti Om, SRK"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_shanti-priya",
    term: "Shanti Priya",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Om Shanti Om, Deepika"],
    locale: "en-IN",
    tags: []
  },

  // 3 Idiots - Additional
  {
    id: "iconic-characters_raju-rastogi",
    term: "Raju Rastogi",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: ["Raju"],
    hints: ["3 Idiots, Sharman Joshi"],
    locale: "en-IN",
    tags: []
  },

  // Underworld Characters (Medium to Hard)
  {
    id: "iconic-characters_lallan",
    term: "Lallan",
    category: "iconic-characters",
    difficulty: 3,
    ageBands: ["18+"],
    alt: [],
    hints: ["Yuva, Abhishek"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_raghu",
    term: "Raghu",
    category: "iconic-characters",
    difficulty: 3,
    ageBands: ["18+"],
    alt: [],
    hints: ["Company, Ajay Devgn"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_bhiku-mhatre",
    term: "Bhiku Mhatre",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Satya, Manoj Bajpayee"],
    locale: "en-IN",
    tags: []
  },

  // Romantic Drama (Medium)
  {
    id: "iconic-characters_nandini-kank",
    term: "Nandini",
    category: "iconic-characters",
    difficulty: 3,
    ageBands: ["18+"],
    alt: [],
    hints: ["Kabhi Alvida Naa Kehna"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_maya-guzaarish",
    term: "Maya",
    category: "iconic-characters",
    difficulty: 3,
    ageBands: ["18+"],
    alt: [],
    hints: ["Guzaarish, Aishwarya"],
    locale: "en-IN",
    tags: []
  },

  // Queen (Easy)
  {
    id: "iconic-characters_rani-queen",
    term: "Rani",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["Queen, Kangana"],
    locale: "en-IN",
    tags: []
  },

  // Don Series (Easy)
  {
    id: "iconic-characters_vijay-don",
    term: "Vijay",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Don, SRK"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_don",
    term: "Don",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: [],
    hints: ["SRK gangster"],
    locale: "en-IN",
    tags: []
  },

  // Badrinath Ki Dulhania (Medium)
  {
    id: "iconic-characters_badri",
    term: "Badri",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: ["Badrinath Bansal"],
    hints: ["Badrinath Ki Dulhania, Varun"],
    locale: "en-IN",
    tags: []
  },

  // 3 Idiots - Additional
  {
    id: "iconic-characters_farhan-qureshi",
    term: "Farhan Qureshi",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: ["Farhan"],
    hints: ["3 Idiots, R Madhavan"],
    locale: "en-IN",
    tags: []
  },

  // Slumdog Millionaire (Easy)
  {
    id: "iconic-characters_jamal",
    term: "Jamal",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: ["Jamal Malik"],
    hints: ["Slumdog Millionaire"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_latika",
    term: "Latika",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Slumdog Millionaire"],
    locale: "en-IN",
    tags: []
  },

  // Sultan (Easy)
  {
    id: "iconic-characters_sultan-ali-khan",
    term: "Sultan Ali Khan",
    category: "iconic-characters",
    difficulty: 1,
    ageBands: ["18+"],
    alt: ["Sultan"],
    hints: ["Salman wrestler"],
    locale: "en-IN",
    tags: []
  },

  // Baaghi (Medium)
  {
    id: "iconic-characters_ronny",
    term: "Ronny",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Baaghi, Tiger Shroff"],
    locale: "en-IN",
    tags: []
  },

  // Recent Films (Medium to Hard)
  {
    id: "iconic-characters_bala",
    term: "Bala",
    category: "iconic-characters",
    difficulty: 2,
    ageBands: ["18+"],
    alt: [],
    hints: ["Bala film, Ayushmann"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_mili",
    term: "Mili",
    category: "iconic-characters",
    difficulty: 3,
    ageBands: ["18+"],
    alt: [],
    hints: ["Good Luck Jerry, Janhvi"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_rani-mkdn",
    term: "Rani",
    category: "iconic-characters",
    difficulty: 3,
    ageBands: ["18+"],
    alt: [],
    hints: ["Mard Ko Dard Nahi Hota"],
    locale: "en-IN",
    tags: []
  },
  {
    id: "iconic-characters_chintu-tyagi",
    term: "Chintu Tyagi",
    category: "iconic-characters",
    difficulty: 3,
    ageBands: ["18+"],
    alt: [],
    hints: ["Pati Patni Aur Woh, Kartik"],
    locale: "en-IN",
    tags: []
  },
];

export default iconicCharactersItems;
