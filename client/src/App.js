import "./App.css";
import TableView from './layouts/tableView/TableView';
import React, { useState, useEffect } from 'react';
import FormNewItem from './layouts/formNewItem/FormNewItem'
import axios, { Axios } from "axios";

function App() {
  // const items = [
  //   { id: 1, fullName: 'FIO1', phone: '+7 111 111 11 11', notes: 'note1' },
  //   { id: 2, fullName: 'FIO2', phone: '+7 111 111 11 12', notes: 'note2' },
  //   { id: 3, fullName: 'FIO3', phone: '+7 111 111 11 13', notes: 'note3' },
  //   { id: 4, fullName: 'FIO4', phone: '+7 111 111 11 14', notes: 'note4' },
  //   { id: 5, fullName: 'FIO5', phone: '+7 111 111 11 15', notes: 'note5' }
  // ];
  const [items, setItems] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8080/api/contacts')
    .then(result => {
      const data = [];
      result.data._embedded.contacts.forEach(item => {
        data.push({
          fullName: item.fullName,
          phone: item.phone,
          notes: item.notes
        })
      })
      setItems(data);
    })
  }, [])
  

  let currentId = 0;
  if (items.length === 0) {
    currentId = 1;
  } else {
    currentId = items[items.length - 1].id + 1;
  }

  const appendContact = (fullName, phone, notes) => {
    const temp = { id: currentId, fullName: fullName, phone: phone, notes: notes };
    setItems([...items, temp]);
  }

  const removeItem = (id) => {
    setItems(items.filter(el => el.id !== id));
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h1>Список контактов</h1>
        </div>
        <div className="card-body">
          <TableView data={items} removeItem={removeItem} />
          <FormNewItem appendContact={appendContact} />
        </div>
      </div>
    </div>
  );
}

export default App;
