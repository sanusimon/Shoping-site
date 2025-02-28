"use client"
import ApiContext from '@/app/Context/ApiContext';
import React, { useContext } from 'react'
import './Categories.scss'
import Link from 'next/link';

function Categories() {
  const{products} = useContext(ApiContext)
  const categoryNames = [...new Map(products.map((product) => [product.category.name, product.category])).values()]
  // const catimage = [...new Set(products.map(product => product.category.name))];
  
  return (
    <section className='categories_sec'>
      <div className='container'>
        <div className='inner_'>
        <ul>
          {categoryNames.map((cat)=>{
            return(
              <li key={cat.id}>
                
                <div className='img_wrap'>
                  <img src={cat.image} />
                </div>
                <Link href={`/categories/${cat.id}`}>
                  <label className='cat_name'>{cat.name}</label>
                </Link>
              </li>
            )
          })}
        </ul>
        </div>
      </div>
    </section>
  )
}

export default Categories