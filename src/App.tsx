import React, {MouseEventHandler, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';


function App() {
    //just to initialize some data
    let data = [{firstName: "Matti",lastName: "Meikäläinen", age: "30"}
  ];
    //make input values to states
    const [fn, setFN] = useState("");
    const [ln, setLN] = useState("");
    const[ag, setAG] = useState("");
    const [database, setDatabase] = useState(data); 
    //prevent page from updating and therefore removing all non-initialized data
    const preventEvent = (event: React.FormEvent<HTMLFormElement>) =>{
      event.preventDefault();
    }
    //handle to add new element into table
    const handleSubmit = () =>{
      
     database.push({firstName: fn,lastName: ln, age: ag})
     setDatabase([...database]);
      
    }
    //remove typed person from database
    const handleDelete = () => {
      
      for (let i=0;i<database.length;i++){
        if (database[i].firstName === fn && database[i].lastName === ln &&
          database[i].age === ag){
            database.splice(i,1);
            setDatabase([...database]);
            
          }
      }
    }

  return (
    <div className="App">
      <table>
        <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
        </tr>
        </thead>
        <tbody>
          {database.map((person) =>(
            <tr>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.age}</td>
            </tr>
          ))}
        </tbody>
        
        
      </table>
      <h2>Add/Delete person</h2>
      <form onSubmit={preventEvent}>
        <input 
            type="text"
            name="first_name"
            required
            placeholder="First name"
            value={fn}
            onChange={(e)=> setFN(e.target.value)}
        />
        <input
            type="text"
            name="last_name"
            required
            placeholder="Last name"
            value={ln}
            onChange={(e)=> setLN(e.target.value)}
        />
        <input
            type="text"
            name="age"
            required
            placeholder="Age"
            value={ag}
            onChange={(e)=> setAG(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>
        <button onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
}

export default App;
