import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrums from '../Components/BreadCrums/BreadCrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import Description from '../Components/DescriptionBox/Description'
import RelatedProduct from '../Components/relateProduct/RelatedProduct'

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId } = useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <>
      <BreadCrums product={product} />
      <ProductDisplay product = {product} />
      <Description />
      <RelatedProduct />
    </>
  )
}

export default Product
