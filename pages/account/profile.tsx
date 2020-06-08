import React from 'react'
import Layout from '../../components/Layout'
import { useProfileQuery } from '../../graphql/generated/graphql'

const Profile = () => {
  const { data, loading, error } = useProfileQuery()
  if (loading) {
    return <span>Loading...</span>
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
