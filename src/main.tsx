import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import Home from './pages/Home'
import Login from './pages/Login'
import CreatePost from './pages/CreatePost'
import { Navbar } from './components/Navbar/Navbar'
import { GlobalStyles } from './components/styles/Global'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <Router>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/createpost" element={<CreatePost />}/>
        </Routes>
      </Provider>
    </Router>    
  </StrictMode>,
)
