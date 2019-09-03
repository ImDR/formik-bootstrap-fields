import React from 'react';
import Yearpicker from '../components/Yearpicker';

const YearPickerField = ({ field: { name, value }, form: { setFieldValue, touched, errors }, label, help, multiline, ...props }) => {
    const invalid = touched[name] && errors[name];
    return (
        <div className="form-group">
            { label && <label htmlFor={ name }>{ label }</label> }
            <Yearpicker
                className={ invalid ? 'form-control is-invalid' : 'form-control' } 
                { ...props } 
                id={ name }
                name={ name }
                value={ value }
                onChange={value => {
                    setFieldValue(name, value);
                }}
            />
            { invalid && <div className="invalid-feedback">{ invalid }</div> }
            { help && <small className="form-text text-muted">{ help }</small> }
        </div>
    )
};

export default YearPickerField;