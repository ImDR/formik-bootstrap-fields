import React from 'react';

const SubmitBtn = ({ isSubmitting }) => {
    return isSubmitting ? 'Loading...' : <button type="submit">Submit</button>;
}

export default SubmitBtn;