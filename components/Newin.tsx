import React from 'react'
import BannerCard from './BannerCard'

const imageStyle = {
  height: '100%',
  width: '100%',
  maxWidth: '150px',
  right: 0,
  backgroundSize: 'cover',
  backgroundPosition: '10px 0px',
  borderRadius: '15px',
  backgroundRepeat: 'no-repeat',
}

const Newin = () => {
  return (
    <div className="d-flex flex-md-column flex-sm-column highlights">
      <div className="w-50 w-md-100 w-sm-100 p-1 p-sm-0">
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
              ...imageStyle,
              backgroundImage:
                'url("https://images.asos-media.com/products/asos-design-petite-hybrid-faux-fur-panelled-puffer-jacket-in-lilac/12917591-1-lilac?$L$&wid=168&fit=constrain")',
            }}
          />
        </section>
        <section className="horizontal-section my-2">
          <div className="category-vertical-card scarves">
            <p>Blanket scarf in orange and black brushed check with tassels</p>
          </div>
          <div className="category-vertical-card adidas">
            <p>Adidas Originals LXCON 94 trainers in white</p>
          </div>
        </section>
      </div>

      <div className="w-50 w-md-100 w-sm-100 p-1 p-sm-0">
        <div className="d-flex flex-column flex-sm-column">
          <section className="horizontal-section">
            <div className="category-vertical-card adidas">
              <p>Adidas Originals LXCON 94 trainers in white</p>
            </div>
            <div className="category-vertical-card sneakers">
              <p>Lightweight super skinny joggers in light khaki</p>
            </div>
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
                size: '16',
                weight: '300',
              }}
              type="horizontal"
              backgroundColor="#f3d37a"
              textPosition="end"
              imageStyle={{
                ...imageStyle,
                left: 0,
                backgroundPosition: '0px 0px',
                borderRadius: '15px 0 0 15px',
                backgroundImage:
                  "url('https://images.asos-media.com/products/asos-design-wool-mix-western-jacket-in-yellow/13320467-1-yellow?$XXL$&wid=513&fit=constrain')",
              }}
            />
            <BannerCard
              title={{
                content: 'New-Season Textures',
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
                ...imageStyle,
                backgroundPosition: '0px 0px',
                borderRadius: '0 15px 15px 0',
                backgroundImage:
                  "url('https://images.asos-media.com/products/free-people-honey-tee/14565141-1-pink?$XXL$&wid=513&fit=constrain')",
              }}
            />
          </section>
        </div>
      </div>
    </div>
  )
}

export default Newin
