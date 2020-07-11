import { useContext } from 'react'
import { CartContext } from '../pages/_app'

const Toolbar = ({ buttons }) => {
  const {
    cart: { displayCart },
    setCart,
  } = useContext(CartContext)
  return (
    <div className="d-flex justify-content-between align-items-center toolbar">
      {/* {buttons.map((button, index) => (
        <ToolbarButton key={index} {...button} />
      ))} */}
      {/* <p>Toolbar button issue here</p> */}
    </div>
  )
}

export default Toolbar
