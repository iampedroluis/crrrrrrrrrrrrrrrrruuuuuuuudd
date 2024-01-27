import React, { useState } from 'react';
import { CrudForm } from './CrudForm';
import { CrudTable } from './CrudTable';


export const CrudApi = () =>{
    const [db, setDb] = useState([]);
    const [dataToEdit, setDataToEdit] = useState(null)
        
    const createData = (data) =>{
        data.id = Date.now();
        setDb([...db, data])
    }
    const updateData = (data) =>{
        let newData = db.map((el) => (el.id === data.id ? data : el))
        setDb(newData)
    }
    const deleteData = (id) =>{
        let isDelete = window.confirm(`Are you sure you want to delete the id: ${id}?` )
        if(isDelete){
            let newData = db.filter(el => el.id !== id)
            setDb(newData)
        }else{
            return
        }
    }
    return(
        <div>
            <h2>CRUD API</h2>
            <article className='grid-1-2'>
            <CrudForm 
            createData={createData} 
            updateData={updateData} 
            dataToEdit={dataToEdit} 
            setDataToEdit={setDataToEdit} 
            />
            <CrudTable
            data={db} 
            setDataToEdit={setDataToEdit} 
            deleteData={deleteData}
            /></article>

        </div>
    )
}