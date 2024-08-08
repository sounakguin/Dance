import React, { useState } from 'react';

export default function DanceForFun() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh on form submission
    // You can add further form submission logic here (e.g., send the email to a server)

    // Show thank-you message and clear the input field
    setMessage('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div>
      <div className="DFF">
        <p className='DFF1'>Dance For Fun</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        
        
        </p>
        <p>  doloremque nisi ipsam, labore dolore voluptate dignissimos</p>
      
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button type="submit">Subscribe</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}
