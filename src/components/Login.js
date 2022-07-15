
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
    Button,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    styled,
  } from "@mui/material";
import { useState, useEffect} from 'react';
import {  useLocation } from "react-router-dom"
import { Link } from "react-router-dom";
import useUser from './hooks/useUser';

const Login = () =>{


    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const{login, isLogged,  isLoginLoading, hasLoginError}=useUser()
    const location = useLocation();
    console.log(location)

    useEffect(() =>{
        if(isLogged){
                location.pathname="/"
        } //tal cosa uselocation
    }, [isLogged] );
    const handleSubmit =(e) =>{
        e.preventDefault()
      //  alert(userName,password)
      login({userName, password})


    }

 
    console.log(userName)
    console.log(password)
    return(
        <>
         <Grid item xs={12} md={12} sx={{textAlign:'center'}}>
         <h2>Inicie Sesión
         </h2>

            {isLoginLoading &&  //si esta cargando
            <strong>Comprobando credenciales..</strong>
            }
         
         </Grid>
     
         {!isLoginLoading &&    //si no esta cargando
           <Box
           component="form"
           sx={{
               '& > :not(style)': { m: 1 , textAlign:'center'},
           }}
           noValidate
           autoComplete="off"
           >
              
               <Grid >
               <TextField id="outlined-basic" label="Nombre" variant="outlined" value={userName}  onChange={e => setUserName(e.target.value)}/>
                </Grid>

                <Grid >
               <TextField id="outlined-basic" type="password" label="Contraseña" variant="outlined" value={password} onChange={e => setPassword(e.target.value)} />
                </Grid>

               
                <Grid >
                <Link to="/">
                <Button variant="contained" color="success" >
                   Success
               </Button>
               </Link>
                </Grid>
                
             
                

           </Box>
        }
            {hasLoginError &&
            <strong>Sus credenciales son invalidas!</strong>

            }
           
                </>

    );
}

export default Login;