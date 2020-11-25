import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Taylor Salzman UX Desiner', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'My Portfolio Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Taylor Salzman',
  subtitle: 'I am a User Experience Researcher and Designer',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1N3wA8hCD62Yco_SbyU-jbHFxX7b6-jCY/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cs1.png',
    title: 'Wildfired UX Case Study',
    info:
      'Wildfired is a mobile application designed to provide a one stop shop of users living near areas prone to wildfires.',
    info2:
      'Users can get accurate forecasts of a fires trajectory, have easy access to a wealth of information on fire preparation and emergency planning, and will be able to warn locacl residents and authorities about observed potential causes of a fire.',
    url: 'https://xd.adobe.com/view/30ece811-af3c-47d7-80ec-d21a1d42b90d-65bf/',
    repo: 'https://www.behance.net/gallery/103933277/Wildfired-UX-Case-Study', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cs2.png',
    title: 'Front End Development From Scratch',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cs3.png',
    title: 'Graphic Design: Commercial Real Estate',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to work together? Sounds good to me!',
  btn: 'Send me a message',
  email: 'salzmantaylor@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: '',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'behance',
      url: 'https://www.behance.net/taylorsalzman',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/taylorlsalzman/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Taylorlee123',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
