/* eslint-disable import/no-mutable-exports */
let BASE_URL;

if (process.env.REACT_APP_ENV === 'production') {
  BASE_URL = '.com';
} else if (process.env.REACT_APP_ENV === 'development') {
  BASE_URL = '.ovh';
}

export { BASE_URL };
