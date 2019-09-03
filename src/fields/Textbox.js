import React, { useState } from 'react';

const Textbox = ({ field: { onChange, onBlur, name, value }, form: { touched, errors }, label, help, multiline, ...props }) => {
    const invalid = touched[name] && errors[name];
    let { text, setText } = useState(value);
    let Component = multiline ? 'textarea' : 'input';

    return (
        <div className="form-group">
            { label && <label htmlFor={ name }>{ label }</label> }
            <Component
                className={ invalid ? 'form-control is-invalid' : 'form-control' } 
                { ...props } 
                id={ name }
                value={ text }
                name={ name }
                onChange={ setText }
                onBlur={(e) => {
                    onBlur(e);
                    onChange(e);
                }}
            />
            { invalid && <div className="invalid-feedback">{ invalid }</div> }
            { help && <small className="form-text text-muted">{ help }</small> }
        </div>
    )
};

export default Textbox;