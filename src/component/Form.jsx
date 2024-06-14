
import {Component} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {OutlinedInput,InputAdornment,Visibility,VisibilityOff,Checkbox,FormControlLabel,Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import signupImg from './SignUp.png'

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
        ],countryNameMatch:'',countryCodeMatch:'',checkNameEmpty:false,checkEmailEmpty:false}
       
    }

    handleNameChange = (e)=>{
      
        if(e.target.value === ''){
            this.setState({checkNameEmpty:true})
         
          }
          else{
            this.setState({checkNameEmpty:false})
          }
    }

    handleEmailChange = (e)=>{
      
        if(e.target.value === ''){
            this.setState({checkEmailEmpty:true})
          }
          else{
            this.setState({checkEmailEmpty:false})
          }
    }

    handleCountryName = (e)=>{
        this.setState({countryNameMatch:e.target.value})
        // console.log(this.state.countryNameMatch)
        // console.log(this.state.checkNameEmpty)
    

        // console.log(this.state.countryNameMatch)
        // console.log(this.state.countryCodeMatch)
    }
    changeCode = ()=>{
        this.state.country.map((country,i)=>{
           
            if(this.state.countryNameMatch === country[i].countryName){
                console.log("NO")
             this.setState({countryCodeMatch : country[i].countryCode})
            }
        })
    }


  


    render(){
        return(
            <>

<div className='h-screen w-full flex  justify-center items-center bg-gray-100 '>

    <div className='w-1/2 h-full p-16  '>
    <img src={signupImg}  className='bg-white'></img>

    </div>
            <div className='  h-full w-1/2 flex flex-col justify-center items-center '>

             <form action="" className='flex flex-col  w-[700px] h-[85%] gap-3 p-16 rounded-2xl bg-white' >
               <div>
                <h1 className='text-3xl text-gray-700 font-semibold'>Need an Account - Sign Up</h1>
                <h1 className='text-2xl font-semibold text-sky-300'>Basic Information</h1>
               </div>


                <TextField id="outlined-basic" label="Full Name" variant="outlined"  onChange={this.handleNameChange}/>
                {this.state.checkNameEmpty ?   <Typography sx={{display:'flex', justifyContent:"end",fontWeight:'bold', fontSize:"0.8rem", color:"red"}}>Name is required</Typography>:<span></span>}
             
                <TextField id="outlined-basic" label="Email Address" variant="outlined"  onChange={this.handleEmailChange} />
                {this.state.checkEmailEmpty ?   <Typography sx={{display:'flex', justifyContent:"end", fontSize:"0.600rem", color:"red",fontWeight:'bold', fontSize:"0.8rem"}}>Email is required</Typography>:<span></span>}
             

{/* Country Section */}

                <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Country"
          onChange={this.handleCountryName}
          style={{display:'flex',flexDirection:'row'}}
        >
      { this.state.country.map((country,i)=><MenuItem key={i} value={country.countryName} >{<img src={country.flag} className='w-3 h-3'></img>}{country.countryName}</MenuItem>)   }
     
        </Select>
      </FormControl>
    </Box>

    <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Phone Number</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            onChange={this.changeCode}
            startAdornment={<InputAdornment position="start">+91</InputAdornment>}
            label="Phone Number"
            placeholder='Phone Number'
          />
        </FormControl>

    
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            // type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                //   onClick={handleClickShowPassword}
                //   onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

       

<div className='flex items-center'>
        <FormControlLabel control={<Checkbox defaultChecked />} label="I Agree to the " />
        <span className='text-[#004d74] font-bold text-xl'><a href="#">Terms and Condition</a></span>
        </div>
        <div className='w-full flex justify-center'>

        <button className='bg-[#004d74] font-bold text-xl text-white w-80 h-16 flex justify-center items-center rounded-full'type='submit'>Sign Up</button>
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