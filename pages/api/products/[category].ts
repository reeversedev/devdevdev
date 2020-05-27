import { NowRequest, NowResponse } from '@now/node'
import { products } from '../../../utils/products'

export default (req: NowRequest, res: NowResponse) => {
  const {
    query: { category },
  } = req

  const result = products[category.toString()].map((product, index) => {
    return { ...product, ['id']: index }
  })

  res.json({ products: result })
}
