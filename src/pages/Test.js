import React from 'react';
import axios from "axios";

function Test() { 

    const [role, setRole] = React.useState("");
	const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

    const _onSubmit = () => {
        console.log(name)
        console.log(email)
        console.log(password)
        console.log(role)

        axios.post("", {
            name:name,
            email:email,
            password:password,
            role:role
        })
        .then(()=>{

        })
        .catch(()=>{
            
        })

    }
    
    return(
        <div>
            <form>
                <div class="form-group">
                    <label> Name </label>
                    <input 
                        type="text"
                        placeholder="Name" 
                        value={name}
                        onChange={(e)=>{
                            setName(e.target.value)
                        }}   
                    />
                </div>

                <div class="form-group">
                    <label> Email </label>
                    <input 
                        type="mail"
                        placeholder="Email" 
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}      
                    />
                </div>

                <div class="form-group">
                    <label> Password </label>
                    <input 
                        type="password"
                        placeholder="Password" 
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}      
                    />
                </div>

                <div class="form-group">
                    <label> Role </label>
                    <select
                        value={role}
                        onChange={(e)=>{
                            setRole(e.target.value)
                        }}   
                    >
                        <option value="">===Select Role===</option>
                        <option>Admin</option>
                        <option>User</option>
                    </select>
                </div>  
            </form>

            <button
                onClick={_onSubmit}
            >Submit</button>

        </div>
    );

}

export default Test;