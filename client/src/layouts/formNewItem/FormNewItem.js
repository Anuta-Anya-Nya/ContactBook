import React from 'react'

const FormNewItem = (props) => {
    return (
        <form>
            <div className='mb-3'>
                <label className='form-label'>ФИО</label>
                <input className='form-control' type="text" />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Телефон</label>
                <input className='form-control' type="text" />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Заметки</label>
                <textarea className='form-control' rows="4" />
            </div>

            <div>
                <button
                    className='btn btn-primary'
                    onClick={props.appendContact}>
                    Новый контакт
                </button>
            </div>
        </form>

    );
}

export default FormNewItem;