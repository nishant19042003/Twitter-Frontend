import './App.css'
import MainLayout from './components/MainLayout';
import AuthPage from './pages/AuthPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Communities from './pages/Community';
import Notification from './pages/Notification';
import Message from './pages/Message';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {store,persistor} from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import LikeBtn from './components/LikeBtn';
import ReplyBox from './pages/ReplyBox';
import './index.css';
import Chat from './socket/Chat';
import TweetPage from './pages/TweetPage';
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<MainLayout />} >
          <Route path='home' element={<Home/>} />
          <Route path="communities" element={<Communities/>} />
          <Route path="notifications" element={<Notification/>} />
          <Route path="message" element={<Message/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="chat/:recipientId" element={<Chat />} />
          <Route path="tweet" element={<TweetPage/>}/>
        </Route>

        
      </Routes>
      </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App
