import React from 'react';
import Slider from 'react-slick';
import Card from '../pages/Card';

export default function PopularDestinations({ cards }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div style={{ padding: '40px 20px', backgroundColor: '#f5f5f5' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Популярные направления</h2>
      <Slider {...sliderSettings}>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} img={card.img} />
        ))}
      </Slider>
    </div>
  );
}

