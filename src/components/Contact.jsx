import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const onSubmit = async (data) => {
    const UserInfo = {
      name: data.name,
      email: data.email,
      message: data.message
    }
    try {
      await axios.post('https://getform.io/f/bvrejleb', UserInfo)
      toast.success('Your Message Has been Sent!!! ')

      setFormData({ name: '', email: '', message: '' });
      reset();
    }
    catch (error) {
      console.log(error)
      toast.error("Something Went Wrong!!")
    }

  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <>
      <div name='Contact'>
        <section id="contact" className="p-8 ">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("name", { required: true })}
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
                {errors.name && <span>This field is required</span>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("email", { required: true })}
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("message", { required: true })}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                ></textarea>
                {errors.message && <span>This field is required</span>}
              </div>
              <button
                className="bg-fuchsia-900 hover:bg-fuchsia-700  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                 >
                Send
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
