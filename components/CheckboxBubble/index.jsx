import React from 'react'
import './style.scss'

const CheckboxBubble = ({name, value, label, onChange, selectionState}) =>
    <div className="checkbox-bubble">
        <input 
            className="checkbox-bubble__input visually-hidden" 
            type="checkbox" 
            name={name} 
            value={value} 
            id={`${name}-${value}`}
            checked={selectionState.includes(value)}
            onChange={onChange}
            />
        <label className="checkbox-bubble__label" htmlFor={`${name}-${value}`}>
            {label}
        </label>
    </div>

export default CheckboxBubble