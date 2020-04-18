import Link from 'next/link';
import flash from '../icons/flash.svg';
import clothing from '../icons/tshirt.svg';
import shoes from '../icons/shoes.svg';
import accessories from '../icons/earrings.svg';
import activewear from '../icons/activewear.svg';
import inspiration from '../icons/inspiration.svg';

export const exploreItems = [
  { name: 'New In', icon: flash, slug: 'new-in' },
  { name: 'Clothing', icon: clothing, slug: 'clothing' },
  { name: 'Shoes', icon: shoes, slug: 'shoes' },
  { name: 'Accessories', icon: accessories, slug: 'accessories' },
  { name: 'Activewear', icon: activewear, slug: 'active-wear' },
  { name: 'Inspiration', icon: inspiration, slug: 'inspiration' },
];

const Explore = () => {
  return (
    <div className="explore">
      <div>
        <h1>Explore</h1>
        <div className="d-flex flex-wrap">
          <ul>
            {exploreItems.map(({ name, icon, slug }) => {
              return (
                <li key={name}>
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
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Explore;
