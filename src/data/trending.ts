import { Trending } from '../types/trending';
import Trending1 from '../assets/imgs/trending-1.png';
import Trending2 from '../assets/imgs/trending-2.png';
import Trending3 from '../assets/imgs/trending-3.png';

export const trendings: Trending[] = [
  {
    imageUrl: Trending1,
    title: 'Dolore magna aliqua',
    description:
      'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.',
    createdTimeAgo: '2 mins ago',
  },
  {
    imageUrl: Trending2,
    title: 'Morbi eleifend a libero',
    description:
      'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.',
    createdTimeAgo: '1h ago',
  },
  {
    imageUrl: Trending3,
    title: 'Morbi eleifend a libero',
    description:
      'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.',
    createdTimeAgo: '3h ago',
  },
];
