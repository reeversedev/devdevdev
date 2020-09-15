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
          <div className="category-vertical-card scarves">
            <p>Blanket scarf in orange and black brushed check with tassels</p>
          </div>
          <div className="category-vertical-card adidas">
            <p>Adidas Originals LXCON 94 trainers in white</p>
          </div>
        </section>
      </div>

      <div className="w-50 w-md-100 w-sm-100 px-1 p-sm-0">
        <div className="d-flex flex-column flex-sm-column">
          <section className="horizontal-section">
            {/* <div className="category-vertical-card adidas">
              <p>Adidas Originals LXCON 94 trainers in white</p>
            </div>
            <div className="category-vertical-card sneakers">
              <p>Lightweight super skinny joggers in light khaki</p>
            </div> */}
            <BannerCard
              title={{
                content: 'Adidas Originals LXCON 94 trainers in white',
                size: '14',
                weight: '700',
              }}
              type="vertical"
              backgroundColor="#f3d37a"
              textPosition="end"
              imageStyle={{
                ...horizontalImageStyle,
                // left: 0,
                top: 0,
                // backgroundPosition: '0px -150px',
                borderRadius: '15px 0 0 15px',
                backgroundImage: "url('/yellow-jacket.png')",
              }}
            />
            <BannerCard
              title={{
                content: 'Adidas Originals LXCON 94 trainers in white',
                size: '14',
                weight: '700',
              }}
              type="vertical"
              backgroundColor="#f3d37a"
              textPosition="end"
              imageStyle={{
                ...horizontalImageStyle,
                // left: 0,
                top: 0,
                // backgroundPosition: '0px -150px',
                borderRadius: '15px 0 0 15px',
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
                size: '16',
                weight: '300',
              }}
              type="horizontal"
              backgroundColor="#f3d37a"
              textPosition="end"
              imageStyle={{
                ...horizontalImageStyle,
                left: 0,
                backgroundPosition: '0px 0px',
                borderRadius: '15px 0 0 15px',
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
