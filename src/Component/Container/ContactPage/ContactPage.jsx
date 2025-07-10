import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithubAlt, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import samrat from '../../Assets/Samrat.jpg';

const ContactPage = () => {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [phone, setPhone] = useState('');
      const [message, setMessage] = useState('');
      const [isLoading, setLoading] = useState(false);

      const handleSubmit = (e) => {
            e.preventDefault();

            if (!name || !email || !message || !phone) {
                  toast.error('Please fill in all required fields.', {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light"
                  });
                  return;
            }

            setLoading(true);

            const formData = new FormData(e.target);
            const scriptURL = 'https://script.google.com/macros/s/AKfycbx5sFsRBhE-_hD323mGo1n9bX1VJ24gagXc_-KEjA3BBV4yaJLle67ODldzPBQDLt9V/exec';

            fetch(scriptURL, { method: 'POST', body: formData })
                  .then(response => {
                        setLoading(false);
                        if (response.ok) {
                              toast.success('Your message has been sent.', {
                                    position: "bottom-right",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: false,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light"
                              });
                              setName('');
                              setEmail('');
                              setPhone('');
                              setMessage('');
                        } else {
                              throw new Error('There was an issue sending your message. Please try again later.');
                        }
                  })
                  .catch(error => {
                        setLoading(false);
                        console.error("There was an error sending your message", + error);
                        toast.error('An unexpected error occurred. Please try again later.', {
                              position: "bottom-right",
                              autoClose: 3000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: false,
                              draggable: true,
                              progress: undefined,
                              theme: "light"
                        });
                  });
      };

      return (
            <div className='flex flex-col gap-4 w-full lg:py-6 lg:px-24 md:p-8 p-4'>
                  <header className="w-full flex flex-col items-center md:items-start gap-4">
                        <h1 className='text-3xl md:text-5xl text-bg2 font-bold'>Contact Me</h1>
                        <div className='bg-bg2 h-[3px] w-32 md:w-20'></div>
                  </header>
                  <div className="w-full flex flex-col md:flex-row items-center gap-4">
                        <div className="md:w-1/2 w-full flex flex-col items-center justify-center gap-8">
                              <img src={samrat} className='w-32 h-32 rounded-full' />
                              <ContactDetail label="Name" value="Samrat Mallick" />
                              <Link to='https://maps.app.goo.gl/8t4Xu1Y7B8k3iRav8' >
                                    <ContactDetail label="Address" value="Habra, North 24 Parganas, West Bengal, India" />
                              </Link>
                              <ContactDetail label="Email" value={<a href='mailto:samratmallick832@gmail.com' className='text-base md:text-[16px] italic font-semibold cursor-pointer text-secondary hover:underline'>samratmallick832@gmail.com</a>} />
                              <ContactDetail label="Phone" value={<a href='tel:+919883203654' className='text-base md:text-[16px] italic font-semibold cursor-pointer text-secondary hover:underline'>+91-9883203654</a>} />
                              <div className="flex gap-6 text-sky-600 md:text-2xl text-xl">
                                    <Link
                                          to="https://www.facebook.com/coderSamrat"
                                          target="_blank"
                                          aria-label="Facebook"
                                          className="md:w-12 w-8 md:h-12 h-8 rounded-full flex items-center justify-center shadow-3xl hover:shadow-5xl transition-shadow duration-300"
                                    >
                                          <FontAwesomeIcon icon={faFacebookF} />
                                    </Link>
                                    <Link
                                          to="https://www.instagram.com/coder_samrat/"
                                          target="_blank"
                                          aria-label="Instagram"
                                          className="md:w-12 w-8 md:h-12 h-8 rounded-full flex items-center justify-center shadow-3xl hover:shadow-5xl transition-shadow duration-300"
                                    >
                                          <FontAwesomeIcon icon={faInstagram} />
                                    </Link>
                                    <Link
                                          to="https://www.linkedin.com/in/samrat-mallick-coder832/"
                                          target="_blank"
                                          aria-label="LinkedIn"
                                          className="md:w-12 w-8 md:h-12 h-8 rounded-full flex items-center justify-center shadow-3xl hover:shadow-5xl transition-shadow duration-300"
                                    >
                                          <FontAwesomeIcon icon={faLinkedinIn} />
                                    </Link>
                                    <Link
                                          to="https://github.com/coderSamrat"
                                          target="_blank"
                                          aria-label="GitHub"
                                          className="md:w-12 w-8 md:h-12 h-8 rounded-full flex items-center justify-center shadow-3xl hover:shadow-5xl transition-shadow duration-300"
                                    >
                                          <FontAwesomeIcon icon={faGithubAlt} />
                                    </Link>
                                    <Link
                                          to="https://maps.app.goo.gl/8t4Xu1Y7B8k3iRav8"
                                          target="_blank"
                                          aria-label="My Location"
                                          className="md:w-12 w-8 md:h-12 h-8 rounded-full flex items-center justify-center shadow-3xl hover:shadow-5xl transition-shadow duration-300"
                                    >
                                          <FontAwesomeIcon icon={faLocationDot} />
                                    </Link>
                              </div>
                              <Link to='https://drive.google.com/file/d/1HByXVvMtUM4q4NDAXtGGUtbiDGVbrxzK/view?usp=drive_link' target="_blank" className='md:px-12 px-4 py-3 border-2 border-primary rounded-lg md:text-lg text-md text-primary bg-bg2 hover:bg-primary hover:text-bg2 hover:border-bg2 transition duration-500 ease-linear font-semibold'>Dowload CV</Link>
                        </div>
                        <div className="md:w-1/2 w-full flex items-center justify-center">
                              <form name='submit-to-google-sheet' className='w-full max-w-lg flex flex-col p-4 md:p-6 lg:p-8 bg-primary rounded shadow-xl gap-4' onSubmit={handleSubmit}>
                                    <h2 id="contact-form-heading" className='text-2xl font-semibold text-secondary mb-4'>Send Me a Message</h2>
                                    <FormField id="Name" type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                                    <FormField id="Email" type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <FormField id="Phone" type="tel" placeholder="Enter Your Phone Number" pattern="[0-9]{10}" maxLength="10" inputMode="numeric" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    <FormField id="Message" type="textarea" placeholder="Enter Your Message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} />
                                    <button type='submit'
                                          className={`md:px-8 px-3 py-2 border border-secondary rounded md:text-lg text-md text-primary bg-secondary hover:bg-primary hover:text-secondary transition duration-500 ease-linear 
                                          font-semibold ${isLoading ? 'opacity-50 pointer-events-none' : ''}`}>
                                          {isLoading ? 'Sending...' : 'Send Message'}
                                    </button>
                                    <ToastContainer />
                              </form>
                        </div>
                  </div>
            </div>
      );
};

const ContactDetail = ({ label, value }) => (
      <div className='text-lg md:text-xl font-bold text-gray-300'>
            {label} : <span className='text-base md:text-[16px] italic font-semibold text-secondary cursor-pointer'>{value}</span>
      </div>
);

const FormField = ({ id, type, placeholder, rows, pattern, maxLength, inputMode, value, onChange }) => (
      <span className='flex flex-col gap-2'>
            {type === 'textarea' ? (
                  <textarea
                        id={id}
                        name={id}
                        placeholder={placeholder}
                        rows={rows}
                        className='px-4 py-2 rounded-lg bg-bg text-secondary text-md outline-none resize-none focus:ring-1 focus:ring-secondary'
                        value={value}
                        onChange={onChange}
                  />
            ) : (
                  <input
                        type={type}
                        id={id}
                        name={id}
                        placeholder={placeholder}
                        pattern={pattern}
                        maxLength={maxLength}
                        inputMode={inputMode}
                        className='px-4 py-2 rounded-lg bg-bg text-secondary text-md outline-none ring-0 focus:ring-1 focus:ring-secondary'
                        value={value}
                        onChange={onChange}
                  />
            )}
      </span>
);

export default ContactPage;
