import { useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Menubar from './components/Menubar';
import RestaurantList from './components/RestaurantList';
import RestaurantPage from './components/RestaurantPage';
import Login from './components/Login';

const { Content, Header } = Layout

export const UserContext = createContext(null); // higher order component to store global values to be used throughout the application


function App() {
  const [user, setUser] = useState()  // user evaluates to falsy at first
  return (
    <UserContext.Provider value={{user, setUser}}>
      <Layout className='layout'>
        <Header >
          <Menubar user={user}/>
        </Header>
        <Content>
          <Routes>
            <Route path='/restaurants/:restaurantId' element={<RestaurantPage />} />
            <Route path='/random' element={<h1>Random Restaurant Page here</h1>} />
            <Route path='/login' element={!user ? <Login /> : <h1>Add New Restaurant Page here</h1>} />
            <Route path='/add' element={!user ? <Login /> : <h1>Add New Restaurant Page here</h1>} />
            <Route path='/' element={<RestaurantList />}/>
          </Routes>
        </Content>
      </Layout>
    </UserContext.Provider>
  );
}

export default App;
