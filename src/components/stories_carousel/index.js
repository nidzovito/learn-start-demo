import React from 'react';
import Swiper from 'react-id-swiper';
import { Autoplay } from 'swiper/js/swiper.esm.js';
import { Link } from 'react-router-dom';

import './stories_carousel.scss';

export const StoriesCarousel = ({ title, stories }) => {
  const swiperParams = {
    modules: [Autoplay],
    spaceBetween: 16,
    slidesPerView: 'auto',
    speed: 1000,
  };

  return (
    <section className='stories-carousel container-fluid'>
      <h2>{title}</h2>

      <Swiper {...swiperParams}>
        {stories.map(story => (
          <Link to={story.link} key={story.id}>
            <div
              className='card-image'
              style={{ backgroundImage: `url(${story.image})` }}
            />
            <div className='card-footer'>
              <h3>{story.title}</h3>
              <div className='card-author'>
                <div
                  className='card-avatar'
                  style={{ backgroundImage: `url(${story.avatar})` }}
                />
                <span>{story.author}</span>
              </div>
            </div>
          </Link>
        ))}
      </Swiper>
    </section>
  );
};

export default StoriesCarousel;
