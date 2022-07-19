import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

export interface IState {
  people: {
    name: string,
    age: number,
    bio: string
  }[]
}
function App() {
  const [age, setAge] = useState(5);
  const [name, setName] = useState("hoang tan");
  const [inputData, setInputData] = useState({ name: "", age: "" })
  const [size, setSize] = useState<number | string>(30);
  const [people, setPeople] = useState<IState["people"]>([{name: "hoang tan", age: 27, bio: "developer"}])
  return (
    <div className="container"> 
        <Form people={people} setPeople={setPeople} />
        <List people={people} />
    </div>
  );
}

export default App;
