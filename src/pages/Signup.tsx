import React, { useRef, useState, useEffect } from 'react'
import { useAuth, addUserToFirestore } from '../contexts/FirebaseContext'
import { Link, useNavigate } from 'react-router-dom'
import { SpacerWithText } from '../components/Atoms/SpacerWithText'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { ETypes, MessageCard } from '../components/Atoms/MessageCard'
import { SocialSignIn } from '../components/SocialSignIn'
import { db } from '../firebase' // Import your Firestore instance

export default function Signup() {
  const emailRef = useRef<HTMLInputElement>(null)
  const addressRef = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const passwordConfirmRef = useRef<HTMLInputElement>(null)

  // address

  const line1Ref = useRef<HTMLInputElement>(null)
  const line2Ref = useRef<HTMLInputElement>(null)
  const cityRef = useRef<HTMLInputElement>(null)
  const stateRef = useRef<HTMLInputElement>(null)
  const pincodeRef = useRef<HTMLInputElement>(null)

  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
  }, [])

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()

    if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
      return setError('Passwords do not match')
    }

    setError('')
    setLoading(true)
    signup(emailRef.current?.value, passwordRef.current?.value).then((authResp: any) =>{
      addUserToFirestore({
        email: emailRef?.current?.value,
        name: nameRef?.current?.value,
        phone: phoneRef?.current?.value,
        uid: authResp.user?.uid,
        role: 'pandit',
      }).then((resp) => {
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      })
    }).catch((errOtr: any) => {
      setError(errOtr.message.split(": ")[1])
    }).finally(() => {
      setLoading(false)
    })
  }

  return (
    <div className="flex h-screen w-[100vw] items-center justify-center bg-gray-100 py-12 px-4 overflow-none sm:px-6 lg:px-8">
      <div className="bg-content w-full h-full max-w-md space-y-8 rounded-lg py-[40px] px-[20px] md:px-[50px] overflow-auto">
        <div>
          <h2 className="mt-6 text-justify text-3xl font-bold tracking-tight text-gray-900 font-playfair">
            Create an account
          </h2>
        </div>
        <MessageCard message={error} type={ETypes.DANGER} visible={!!error} />
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <p className='text-justify'>You can Signup as a pandit or as a customer. Please click on the buttom below to signup as pandit. </p>
          <div className='h-2 w-full'></div>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="Full Name" className="sr-only">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                ref={nameRef}
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-5 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="number"
                autoComplete="phone"
                ref={phoneRef}
                required
                className="relative block w-full appearance-none rounded-none border border-gray-300 px-5 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                ref={emailRef}
                required
                className="relative block w-full appearance-none rounded-none border border-gray-300 px-5 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                ref={passwordRef}
                required
                className="relative block w-full appearance-none rounded-none  border border-gray-300 px-5 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label className="sr-only">Confirm Password</label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                ref={passwordConfirmRef}
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-5 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={
                "btn-scale mb-[10px] group relative transition-colors flex w-full justify-center rounded-md border border-transparent bg-black px-5 py-4 text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                + (loading ? " opacity-50 cursor-not-allowed" : "")
              }
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-white group-hover:text-white"
                  aria-hidden="true"
                />
              </span>
              {loading && <span className="pr-2">Signing Up...</span>}
              {!loading && <span>Sign Up</span>}
            </button>
            <button
              disabled={loading}
              className={
                "btn-scale group relative transition-colors flex w-full justify-center rounded-md border border-gray-300 bg-white px-5 py-4 text-sm font-medium text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                + (loading ? " opacity-50 cursor-not-allowed" : "")
              }
              onClick={() => {
                window.location.href = "https://vedapurohith.com/signup"
              }}
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>

              </span>
              {loading && <span className="pr-2">Loggin In...</span>}
              {!loading && <span>Sign up as User</span>}
            </button>
          </div>
          <div className="text-sm text-center">
            <Link
              className="font-medium text-black hover:text-black font-playfair"
              to="/login"
            >
              Already have an account?
            </Link>
          </div>
        </form>

        {/* <SpacerWithText text="or" />
        <SocialSignIn setError={setError} enabled={!loading} /> */}
      </div>
    </div>
  )
}
