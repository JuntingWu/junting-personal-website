"use client"

import React from 'react';
import { useState } from 'react';

const ContactSection = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [emailFailed, setEmailFailed] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const endpoint = '/api/sendEmail';
    // console.log("Name: ", e.target.name.value);
    // console.log("Email: ", e.target.email.value);
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }
    // console.log("New:", JSON.stringify(data))
    const request = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }
    const response = await fetch(endpoint, request);
    console.log(await response.json());
    if (response.status === 200) {
      console.log("Email sent!")
      setEmailSent(true);
    }
    else {
      console.log("Failed to send.")
      setEmailFailed(true);
    }
  }

  const initialForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  const [form, setForm] = useState(initialForm);

  const handleUpdate = (category, value) => {
    setForm({
      ...form,
      [category]: value
    })
  }

  return (
    <section className='py-6 min-h-screen'>
      <div className='text-5xl flex justify-center text-transparent bg-clip-text gradient-color py-3 font-bold'>Contact</div>
      <form class='flex flex-col justify-center' onSubmit={onSubmit} action="/" method="post">
        <label class="bg-yellow-200 pl-2 rounded-t-lg ">Name</label>
        <input name="name" type="text" class='my-1 pl-2 bg-gray-100 border-2 border-yellow-200 rounded' value={setForm.contactName} onChange={(e) => handleUpdate('name', e.target.value)} id="name" placeholder='Sam Sulek' /><br></br>
        <label class="bg-yellow-200 pl-2">Email</label>
        <input name="email" type="email" id="email" class='my-1 pl-2 bg-gray-100 border-2 border-yellow-200 rounded' placeholder='example@gmail.com' onChange={(e) => handleUpdate('email', e.target.value)} value={setForm.email} /><br></br>
        <label class="bg-yellow-200 pl-2">Subject</label>
        <input name="subject" type="text" id="subject" class='my-1 pl-2 bg-gray-100 border-2 border-yellow-200 rounded' placeholder='Subject' onChange={(e) => handleUpdate('subject', e.target.value)} value={setForm.subject} /><br></br>
        <label class="bg-yellow-200 pl-2">Message</label>
        <textarea name="message" id="message" class='my-1 pl-2 bg-gray-100 border-2 border-red-200 rounded' cols="30" rows="5" placeholder='How many times will they say Im the smoothest truth is...' onChange={(e) => handleUpdate('message', e.target.value)} value={setForm.message}></textarea><br></br>
        <button variant="outline" type="submit" class='font-bold submit bg-white border-2 border-yellow-200 rounded' value="/">Send</button>
        {emailSent && (<h1 class="text-green-900 text-center my-2 font-bold bg-green-200">Email Sent!</h1>)}
        {emailFailed && !emailSent&&(<h1 class="text-red-900 text-center my-2 font-bold bg-red-200">Failed to Send.</h1>)}
      </form>
    </section>
  )
}

export default ContactSection