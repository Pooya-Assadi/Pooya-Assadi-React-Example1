import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const hello = <div>
  <p className='testClassName' style={{ fontFamily: 'fantasy', fontSize: '110px', color: 'white', paddingTop: '70px', margin: '0' }}>Hello World
    <span style={{ color: 'rgba(161,216,255,1)' }}>!</span>
  </p>
</div>;

const logInButton = <button style={{ color: 'white', backgroundColor: 'rgb(34,65,147)', borderStyle: 'solid', borderWidth: '2px 2px 2px 0', fontFamily: 'sans-serif', cursor: 'pointer' }}>Log in</button>

root.render(
  <div style={{ backgroundImage: `url("https://wallpaperaccess.com/full/186464.jpg")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '100%', height: '100vh', paddingLeft: '80px' }}>
    {hello}
    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '35px', paddingLeft: '80px' }}>
      <label htmlFor='username' style={{ fontFamily: 'sans-serif', fontSize: '24px', color: 'white', margin: '0 4px 12px 65px' }}>
        Input your username : </label>
      <div style={{ width: 'max-content', display: 'flex', flexDirection: 'row', boxShadow: ' 5px 5px 0px 0px #289FED, 10px 10px 0px 0px #5FB8FF, 15px 15px 0px 0px #A1D8FF, 20px 20px 0px 0px #CAE6FF, 25px 25px 0px 0px #E1EEFF, 2px 4px 15px 50px rgba(200,255,36,0)' }}>
        <input id='username' style={{ width: '350px', height: '28px', borderStyle: 'solid', borderWidth: '2px', borderColor: '#191970', fontFamily: 'fantasy', fontSize: '18px', color: 'rgb(34,65,147)', backgroundColor: 'rgba(230,242,250,3)' }} />
        {logInButton}
      </div>
    </div>
  </div>
);