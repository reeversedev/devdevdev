import React from 'react'
import Layout from '../../components/Layout'
import { useProfileQuery } from '../../graphql/generated/graphql'
import Router from 'next/router'

const Profile = (props) => {
  const { data, loading, error } = useProfileQuery()

  if (loading) {
    return (
      <Layout>
        <div className="d-flex justify-content-center align-items-center">
          Loading...
        </div>
      </Layout>
    )
  }
  if (error) {
    return error.graphQLErrors.map((err) => {
      err.message === 'not authenticated' && Router.push('/')
    })
  }
  const {
    profile: { firstName, lastName, email },
  } = data
  return (
    <Layout>
      <div className="d-flex align-items-center p-4">
        <h1 className="mt-4">
          Hey {firstName} {lastName}!
        </h1>{' '}
      </div>
    </Layout>
  )
}

export default Profile
