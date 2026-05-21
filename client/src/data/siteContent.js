export const site = {

  name: 'Dhonjen Arts',

  artist: 'Dhonjen Thakuri',

  location: 'New York — United States',

  origin: 'Nepal',

  email: 'dhonzen@gmail.com',

  website: 'https://www.dhonjenarts.com',

  tagline: 'Painter and modern artist',

  intro:

    'I love painting abstract themed arts and colorful, vivid, optimistic pieces.',

};



export const aboutBio = `I am a dedicated artist originally from Nepal, now based in New York City, with over fifteen years of experience in painting and art. My creative journey includes exhibitions, collaborations, serving as a judge for school art contests, and teaching children as an art instructor in Pokhara, Nepal, and Brooklyn, New York.



I specialize in creating custom wall art that transforms spaces for individuals, businesses, and schools with striking murals and designs that reflect personality and purpose. On canvas, I blend semi-abstract, abstract, and contemporary styles, crafting vibrant, tailored pieces that range from bold statements to subtle accents.



My passion for teaching shines through in hands-on art classes, where I inspire primary school kids to explore their creativity with confidence. Additionally, I offer personalized art—family portraits, individual portraits, kids' room paintings, and more—bringing heartfelt detail to every bespoke project, ensuring each piece resonates deeply with my clients.`;



export const services = [

  {

    title: 'Wall Art',

    description:

      'I specialize in creating custom wall art that transforms spaces for individuals, businesses, and schools. Whether it\'s a striking mural for a home, a branded design for a company, or an inspiring piece for a classroom, I work closely with my clients to bring their ideas to life. My passion lies in crafting unique, eye-catching art that reflects personality and purpose, making every wall a storytelling canvas.',

  },

  {

    title: 'Art Class',

    description:

      'With a deep love for teaching, I\'ve had the privilege of leading art classes for primary school children in Pokhara, Nepal, and Brooklyn, New York. Through fun, hands-on group sessions, I\'ve guided young artists in exploring their creativity and building confidence with every project. My experience in diverse settings has shaped my approach, making art an exciting and accessible adventure for kids.',

  },

  {

    title: 'Personalized',

    description:

      'I offer personalized art that celebrates the unique stories of my clients, creating family portraits, individual portraits, kids\' room paintings, and more based on their specific needs. Whether it\'s capturing a cherished moment, designing a whimsical piece for a child\'s space, or fulfilling a custom request, I bring heart and detail to every project. My goal is to craft meaningful, bespoke artwork that connects deeply with those who see it.',

  },

];



const aboutImage = (filename) => `/images/about/${encodeURIComponent(filename)}`;
const galleryImage = (filename) => `/images/gallery/${encodeURIComponent(filename)}`;

/** About page images — files in client/public/images/about/ */
export const aboutImages = {
  portrait: aboutImage('DhonjenProfile.jpg'),
  /** Left column beside “Few words about me” — from gallery */
  bioFeatured: galleryImage('Dhonjen (23).jpg'),
  wallArt: aboutImage('wallArt.jpg'),
  artClass: aboutImage('artClass.jpg'),
  personalized: aboutImage('personlizedArt.png'),
  /** Van Gogh quote backdrop — free Unsplash (museum / painting) */
  vanGogh:
    'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80',
};

export const aboutHighlights = [
  { value: '15+', label: 'Years painting' },
  { value: '2', label: 'Continents taught in' },
  { value: 'NYC', label: 'Based in New York' },
  { value: 'Nepal', label: 'Where it began' },
];

export const quotes = [

  {

    text: 'Great things are done by a series of small things brought together.',

    author: 'Vincent Van Gogh',

  },

  {

    text: 'The purpose of art is washing the dust of daily life off our souls.',

    author: 'Pablo Picasso',

  },

  {

    text: 'Painting is just another way of keeping a diary.',

    author: 'Pablo Picasso',

  },

];


