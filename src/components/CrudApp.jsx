import React, { useState, useEffect } from 'react';
import { CrudForm } from './CrudForm';
import { CrudTable } from './CrudTable';

const initialDb = [
    { id: 1, name: "Seiya", constellation: "Pegaso" },
    { id: 2, name: "Shiryu", constellation: "Dragón" },
    { id: 3, name: "Hyoga", constellation: "Cisne" },
    { id: 4, name: "Shun", constellation: "Andrómeda" },
    { id: 5, name: "Ikki", constellation: "Fénix" },
    { id: 6, name: "Saori Kido", constellation: "Atena" },
    
];



export const CrudApp = () =>{
    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null)
        setDb([...db,, ddatttaa])
    const createData = (data) =>{
        
    }
    const updateData = (data) =>{

    }
    const deleteData = (id) =>{

    }

    return(
        <div>
            <h2>CRUD App</h2>
            <CrudForm 
            createData={createData} 
            updateData={updateData} 
            dataToEdit={dataToEdit} 
            setDataToEdit={setDataToEdit} 
            />
            <CrudTable
            data={db} 
            setDataToEdit={setDataToEdit} 
            deleteData={dataToEdit}
            />

        </div>
    )
}