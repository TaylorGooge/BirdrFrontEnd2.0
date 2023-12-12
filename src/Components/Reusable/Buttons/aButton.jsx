

import React from 'react';

const AButton = ({ type, id=null, href=null, className, spanMessage, onClick=null, datatestid=null }) => {

  return (
    <>
      <a
        type={type}
        id={id}
        href={href}
        className={className}
        onClick={onClick}
        data-testid={datatestid}
      >
        <span>{spanMessage}</span>
      </a>
    </>


  );

}

export default AButton;