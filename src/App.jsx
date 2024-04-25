import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'


export default function App() {

  return (
    <Layout>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/movies" element={<MoviesPage/>}/>
        <Route></Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Layout>
  )
}


