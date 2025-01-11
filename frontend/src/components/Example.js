import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Example = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/example')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error(error));
  }, []);

  return <div>{message}</div>;
};

export default Example;