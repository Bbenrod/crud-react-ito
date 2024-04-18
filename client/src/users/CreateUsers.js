import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8080/api/users'

const CompCreateUsers = () => {
    const [name, setName] = useState('')
    const [studentNumber, setStudentNumber] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const navigate = useNavigate()

    //Procedimiento Guardar
    const store = async (e) => {
        e.preventDefault();
        try {
            await axios.post(URI, { name, studentNumber, phoneNumber });
            navigate('/');
        } catch (error) {
            console.error('Error al crear usuario:', error.response.data);
        }
    }; 

    return (
        <div>
            <h3>Create User</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Student Number</label>
                    <textarea
                        value={studentNumber}
                        onChange={(e) => setStudentNumber(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Phone Number</label>
                    <textarea
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Store</button>
            </form>
        </div>
    )
}

export default CompCreateUsers