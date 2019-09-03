import React, { useState, useRef, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const Monthpicker = ({ onChange, value = '', ...props }) => {
    let [isOpen, setIsOpen] = useState(false);
    const node = useRef();
    const handleClick = (e) => {
        if (node.current.contains(e.target)) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }

    const months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        }
    });

    return (
        <div ref={node} style={{ position: 'relative' }}>
            <input value={ months[value] || '' } {...props} readOnly />
            {isOpen && <Scrollbars style={{ height: 150 }}>
                <ul style={{
                    listStyle: 'none',
                    padding: 0
                }}>
                    {
                        months.map((month, index) => (
                            <li key={index} style={{ padding: '5px 10px' }} onClick={() => {
                                onChange(index);
                                setIsOpen(false);
                            }} >
                                { month }
                            </li>
                        ))
                    }
                </ul>
            </Scrollbars>
            }
        </div>
    );
}

export default Monthpicker;