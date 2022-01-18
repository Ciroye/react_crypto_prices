import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import {
  NavBar,
  Exchanges,
  HomePage,
  Cryptocurrencies,
  CryptoDetail,
  News,
} from './components'
import store from './app/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="app">
          <div className="navbar">
            <NavBar />
          </div>
          <div className="main">
            <Layout>
              <div className="routes">
                <Routes>
                  <Route exact path="/" element={<HomePage></HomePage>}></Route>
                  <Route
                    path="/exchanges"
                    element={<Exchanges></Exchanges>}
                  ></Route>
                  <Route
                    path="/cryptocurrencies"
                    element={<Cryptocurrencies></Cryptocurrencies>}
                  ></Route>
                  <Route
                    path="/crypto/:coinId"
                    element={<CryptoDetail></CryptoDetail>}
                  ></Route>
                  <Route path="/news" element={<News></News>}></Route>
                </Routes>
              </div>
            </Layout>
            <div className="footer">
              <Typography.Title
                level={5}
                style={{ color: 'white', textAlign: 'center' }}
              >
                Cryptoverse <br></br>
                All rights reserved.
              </Typography.Title>
              <Space>
                <Link to="/">Home</Link>
                <Link to="/exchanges">Exchanges</Link>
                <Link to="/news">News</Link>
              </Space>
            </div>
          </div>
        </div>
      </Provider>
    </Router>
  )
}

export default App
