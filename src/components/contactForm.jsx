import { useState } from 'react';
import { validateEmail } from './utils/helpers';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleState = (event) => {
    event.preventDefault();

    const inputName = event.target.name;
    const fieldValue = event.target.value;

    switch (inputName) {
      case 'name':
        setName(fieldValue);
        break;
      case 'email':
        setEmail(fieldValue);
        break;
      case 'message':
        setMessage(fieldValue);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let errorMessage = '';

    switch (true) {
      case !name:
        errorMessage += 'Please enter a name.';
        break;
      case !email || !validateEmail(email):
        errorMessage += 'Please enter a valid email.';
        break;
      case !message:
        errorMessage += 'Please enter a message.';
        break;
      default:
        break;
    }

    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    setSubmitted(true);

    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={name}
          onChange={handleState}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={handleState}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea
          className="form-control"
          name="message"
          value={message}
          onChange={handleState}
        ></textarea>
      </div>
      <button type="submit" className="btn custom-button-color">
        Submit
      </button>
      {submitted ? <p>Thanks for your submission!</p> : null}
    </form>
  );
}

export default ContactForm;
