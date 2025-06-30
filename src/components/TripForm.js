import React from 'react';

export default function TripForm({ onSubmit, formRef, formContainerRef }) {
  return (
    <div ref={formContainerRef} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px 20px' }}>
      <form
        ref={formRef}
        onSubmit={onSubmit}
        style={{
          border: '1px solid black',
          padding: 20,
          borderRadius: 8,
          maxWidth: 400,
          width: '100%',
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Выбрать поездку</h2>

        {/* Направление */}
        <label htmlFor="destination" style={{ fontSize: 13 }}>Направление:</label>
        <select id="destination" name="destination" style={selectStyle}>
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
    

        {/* Транспорт */}
        <label htmlFor="transport" style={{ fontSize: 13 }}>Выберите вид транспорта:</label>
        <select id="transport" name="transport" style={selectStyle}>
          <option value="car">Автомобиль</option>
          <option value="bus">Автобус</option>
          <option value="train">Поезд</option>
          <option value="ship">Паром</option>
        </select>

        {/* Цель */}
        <label htmlFor="vizit" style={{ fontSize: 13 }}>Цель поездки:</label>
        <select id="vizit" name="vizit" style={selectStyle}>
          <option value="restInNature">Отдых на природе</option>
          {/* ... и остальные ... */}
        </select>

        {/* Время */}
        <label htmlFor="time" style={{ fontSize: 13 }}>Количество свободного времени:</label>
        <select id="time" name="time" style={selectStyle}>
          <option value="allDay">Без ограничения</option>
          <option value="one">1</option>
          <option value="two">2</option>
          <option value="three">3</option>
        </select>

        {/* Парковка */}
        <fieldset style={{ marginBottom: '20px' }}>
          <legend style={{ fontSize: 13 }}>Наличие бесплатной парковки:</legend>
          <label><input type="radio" name="parking" value="yes" /> Да</label><br />
          <label><input type="radio" name="parking" value="no" /> Нет</label>
        </fieldset>

        <button type="submit" style={{ width: '100%', padding: 10, backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: 5 }}>
          Найти маршрут
        </button>
      </form>
    </div>
  );
}

const selectStyle = {
  width: '100%',
  padding: '10px',
  marginTop: '10px',
  marginBottom: '20px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};
