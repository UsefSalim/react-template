import React from 'react';
import Logo from 'assets/images/Logo.svg';

function App() {
  return (
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
        {/* <Button style={{ marginLeft: '2.5rem', marginTop: '3rem' }} color="primary" outline>
          Sobrus
        </Button> */}
      </div>
    </div>
  );
}

export default App;
