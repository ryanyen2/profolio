import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ryan YEN | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'This is my profolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Nice to meet you, I am ',
  name: 'Ryan',
  subtitle: 'A Software Engineer',
  cta: 'See More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.linkedin.com/in/ryan-yen/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'awsome_day.png',
    title: 'AWSome Day at CityU',
    info:
      'On behalf of CityU and cooperate with AWS Educate to organize an online event called AWSome Day at CityU. There are more than 250 people participated in that events and were all engaged in that conference.',
    info2: '',
    url: 'https://cityu-hall2.github.io/AWSomeDay/AWS.html',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cityHack.png',
    title: 'CityHack Competition',
    info: 'create the website and the gallery function for CityHack 2020',
    info2: '',
    url: ' https://cityu-hall2.github.io/cityhack/index.html',
    repo: 'https://github.com/cityu-hall2/cityu-hall2.github.io/tree/master/cityhack', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hall2.png',
    title: 'CityU Hall 2 Website',
    info: 'City University Residence: Hall 2 website maintainance and buld up',
    info2: '',
    url: 'https://cityu-hall2.github.io/index.html',
    repo: 'https://github.com/cityu-hall2/cityu-hall2.github.io', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mcHack.png',
    title: 'MC-Hackathon',
    info:
      'MC-Hackathon is one of the biggest hackathon in Taiwan holding per year. We formed a team of 8 people and develop the website together, aims to provide user the best experience',
    info2: '',
    url:
      'https://2019.meichuhackathon.org/?fbclid=IwAR2ak7wxceajFShyWs8-EQ11NTCx2dEkp3v9YG8MJzTM3ax3dmPHOavdCIE',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'r6Map.png',
    title: 'R6 Helper Project',
    info:
      'Creating a website for online video Game Rainbow 6, aims to provide the most professional map tool for players',
    info2: '',
    url: '',
    repo: 'https://github.com/CrzongA/R6helper', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'IEEE-HKN.png',
    title: 'IEEE-HKN Section',
    info:
      'Designated to maintain and build up the website for IEEE HKN Section, and form up a web dev team.',
    info2: '',
    url: 'https://r10.ieee.org/hk/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ryanyen2-c@my.cityu.edu.hk',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ryan-yen/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ryanyen2',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
