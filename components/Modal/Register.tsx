import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRegisterMutation } from '../../graphql/generated/graphql'
import Spinner from '../Spinner'

interface IRegisterFormProps {
  onModalClose: () => any
}

const fields = [
  { name: 'firstName', label: 'First Name', type: 'text' },
  { name: 'lastName', label: 'Last Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' },
]

const Register: React.FC<IRegisterFormProps> = ({ onModalClose }) => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const [register, { loading, error, data }] = useRegisterMutation({
    variables: state,
  })

  useEffect(() => {
    if (data) {
      return data.register && onModalClose()
    }
  }, [data])

  return (
    <div className="form">
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          register()
        }}
      >
        <div className="d-flex flex-wrap justify-content-between">
          {fields.map(({ label, name, type }, index) => (
            <div className="form-item" key={index}>
              <label htmlFor={name}>{label}</label>
              <input
                type={type}
                name={name}
                onChange={(e) => setState({ ...state, [name]: e.target.value })}
              />
            </div>
          ))}
          <button type="submit" disabled={loading} className="d-flex">
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register
