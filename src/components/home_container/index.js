import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import './home_container.scss';

const contentSections = [
  {
    title: 'Only the hottest startups.',
    subtitle:
      'We hand-select only the hottest startups and our expert copywriters interview and produce every story.',
    image: 'https://cdn.worldvectorlogo.com/logos/react-1.svg',
  },
  {
    title: 'Only the hottest startups.',
    subtitle:
      'We hand-select only the hottest startups and our expert copywriters interview and produce every story.',
    image: 'https://cdn.worldvectorlogo.com/logos/react-1.svg',
  },
  {
    title: 'Only the hottest startups.',
    subtitle:
      'We hand-select only the hottest startups and our expert copywriters interview and produce every story.',
    image: 'https://cdn.worldvectorlogo.com/logos/react-1.svg',
  },
];

export const HomeContainer = () => (
  <div className='page-home'>
    <section className='container-fluid page-home-hero'>
      <h1>Stay hungry. Stay foolish.</h1>
      <p>Learn from the hottest startups in the world.</p>
      <Link to="/stories" className="btn">Read Now</Link>
    </section>

    <section className='page-home-bar'>
      <div className='container'>
        <h2>Smart tools for founders.</h2>
        <p>
          LearnStart is the simplest way for startup founders to discover
          inspiring stories from startup founders all over the world, all in one
          place.
        </p>
      </div>
    </section>

    {contentSections.map((content, index) => (
      <ContentSection key={index} {...content} flipImage={index % 2 === 0} />
    ))}

    <section className='page-home-bar'>
      <div className='container'>
        <h2>Let's get started.</h2>
        <Link to="/stories" className="btn">Read Now</Link>
      </div>
    </section>
  </div>
);

export const ContentSection = ({
  title,
  subtitle,
  image,
  flipImage = false,
}) => (
  <section
    className={cx('content-section container', {
      'content-section--flipped': flipImage,
    })}
  >
    <div className='content-section-image'>
      <div style={{ backgroundImage: `url("${image}")` }} />
    </div>
    <div className='content-section-text'>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  </section>
);

export default HomeContainer;
