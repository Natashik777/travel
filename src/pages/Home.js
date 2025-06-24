import React, { useRef } from 'react';

export default function Home() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div
        style={{
          position: 'relative',
          height: 300,
          fontWeight: 600,
          backgroundColor: 'blue',
        }}
      >
        <img
          src="/image/main.jpg"
          alt="main"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <nav>{/* Навигация */}</nav>

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
            backgroundColor: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Выбрать поездку
        </button>
      </div>

      {/* Центрирование формы */}
      <div
        ref={formRef}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px 20px',
        }}
      >
        <form
          style={{
            border: '1px solid black',
            padding: 20,
            borderRadius: 8,
            maxWidth: 400,
            width: '100%',
          }}
        >
          <h2>Выбрать поездку</h2>

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
            <option value="">Выберите направление</option>
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
    </>
  );
}
