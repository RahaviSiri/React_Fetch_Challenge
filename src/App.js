// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";
import Table from "./Table";

function App() {

  const [reqType,setReqType] = useState('users');
  const [items,setFetchItems] = useState([]);
  const API_URL = "https://jsonplaceholder.typicode.com/";
  useEffect(() => {
    const fetchItems = async () => {
      try{
        const response = await fetch(`${API_URL}${reqType}`);
        if(!response.ok) throw Error("Data not fetched");
        const values = await response.json();
        setFetchItems(values);
      }
      catch(e){
        console.log(e);
      }
      
    }
    setTimeout (() =>{
      (async() => await fetchItems()) ()})
  },[reqType])

  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType}/>
      <List items = {items}/>
      {/* <Table items = {items}/> */}
    </div>
      

  );
}

export default App;
