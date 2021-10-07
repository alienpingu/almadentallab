import React from 'react';

export default function RecordAudio(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <circle cx={12} cy={12} r={6} className="uim-tertiary" />
      <path className="uim-primary" d="M12,2A10,10,0,1,0,22,12,10.01146,10.01146,0,0,0,12,2Zm0,16a6,6,0,1,1,6-6A6.00687,6.00687,0,0,1,12,18Z" />
    </svg>
  );
}
