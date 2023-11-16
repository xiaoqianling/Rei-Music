import React from 'react';

interface buttonProps {
  onClick?: () => void,
  primary?: boolean,
  children?: React.ReactNode,
  className?: string,
  type?: "submit" | "reset" | "button"
}

const Button: React.FC<buttonProps> = ({onClick, primary, children, className, type}) => {
  const style = primary ? "text-white border-none bg-default-800 hover:bg-default-500" :
    "text-black border-gray-300 border-solid border-2 hover:text-default-800 hover:border-default-800"
  return (
    <button
      className={`${className} ${style} w-20 whitespace-nowrap h-9 transition-colors duration-100 ease-in rounded-lg`}
      onClick={onClick} type={type ? type : 'button'}>
      {children}
    </button>
  );
}

export default Button;