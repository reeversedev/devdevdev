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
        className="toggle-container toggle-container-light"
        onChange={() => setGender(!gender)}
      />
      <label
        htmlFor="gender-toggle"
        className={`toggle-button ${
          gender ? 'pg-purple-after' : 'pg-pink-after'
        }`}
      >
        <span
          id="female"
          className="d-flex align-items-center justify-content-center"
        >
          <img src="/women.svg" alt="women" width="18" /> Women
        </span>
        <span
          id="male"
          className="d-flex align-items-center justify-content-end"
        >
          <img src="/men.svg" alt="men" width="18" /> Men
        </span>
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
