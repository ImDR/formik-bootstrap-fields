import React, { useState, useRef, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const Yearpicker = ({ onChange, value = '', ...props }) => {
    let [isOpen, setIsOpen] = useState(false);
    const node = useRef();
    const handleClick = (e) => {
        if (node.current.contains(e.target)) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }

    const items = [];
    for (let i = 1950; i <= 2019; i++) {
        items.push(
            <li key={i} style={{ padding: '5px 10px' }} onClick={() => {
                onChange(i);
                setIsOpen(false);
            }} >
                {i}
            </li>
        );
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        }
    });

    return (
        <div ref={node} style={{ position: 'relative' }}>
            <input value={value} {...props} readOnly />
            {isOpen && <Scrollbars style={{ height: 150 }}>
                <ul style={{
                    listStyle: 'none',
                    padding: 0
                }}>
                    {items}
                </ul>
            </Scrollbars>
            }
        </div>
    );
}

export default Yearpicker;