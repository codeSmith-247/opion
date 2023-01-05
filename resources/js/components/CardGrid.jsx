import React from 'react';
import '../../css/components/card.css';
import {Card} from './';

const CardGrid = () => {
  return (
    <div className =  'card-grid'>
       <Card />
       <Card />
       <Card />
       <Card />
    </div>
  )
}

export default CardGrid