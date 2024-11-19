import { useState } from 'react';

const resolveColorFromType = (type) => {
  switch (type) {
    case 'success':
      return 'green';
    case 'warning':
      return 'yellow';
    case 'error':
      return 'red';
    default:
      return 'lightgray'; 
  }
};

const resolveIconFromType = (type) => {
  switch (type) {
    case 'success':
      return '✔️'; 
    case 'warning':
      return '⚠️'; 
    case 'error':
      return '❌'; 
    default:
      return 'ℹ️';
  }
};

const Alert = ({ 
  title, 
  type, 
  message, 
  icon, 
  dismissible = false, 
  children 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="alert"
      style={{ backgroundColor: resolveColorFromType(type) }}
    >
      <div className="alert-content">
        <h3>
          <span className="icon">{icon || resolveIconFromType(type)}</span>
          {title}
        </h3>
        {message && <p>{message}</p>}
        {children && <div className="alert-children">{children}</div>}
      </div>
      {dismissible && (
        <button className="close-btn" onClick={handleClose}>
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;