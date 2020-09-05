import Link from 'next/link'

export const exploreItems = [
  { name: 'New In', icon: '/flash.svg', slug: 'new-in' },
  { name: 'Clothing', icon: '/tshirt.svg', slug: 'clothing' },
  { name: 'Shoes', icon: '/shoes.svg', slug: 'shoes' },
]

const Explore = () => {
  return (
    <div className="explore">
      <div>
        <h1>Explore</h1>
        <div className="d-flex flex-wrap">
          <ul>
            {exploreItems.map(({ name, icon, slug }, index) => {
              return (
                <li key={index}>
                  <Link
                    href={`/category/[slug]`}
                    as={{ pathname: `/category/${slug}` }}
                  >
                    <a className="d-flex align-items-center">
                      <img src={icon} alt="icon" height="25" />{' '}
                      <span>{name}</span>
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Explore
