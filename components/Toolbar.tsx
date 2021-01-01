import { useContext, useState } from 'react'
import { UserContext } from '../pages/_app'

const GenderToggleButton = () => {
  const [gender, setGender] = useState(false)
  return (
    <>
      <input
        type="checkbox"
        name="gender-toggle"
        id="gender-toggle"
        className="tgl tgl-light"
        onChange={() => setGender(!gender)}
      />
      <label htmlFor="gender-toggle" className="tgl-btn">
        <span id="female">Female</span>
        <span id="male">Male</span>
      </label>
    </>
  )
}

const Toolbar = ({ buttons }) => {
  const {
    cart: { displayCart },
    setCart,
  } = useContext(UserContext)
  return (
    <div className="d-flex justify-content-between align-items-center toolbar">
      <GenderToggleButton />
    </div>
  )
}

export default Toolbar
