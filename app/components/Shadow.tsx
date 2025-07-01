import React from 'react'

interface Props {
    className?: string
}

export const Shadow: React.FC<Props> = ({ className }) => {
  return (
    <div className={`my-shadow ${className}`}></div>
)}