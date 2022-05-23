import React, { useContext } from "react";
import { UserContext } from "../App";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button, Form, Input } from "antd";


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDNy_hyDSaDW0TqK_JWvBIsdbLAh3mf-o",
  authDomain: "my-first-firestore-rh.firebaseapp.com",
  projectId: "my-first-firestore-rh",
  storageBucket: "my-first-firestore-rh.appspot.com",
  messagingSenderId: "1085784748225",
  appId: "1:1085784748225:web:d61f9a9bdd2bb35b092440"
};

const connectAuth = () => {
  const app = initializeApp(firebaseConfig);  // Initialize Firebase
  return getAuth(app)                         // Connect to Firebase/Authentication
}

export default function Login() {
  const { setUser } = useContext(UserContext)
  

  const handleLogin = ({email, password}) => { 
    const auth = connectAuth()
    signInWithEmailAndPassword(auth, email, password) // Login with Firebase Authentication API
      .then(res => setUser(res.user))
      .catch(console.error)
  }

  const handleGoogleLogin = () => {
    const auth = connectAuth()
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth,provider)
      .then(res => setUser(res.user))
      .catch(console.error)
  }

  return (
    <section style={{ padding: '2em'}}>
      <Form 
        onFinish={handleLogin}    // comes from ant design
        labelCol={{ span: 8}}     // others will have different options
        wrapperCol={{ span: 16 }}
      >
        <Form.Item label='Email' name='email' 
          rules={[
            {
              required: true,
              message: 'Please enter a valid email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label='Password' name='password' 
          rules={[
            {
              required: true,
              message: 'Please enter your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
      </Form>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
        <Button onClick={handleGoogleLogin}>
          Google Login
        </Button>
      </Form.Item>
    </section>
  )
}
