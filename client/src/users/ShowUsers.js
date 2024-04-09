import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:3000/api/users'

const CompShowUsers = () => {
    const [users, setUsers] = useState([])
    useEffect( ()=>{
        getUsers()
    },[])

    //Mostrar los usuarios
    const getUsers = async () => {
        const res = await axios.get(URI)
        setUsers(res.data)
    }

    //Eliminar un usuario
    const deleteUser = async (id) => {
        axios.delete('${URI}${id}')
        getUsers()
    }
    
    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { blogs.map ( (users) => (
                                <tr key={ users.id}>
                                    <td> { users.title } </td>
                                    <td> { users.content } </td>
                                    <td>
                                        <Link to={`/edit/${users.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deleteUser(users.id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )
}

export default CompShowUsers