import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from '../component/home.tsx'
import './index.css'
import App from './App.tsx'
import Header from '../layout/header.tsx'
import Layout from '../layout/AuthLayout.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from '../component/login.tsx'
import Regeister from '../component/regeister.tsx'
import NavGo from '../component/navgo.tsx'
import HookForm from '../component/hookform.tsx'
import SearchParam from '../component/searchParam.tsx'
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        {/* <Route path="/" element={<App />} />
        <Route path="/app/home" element={<Home />} /> */}
        {/* path:duong dan-->duong dan o ngoai la cha trong la con */}
        <Route path='app'>
          <Route path='auth' element={<Layout />}>
            {/* <Route path='home/:id/:masanpham' element={<Home />}></Route> */}
            <Route path='home/?edit' element={<Home />}></Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Regeister />} />
            <Route path="nav" element={<Header/>}></Route>
          </Route>
          <Route path='head' element={<Header/>}>
            <Route></Route>
          </Route>
          <Route path="nav">
            <Route path="go" element={<NavGo />} />
            <Route path="dashboard" element={<Home />} />
          </Route> 
          <Route path="search" element={<SearchParam />} />
          <Route path='form' element={<HookForm/>}></Route>
        
        </Route>
        

      </Routes>
    </StrictMode>
  </BrowserRouter>

)
