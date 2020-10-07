import React from 'react'
import BannerCard from './BannerCard'

const horizontalImageStyle = {
  height: '100%',
  width: '100%',
  maxWidth: '160px',
  right: 10,
  backgroundSize: 'cover',
  backgroundPosition: '0px 0px',
  borderRadius: '15px',
  backgroundRepeat: 'no-repeat',
}

const Newin = () => {
  return (
    <div className="d-flex flex-md-column flex-sm-column highlights">
      <div className="w-50 w-md-100 w-sm-100 px-1 p-sm-0">
        <section className="vertical-section">
          <BannerCard
            title={{
              content: 'GET UPTO 50% OFF',
              size: '22',
              weight: '800',
            }}
            type="horizontal"
            backgroundColor="#aae4ff"
            textPosition="center"
          />
          <BannerCard
            title={{
              content: 'Winter Weekends',
              size: '22',
              weight: '700',
            }}
            subtitle={{
              content: 'Keep it casual',
              size: '16',
              weight: '300',
            }}
            type="horizontal"
            backgroundColor="#fac3fa"
            textPosition="start"
            imageStyle={{
              ...horizontalImageStyle,
              backgroundPosition: '-15px 0px',
              backgroundImage: 'url("/purple-jacket.png")',
            }}
          />
        </section>
        <section className="horizontal-section my-2">
          <BannerCard
            title={{
              content:
                'Blanket scarf in orange and black brushed check with tassels',
              size: '14',
              weight: '700',
              backDropFilter: 'blur(5px)',
            }}
            type="vertical"
            backgroundColor="#f3d37a"
            textPosition="end"
            imageStyle={{
              ...horizontalImageStyle,
              left: 0,
              top: 0,
              maxWidth: '100%',
              borderRadius: '15px 15px 0 15px',
              backgroundImage:
                "url('https://images.asos-media.com/products/asos-design-blanket-scarf-in-orange-and-black-brushed-check-with-tassels/13427903-1-orange?$XXL$&wid=513&fit=constrain')",
            }}
          />
          <BannerCard
            title={{
              content: 'Super skinny Jogers',
              size: '14',
              weight: '700',
              backDropFilter: 'blur(5px)',
            }}
            type="vertical"
            backgroundColor="#f3d37a"
            textPosition="center"
            imageStyle={{
              ...horizontalImageStyle,
              left: 0,
              top: 0,
              maxWidth: '100%',
              borderRadius: '15px 15px 0 15px',
              backgroundImage:
                "url('https://images.asos-media.com/products/asos-design-lightweight-super-skinny-joggers-in-light-khaki/13187225-1-mermaid?$XXL$&wid=513&fit=constrain')",
            }}
          />
        </section>
      </div>

      <div className="w-50 w-md-100 w-sm-100 px-1 p-sm-0">
        <div className="d-flex flex-column flex-sm-column">
          <section className="horizontal-section">
            <BannerCard
              title={{
                content: 'Adidas Originals LXCON 94 trainers in white',
                size: '14',
                weight: '700',
              }}
              type="vertical"
              backgroundColor="#f3d37a"
              textPosition="center"
              imageStyle={{
                ...horizontalImageStyle,
                maxWidth: '100%',
                left: 0,
                top: 0,
                borderRadius: '15px 15px 0 15px',
                backgroundImage:
                  "url('https://images.asos-media.com/products/adidas-originals-lxcon-94-trainers-in-white/12624921-1-white?$XXL$&wid=513&fit=constrain')",
              }}
            />
            <BannerCard
              title={{
                content: 'Sick yellow bomber Jacket',
                size: '14',
                weight: '700',
              }}
              type="vertical"
              backgroundColor="#f3d37a"
              textPosition="center"
              imageStyle={{
                ...horizontalImageStyle,
                right: 0,
                top: 0,
                borderRadius: '15px 15px 0 15px',
                backgroundImage: "url('/yellow-jacket.png')",
              }}
            />
          </section>
          <section className="vertical-section my-2">
            <BannerCard
              title={{
                content: 'New-In Knitwear',
                size: '22',
                weight: '700',
              }}
              subtitle={{
                content: 'Layers on Layers',
                size: '14',
                weight: '300',
              }}
              type="horizontal"
              backgroundColor="#f3d37a"
              textPosition="end"
              imageStyle={{
                ...horizontalImageStyle,
                left: 0,
                backgroundPosition: '0px 0px',
                borderRadius: '15px 30px 0 15px',
                backgroundImage: "url('/yellow-jacket.png')",
              }}
            />
            <BannerCard
              title={{
                content: 'New-Season',
                size: '22',
                weight: '700',
              }}
              subtitle={{
                content: 'Change is here',
                size: '16',
                weight: '300',
              }}
              type="horizontal"
              backgroundColor="#ffc0cb"
              textPosition="start"
              imageStyle={{
                ...horizontalImageStyle,
                backgroundPosition: '0px 0px',
                borderRadius: '0 15px 15px 0',
                backgroundImage: "url('/pink-dress.png')",
              }}
            />
          </section>
        </div>
      </div>
    </div>
  )
}

export default Newin
