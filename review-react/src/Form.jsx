import { useState } from 'react';

export default function Form() {
  const [message, setMessage] = useState('Hi!');

    function handleFormSubmit(e) {
        e.preventDefault();
        alert(`You sent: ${message}`);
    }

  return (
    <form onSubmit={(e) => {
        setMessage('');
        {handleFormSubmit(e)}
        }}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}