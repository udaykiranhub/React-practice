import React, { useState } from 'react';

function Login() {
  const [name, setName] = useState(' ');
  const [email,setEmail]=useState("");
  const [id,setId]=useState("");

  const handleName = (event) => {
    setName(event.target.value);
    
  };
  function handleEmail(event){
    setEmail(event.target.value);
  }
function handleId(event){
  setId(event.target.value);
}
const handleSubmit=async (event)=>{
 // Prevent default form submission

  // Validation logic here
  if (name === '' || email === '' ||  id==='') {
    alert('Please fill in all required fields!');
    event.preventDefault();
    return; // Exit the function if validation fails
  }

  // If validation passes, submit the form data (e.g., using fetch)
  console.log('Submitting form:', { name, email });

}
  return (
    <center>
    <div>
<form action='/https://www.javatpoint.com' method='POST' onSubmit={handleSubmit} >

<br/>
<br/>
    Name:<input type="text"  className="" name='name'  onChange={handleName} />
      <br />
    Email:<input type='mail' name="email" onChange={handleEmail} />
    <br/>
Id:<input type='text' name="id" onChange={handleId} />
  <br/>
    
    <h1>Entered name is: {name}</h1>
    <h1>email is:{email}</h1>
    <h2>ID is:{id}</h2>
     <br/>
      <input type="submit" value="submit"/>
</form>
    </div>
    </center>
  );
}

export default Login;
