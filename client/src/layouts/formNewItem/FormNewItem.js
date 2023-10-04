import React, { useState } from 'react';

const FormNewItem = (props) => {
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [notes, setNotes] = useState('');
    const submit = () => {
        if (fullName.trim() === '' || phone.trim() === '') return;
        props.appendContact(fullName, phone, notes);
        setFullName('');
        setPhone('');
        setNotes('');
    };


    return (
        <form>
            <div className='mb-3'>
                <label className='form-label'>ФИО</label>
                <input
                    className='form-control'
                    type="text"
                    value={fullName}
                    onChange={(event) => { setFullName(event.target.value); }}
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Телефон</label>
                <input className='form-control' type="text"
                    value={phone}
                    onChange={(event) => { setPhone(event.target.value); }}
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Заметки</label>
                <textarea className='form-control' rows="4"
                    onChange={(event) => { setNotes(event.target.value); }}
                    value={notes}
                />
            </div>

            <div>
                <button
                    type='button'
                    className='btn btn-primary'
                    onClick={submit}>
                    Новый контакт
                </button>
            </div>
        </form>

    );
}

export default FormNewItem;