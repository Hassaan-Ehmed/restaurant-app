import React from 'react'
import { products } from '../data/data'
import Header from '../components/Header';
import Products from '../components/Products';
import pizzaImage from '../images/pizza1.jpg'
import { useAppSelector } from '../redux/hooks';

export default function Drinks() {

const storeState:any = useAppSelector( state => state.products );

  const drinks:any = storeState?.productData.filter((item:any)=> item.category === "Drinks");
  
  return (
    <>
      <Header heading={"Drinks"} img ={pizzaImage} />

<Products foodsArray={drinks ?? []} />
    </>
  )
}