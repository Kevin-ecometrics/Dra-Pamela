import React from "react";

interface RibbonIconProps {
  className?: string;
}

const RibbonIcon: React.FC<RibbonIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="44"
      height="44"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#798672"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19.5 13.572l-7.5 7.428l-2.896 -2.868m-6.117 -8.104a5 5 0 0 1 9.013 -3.022a5 5 0 1 1 7.5 6.572" />
      <path d="M3 13h2l2 3l2 -6l1 3h3" />
    </svg>
  );
};

export default RibbonIcon;
