import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({color}, {index}) => {
  const [alert, setAlert] = useState(false);
  const {rgb, weight, hex} = color;

  const bgc = rgb.join(',');
  const bgColor = {style: {backgroundColor: `rgb(${bgc})`}};

  useEffect(()=>{
    const timeout= setTimeout(() => {
      setAlert(false);
    }, 2000)
    return ()=> clearTimeout(timeout)
  },[alert])

  return (
    <article className={`color ${index > 10 && 'color-light'}`} {...bgColor}
    onClick={()=>{
      setAlert(true)
      navigator.clipboard.writeText(`#${hex}`);}}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{`#${hex}`}</p>
      {alert && <p className="alert">copied the clipboard</p>}
    </article>
  )
}

export default SingleColor
