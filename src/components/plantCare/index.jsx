import React from 'react';

import './style.css';

function PlantCare() {
  return(
    <div className="plantcare">
      <ul className="plantcare__list">

        <li className="plantcare__item">
          <h1 className="plantcare__title">Lesson 1</h1>
          <div className="plantcare__video">
            <iframe
              width={'100%'}
              height={'100%'}
              src={'https://www.youtube.com/embed/5ovZ5mx8woA'}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
          <p className="plantcare__text">Best in hanging baskets. Prefers medium to high light.Best in hanging baskets. Prefers medium to high light.Best in hanging baskets. Prefers medium to high light.Best in hanging baskets. Prefers medium to high light.</p>
        </li>

        <li className="plantcare__item">
          <h1 className="plantcare__title">Lesson 2</h1>
          <div className="plantcare__video">
            <iframe
              width={'100%'}
              height={'100%'}
              src={'https://www.youtube.com/embed/VQWg7zkEq9o'}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
          <p className="plantcare__text">Best in hanging baskets. Prefers medium to high light.Best in hanging baskets. Prefers medium to high light.Best in hanging baskets. Prefers medium to high light.Best in hanging baskets. Prefers medium to high light.</p>
        </li>

        <li className="plantcare__item">
          <h1 className="plantcare__title">Lesson 3</h1>
          <div className="plantcare__video">
            <iframe
              width={'100%'}
              height={'100%'}
              src={'https://www.youtube.com/embed/-IicPhwr0Fo'}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
          <p className="plantcare__text">Best in hanging baskets. Prefers medium to high light.Best in hanging baskets. Prefers medium to high light.Best in hanging baskets. Prefers medium to high light.Best in hanging baskets. Prefers medium to high light.</p>
        </li>

        <li className="plantcare__item">
          <h1 className="plantcare__title">Lesson 4</h1>
          <div className="plantcare__video">
            <iframe
              width={'100%'}
              height={'100%'}
              src={'https://www.youtube.com/embed/w8MIGc8PYIk'}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
          <p className="plantcare__text">Best in hanging baskets. Prefers medium to high light.Best in hanging baskets. Prefers medium to high light.Best in hanging baskets. Prefers medium to high light.Best in hanging baskets. Prefers medium to high light.</p>
        </li>

      </ul>
    </div>
  )
}

export default PlantCare;
