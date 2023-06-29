import './Product.css'
const Product = ({children,...props}) => {
  return (
    <div className="product">
        {children}
    </div>
  )
}

export default Product