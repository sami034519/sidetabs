import React from 'react'
import 'antd/dist/reset.css';
import edit from './images/edit.svg';
import {Form,Input,Button} from "antd";
function Profile() {
    const onFinish = (values: any) => {
        console.log('Form values:', values);
        // You can handle form submission here, like sending data to an API
      };
    
      // Handle form submission failure (validation errors)
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);};
  return (
    <div className='App bg-white !important max-w-[900px]'>
        <div className='w-full flex justify-center items-center'><div className='h-[120px] w-[120px] rounded-full bg-sky-200 flex justify-center items-center text-3xl font-semibold relative '>
                <img src={edit} alt="" className='absolute right-[-8px] bottom-[20px] h-7 w-7 bg-white rounded-full shadow-lg shadow-slate-500 ' />
            <h1>S</h1>
        </div>
        </div>
        <div className='w-full flex justify-center items-center mb-6 mt-1'> <h1 className='text-3xl font-semibold'>Samiullah Iqbal</h1></div>
        <div className=''><h1 className='text-2xl font-semibold mb-5'>Personal</h1></div>
        <hr className='mb-5' />
        <header className='App-header'>
      <Form
      onFinish={onFinish}        // Add the onFinish handler
      onFinishFailed={onFinishFailed}  >
        <div className='profile'>
        <Form.Item
         label={<span className="label">Name*</span>}
          name='name'
          labelCol={{ span: 24 }}  
         wrapperCol={{ span: 24 }}
         
           >
            <Input placeholder='username'></Input>
        </Form.Item>

        <Form.Item label={<span className="label">Current Password*</span>}
         name='Password'
         labelCol={{ span: 24 }}  // Makes the label span the full width
            wrapperCol={{ span: 24 }}
             >
            <Input.Password placeholder='Enter Your Current Password'/>
        </Form.Item>

        <Form.Item label={<span className="label">Email*</span>}
         name='Email'labelCol={{ span: 24 }}  // Makes the label span the full width
            wrapperCol={{ span: 24 }} >
            <Input type='email' placeholder='Sami@gmail.com'/>
            
        </Form.Item>

        <Form.Item label={<span className="label">New Password*</span>} name='newpassword' labelCol={{ span: 24 }}  // Makes the label span the full width
            wrapperCol={{ span: 24 }}>
            <Input.Password placeholder='Enter Your New Password'/>
        </Form.Item>

        <Form.Item label={<span className="label">Phone*</span>} name='phone' labelCol={{ span: 24 }}  // Makes the label span the full width
            wrapperCol={{ span: 24 }}>
            <Input type='phone' placeholder='0232542464'/>
        </Form.Item>

        <Form.Item label={<span className="label">Confirm New Password*</span>} name='confirm' labelCol={{ span: 24 }}  // Makes the label span the full width
            wrapperCol={{ span: 24 }}>
            <Input.Password placeholder='Confirm new password'/>
        </Form.Item>
        
        </div>
        <Form.Item  >
           <div className='w-fll flex justify-center items center mt-5'><Button className='px-7 py-4 text-lg font-semibold text-black bg-sky-500'  type='primary' htmlType='submit'>Update</Button></div> 
        </Form.Item>
      </Form>
      
      </header>
    </div>
  )
}

export default Profile
