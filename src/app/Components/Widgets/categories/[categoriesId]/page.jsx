import ApiContext from '@/app/Context/ApiContext';
import { useParams, useSearchParams } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'

function CategoryPage() {
    const searchParams = useParams();
    const id = searchParams.get(categoriesId)
    const {products} = useContext(ApiContext)
    const [categoryProduct , setCategoryProduct] = useState([])

    useEffect(() => {
        if (id) {
            const filteredProduct = products.filter((product) => String(product.category.id) === id);
            setCategoryProduct(filteredProduct);
            console.log(filteredProduct);
          
        }
      }, [id, products]);

  return (
    <div>{categoryProduct.map((catpro)=>{
        return <p key={catpro.id}>{catpro.title}</p>
    })}</div>
  )
}

export default CategoryPage