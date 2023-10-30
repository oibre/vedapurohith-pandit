import { AuthProvider } from './contexts/FirebaseContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import PrivateRoutes from './global/PrivateRoutes'
import ForgotPassword from './pages/ForgotPassword'
import { ToastProvider } from './contexts/ToastContext'
import { ApiProvider } from './contexts/ApiContext'
import 'react-toastify/dist/ReactToastify.min.css'
import AppContextProviders from './contexts/AppContextProvider'
import NotFound from './pages/404'
import Success from './pages/Success'
import ComingSoon from './pages/comingSoon'
import Create from './pages/poojas/Create'
import List from './pages/poojas/List'
import Edit from './pages/poojas/Edit'
import Home from './pages/Home'

function App() {
  const providers = [ToastProvider, AuthProvider, ApiProvider]
  return (
    <Router>
      <AppContextProviders components={providers}>
        <Routes>
          <Route element={<PrivateRoutes />}>
            {/* create pooja */}
            <Route element={<Create />} path='/add-poojas' />
            {/* list poojas */}
            <Route element={<List />} path="list-poojas" />
            {/* messages */}
            {/* calender */}
            <Route element={<Edit />} path='/edit-poojas/:id' />
            <Route element={<Home />} path="/" />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path='/success' element={<Success />}/>
          <Route path="/messages" element={<ComingSoon />} />
          <Route element={<ComingSoon />} path='/items' />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </AppContextProviders>
    </Router>
  )
}

export default App