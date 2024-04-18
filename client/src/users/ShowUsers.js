import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8080/api/users'

const CompShowUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    //Mostrar los usuarios
    const getUsers = async () => {
        const res = await axios.get(URI)
        setUsers(res.data)
    }

    //Eliminar un usuario
    const deleteUser = async (_id) => {
        try {
            await axios.delete(`${URI}/${_id}`)
            getUsers()
        } catch (error) {
            console.error('Error al eliminar usuario:', error)
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'>Create</Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Name</th>
                                <th>Student Number</th>
                                <th>Phone Number</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.studentNumber}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>
                                        <Link to={`/edit/${user._id}`} className='btn btn-info'>Edit</Link>
                                        <button onClick={() => deleteUser(user._id)} className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowUsers