import { useState } from 'react'
import {
  useLoginMutation,
  LoginDocument,
  ProfileDocument,
  ProfileQuery,
} from '../../graphql/generated/graphql'
import { withApollo } from '../../lib/withApollo'
import { setAccessToken } from '../../lib/accessToken'
import Router from 'next/router'
import Loader from '../Loader'

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

  if (loading) {
    return <Loader />
  }

  return (
    <div className="form">
      <form
        onSubmit={async (e) => {
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
              Router.reload()
            }
          } catch (error) {
            return onModalClose()
          }
        }}
      >
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
          <button type="submit" disabled={loading} className="d-flex">
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default withApollo(Login)
