import React from 'react'
import { useParams } from 'react-router-dom'
import DogInfo from './DogsPage/DogInfo';


export default function DogInformation( dogs) {
  
    const params = useParams();

    if (params){
      console.log('params: ', params);
      console.log('dogs: ', dogs);


      const currentDog = dogs.dogs.find(
        dog => dog.name.toLowerCase() === params.dog.toLowerCase()
      );
      return <DogInfo dog={currentDog} /> ;
    }
    return null;


}
