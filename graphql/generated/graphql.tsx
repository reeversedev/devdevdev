import gql from 'graphql-tag'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactHooks from '@apollo/react-hooks'
export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Query = {
  __typename?: 'Query'
  hello: Scalars['String']
  profile: User
  Users: Array<User>
}

export type User = {
  __typename?: 'User'
  id: Scalars['Int']
  firstName: Scalars['String']
  lastName: Scalars['String']
  email: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  revokeRefreshTokensForUser: Scalars['Boolean']
  register: Scalars['Boolean']
  login: LoginResponse
}

export type MutationRevokeRefreshTokensForUserArgs = {
  userId: Scalars['Int']
}

export type MutationRegisterArgs = {
  password: Scalars['String']
  email: Scalars['String']
  lastName?: Maybe<Scalars['String']>
  firstName: Scalars['String']
}

export type MutationLoginArgs = {
  password: Scalars['String']
  email: Scalars['String']
}

export type LoginResponse = {
  __typename?: 'LoginResponse'
  accessToken: Scalars['String']
  user: User
}

export type HelloQueryVariables = {}

export type HelloQuery = { __typename?: 'Query' } & Pick<Query, 'hello'>

export type RegisterMutationVariables = {
  firstName: Scalars['String']
  lastName?: Maybe<Scalars['String']>
  email: Scalars['String']
  password: Scalars['String']
}

export type RegisterMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'register'
>

export type LoginMutationVariables = {
  email: Scalars['String']
  password: Scalars['String']
}

export type LoginMutation = { __typename?: 'Mutation' } & {
  login: { __typename?: 'LoginResponse' } & Pick<
    LoginResponse,
    'accessToken'
  > & {
      profile: { __typename?: 'User' } & Pick<
        User,
        'id' | 'firstName' | 'lastName' | 'email'
      >
    }
}

export type ProfileQueryVariables = {}

export type ProfileQuery = { __typename?: 'Query' } & {
  profile: { __typename?: 'User' } & Pick<
    User,
    'id' | 'firstName' | 'lastName' | 'email'
  >
}

export const HelloDocument = gql`
  query Hello {
    hello
  }
`

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    HelloQuery,
    HelloQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<HelloQuery, HelloQueryVariables>(
    HelloDocument,
    baseOptions
  )
}
export function useHelloLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    HelloQuery,
    HelloQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<HelloQuery, HelloQueryVariables>(
    HelloDocument,
    baseOptions
  )
}
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>
export type HelloQueryResult = ApolloReactCommon.QueryResult<
  HelloQuery,
  HelloQueryVariables
>
export const RegisterDocument = gql`
  mutation register(
    $firstName: String!
    $lastName: String
    $email: String!
    $password: String!
  ) {
    register(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    )
  }
`
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    RegisterMutation,
    RegisterMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    RegisterMutation,
    RegisterMutationVariables
  >(RegisterDocument, baseOptions)
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>
export type RegisterMutationResult = ApolloReactCommon.MutationResult<
  RegisterMutation
>
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>
export const LoginDocument = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      profile: user {
        id
        firstName
        lastName
        email
      }
    }
  }
`
export type LoginMutationFn = ApolloReactCommon.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    baseOptions
  )
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = ApolloReactCommon.MutationResult<
  LoginMutation
>
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>
export const ProfileDocument = gql`
  query profile {
    profile {
      id
      firstName
      lastName
      email
    }
  }
`

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfileQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ProfileQuery,
    ProfileQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<ProfileQuery, ProfileQueryVariables>(
    ProfileDocument,
    baseOptions
  )
}
export function useProfileLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ProfileQuery,
    ProfileQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<ProfileQuery, ProfileQueryVariables>(
    ProfileDocument,
    baseOptions
  )
}
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>
export type ProfileQueryResult = ApolloReactCommon.QueryResult<
  ProfileQuery,
  ProfileQueryVariables
>
