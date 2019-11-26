import React from 'react';

import StoriesCarousel from '../stories_carousel';
import './stories_container.scss';

const stories = [
  {
    id: 'story1',
    title: 'How I survived death.',
    image: '',
    author: 'John Snow',
    avatar: '',
    link: '/stories/how-i-survived-death',
  },
  {
    id: 'story2',
    title: 'One day I woke up, and I realized that I was dead a bit.',
    image: '',
    author: 'John Snow',
    avatar: '',
    link: '/stories/one-day-i-woke-up-and-i-realized',
  },
  {
    id: 'story3',
    title: 'How I survived death.',
    image: '',
    author: 'John Snow',
    avatar: '',
    link: '/stories/how-i-survived-death',
  },
];

export const StoriesContainer = () => (
  <div className='page-stories'>
    <section className='page-stories-hero'>
      <h1>Stories</h1>
    </section>

    <StoriesCarousel stories={stories} title='Latest' />
    <StoriesCarousel stories={stories} title="Editor's Picks" />
  </div>
);

export default StoriesContainer;
