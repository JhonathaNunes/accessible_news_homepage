import React, { FC, MouseEventHandler } from "react";

interface IconBtnProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
  value: string;
}

const IconBtn: FC<IconBtnProps> = ({ onClick, value, icon }) => {
  return (
    <button onClick={onClick} className="icon-button">
      {icon}
      <span className={icon ? "mg-l-16" : ""}>{ value }</span>
    </button>
  );
};

export default IconBtn;
