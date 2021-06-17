import React from 'react';
import axios from "axios";

function Test2() { 

    const [role, setRole] = React.useState("");
	const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
    const[file, setFile] = React.useState("");

    const handleChangeInput = (event) => {
		setFile(event.target.files[0])
	}

    const _onSubmit = () => {

        console.log(file)

        var formData = new FormData();
        formData.append("name", name)
        formData.append("email", email)
        formData.append("password", password)
        formData.append("role", role)
        formData.append("image", file)

        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }

        axios({
            method: "post",
			url: "",
			data: formData
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

                <div class="form-group">
                    <label> Image </label>
                    <input 
                        type="file"
                        placeholder="image"
                        onChange={event => handleChangeInput(event)}   
                    />
                </div>
            </form>

            <button
                onClick={_onSubmit}
            >Submit</button>

        </div>
    );

}

export default Test2;