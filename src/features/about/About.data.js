import theme from "../../styles/theme";

export const SECTIONS = [
  { id: "introduction", label: "Introduction" },
  { id: "work-experience", label: "Work Experience" },
  { id: "training", label: "Training" },
  { id: "contests", label: "Contests" },
];

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/wagno.ink/",
    hoverColor: theme.palette.instagram.main,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/351910848391",
    hoverColor: theme.palette.whatsapp.main,
  },
  {
    label: "Email",
    href: "mailto:Wagno.ink@icloud.com",
    hoverColor: theme.palette.accent.main,
  },
];

export const workExperience = [
  {
    studio: "Katsu Tattoo Studio",
    role: "Resident Artist",
    period: "2025 – Present",
    location: "Porto, Portugal",
    current: true,
    highlights: [
      "Resident tattoo artist in Porto, specialising in realism, fine line, and blackwork.",
      "Guest artist at Sorry Mon Tattoo and Golem Tattoo (Spain) and Lorenzo Tattoo (Lisbon).",
    ],
  },
  {
    studio: "Golem Tattoo & Sorry Mon Tattoo",
    role: "Guest Artist",
    period: "Nov 2024",
    location: "Spain",
    current: false,
    highlights: [
      "First European guest appearances, laid the groundwork for the move to Portugal.",
    ],
  },
  {
    studio: "Bokatattooing — Eduardo's Studio",
    role: "Guest Artist",
    period: "2023",
    location: "Brazil",
    current: false,
    highlights: [
      "Collaborated with Eduardo (Bokatattooing), one of Brazil's leading coloured-realism artists.",
      "Competed in two conventions, winning 1st in Whipshading and 3rd in Blackwork.",
    ],
  },
  {
    studio: "Gerson Feques Studio",
    role: "Guest Artist",
    period: "2021 – 2022",
    location: "Brazil",
    current: false,
    highlights: [
      "Competed in conventions and won 1st place in Fine Line (2021) and 1st place in Anime (2022).",
      "Deepened technical skills in realism under studio mentorship.",
    ],
  },
  {
    studio: "Independent Studio",
    role: "Owner & Tattoo Artist",
    period: "2018 – 2021",
    location: "São Luís, Brazil",
    current: false,
    highlights: [
      "Opened his own studio in São Luís after returning from Goiânia.",
      "Built a client base from scratch, evolving from foundational work to technically complex pieces.",
      "Trained in realist techniques under Tiago Balbo, marking a turning point in style and quality.",
    ],
  },
];

export const training = [
  {
    mentor: "Tiago Balbo",
    focus: "Realist Tattoo Techniques",
    period: "2019 – 2020",
    location: "Brazil",
    description:
      "Intensive mentorship in realism, the foundation of my signature style. Tiago introduced the technical rigour that shaped everything that followed.",
  },
  {
    mentor: "Beatriz",
    focus: "Tattoo Fundamentals",
    period: "Late 2017",
    location: "Goiânia, Brazil",
    description:
      "First steps in tattooing, line work, shading theory, and practice on artificial skin. Two months of daily training that started it all.",
  },
];

export const contests = [
  {
    name: "Blackwork",
    event: "Convention with Bokatattooing",
    year: "2023",
    result: "3rd Place",
    place: 3,
  },

  {
    name: "Whipshading",
    event: "Convention with Bokatattooing",
    year: "2022",
    result: "1st Place",
    place: 1,
  },
  {
    name: "Anime",
    event: "Gerson Feques Convention",
    year: "2022",
    result: "1st Place",
    place: 1,
  },
  {
    name: "Fine Line",
    event: "Gerson Feques Convention",
    year: "2021",
    result: "1st Place",
    place: 1,
  },
];

export const prizeImages = [
  {
    src: "/Prizes/Prize1.webp",
    award: "Anime",
    result: "1st Place",
    year: "2022",
  },
  {
    src: "/Prizes/Prize2.webp",
    award: "Whipshading",
    result: "1st Place",
    year: "2022",
  },
  {
    src: "/Prizes/Prize3.webp",
    award: "Fine Line",
    result: "1st Place",
    year: "2021",
  },
];
