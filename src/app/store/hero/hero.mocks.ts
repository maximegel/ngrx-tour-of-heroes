import uniqueId from 'lodash/uniqueId';
import { Hero } from './hero.entity';

const captainAmerica: Hero = {
  id: uniqueId(),
  slug: 'captain-america',
  name: 'Captain America',
  avatar: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_crd_03.jpg',
  thumbnail: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_crd_03.jpg',
  coverImage: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_mas_dsk_02.jpg',
  alterEgo: {
    displayName: 'Steve Rogers',
    firstName: 'Steve',
    lastName: 'Rogers',
  },
  about:
    'Recipient of the Super-Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the' +
    "world's mightiest heroes and the leader of the Avengers.",
  stats: {
    durability: 3,
    energy: 1,
    fighting: 6,
    intelligence: 3,
    speed: 2,
    strength: 3,
  },
  abilities: [
    {
      name: 'Speed & stamina',
      image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_pwr_02.jpg',
      description:
        'His speed and stamina increased by the Super-Soldier serum, Captain America is usually the first leading ' +
        'the way into battle, with few able to keep up with him.',
    },
  ],
  connections: [],
};
const ironMan: Hero = {
  id: uniqueId(),
  slug: 'iron-man',
  name: 'Iron man',
  avatar: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_03.jpg',
  thumbnail: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_03.jpg',
  coverImage: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_mas_dsk_02.jpg',
  alterEgo: {
    displayName: 'Tony Stark',
    firstName: 'Tony',
    lastName: 'Stark',
  },
  about:
    "Genius. Billionaire. Philanthropist. Tony Stark's confidence is only matched by his high-flying abilities as " +
    'the hero called Iron Man.',
  stats: {
    durability: 6,
    energy: 6,
    fighting: 4,
    intelligence: 6,
    speed: 5,
    strength: 6,
  },
  abilities: [
    {
      name: 'Suit up',
      image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_mnt_01_1.jpg',
      description:
        'In a cave in Afghanistan, Tony Stark and Ho Yinsen developed the first Iron Man suit, which Stark used to ' +
        'escape his captors.',
    },
  ],
  connections: [],
};
const thor: Hero = {
  id: uniqueId(),
  slug: 'thor',
  name: 'Thor',
  avatar: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_crd_03.jpg',
  thumbnail: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_crd_03.jpg',
  coverImage: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_mas_dsk_02_0.jpg',
  about:
    'The son of Odin uses his mighty abilities as the God of Thunder to protect his home Asgard and planet Earth alike.',
  stats: {
    durability: 6,
    energy: 6,
    fighting: 4,
    intelligence: 2,
    speed: 7,
    strength: 7,
  },
  abilities: [
    {
      name: 'Worthy of the hammer',
      image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_pwr_02.jpg',
      description:
        'His hammer and power stripped from him by Odin, Thor found himself in a small New Mexico town, where he ' +
        'proved he was worthy in a battle against the Destroyer.',
    },
  ],
  connections: [],
};

captainAmerica.connections?.push(ironMan, thor);
ironMan.connections?.push(captainAmerica, thor);
thor.connections?.push(captainAmerica, ironMan);

export const HEROES = new Map<string | number, Hero>([
  [captainAmerica.id, captainAmerica],
  [ironMan.id, ironMan],
  [thor.id, thor],
]);
