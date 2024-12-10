import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashHome from './pages/DashHome'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashHome />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}