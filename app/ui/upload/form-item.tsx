'use client'
import React, {FC, useEffect, useState} from 'react';
import styled from "styled-components";

interface Props {
  title: string,
  required?: boolean,
  verify?: (value: string) => boolean,
  validation?: string,
  showError?:boolean
  value: string,
  onChange: (value: string) => void,
}

const ItemInput = styled.input`
    background-color: ${props => props.color};
    border-radius: 0.25rem;
    padding-top: 0.25rem /* 4px */;
    padding-bottom: 0.25rem /* 4px */;
    outline: 2px solid transparent;
    outline-offset: 2px;
    border-bottom-width: 2px;
    border-style: solid;
    border-bottom-color: transparent;
    &:focus {
        border-bottom-color: ${props => props.color};
    }
`

const FormItem: FC<Props> = ({title, required, verify, validation, showError, value, onChange}) => {
  const d =
    <div className="bg-default-50 rounded py-1 outline-none focus:border-b-blue-400 border-b-2 border-solid border-b-transparent"></div>
  const [valid, setValid] = useState(true);
  const handleVerify = () => {
    if (required) {
      if (verify) {
        setValid(verify(value))
      } else {
        setValid(value !== '')
      }
    }
  }
  useEffect(()=>{
    if (showError === true)
      handleVerify()
  }, [showError])
  const message = validation && validation!=='' ? validation : "该字段必需"

  return (
    <div className="w-full h-10 flex items-center">
      <span className="w-20">
        {title}
        {required ? <span className="text-red-600">*</span> : ''}:
      </span>
      <input
        className="bg-default-50 rounded py-1 outline-none focus:border-b-blue-400 border-b-2 border-solid border-b-transparent"
        onBlur={handleVerify}
        type="text" value={value} onChange={(event) => onChange(event.target.value)}/>
      {!valid && <span className="text-red-600 text-sm">{message}</span>}
    </div>
  );
}

export default FormItem;