import React from 'react';
import Logo from 'assets/images/Logo.svg';

const Home = () => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img src={Logo} style={{ width: 300 }} alt="Sobrus" />
    </div>
  </div>
);

export default Home;
