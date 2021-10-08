import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const FormContext = React.createContext(false);

export const ContextStore = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <FormContext.Provider value={[showForm, setShowForm]}>
      {children}
    </FormContext.Provider>
  );
};

ContextStore.propTypes = {
  children: PropTypes.instanceOf(Object),
};
