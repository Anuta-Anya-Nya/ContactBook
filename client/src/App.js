import "./App.css";
import TableView from './layouts/tableView/TableView';
import React, { useState } from 'react';
import FormNewItem from './layouts/formNewItem/FormNewItem'

function App() {
  // const items = [
  //   { id: 1, fullName: 'FIO1', phone: '+7 111 111 11 11', notes: 'note1' },
  //   { id: 2, fullName: 'FIO2', phone: '+7 111 111 11 12', notes: 'note2' },
  //   { id: 3, fullName: 'FIO3', phone: '+7 111 111 11 13', notes: 'note3' },
  //   { id: 4, fullName: 'FIO4', phone: '+7 111 111 11 14', notes: 'note4' },
  //   { id: 5, fullName: 'FIO5', phone: '+7 111 111 11 15', notes: 'note5' }
  // ];
  const [items, setItems] = useState([
    { id: 1, fullName: 'FIO1', phone: '+7 111 111 11 11', notes: 'note1' },
    { id: 2, fullName: 'FIO2', phone: '+7 111 111 11 12', notes: 'note2' },
    { id: 3, fullName: 'FIO3', phone: '+7 111 111 11 13', notes: 'note3' },
    { id: 4, fullName: 'FIO4', phone: '+7 111 111 11 14', notes: 'note4' },
    { id: 5, fullName: 'FIO5', phone: '+7 111 111 11 15', notes: 'note5' }
  ])
  const appendContact = () => {
    const temp = { id: 5, fullName: 'FIO5', phone: '+7 111 111 11 15', notes: 'note5' };
    setItems([...items, temp]);
  }
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h1>Список контактов</h1>
        </div>
        <div className="card-body">
          <TableView data={items} />
          <FormNewItem appendContact={appendContact} />
        </div>
      </div>
    </div>
  );
}

export default App;
