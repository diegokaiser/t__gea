import React from 'react';

const Message = ({ severity, text }: { severity: string; text?: string }) => {
  return (
    <>
      <Message severity={severity} text={text} />
    </>
  );
};

export default Message;
