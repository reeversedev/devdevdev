import Link from 'next/link'

const ProductCard = ({
  name,
  image,
  brand,
  priceCurrency,
  price,
  type,
  id,
}) => {
  return (
    <Link
      href="/product/detail/[id]/[slug]"
      as={`/product/detail/${id}/${type}`}
    >
      <div className="position-relative card">
        <img src={image} alt={name} className="position-absolute w-100" />
        <div className="card-detail">
          <p className="title">{brand}</p>
          <p className="subtitle">{name}</p>
          <p className="font-weight-600">
            {priceCurrency} {price}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
