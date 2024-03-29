import React from 'react'
import { products } from '../data/data'
import Header from '../components/Header';
import Products from '../components/Products';
import saladImage from '../images/salad4.jpg'
import { useAppSelector } from '../redux/hooks';
import { useScrollRest } from '../utils/Hooks';

export default function Salad() {
  useScrollRest()

const storeState:any = useAppSelector( state => state.products );

  const salads:any = storeState?.productData.filter((item:any)=> item.category === "Salad");
  
  return (
    <>
      <Header heading={"Salads"} img ={saladImage} />

<Products foodsArray={salads ?? []} />
    </>
  )
}
