import { useState } from 'react';

export default function Person() {
  const [person, setPerson] = useState({
    firstName: 'Daisy',
    lastName: 'Janosik',
    contact: {
        email: 'daisy_janosik@email.com'
    }
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value
    });
  }

  // Handling changes to nested elements
  function handleEmailChange(e) {
    setPerson({
      ...person,
      contact: {
        email: e.target.value
      }
    });
  }

  return (
    <>
      <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email:
        <input
          value={person.contact.email}
          onChange={handleEmailChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.contact.email})
      </p>
    </>
  );
}
