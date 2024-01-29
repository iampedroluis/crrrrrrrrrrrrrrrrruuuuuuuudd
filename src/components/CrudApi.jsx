import React, { useEffect, useState } from 'react';
import { CrudForm } from './CrudForm';
import { CrudTable } from './CrudTable';
import { helpHttp } from '../helpers/helpHttp';
import { Loader } from './Loader';
import { Message } from './Message';


export const CrudApi = () =>{
    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    
    let api = helpHttp()
    let url = "http://localhost:5000/santos"

    useEffect(() => {
        setLoading(true)
        api.get(url).then(resp => {
            //console.log(resp)
            if(!resp.err){
                setDb(resp)
                setError(null)
               
            }else{
                setDb(null)
                setError(resp)
               
            }
            setLoading(false)
        })
       
    },[url])

    const createData = (data) =>{
        data.id = String(Date.now());
        let options = {body: data, 
            headers: {"content-type":"application/json"}
        }
        api.post(url, options ).then(resp =>{
            console.log(resp)
            if(!resp.err){
                setDb([...db, resp])
            }else{
                setError(resp)
            }
        })
        setDb([...db, data])
    }
    const updateData = (data) =>{
        let endpoint = `${url}/${data.id}`
        let options = {body: data, 
            headers: {"content-type":"application/json"}
        }

        api.put(endpoint,options).then(resp =>{
            if(!resp.err){
                let newData = db.map((el)=> (el.id === data.id ? data : el))
                setDb(newData)
            }else{
                setError(resp)
            }
        })
        
    }
    const deleteData = (id) =>{
        let endpoint = `${url}/${id}`
        let options = {
            headers: {"content-type":"application/json"}
        }
        let isDelete = window.confirm(`Are you sure you want to delete the id: ${id}?` )
        if(isDelete){
            api.del(endpoint , options).then(resp => {
                if(!resp.err){
                    let newData = db.filter(el => el.id !== id)
                    setDb(newData)
                }else{
                    setError(resp)
                }
            })
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
            {loading  && <Loader/>}
            {error && <Message 
            msg={`Error ${error.status} : ${error.statusText} ❌`} 
            bgColor="#dc3545"/>}

            {db && <CrudTable
            data={db} 
            setDataToEdit={setDataToEdit} 
            deleteData={deleteData}
            /> }
            
            </article>

        </div>
    )
}