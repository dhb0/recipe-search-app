import React from "react";

const Alert = ({alert}) => {
  return (
    <div class={`alert alert-${alert.type}`} role="alert">
      {alert.text}
    </div>
  );
};

export default Alert;
