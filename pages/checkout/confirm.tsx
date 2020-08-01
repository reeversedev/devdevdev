import React from 'react'
import Layout from '../../components/Layout'
import { products } from '../../utils/products'

const Confirm = () => {
  return (
    <Layout>
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-column w-60 mt-2">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img src="/checkout.svg" alt="Checkout" height="40" width="40" />
            <h1 className="my-1">Confirm and Pay</h1>
            <p className="text-muted my-0">{products.clothing.length} items</p>
          </div>
          <div className="d-flex flex-wrap mt-2 px-2">
            {products.clothing.map((item) => {
              return (
                <div className="d-flex flex-column w-30">
                  <div
                    className="w-20"
                    style={{
                      backgroundImage: `url('${item.image}')`,
                      backgroundSize: '100%',
                      backgroundRepeat: 'no-repeat',
                      height: '200px',
                      width: '200px',
                      borderRadius: '25px',
                    }}
                  />
                  <p
                    className="font-weight-700 mb-0"
                    style={{
                      whiteSpace: 'nowrap',
                      width: '200px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {item.name}
                  </p>
                  <p className="font-size-14">
                    {item.priceCurrency} {item.price}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="d-flex flex-column w-40 mt-2" id="shipping-info">
          <div className="d-flex flex-column px-2">
            <h1>Shipping Information</h1>
            <div className="font-size-14 bg-purple p-1 rounded">
              <h3>Shipping Information</h3>
              <p className="d-flex align-items-center">
                <img src="/user.svg" alt="user" height="15" />{' '}
                <span className="mx-1">Prateek Gogia</span>
              </p>
              <p className="d-flex align-items-center">
                <img src="/location.svg" alt="address" height="15" />
                <span className="mx-1">101, Holy Place India, Earth</span>
              </p>
              <p className="d-flex align-items-center">
                <img src="/phone.svg" alt="phone" height="15" />
                <span className="mx-1">408-857-1212</span>
              </p>
            </div>
            <div id="price" className="font-size-16">
              <div className="d-flex justify-content-between">
                <p>Subtotal</p>
                <p className="font-weight-600">
                  ₹{' '}
                  {products.clothing.reduce(
                    (acc, item) => acc + parseFloat(item.price),
                    0
                  )}
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mt-0">Shipping Charges</p>
                <p className="font-weight-600 mt-0">*Free*</p>
              </div>
              <div className="d-flex justify-content-between font-size-20 font-weight-700">
                <p>Total price:</p>
                <p>
                  ₹{' '}
                  {products.clothing.reduce(
                    (acc, item) => acc + parseFloat(item.price),
                    0
                  )}
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <a className="transaction buynow text-uppercase">
                Place your order{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Confirm
