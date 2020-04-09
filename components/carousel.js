const products = [
  'https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/11353052/2020/3/2/6609162b-104e-46f6-b5d7-a698dc03c4051583147962360-ADIDAS-Originals-Men-Casual-Shoes-6591583147960924-1.jpg',
  'https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/11353052/2020/3/2/2c0e954b-085e-40ff-b4f7-c41d916350af1583147962308-ADIDAS-Originals-Men-Casual-Shoes-6591583147960924-2.jpg',
  'https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/11353052/2020/3/2/a87bf314-f8b1-46fd-978e-2a891f404d1e1583147962268-ADIDAS-Originals-Men-Casual-Shoes-6591583147960924-3.jpg',
  'https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/11353052/2020/3/2/77e60cee-9191-4f10-9e1a-0d39225356a71583147962222-ADIDAS-Originals-Men-Casual-Shoes-6591583147960924-4.jpg',
];

const Carousel = () => {
  return (
    <div className="d-flex align-items-center flex-column carousel">
      <div
        className="main-box"
        style={{ backgroundImage: `url(${products[0]})` }}
      ></div>
      <div className="d-flex w-sm-100">
        {products.map((url) => {
          return (
            <div
              key={url}
              className="option-box"
              style={{ backgroundImage: `url(${url})` }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
