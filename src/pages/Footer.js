import React from "react"; // Импорт библиотеки React
import { FaInstagram, FaFacebook, FaTelegram } from "react-icons/fa"; // Импорт иконок соцсетей
import { Link } from 'react-router-dom'; // Импорт компонента Link для переходов между страницами без перезагрузки

// Компонент Footer
const Footer = () => {
  // Основной стиль контейнера футера
  const footerStyle = {
    display: "flex", // Используем flexbox
    justifyContent: "space-around", // Пространство между колонками
    alignItems: "flex-start", // Выравнивание колонок по верхнему краю
    backgroundColor: "#e0f2ff", // Светло-голубой фон
    padding: "30px", // Отступы вокруг футера
    fontFamily: "Arial, sans-serif", // Основной шрифт
    borderTop: "1px solid #ccc", // Верхняя граница
    flexWrap: "wrap", // Позволяет колонкам переноситься при нехватке ширины
    gap: "20px" // Отступ между колонками
  };

  // Общий стиль для колонок
  const columnStyle = {
    flex: "1", // Колонки равного размера
    minWidth: "180px" // Минимальная ширина колонки
  };

  // Стиль заголовков секций футера
  const headingStyle = {
    marginBottom: "10px",
    fontSize: "14px",
    color: "#333"
  };

  // Стиль для всех ссылок
  const linkStyle = {
    textDecoration: "none",
    color: "#333",
    fontSize: "12px",
    display: "inline-block",
    marginBottom: "6px"
  };

  // Стиль при наведении на ссылку
  const hoverStyle = {
    color: '#007bff',
    textDecoration: 'underline',
  };

  // Стиль для иконок соцсетей
  const socialIconStyle = {
    ...linkStyle, // Наследуем базовый стиль ссылки
    fontSize: "20px",
    marginRight: "10px"
  };

  // Навигационные ссылки (используются в секции "Навигация")
  const navLinks = [
    { path: '/places', label: "Достопримечательности" },
    { path: '/reviews', label: "Отзывы" },
    { path: '/', label: "Сотрудничество" }
  ];

  // Ссылки в секции "О проекте"
  const aboutLinks = [
    { href: "#", label: "Реклама" },
    { href: "#", label: "Предложить место" },
    { href: "#", label: "Политика конфиденциальности" }
  ];

  return (
    <footer style={footerStyle}>
      
      {/* Секция: Навигация */}
      <div style={columnStyle}>
        <h4 style={headingStyle}>Навигация</h4>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {/* Перебираем массив navLinks и создаём ссылки */}
          {navLinks.map((item, index) => (
            <li key={item.path}>
              <Link
                to={item.path}
                style={linkStyle}
                onMouseOver={e => {
                  e.target.style.color = hoverStyle.color;
                  e.target.style.textDecoration = hoverStyle.textDecoration;
                }}
                onMouseOut={e => {
                  e.target.style.color = linkStyle.color;
                  e.target.style.textDecoration = 'none';
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Секция: О проекте */}
      <div style={columnStyle}>
        <h4 style={headingStyle}>О проекте</h4>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {/* Перебираем aboutLinks и создаём ссылки <a> */}
          {aboutLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} style={linkStyle}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Секция: Контакты */}
      <div style={columnStyle}>
        <h4 style={headingStyle}>Контакты</h4>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {/* Email */}
          <li>
            <a href="mailto:info@traveleesti.com" style={linkStyle}>
              info@traveleesti.com
            </a>
          </li>
          {/* Социальные сети */}
          <li style={{ marginTop: "10px" }}>
            <a href="#" style={socialIconStyle}><FaInstagram /></a>
            <a href="#" style={socialIconStyle}><FaFacebook /></a>
            <a href="#" style={socialIconStyle}><FaTelegram /></a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

// Экспорт компонента Footer для использования в других частях приложения
export default Footer;
