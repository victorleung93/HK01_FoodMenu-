import React from 'react'

 const SignIn = () => {
  return (
    <div className="App"  style={{width:"80%", margin:"80px auto"}}>
        <form>
            <label>User Name: </label>
            <input type='text' id="userName"></input><
            <label>Password: </label>
            <input type='text' id="password"></input>

        </form>
    </div>
  )
}




export default SignIn;
