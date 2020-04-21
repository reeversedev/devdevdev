import Link from 'next/link';

const ProductCard = () => {
  return (
    <Link href="/products/product-detail">
      <div className="position-relative card">
        <img
          src="https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/11353052/2020/3/2/6609162b-104e-46f6-b5d7-a698dc03c4051583147962360-ADIDAS-Originals-Men-Casual-Shoes-6591583147960924-1.jpg"
          alt=""
          className="position-absolute w-100"
        />
        <div className="card-detail">
          <p className="title">adidas</p>
          <p className="subtitle">
            Men Blue & Black Nite Jogger Colourblocked Sneakers
          </p>
          <p className="font-weight-600">$88.67</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
