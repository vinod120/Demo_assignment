import axios from 'axios'
import React, {useEffect, useState} from 'react'
import './Dashboard.css';

function Dashboard() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
const [name, setName] = useState('')
const [boolian, setBoolian] = useState(true)
    useEffect(() => {
       axios.get('https://reqres.in/api/users')
       .then(res=>{
        console.log(res.data.data)
        setData(res.data.data)
       })
       .catch(err=>console.log(err))
    }, [])

    const handleChange = (e)=>{
        setName(e.target.value)
        console.log(e.target.value)
        setBoolian(false)
    }
    return (
        <div>
            <h1>Dashboard page</h1>
            <div>
                Seacrh : <input type="text" 
                onChange = {(e)=>handleChange(e)}
                />
            </div>
            <hr />
            {
                boolian
                ? 
                <div>
                    <div className="container">
            {
               data
               .map((item)=>{
                   return (
                       <div>
                            <div style={{border:'1px solid gray',padding:'10px', justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                                <div style={{textAlign:'left'}}>
                                        <div><strong>Id: </strong>{item.id}</div>
                                        <div><strong>Email: </strong>{item.email}</div>
                                        <div><strong>First_name: </strong>{item.first_name}</div>
                                        <div><strong>Last_name: </strong>{item.last_name}</div>
                                        <div style={{display:'flex',alignContent:'center', alignItems:'center'}}>
                                            <div>
                                            <strong>Avatar: </strong>
                                            </div>
                                            <div style={{marginLeft:'10px'}}>
                                            <img src={item.avatar} alt="logo" width="50px" height="50px"/>
                                            </div>
                                        </div>
                                </div>
                            </div>
                   </div>
                   
                   )
               })
            }
            </div>
                </div>
                :
                <div>
                    <div className="container">
            {
               data.filter(((item)=>item.first_name === name || item.last_name == name))
               .map((item)=>{
                   return (
                       <div>
                            <div style={{border:'1px solid gray',padding:'10px', justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                                <div style={{textAlign:'left'}}>
                                        <div><strong>Id: </strong>{item.id}</div>
                                        <div><strong>Email: </strong>{item.email}</div>
                                        <div><strong>First_name: </strong>{item.first_name}</div>
                                        <div><strong>Last_name: </strong>{item.last_name}</div>
                                        <div style={{display:'flex',alignContent:'center', alignItems:'center'}}>
                                            <div>
                                            <strong>Avatar: </strong>
                                            </div>
                                            <div style={{marginLeft:'10px'}}>
                                            <img src={item.avatar} alt="logo" width="50px" height="50px"/>
                                            </div>
                                        </div>
                                </div>
                            </div>
                   </div>
                   
                   )
               })
            }
            </div>
                </div>
            }
        </div>
    )
}

export default Dashboard;
