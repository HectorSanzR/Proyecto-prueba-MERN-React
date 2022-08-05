import axios from 'axios';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

const URI = 'http://localhost:8000/home/'

const CompShowUsers = () =>{

    const [users, setUser] = useState([])
        useEffect(()=>{
            getUser()
        },[])
        
    const getUser = async ()=>{
        const res =  await axios.get(URI)
        setUser(res.data)

    }

    // 
    
    const deleteUser = async(id)=>{
        await axios.delete(`${URI}${id}`)
        getUser()
    }
    
    return (
        <>
            <div className="container-fluid" >
            <div className='table-responsive' >
                <div className='row'>
                    <div className='col'>
                        <Link to='/create' className='btn btnprimary-lg mt-2 mb-2'><i className="fa-solid fa-circle-plus fa-beat"> New User</i></Link>
                    <table className='table table-striped' >
                        <thead className='table-dark'  >
                            <tr>
                                <th>Name</th>
                                <th>Midde Name</th>
                                <th>Surname</th>
                                <th>Second Surname</th>
                                <th>Born</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>Country</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Contact</th>
                                <th>Ocupacy</th>
                                <th>Active</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { users.map ((user)=>(
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.midde_name}</td>
                                    <td>{user.surname}</td>
                                    <td>{user.second_surname}</td>
                                    <td>{user.born}</td>
                                    <td>{user.address}</td>
                                    <td>{user.city}</td>
                                    <td>{user.country}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.contact}</td>
                                    <td>{user.ocupacy}</td>
                                    <td>{user.active}</td>
                                    

                                    <td>
                                        <Link to={`/edit/${user.id}`} className='btn btn-info m-2'>  <i data-fa-symbol="edit" className="fas fa-pencil fa-fw"></i></Link>
                                        <button onClick={()=>deleteUser(user.id)} className='btn btn-danger'><i data-fa-symbol="delete" className="fas fa-trash fa-fw"></i></button>
                                    </td>


                                </tr>
                             ))}
                        </tbody>
                    </table>
                </div>

                </div>
            </div>
            </div>

        </>
    )
}




export default CompShowUsers