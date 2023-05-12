// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [val, setVal] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isFormSubmitted, setFormSubmitted] = useState(false);
//   const name = "Anshul"

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (val === name) {
//       setIsLoggedIn(true);
//       setFormSubmitted(true);
//     } else {
//       setIsLoggedIn(false);
//       setFormSubmitted(true);
//     }
//   }

//   return (
//     <div className='App'>
//       {
//         isFormSubmitted ? (
//           <PrivateRoute LoggedIn={isLoggedIn} component={DashBoard} name={name} />
//         ) :
//           (
//             <div>
//               <h1>My App</h1>
//               <form onSubmit={handleSubmit}>
//                 <input type="text" onChange={e => setVal(e.target.value)} value={val} />
//                 <br />
//                 <button>Submit</button>
//               </form>
//             </div>
//           )
//       }
//     </div>
//   );
// }

// export default App;

// const PrivateRoute = (props) => {
//   if (props.LoggedIn) {
//     return <props.component name={props.name} />
//   } else {
//     return <h1>Access Denied</h1>
//   }
// }

// const DashBoard = (props) => {
//   return (
//     <div>
//       <h1>Welcome {props.name}</h1>
//       <button onClick={logout}>Logout</button>
//     </div>
//   )
// }


import { useState } from 'react';
import './App.css';

function App() {
  const [val, setVal] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const name = "Anshul"

  const handleSubmit = (e) => {
    e.preventDefault();
    if (val === name) {
      setIsLoggedIn(true);
      setFormSubmitted(true);
    } else {
      setIsLoggedIn(false);
      setFormSubmitted(true);
    }
  }

  const logout = () => {
    setIsLoggedIn(false);
    setFormSubmitted(false);
    setVal('');
  }

  return (
    <div className='App'>
      {
        isFormSubmitted ? (
          <PrivateRoute LoggedIn={isLoggedIn} component={DashBoard} name={name} logout={logout} />
        ) :
          (
            <div>
              <h1>My App</h1>
              <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setVal(e.target.value)} value={val} />
                <br />
                <button>Submit</button>
              </form>
            </div>
          )
      }
    </div>
  );
}

export default App;

const PrivateRoute = (props) => {
  if (props.LoggedIn) {
    return <props.component name={props.name} logout={props.logout} />
  } else {
    return <h1>Access Denied</h1>
  }
}

const DashBoard = (props) => {
  return (
    <div>
      <h1>Welcome {props.name}</h1>
      <button onClick={props.logout}>Logout</button>
    </div>
  )
}
