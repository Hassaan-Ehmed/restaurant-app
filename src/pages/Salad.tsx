import React from 'react'
import { products } from '../data/data'
import Header from '../components/Header';
import Products from '../components/Products';
import pizzaImage from '../images/pizza1.jpg'
import { useAppSelector } from '../redux/hooks';

export default function Salad() {

const storeState:any = useAppSelector( state => state.products );

  const salads:any = storeState?.productData.filter((item:any)=> item.category === "Salad");
  
  return (
    <>
      <Header heading={"Pizza Items"} img ={pizzaImage} />

<Products foodsArray={salads ?? []} />
    </>
  )
}