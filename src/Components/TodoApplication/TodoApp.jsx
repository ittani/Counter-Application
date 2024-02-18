import { useState } from 'react'
import './TodoApp.css'

export default function TodoApp(){

    return (
        <div className="TodoApp">
          <LoginComponent></LoginComponent>
          {/* <WelcomeComponent></WelcomeComponent> */}
        </div>
    )
}

function LoginComponent(){

  const [username, setUsername] =  useState('ittani')

  const [password, setPassword] =  useState('9711')

  const [SuccessfullMessage, setShowSuccessMessage] = useState(false)
  const [FailedMessage, setShowFailedMessage] = useState(false)


  function hangleUsernameChange(event) {
    setUsername(event.target.value);

  }

  function hanglePasswordChange(event) {
    setPassword(event.target.value);

  }

  function handleSubmit(){

    if (username === 'ittani' && password === '12345')
    {
        console.log('success');
        setShowSuccessMessage(true);
        setShowFailedMessage(false);
    }
    else
    {
        console.log('Authentication failed, check your credentials and try again');
        setShowFailedMessage(true);
        setShowSuccessMessage(false);
    }
  }

  function SuccessfullMessageComponent()
{
    if (SuccessfullMessage)
    {
        return <div className='SuccessfullMessage'>Authentication successful</div>
    }
   
    return null;
    
}

function ErrorMessageComponent()
{
    if (FailedMessage)
    {
        return  <div className="FailedMessage">Authentication Faied. Please check  your credentials and try again</div>
    }
   
    return null;
    
}

    return (
        <div className="Login"> 
        <SuccessfullMessageComponent />
        <ErrorMessageComponent />  
              <div className="LoginForm">
                  <div>
                 <label>User name:</label>
                 <input type="text" name="username" value={username}  onChange={hangleUsernameChange}/>
                  </div>
                  <div>
                 <label>Password:</label>
                 <input type="password" name="password"  value={password}  onChange={hanglePasswordChange} ></input>
                  </div>
                  <div>
                    <button type="button" name="login"  onClick={handleSubmit}>login</button>
                  </div>
              </div>
        
        </div>
    )
}


function WelcomeComponent(){

    return (
        <div className="Welcome"> Welcome Component </div>
    )
}