import { useState, createContext } from 'react';
import { Content, Header } from 'antd/lib/layout/layout';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Menubar from './components/Menubar';
import RestaurantList from './components/RestaurantList';
import RestaurantPage from './components/RestaurantPage';
import Login from './components/Login';


function App() {
  const [user, setUser] = useState()  // user evaluates to falsy at first
  return (
      <Layout className='layout'>
        <Header >
          <Menubar user={user}/>
        </Header>
        <Content>
          <Routes>
            <Route path='/restaurants/:restaurantId' element={<RestaurantPage />} />
            <Route path='/random' element={<h1>Random Restaurant Page here</h1>} />
            <Route path='/login' element={!user ? <Login /> : <h1>Add New Restaurant Page here</h1>} />
            <Route path='/add' element={!user ? <Login setUser={setUser}/> : <h1>Add New Restaurant Page here</h1>} />
            <Route path='/' element={<RestaurantList />}/>
          </Routes>
        </Content>
      </Layout>
  );
}

export default App;
