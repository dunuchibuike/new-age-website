import { Navigate } from 'react-router-dom'

const Public = ({ children }) => {
  const token = localStorage.getItem('token')
  return token ? <Navigate to='/' /> : children
}

export default Public