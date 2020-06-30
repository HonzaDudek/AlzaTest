import React from 'react';

type partlyBoldInfoPanelType = {
  regularText: string;
  boldText: string;
  className?: string;
};

export const PartlyBoldText: React.FC<partlyBoldInfoPanelType> = props => {
  const reg = new RegExp(`(${props.boldText})`, 'gi');
  const textParts = props.regularText.split(reg);
  return (
    <span className={props.className}>
      {textParts.map((part, index) =>
        part.match(reg) ? <strong key={index}>{part}</strong> : part
      )}
    </span>
  );
};
