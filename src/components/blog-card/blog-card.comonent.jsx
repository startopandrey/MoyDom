import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './blog-card.styles.scss';
const BlogCard = ({ img, title, text, route }) => (
  <div className="blog-card">
    <h3 className="blog-card-title">{title}</h3>
    <div
      className="blog-card-img"
      style={{ background: `url("${img}") no-repeat` }}
    ></div>
    <p className="blog-card-text">{text}</p>
    <Button className="blog-card-button" variant="contained">
      {' '}
      <Link to={route}>Читать</Link>{' '}
    </Button>
  </div>
);
export default BlogCard;
