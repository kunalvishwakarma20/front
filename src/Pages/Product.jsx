import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import ProductHd from '../Components/ProductHd';
import ProductDisplay from '../Components/ProductDisplay';
import RelatedProducts from '../Components/RelatedProducts';


const Product = () => {
  const {all_products} = useContext(ShopContext);
  const{productId} = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  if (!product) return <h1>Product not found</h1>
  return (
    <section>
      <div>
        <ProductHd product={product}/>
        <ProductDisplay product={product}/>
        < RelatedProducts/>
      </div>
    </section>
  )
}

export default Product
