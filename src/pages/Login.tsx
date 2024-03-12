// import { useEffect, useRef, useState } from 'react'
// import { useAuth,getUserData } from '../contexts/FirebaseContext'
// import { Link, useNavigate } from 'react-router-dom'
// import { LockClosedIcon } from '@heroicons/react/20/solid'
// import { ETypes, MessageCard } from '../components/Atoms/MessageCard'
// import { SpacerWithText } from '../components/Atoms/SpacerWithText'
// import { SocialSignIn } from '../components/SocialSignIn'
// import { useToast, EToastTypes } from '../contexts/ToastContext'


// export default function Login() {
//   const emailRef = useRef<HTMLInputElement>(null)
//   const passwordRef = useRef<HTMLInputElement>(null)
//   const { login, currentUser, logout } = useAuth()
//   const [error, setError] = useState('')
//   const [loading, setLoading] = useState(false)
//   const navigate = useNavigate()
//   const { showTypedToast } = useToast()

//   useEffect(() => {
//     if (currentUser) navigate('/')
//   }, [])

//   async function handleSubmit(e: { preventDefault: () => void }) {
//     e.preventDefault()

//     try {
//       setError('')
//       setLoading(true)
//       await login(emailRef.current?.value, passwordRef.current?.value)
//       getUserData(currentUser.uid).then((resp: any) => {
//         if(resp.role !== "admin") {
//           showTypedToast(EToastTypes.ERROR, 'You are not an admin, Please use a different user details.')
//           logout()
//         } else {
//           setTimeout(() => {
//             navigate('/')
//           }, 1000);
//         }
//       }).catch(err => {
//         console.log(err)
//       })
//     } catch {
//       setError('Failed to log in')
//     }

//     setLoading(false)
//   }
//   return (
//     <>
//       <div className="flex h-screen w-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//         <div className="bg-content w-full h-full max-w-md space-y-8 flex flex-col items-center justify-center rounded-lg py-[100px] px-[20px] md:px-[50px] space-y-8">
//           <div>
//             {/* <img
//               className="mx-auto h-12 w-auto"
//               src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
//               alt="Your Company"
//             /> */}
//             <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 font-playfair">
//               Sign in to your account
//             </h2>
//           </div>
//           <MessageCard message={error} type={ETypes.DANGER} visible={!!error} />
//           <form className="mt-8 space-y-6 flex flex-col  w-full" onSubmit={handleSubmit}>
//             <input type="hidden" name="remember" defaultValue="true" />
//             <div className="-space-y-px w-full rounded-md shadow-sm">
//               <div className='w-full'>
//                 <label htmlFor="email-address" className="sr-only">
//                   Email address
//                 </label>
//                 <input
//                   id="email-address"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   ref={emailRef}
//                   required
//                   className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-5 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//                   placeholder="Email address"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="password" className="sr-only">
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   ref={passwordRef}
//                   autoComplete="current-password"
//                   required
//                   className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-5 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//                   placeholder="Password"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="btn-scale mb-[50px] group relative transition-colors flex w-full justify-center rounded-md border border-transparent bg-black px-5 py-4 text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//               >
//                 <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//                   <LockClosedIcon
//                     className="h-5 w-5 text-white group-hover:text-white"
//                     aria-hidden="true"
//                   />
//                 </span>
//                 Sign in
//               </button>
//             </div>
//             <div className="text-sm text-center">
//               <Link
//                 className="font-medium text-black hover:text-black"
//                 to="/forgot-password"
//               >
//                 Forgot your password?
//               </Link>
//             </div>
//           </form>

//           {/* <SpacerWithText text="or" />
//           <SocialSignIn setError={setError} enabled={!loading} /> */}
//         </div>
//       </div>
//     </>
//   )
// }


import { useEffect, useRef, useState } from 'react'
import { useAuth, getUserData } from '../contexts/FirebaseContext'
import { Link, useNavigate } from 'react-router-dom'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { ETypes, MessageCard } from '../components/Atoms/MessageCard'
import { useToast, EToastTypes } from '../contexts/ToastContext'

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const { login, currentUser, logout } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const { showTypedToast } = useToast()


  // async function handleSubmit(e: { preventDefault: () => void }) {
  //   e.preventDefault()

  //   setError('')
  //   setLoading(true)
  //   const resp = await login(emailRef.current?.value, passwordRef.current?.value)
  //   console.log(resp)
    
  //   if(resp.user) {
  //     navigate(localStorage.getItem("previousLoc") ? localStorage.getItem("previousLoc") : '/home')
  //   } else {
  //     setError("Failed to Login, Please check the password")
  //   }

    

  //   setLoading(false)
  // }


  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current?.value, passwordRef.current?.value)
      getUserData(currentUser.uid).then((resp: any) => {
        console.log(resp)
        if(resp.role !== "pandit") {
          showTypedToast(EToastTypes.ERROR, 'You are not a Pandit, Please signup or check your user details.')
          logout()
        } else {
          setTimeout(() => {
            navigate('/')
          }, 1000);
        }
      }).catch(err => {
        console.log(err)
      })
    } catch {
      setError('Failed to log in')
    }

    setLoading(false)
  }


  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-content w-full h-full max-w-md space-y-8 flex flex-col items-center justify-center rounded-lg py-[100px] px-[20px] md:px-[50px] space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 font-playfair">
              Sign in to your account
            </h2>
          </div>
          <MessageCard message={error} type={ETypes.DANGER} visible={!!error} />
          <form
            className="mt-8 space-y-6 flex flex-col  w-full"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px w-full rounded-md shadow-sm">
              <div className="w-full">
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
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-5 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  ref={passwordRef}
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-5 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className='mb-[50px]'>
              <button
                type="submit"
                disabled={loading}
                className={
                  "btn-scale group mb-[10px] relative transition-colors flex w-full justify-center rounded-md border border-transparent bg-black px-5 py-4 text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  + (loading ? " opacity-50 cursor-not-allowed" : "")
                }
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-white group-hover:text-white"
                    aria-hidden="true"
                  />
                </span>
                {loading && <span className="pr-2">Loggin In...</span>}
                {!loading && <span>Sign in</span>}
              </button>
              <button
                disabled={loading}
                className={
                  "btn-scale group relative transition-colors flex w-full justify-center rounded-md border border-gray-300 bg-white px-5 py-4 text-sm font-medium text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  + (loading ? " opacity-50 cursor-not-allowed" : "")
                }
                onClick={() => {
                  window.location.href = "https://vedapurohith.com/login"
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
            <div className='h-2 w-full'></div>
            <div className="text-sm text-center">
              <Link
                className="font-medium text-black hover:text-black"
                to="/forgot-password"
              >
                Forgot your password?
              </Link>
            </div>
            <div className="text-sm text-center">
              <Link
                className="font-medium text-black hover:text-black"
                to="/signup"
              >
                Don't have an account? Signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

