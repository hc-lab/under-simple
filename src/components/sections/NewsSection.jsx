import React from 'react';

const newsData = [
  {
    id: 1,
    image: '/img/news/news-1.jpg',
    date: '25 JUNIO, 2025',
    title: 'UNDER MINERALS anuncia expansión de operaciones en el norte.',
    link: '#',
  },
  {
    id: 2,
    image: '/img/news/news-2.jpg',
    date: '18 JUNIO, 2025',
    title: 'Nuevas tecnologías sostenibles implementadas en nuestros proyectos.',
    link: '#',
  },
  {
    id: 3,
    image: '/img/news/news-3.jpg',
    date: '05 JUNIO, 2025',
    title: 'Compromiso con la comunidad: Programas de desarrollo local.',
    link: '#',
  },
];

const NewsSection = () => {
  return (
    <section id="noticias" className="mining-news">
      <div className="mining-section-header">
        <h2>Últimas Noticias</h2>
        <p>Manténgase al día con los últimos acontecimientos, innovaciones y comunicados de UNDER MINERALS.</p>
      </div>
      <div className="mining-news-grid">
        {newsData.map((news) => (
          <article key={news.id} className="news-card">
            <img src={news.image} alt={news.title} className="news-card-image" />
            <div className="news-card-content">
              <p className="news-card-date">{news.date}</p>
              <h3 className="news-card-title">{news.title}</h3>
              <a href={news.link} className="news-card-link">Leer más</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
