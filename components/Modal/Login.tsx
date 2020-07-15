import { useState, FormEvent } from 'react'
import {
  useLoginMutation,
  ProfileDocument,
  ProfileQuery,
} from '../../graphql/generated/graphql'
import { withApollo } from '../../lib/withApollo'
import { setAccessToken } from '../../lib/accessToken'
import Spinner from '../Spinner'

const fields = [
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' },
]

const Login = ({ onModalClose }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const [login, { loading, error, data }] = useLoginMutation()

  const onSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault()
      const response = await login({
        variables: state,
        update: (store, { data }) => {
          if (!data) {
            return null
          }

          store.writeQuery<ProfileQuery>({
            query: ProfileDocument,
            data: {
              profile: data.login.profile,
            },
          })
        },
      })
      if (response && response.data) {
        setAccessToken(response.data.login.accessToken)
        onModalClose()
        // Router.reload()
      }
    } catch (error) {
      return onModalClose()
    }
  }

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <div className="d-flex flex-sm-column flex-wrap justify-content-between">
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
          <div className="d-flex justify-content-end w-100 mx-2">
            <button
              type="submit"
              disabled={loading}
              className="d-flex align-items-center justify-content-between"
            >
              {loading && <Spinner />} <span className="mx-2">Login</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default withApollo(Login)
