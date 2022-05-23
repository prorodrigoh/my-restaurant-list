import { Button, Form, Input } from "antd";
import { initializeApp } from "firebase/app";


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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function Login() {

  const handleLogin = ({email, password}) => {
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
      </Form.Item>
    </section>
  )
}
