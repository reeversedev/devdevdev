import { useState, useEffect } from 'react'
import { useLoginMutation } from '../../graphql/generated/graphql'
import { withApollo } from '../../lib/withApollo'

const fields = [
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' },
]

const Login = ({ onModalClose }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const [login, { loading, error, data }] = useLoginMutation({
    variables: state,
  })

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div className="form">
      <form
        onSubmit={async (e) => {
          try {
            e.preventDefault()
            await login()
          } catch (error) {}
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
          {error &&
            error.graphQLErrors.map((err) => {
              return <span style={{ color: 'red' }}>{err.message}</span>
            })}
          <button type="submit" disabled={loading} className="d-flex">
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default withApollo(Login)
