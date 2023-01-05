import React from 'react';
import '../../css/components/card.css';
import {Card} from './';

const CardGrid = () => {
  return (
    <div className =  'card-grid'>
       <Card name="Jakaranta Hotel"   location='Ayeduasi new site' duration='5 min' amount='6500' image='building.jpg' />
       <Card name="KullMan Hostel"     location='Kotei'             duration='5 min' amount='4500' image='building_1.jpg' />
       <Card name="Camille Hostel"    location='KentiKronu'        duration='5 min' amount='5560' image='building_2.jpg' />
      <Card  name="Planeta Hostel"     location='FBI black site'    duration='5 min' amount='3500' image='building_3.jpg' />
    </div>
  )
}

export default CardGrid