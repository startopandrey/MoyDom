import React from 'react'
import './card-heart.styles.scss'
import FavoriteIcon from '@mui/icons-material/Favorite';
export const CardHeart = ({ num }) => (
  <div className="card-heart-container">
    <FavoriteIcon fontSize="medium" className="card-heart"></FavoriteIcon>
    <span>{num}</span>
  </div>
);