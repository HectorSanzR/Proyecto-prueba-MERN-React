import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate, useParams} from 'react-router-dom'
import Select  from 'react-select'
import {FormHelperText, OutlinedInput, } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


const URI = 'http://localhost:8000/home/'

const CompEditUser = () =>{


    const [name, setName] = useState('')
    const [midde_name, setMidde_name] = useState('')
    const [surname, setSurname] = useState('')
    const [second_surname, setSecond_surname] = useState('')
    const [born, setBorn] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [email, setEmail] = useState('')
    const [active, setActive] = useState('')
    const [gender, setGender] = useState('')
    const [contact, setContact] = useState('')
    const [ocupacy, setOcupacy] = useState('')
    const option = [
        {value:'M',label:'Male'},
        {value:'F',label:'Female'},
        {value:'Other',label:'Other'}
      ]
      const option2 = [
        {value:'Yes',label:'Yes'},
        {value:'Not',label:'Not'},
        
      ]
    const navigate = useNavigate()
    const {id} = useParams()

    console.log(URI+id)

    const setGenders = ({value})=>{
        setGender(value)
        console.log(value)
        
      }

      const setActives = ({value})=>{
        setActive(value)
      }

      const handleChange = (event) => {
        setGender(event.target.value);
      };

    const Update = async(e) =>{
        console.log('entro a upt')
        e.preventDefault();
        await axios.put(URI+id,
            {
            name: name 
            ,midde_name: midde_name
            ,surname: surname
            ,second_surname: second_surname 
            ,born: born 
            ,address: address
            ,city: city
            ,country: country 
            ,email: email
            ,active:active
            ,gender: gender 
            ,contact: contact
            ,ocupacy: ocupacy          
        })
        window.alert(`The user " ${name} " was updated successfully` );
        navigate('/')
    }
    const Exit = ()=>{
      navigate('/')
    }
        useEffect( ()=>{
            getUserById()
        },[])

        const getUserById = async()=>{
            const res = await axios.get(URI+id)
                     setName(res.data[0].name)
                     setMidde_name(res.data[0].midde_name)
                     setSurname(res.data[0].surname)
                     setSecond_surname(res.data[0].second_surname)
                     setBorn(res.data[0].born)
                     setAddress(res.data[0].address)
                     setCity(res.data[0].city)
                     setCountry(res.data[0].country)
                     setEmail(res.data[0].email)
                     setActive(res.data[0].active)
                     setGenders(res.data[0].gender)
                     setContact(res.data[0].contact)
                     setOcupacy(res.data[0].ocupacy)
        }

        
    return (
      <>        
      
        <AuthLayout>
        <form onSubmit={Update}  >
            
            <form noValidate autoComplete='off'>
            <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                  <InputLabel >
                      First Name
                  </InputLabel>
              <OutlinedInput  label="First name"  type="text" value={name} onChange={(e)=> setName(e.target.value)} required/>
            </FormControl>

            <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
            <InputLabel >
                      Middle Name
                  </InputLabel>
                <OutlinedInput   label='Suer Name' type="text"  placeholder="Middle Name"   value={midde_name} onChange={(e)=> setMidde_name(e.target.value)} required/>
            </FormControl>

            <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                 <InputLabel >
                     Surname
                  </InputLabel>
                <OutlinedInput  type="text" label='Surname' value={surname} onChange={(e)=> setSurname(e.target.value)} required/>                  
            </FormControl>
            <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
              <InputLabel>
                     Second Surname
                  </InputLabel>
                <OutlinedInput label="Second Surname" type="text"  placeholder="Second Surname"   value={second_surname} onChange={(e)=> setSecond_surname(e.target.value)} required/>
            </FormControl>
                </form>
           <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                 <InputLabel >Born</InputLabel>
                <OutlinedInput  type="date" label="Born" placeholder="Born"   value={born} onChange={(e)=> setBorn(e.target.value)} required/>
           </FormControl>
           <FormControl variant="standard" sx={{ m: 1, minWidth: 260 }}>
                <div className='col-mb-6'>
                  <Select  className="games-dropdown-2"  labelId="demo-simple-select-helper-label "  options={option}  onChange={setGenders}/>  
                  <FormHelperText>Gender</FormHelperText>
                </div>
            </FormControl>
            <FormControl variant="outlinedline" sx={{ m: 1, minWidth: 260 }}>
                <div className='col-mb-2'>
                   < Select Select className="games-dropdown-2" labelId="demo-simple-select-helper-label" options={option2}   onChange={setActives}/>   
                   <FormHelperText>User Actived</FormHelperText>
                </div>
           </FormControl>

          <div>

            
          <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                  <InputLabel >City</InputLabel>
                  <OutlinedInput label="City"type="text"   placeholder='City' value={city} onChange={(e)=> setCity(e.target.value)} required/>
           </FormControl>
           
           <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
           <InputLabel >Country</InputLabel>
                  <OutlinedInput label="Country" type="text"  placeholder="Country"   value={country} onChange={(e)=> setCountry(e.target.value)} required/>
           </FormControl>

           <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
           <InputLabel >Addres</InputLabel>
                  <OutlinedInput label="Address" type="text" placeholder='Addres'   value={address} onChange={(e)=> setAddress(e.target.value)} required/>

           </FormControl>

          </div>
          <div>

          <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
          <InputLabel >Email</InputLabel>
                <OutlinedInput label="Email" type="email" placeholder='correo@email.com'  name="email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
            </FormControl>      
            <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
            <InputLabel >Ocupacy</InputLabel>
                <OutlinedInput label="Ocupacy" type="text"  placeholder="Ocupacy"   value={ocupacy} onChange={(e)=> setOcupacy(e.target.value) } required/>

            </FormControl>
            <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
            <InputLabel >Contact Number</InputLabel>
                <OutlinedInput  label='Contact Number'type="number"  placeholder="Number" fullWidth  value={contact} onChange={(e)=> setContact(e.target.value)} required/>
            </FormControl>
          </div>
                
         
         
        <div className='col-md-6'>
                <button className="btn btn-primary btn-lg m-2" type="submit">Update <i className="fa-regular fa-floppy-disk"></i></button>
                <button className="btn btn-danger btn-lg  " onClick={Exit} >Exit</button>

        </div>
       
       </form>
        </AuthLayout>
           </>
    )
    
}

export default CompEditUser;


 