import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashHome from './pages/DashHome'
import MainLayout from './MainLayout/MainLayout'
import BookNow from './pages/BookNow'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<DashHome />} />
            <Route path="/book-now" element={<BookNow />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}