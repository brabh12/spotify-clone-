import {
  RiHome2Line,
  RiSearchLine,
  RiPlayListAddFill,
  RiPlayListFill,
} from 'react-icons/ri';
import { BiLibrary } from 'react-icons/bi';
import { IoIosHeartEmpty } from 'react-icons/io';

const navMenu = [
  {
    name: 'Home',
    icon: RiHome2Line,
    route: '/',
  },
  {
    name: 'Search',
    icon: RiSearchLine,
    route: '/search',
  },
  {
    name: 'Your Library',
    icon: BiLibrary,
    route: '/library',
  },
];

const musicMenu = [
  {
    name: 'Create Playlist',
    icon: RiPlayListAddFill,
    route: '/',
  },
  {
    name: 'Favorites',
    icon: IoIosHeartEmpty,
    route: '/favorites',
  },
];

export { navMenu, musicMenu };
