import React from 'react';
import './blog.styles.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BlogImg from '../../assets/blog.png';
import BlogCard from '../../components/blog-card/blog-card.comonent';
import BlogArticle from '../../components/blog-article/blog-article.component';
import ScrollToTop from '../../components/scrolltotop';
const CARDS = [
  {
    title: 'Сдать недвижимость через ИП',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    img: BlogImg,
    route: '/blog/acticle/1',
  },
  {
    title: 'Сдать недвижимость через ИП',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    img: BlogImg,
    route: '/blog/acticle/1',
  },
  {
    title: 'Сдать недвижимость через ИП',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    img: BlogImg,
    route: '/blog/acticle/1',
  },
  {
    title: 'Сдать недвижимость через ИП',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    img: BlogImg,
    route: '/blog/acticle/1',
  },
  {
    title: 'Сдать недвижимость через ИП',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    img: BlogImg,
    route: '/blog/acticle/1',
  },
  {
    title: 'Сдать недвижимость через ИП',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    img: BlogImg,
    route: '/blog/acticle/1',
  },
];
const Blog = () => {
  return (
    <div className="blog container">
      <div className="blog-container">
        <BrowserRouter>
          <div className="blog-nav">
            <h3 className="blog-nav-title">Блог</h3>
            <ul className="blog-nav-list">
              <li className="blog-nav-item active">Все статьи</li>
              <li className="blog-nav-item ">Аналитика</li>
              <li className="blog-nav-item ">Аренда</li>
              <li className="blog-nav-item ">Дизайн</li>
              <li className="blog-nav-item ">Новостройки</li>
              <li className="blog-nav-item ">Спецпроект</li>
              <li className="blog-nav-item ">Вторичное жильё</li>
            </ul>
          </div>
          <ScrollToTop></ScrollToTop>
          <Switch>
            <Route path="/blog/acticle/1">
              <BlogArticle></BlogArticle>
            </Route>
            <Route exact path="/blog/acticle">
              <div className="blog-cards">
                {CARDS.map(({ img, text, title, route }) => (
                  <BlogCard
                    img={img}
                    text={text}
                    title={title}
                    route={route}
                  ></BlogCard>
                ))}
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};
export default Blog;
