import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import * as routes from '../../../constants/routes';

const SignUpLink = () => {
  return (
    <p>
      Don't have an account ?
      {' '}
      <Link to={routes.SIGN_UP}>Sign up</Link>
    </p>
  );
}

export default SignUpLink;
