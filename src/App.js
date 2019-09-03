import React from 'react';
import { Formik, Field } from 'formik';
import Textbox from './fields/Textbox';
import SubmitBtn from './fields/SubmitBtn';

function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{ email: '' }}
        validate={(values) => {
          let errors = {};
          if (!values.email) {
            errors.email = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 500);
        }}
        render={props => {
          return (
            <form onSubmit={props.handleSubmit}>
              <Field component={Textbox} type="text" label="Email" name="email" placeholder="Email" />
              <Field component={Textbox} multiline label="Email" name="message" placeholder="Message" />
              <SubmitBtn isSubmitting={ props.isSubmitting } />
            </form>
          )
        }}
      />
    </div>
  );
}

export default App;