import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from './Header.js';
import Footer from './Footer.js';
import HeroSection from '../components/HeroSection.js';


export default function Home() {
  const navigate = useNavigate();
  const formContainerRef = useRef();
  const formRef = useRef();

  const [props, setPosts]=useState([
    {id: 1, title: 'Замок', body: 'Он находиться на юге Эстонии. И я вляется одим из самых красивых'},
    {id: 1, title: 'Замок', body: 'Он находиться на юге Эстонии. И я вляется одим из самых красивых'},
    {id: 1, title: 'Замок', body: 'Он находиться на юге Эстонии. И я вляется одим из самых красивых'},
  ])

  

   const scrollToForm = () => {
    if (formContainerRef.current) {
      formContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
   };

   const handleSubmit = (e) => {
    e.preventDefault();

        if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const query = new URLSearchParams(formData).toString();

    navigate(`/result?${query}`);
};

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cards = [
    { title: 'Таллинн', img: 'https://res.cloudinary.com/djcyhbk2e/image/upload/c_scale,f_auto,q_35,w_1400/v1/gvv/prod/pfdstycd0y9eerxqwztm' },
    { title: 'Пярну', img: 'https://sobory.ru/pic/13150/13196_20150722_031052.jpg' },
    { title: 'Сааремаа', img: 'https://th.bing.com/th/id/R.a46080dedfd11259b2f101db03938a8a?rik=PS6hatTowTtb%2fg&pid=ImgRaw&r=0' },
    { title: 'Тарту', img: 'https://paesibaltici.org/wp-content/uploads/2019/10/tartu-estonia-cosa-vedere-1600x1066.jpg' },
    { title: 'Хийумаа', img: 'https://fs.tonkosti.ru/43/8b/438bpj2zjj6so888skcos84wc.jpg' },
  ];

  return (
    <>
    <Header />
    {/* <HeroSection /> */}
      <div
        style={{
          position: 'relative',
          height: 400,
          fontWeight: 500,
        }}
      >
        <img
          src="/image/main.jpg"
          alt="main"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      

        <h1
          style={{
            color: 'black',
            fontSize: 40,
            textAlign: 'center',
            position: 'absolute',
            bottom: 130,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          Путешествуй вместе с нами
        </h1>

        <p
          style={{
            color: 'black',
            fontSize: 18,
            textAlign: 'center',
            position: 'absolute',
            bottom: 50,
            left: '10%',
            right: '10%',
          }}
        >
          Отправься с нами в удивительный неизведанный мир природы и приключений. Строй свой маршрут уже сегодня.
        </p>

        <button
          onClick={scrollToForm}
          style={{
            position: 'absolute',
            bottom: 30,
            right: 30,
            padding: '10px 20px',
            fontWeight: 'bold',
            backgroundColor: 'blue',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            color:'white',
          }}
        >
          Выбрать поездку
        </button>
      </div>
<div style={{ padding: '40px 20px', backgroundColor: '#f5f5f5' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
          Популярные направления
        </h2>
        <Slider {...sliderSettings}>
  {cards.map((card, index) => (
    <div key={index} style={{ padding: 15 }}> {/* ← отступ между карточками */}
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: 8,
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <img
          src={card.img}
          alt={card.title}
          style={{
            width: '100%',
            height: 150,
            objectFit: 'cover',
          }}
        />
        <div style={{ padding: '10px', textAlign: 'center' }}>
          <h3 style={{ margin: 0 }}>{card.title}</h3>
        </div>
      </div>
    </div>
  ))}
</Slider>
      </div>
   
      <div
        ref={formContainerRef}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px 20px',
        }}
      >
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          style={{
            border: '1px solid black',
            padding: 20,
            borderRadius: 8,
            maxWidth: 400,
            width: '100%',
          }}
        >
          <h2 style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',}}
          >Выбрать поездку</h2>

          <label htmlFor="destination" style={{ fontSize: 13 }}>
            Направление:
          </label>
          <select
            id="destination"
            name="destination"
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '10px',
              marginBottom: '20px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          >
        
            <option value="tallinn">Таллинн</option>
            <option value="estonia">Эстония</option>
            <option value="tartumaa">Тарту</option>
            <option value="narva">Нарва</option>
            <option value="piarumaa">Пярну</option>
            <option value="valgamaa">Валгамаа</option>
            <option value="harjumaa">Харьюмаа</option>
            <option value="hiiumaa">Хийумаа</option>
            <option value="jarvamaa">Ярвамаа</option>
            <option value="saaremaa">Сааремаа</option>
            <option value="raplamaa">Рапламаа</option>
            <option value="pylvamaa">Пылвамаа</option>
            <option value="laeanemaa">Ляэнемаа</option>
            <option value="laene-virumaa">Ляэне-Вирумаа</option>
            <option value="jygevamaa">Йыгевамаа</option>
            <option value="ida-virumaa">Ида-Вирумаа</option>
            <option value="vorumaa">Вырумаа</option>
            <option value="viljandimaa">Вильяндимаа</option>
          </select>

          <label htmlFor="transport" style={{ fontSize: 13 }}>
            Выберите вид транспорта:
          </label>
          <select
            id="transport"
            name="transport"
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '10px',
              marginBottom: '20px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          >
            <option value="car">Автомобиль</option>
            <option value="bus">Автобус</option>
            <option value="train">Поезд</option>
            <option value="ship">Паром</option>
          </select>

          <label htmlFor="vizit" style={{ fontSize: 13 }}>
            Цель поездки:
          </label>
          <select
            id="vizit"
            name="vizit"
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '10px',
              marginBottom: '20px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          >
            <option value="restInNature">Отдых на природе</option>
            <option value="beach">Пляж</option>
            <option value="attractions">Достопримечательности</option>
            <option value="trails">Тропы</option>
            <option value="castles">Замки</option>
            <option value="museum">Музеи</option>
            <option value="leisure">Развлекательный досуг</option>
            <option value="historicalSites">Исторические места</option>
          </select>

            <label htmlFor="time" style={{ fontSize: 13 }}>
            Количество сводного времени
          </label>
          <select
            id="time"
            name="time"
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '10px',
              marginBottom: '20px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          >
            <option value="allDay">Без ограничения</option>
            <option value="one">1</option>
            <option value="two">2</option>
            <option value="three">3</option>
            <option value="four">4</option>
            <option value="five">5</option>
          </select>

          <fieldset style={{ marginBottom: '20px' }}>
            <legend style={{ fontSize: 13 }}>Наличие бесплатной парковки:</legend>
            <label>
              <input type="radio" name="parking" value="true" /> Да
            </label>
            <label style={{ marginLeft: 10 }}>
              <input type="radio" name="parking" value="false" /> Нет
            </label>
          </fieldset>

          <fieldset style={{ marginBottom: '20px' }}>
            <legend style={{ fontSize: 13 }}>Бесплатное посещение:</legend>
            <label>
              <input type="radio" name="freeVizit" value="true" /> Да
            </label>
            <label style={{ marginLeft: 10 }}>
              <input type="radio" name="freeVizit" value="false" /> Нет
            </label>
          </fieldset>

            <button
  type="submit"
  style={{
    padding: '10px 20px',
    fontWeight: 'bold',
    backgroundColor: 'blue',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    color: 'white',
    width: '100%',
  }}
>
  Искать
</button>
          
        </form>
      </div>
       <Footer />
    </>
     
  );
} 