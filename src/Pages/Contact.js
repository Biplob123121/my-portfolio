import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import handShake from '../images/hand.jpg';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3qi8fl9', 'template_s5feejr', form.current, 'Cs-CMHdNv8wADgZ6K')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div className='bg-secondary h-screen px-12' style={{
            background: `url(${handShake})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <h2 className='text-4xl font-bold pt-12 mb-2'>Contact With Me</h2>
            <hr />
            <div className="hero">
                <form ref={form} onSubmit={sendEmail} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-8">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='user_name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='user_email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Message</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24" placeholder="Message" name='message'></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <div className="form-control w-full max-w-xs">

                                <input type="submit" value='SEND' className="input btn btn-primary input-bordered w-full max-w-xs" />

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;