import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [data,setData] = useState({});
  const [users,setUsers] = useState([]);

  const handleData = ({target}) =>{
    const newData = target.value;
    // console.log(newData);
    setData({...data, [target.name]:newData})
  }

 const handleSubmit = async () => {
    await axios.post('http://localhost:5000/users',data)
    setData({})
  } 

  useEffect(()=>{
    (async() => {
      const users = await axios.get('http://localhost:5000/users');
      // console.log(users.data)
      setUsers(users.data)
    })()
  },[data]);


  return (
    <div class="container">
      <div className="App" style={{marginTop:"50px"}}>
        <input type="text" style={{marginRight:"5px"}} name="firstName" placeholder="First Name" onChange={handleData}/>
        <input type="text" style={{marginRight:"5px"}} name="lastName" placeholder="Last Name" onChange={handleData}/>
        <input type="submit" style={{marginRight:"5px"}} onClick={handleSubmit}/>

        <div style={{marginTop:"50px"}}>
          {
            users.map((item,idx)=>{
              return <p key={idx}>{idx+1}. {item.firstName} {item.lastName}</p>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
