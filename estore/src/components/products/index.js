import "./_products.scss";

const Products = () => {
  const productData = [
    {
      pName: "cream-hoody",
      price: "100",
      img: "cream-hoody.jpg",
    },
    {
      pName: "mens-beigeShirt",
      price: "100",
      img: "mens-beigeShirt.jpg",
    },
    {
      pName: "mens-tShirt",
      price: "100",
      img: "mens-tShirt.jpg",
    },
    {
      pName: "mens-shirt",
      price: "100",
      img: "mens-shirt.jpg",
    },
    {
      pName: "womensDress",
      price: "100",
      img: "womensDress.jpg",
    },
  ];
  return (
    <div className='product-container'>
      {productData.map((product, key) => {
        return(
        <div className="mx=5 p-3 product-card">
          <div className="product-image-container">
            <img src={require("../../assets/images/" + product.img)} />
          </div>
          <div className="product-info">
            <h5>
              <a href="#"> ${product.pName}</a>
            </h5>
            <p className="product-price"> ${product.price}</p>
            <div className="product-rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
          </div>
        </div>)
      })}
    </div>
  );
};

export default Products;
