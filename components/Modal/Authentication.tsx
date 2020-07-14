import Link from 'next/link'
import { useState, useEffect } from 'react'
import Spinner from '../Spinner'
import Login from './Login'
import Register from './Register'

interface IAuthenticationFormProps {
  onModalClose: () => any
}

const Authentication: React.FC<IAuthenticationFormProps> = ({
  onModalClose,
}) => {
  const [mode, setMode] = useState('Login')

  return (
    <div className="modal authentication-form">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={() => onModalClose()}>
            x
          </span>
        </div>
        <div className="modal-body">
          <div className="d-flex flex-sm-column justify-content-between align-items-center py-4">
            <div className="w-50 w-sm-100">
              <div
                style={{
                  backgroundImage: `url('/logo.svg')`,
                  backgroundRepeat: 'no-repeat',
                  height: '150px',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                }}
              ></div>
            </div>
            <div className="w-50 w-sm-100">
              <h1>Don't hide!</h1>
              <p>Sign up now to receive exclusive offers.</p>
              <p>
                In order to receive the best deals that are customized to your
                tastes .
              </p>
              <p className="mt-2">
                {mode === 'Register'
                  ? 'Already have an account?'
                  : "Don't have an account yet?"}{' '}
                <a
                  onClick={() =>
                    setMode(mode === 'Login' ? 'Register' : 'Login')
                  }
                  className="cursor-pointer"
                >
                  {mode === 'Register' ? 'Login' : 'Register'}
                </a>
              </p>
              {mode === 'Login' ? (
                <Login onModalClose={onModalClose} />
              ) : (
                <Register onModalClose={onModalClose} />
              )}
            </div>
          </div>
        </div>
        <div className="modal-footer"></div>
      </div>
    </div>
  )
}

export default Authentication
