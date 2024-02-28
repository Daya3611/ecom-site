
import './css/ShopCategory.css'
import dropDown_icon from '../Cpmponets/assets/dropdown_icon.png'
import Item from '../Cpmponets/items/item'
import all_product from '../Cpmponets/assets/all_product'

const ShopCategory = (props) => {
  const products = all_product;
  return (
    <div className='shop-category'>
      <img className='shopscategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexShort">
        <p>
          <span> Showing 1-12</span> Out of 36 Products
        </p>
        <div className="shopcategory-short">
          Short By <img src={dropDown_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-products">
        {products.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else {
            return;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory

