import React, { useEffect, useContext } from 'react'
import Layout from '../../components/Layout'
import Router, { useRouter } from 'next/router'
import Toolbar from '../../components/Toolbar'
import AllProducts from '../../components/all-products'
import Explore, { exploreItems } from '../../components/Explore'
import Newin from '../../components/Newin'

const Category = () => {
  const router = useRouter()
  const { slug } = router.query
  const { name, icon } = exploreItems.filter(({ slug }) => slug === slug)[0]

  return (
    <Layout>
      <div className="homepage">
        <div className="w-20 w-sm-100">
          <Explore />
        </div>
        <div className="w-100 position-relative">
          <div className="category">
            <div className="d-flex flex-sm-column align-items-center align-items-sm-start justify-content-between sticky-toolbar d-sm-none">
              <div className="d-flex align-items-center">
                <img src={icon} alt="icon" height="35" />{' '}
                <h1 className="mx-1">{name}</h1>
              </div>
              <Toolbar buttons={['sort']} />
            </div>
            <div className="content">
              {slug === 'new-in' ? <Newin /> : <AllProducts slug={slug} />}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Category
