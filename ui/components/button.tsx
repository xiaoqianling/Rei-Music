import React from 'react';
import {useSelector} from "@/lib/redux/store";
import {selectCurrentTheme} from "@/lib/redux/slices";
import styled from "styled-components";
import {Property} from "csstype";

interface buttonProps {
  onClick?: () => void,
  primary?: boolean,
  error?: boolean,
  children?: React.ReactNode,
  className?: string,
  type?: "submit" | "reset" | "button",
  isDisabled?: boolean,
  weight?: Property.FontWeight
}

const ButtonBase = styled.button`
    width: 5rem;
    white-space: nowrap;
    height: 2.25rem;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    border-radius: 0.5rem
`

const PrimaryButton = styled(ButtonBase)`
    color: white;
    border: none;
    background-color: ${props => props.color};
`

const UnPrimaryButton = styled(ButtonBase)`
    color: black;
    border: solid rgb(209, 213, 219) 2px;

    &:hover {
        color: ${props => props.color};
        border-color: ${props => props.color};
    }
`

const Button: React.FC<buttonProps> = ({onClick, weight, error, isDisabled, primary, children, className, type}) => {
  const currentTheme = useSelector(selectCurrentTheme)
  const style = primary ? "text-white border-none bg-default-800 hover:bg-default-500" :
    "text-black border-gray-300 border-solid border-2 hover:text-default-800 hover:border-default-800"
  //className={`${className} ${style} w-20 whitespace-nowrap h-9 transition-colors duration-100 ease-in rounded-lg`
  return (
    <div className={className}>
      {primary ?
        <PrimaryButton color={error ? '#F00' : currentTheme.config.primary} disabled={isDisabled} style={{fontWeight: weight||'bold'}}
                       className={isDisabled ? 'cursor-not-allowed' : ''}
                       onClick={onClick} type={type ? type : 'button'}>
          {children}
        </PrimaryButton> :
        <UnPrimaryButton color={error ? '#F00' : currentTheme.config.primary} disabled={isDisabled} style={{fontWeight: weight}}
                         className={isDisabled ? 'cursor-not-allowed' : ''}
                         onClick={onClick} type={type ? type : 'button'}>
          {children}
        </UnPrimaryButton>}
    </div>
  );
}

export default Button;