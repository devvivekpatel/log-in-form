
import {Component} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {OutlinedInput,InputAdornment,Checkbox,FormControlLabel,Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import signupImg from './SignUp.png'

import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';




export default class Form extends Component{

    constructor(props){
        super(props)

        this.state = {country:[
            {countryName:"India",countryCode:"+91",flag:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXq702jzGRblG8tkWey0nibKYihIn1swmlNg&s'},
            {countryName:"KSA",countryCode:"+966",flag:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYXhgOXi6muJ-o9WJVhHnaHw5sDwmZZuh-dQ&s'},
            {countryName:"Bahrain",countryCode:"+973",flag:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUDir368ZONbldJKMAnnFyu2Bik4JdHgjhrw&s'},
            {countryName:"Oman",countryCode:"+968",flag:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBdZz9hYn8dDkhUhEVW7xv-XngLyumbymQWg&s'},
            {countryName:"Qatar",countryCode:"+974",flag:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcGbTwzardjiFjA_v0D7MEbtOM4Ezblelr4w&s' },
            {countryName:"Kuwait",countryCode:"+965",flag:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpJq9KGKVsapRXYE4lXgkBsEdF9axzZF6asg&s'},
            {countryName:"New Zealand",countryCode:"+64",flag:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bgHCzHp4eK8AnJ1iWVN5r9sfdjMuiHzd1A&s'},
            {countryName:"UAE",countryCode:"+971",flag:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35ESKJrEvoffab292jkv5UHaJvNCReK7CSw&s'},
        ],countryNameMatch:'',countryCodeMatch:'',checkEmailValid:false,checkName:'',checkEmail:'',checkPass:'',checkPhone:'',checkCountry:'',checkNameEmpty:false,checkEmailEmpty:false,showPassword:false,checkPassEmpty:false,checkPhoneEmpty:false,checkCountryEmpty:false,
      checkPassLen:false,checkPassUpperCase:false,checkPassLowerCase:false,checkPassDigit:false}
       
    }

    submit = (event)=>{
      event.preventDefault();

  
      if(this.state.checkName===""){
        this.setState({checkNameEmpty:true})
      }
      if(this.state.checkEmail===''){
        this.setState({checkEmailEmpty:true})
      }
      if(this.state.checkCountry===""){
        this.setState({checkCountryEmpty:true})
      }
      if(this.state.checkPhone===''){
        this.setState({checkPhoneEmpty:true})
      }
      if(this.state.checkPass===''){
        this.setState({checkPassEmpty:true})
      }
     

    }

    handleNameChange = (e)=>{
      this.setState({checkName:e.target.value})
    
        if(e.target.value===''){
            this.setState({checkNameEmpty:true})
         
          }
          else{
            this.setState({checkNameEmpty:false})
          }
    }

    handleEmailChange = (e)=>{
      this.setState({checkEmail:e.target.value})

        if(e.target.value === ''){
            this.setState({checkEmailEmpty:true,checkEmailValid:false})
          }
          else{
            this.setState({checkEmailEmpty:false})

            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            const isValidEmail = emailRegex.test(e.target.value);

            if(isValidEmail === false){
              this.setState({checkEmailValid:true})                                                                                                                                          
            }
            else{
              this.setState({checkEmailValid:false})
            }
          }
    }

    handlePassChange = (e)=>{
      this.setState({checkPass:e.target.value})
      if(e.target.value === ''){
        this.setState({checkPassEmpty:true})
      }
      else{
        this.setState({checkPassEmpty:false})
      }

  
    }

    //if i change sequence of prevProps and prevState then i am facing error why ?
    componentDidUpdate(prevProps,prevState){

        if(prevState.checkPass !== this.state.checkPass ){

    if (this.state.checkPass.length >= 8) {
      this.setState({checkPassLen:true})    
    }
    else{
      this.setState({checkPassLen:false})
    }


    if (/[A-Z]/.test(this.state.checkPass)) {
        this.setState({checkPassUpperCase:true})
    }
    else{
      this.setState({checkPassUpperCase:false})
    }
    if (/[a-z]/.test(this.state.checkPass)) {
       this.setState({checkPassLowerCase:true})
    }
    else{
      this.setState({checkPassLowerCase:false})
    }

    if (/\d/.test(this.state.checkPass)) {
       this.setState({checkPassDigit:true});
    }
    else{
      this.setState({checkPassDigit:false})
    }
  }

  if(prevState.checkCountry != this.state.checkCountry){

   let matching =     this.state.country.filter((country,i)=> ( country.countryName === this.state.countryNameMatch)     )
 

   this.setState({countryCodeMatch:matching[0].countryCode})
  }

    }

    handlePhoneChange = (e)=>{
      this.setState({checkPhone:e.target.value})
      
      if(e.target.value === ''){
          this.setState({checkPhoneEmpty:true})
        }
        else{
          this.setState({checkPhoneEmpty:false})
        }
  }

    handleClickShowPassword=()=>{

     if(this.state.showPassword){

       this.setState({showPassword:false})
     }
     else{
      this.setState({showPassword:true})
     }
    }

    handleCountryName = (e)=>{
      this.setState({checkCountry:e.target.value})

      if(e.target.value === ''){
        this.setState({checkCountryEmpty:true})
      }
      else{
        this.setState({checkCountryEmpty:false})
      }

      const check = e.target.value
      console.log(check)
        this.setState({countryNameMatch:check})
        console.log(this.state.countryNameMatch)

   let matching =     this.state.country.filter((country,i)=> ( country.countryName === this.state.countryNameMatch)     )
 

  //  this.setState({countryCodeMatch:matching[0].countryCode})


    }
  
    render(){
        return(
            <>

<div className='h-screen w-full flex  justify-center items-center bg-gray-100 '>

    <div className='w-1/2 h-full p-16 md:block hidden '>
    <img src={signupImg}  className='bg-white'></img>

    </div>
            <div className='w-full  h-full md:w-1/2 flex flex-col justify-center items-center '>

             <form action="" className='flex flex-col w-full  md:w-[700px] h-fit gap-2 md:gap-3 p-3 md:p-16 rounded-2xl bg-white' onSubmit={this.submit}>
               <div>
                <h1 className='text-3xl text-gray-700 font-semibold'>Need an Account - Sign Up</h1>
                <h1 className='text-2xl font-semibold text-sky-300'>Basic Information</h1>
               </div>


                <TextField id="outlined-basic" label="Full Name" variant="outlined"  onChange={this.handleNameChange} error={Boolean(this.state.checkNameEmpty)}/>
                {this.state.checkNameEmpty ?   <Typography sx={{display:'flex', justifyContent:"end",fontWeight:'bold', fontSize:"0.8rem", color:"red"}}>Name is required</Typography>:<span></span>}
             
                <TextField id="outlined-basic" label="Email Address" variant="outlined"  onChange={this.handleEmailChange} error={Boolean(this.state.checkEmailEmpty)}/>
                {this.state.checkEmailEmpty ?   <Typography sx={{display:'flex', justifyContent:"end", fontSize:"0.600rem", color:"red",fontWeight:'bold', fontSize:"0.8rem"}}>Email is required</Typography>:<span></span>}
                {this.state.checkEmailValid ?   <Typography sx={{display:'flex', justifyContent:"end", fontSize:"0.600rem", color:"red",fontWeight:'bold', fontSize:"0.8rem"}}>Email is not valid</Typography>:<span></span>}
             

{/* Country Section */}

                <Box sx={{ minWidth: 120 ,display:'flex'}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Country"
          onChange={this.handleCountryName}
          sx={{display:'flex'}}
        >
      { this.state.country.map((country,i)=><MenuItem key={i} value={country.countryName} >{<img src={country.flag} className='w-3 h-3'></img>}{country.countryName}</MenuItem>)   }
     
        </Select>
      </FormControl>
    </Box>
    {this.state.checkCountryEmpty ?   <Typography sx={{display:'flex', justifyContent:"end",fontWeight:'bold', fontSize:"0.8rem", color:"red"}}>Country Name is required</Typography>:<span></span>}


    <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Phone Number</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            type='number'
            startAdornment={<InputAdornment position="start">{this.state.countryCodeMatch}</InputAdornment>}
            label="Phone Number"
            placeholder='Phone Number'
            onChange={this.handlePhoneChange}
            error={Boolean(this.state.checkPhoneEmpty)}
          />
        </FormControl>
        {this.state.checkPhoneEmpty ?   <Typography sx={{display:'flex', justifyContent:"end",fontWeight:'bold', fontSize:"0.8rem", color:"red"}}>Phone Number is required</Typography>:<span></span>}

    
    <FormControl sx={{ m: 1, width: 'full' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
            onChange={this.handlePassChange}
            error={Boolean(this.state.checkPassEmpty)}
            // inputProps={{ minLength: 8  }}
            
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  
                 
               
                //   onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          
          />
        </FormControl>
        {this.state.checkPassEmpty ?   <Typography sx={{display:'flex', justifyContent:"end",fontWeight:'bold', fontSize:"0.8rem", color:"red"}}>Password is required</Typography>:<span></span>}
        
        {this.state.checkPass !== '' ? <div className='h-8 w-full '>
        <div className='flex w-full justify-between'>
        {this.state.checkPassLen ?   <Typography sx={{display:'flex', justifyContent:"end",fontWeight:'thin', fontSize:"0.9rem", color:"green"}}><span>&#9745; </span> &nbsp;8 character minimum</Typography>:<Typography sx={{display:'flex', justifyContent:"end",fontWeight:'thin', fontSize:"0.9rem", color:"red"}}><span>&#x2612;</span> &nbsp; 8 character minimum</Typography>}
        {this.state.checkPassUpperCase ?   <Typography sx={{display:'flex', justifyContent:"end",fontWeight:'thin', fontSize:"0.9rem", color:"green"}}><span>&#9745; </span> &nbsp;one uppercase character</Typography>:<Typography sx={{display:'flex', justifyContent:"end",fontWeight:'thin', fontSize:"0.9rem", color:"red"}}><span>&#x2612;</span> &nbsp;  one uppercase character</Typography>}
          </div>   
          <div className='flex w-full justify-between'>
        {this.state.checkPassDigit ?   <Typography sx={{display:'flex', justifyContent:"end",fontWeight:'thin', fontSize:"0.9rem", color:"green"}}><span>&#9745; </span> &nbsp;One number</Typography>:<Typography sx={{display:'flex', justifyContent:"end",fontWeight:'thin', fontSize:"0.9rem", color:"red"}}> <span>&#x2612;</span> &nbsp; One number</Typography>}
        {this.state.checkPassLowerCase ?   <Typography sx={{display:'flex', justifyContent:"end",fontWeight:'thin', fontSize:"0.9rem", color:"green"}}><span>&#9745; </span> &nbsp;one lowercase character</Typography>:<Typography sx={{display:'flex', justifyContent:"end",fontWeight:'thin', fontSize:"0.9rem", color:"red"}}><span>&#x2612;</span> &nbsp; one lowercase character</Typography>}
          </div>  
        </div>:<span></span>}
       

<div className='flex items-center'>
        <FormControlLabel control={<Checkbox defaultChecked />} label="I Agree to the " />
        <span className='text-[#004d74] font-bold text-xl'><a href="#">Terms and Condition</a></span>
        </div>
        <div className='w-full flex justify-center'>

        <button className='bg-[#004d74] font-bold text-xl text-white w-80 h-16 flex justify-center items-center rounded-full' type='submit' >Sign Up</button>
        </div>
        <div className='w-full flex gap-2 justify-center'>
            <p className='text-xl font-medium'>Already have an account?</p>
            <p className='text-xl font-bold text-[#004d74]'>Sign In</p>
        </div>



                 
             </form>
          
            </div>
            </div>
            
            </>
        )
    }
    
}