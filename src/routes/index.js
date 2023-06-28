import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'

import Home from '../pages/Home'
import ShowMemo from '../pages/ShowMemo'
import ShowContext from '../pages/ShowContext'
import ShowReducer from '../pages/ShowReducer'

import SideMenu from '../components/SideMenu'

import { Layout } from 'antd'
const { Sider } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Sider style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}>
          <SideMenu />
        </Sider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/memo" element={<ShowMemo />}></Route>
          <Route path="/context" element={<ShowContext />}></Route>
          <Route path="/reducer" element={<ShowReducer />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;