import { NowRequest, NowResponse } from '@now/node'
import { products } from '../../../utils/products'

export default (req: NowRequest, res: NowResponse) => {
  const {
    query: { category },
  } = req

  console.log('category', category)

  const result = products[category].map((product, index) => {
    return { ...product, ['id']: index }
  })

  res.json({ products: result })
}
