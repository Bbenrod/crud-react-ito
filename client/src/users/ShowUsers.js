import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:3000/api/users'

const initialUsers = [
    {
        "_id": "6614cedcfbf118429dd51e39",
        "name": "Benji",
        "studentNumber": "20630277",
        "phoneNumber": "3921022513",
        "photoUrl": "https://media.licdn.com/dms/image/D4D03AQF7jX8kG9A6GQ/profile-displayphoto-shrink_800_800/0/1708014797139?e=1718236800&v=beta&t=RaFApDJj1m2DAz3u74_z7YHaO7Iuktb6adJxcJvoWzE",
        "__v": 0
    },
    {
        "_id": "6614cedcfbf118429dd51e3a",
        "name": "Juan",
        "studentNumber": "20630236",
        "phoneNumber": "3923333333",
        "photoUrl": "https://media.licdn.com/dms/image/D5635AQHBJx1Ct4dH3Q/profile-framedphoto-shrink_800_800/0/1708573748504?e=1713247200&v=beta&t=zBMInvld5oTs6qiyA7F8JwdwXpcPAejtogSatBfelVg",
        "__v": 0
    }
]

const CompShowUsers = () => {
    const [users, setUsers] = useState(initialUsers)

    /*useEffect(() => {
        getUsers()
    }, [])

    Mostrar los usuarios
    const getUsers = async () => {
        const res = await axios.get(URI)
        console.log(res.data)
        setUsers(res.data)
    }*/

    //Eliminar un usuario
    const deleteUser = async (id) => {
        setUsers(users.filter(user => user._id !== id))
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
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
                                        <Link to={`/edit/${user._id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={() => deleteUser(user._id)} className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
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