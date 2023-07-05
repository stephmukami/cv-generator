import React ,{useState}from 'react'

export default function PersonalBg(){

  const   [personal ,setPersonal] = useState({
    firstname: '',
    lastname : '',
    phone: '',
    email: '',
    editmode: true
  })

 
  function handleChange(e){
    const {name,value} = e.target; //destructure e.target
    setPersonal((prevState)=>({
        ...prevState,
        [name] :value
    })
    )
    console.log('change')
}

 function handleSubmit(e){
    e.preventDefault()
   setPersonal((prevState)=>({
    ...prevState,
    editmode:false
   }))
    console.log("submitted")
 }

 function handleEdit(){
    setPersonal((prevState)=>({
        ...prevState,
        editmode:true
    }))
 }
 const {firstname,lastname,phone,email} = personal
   const editModeContent = (
   
    
    <div className="personal-container form-format">

<div className="nav-container">
        <h1 >CV GENERATOR</h1>
    </div>

    <h3 className='section'>Personal Background</h3>

    <form className='personal-form'  onSubmit={handleSubmit}>
        <div>
        <input  
         name ='firstname'
         value={firstname}
        onChange ={handleChange}
        type="text" 
        placeholder='First Name'
        required
         />
        </div>

        <div>
        <input
         name ='lastname'
         type="text" 
         value={lastname}
         placeholder='Last Name' 
         onChange ={handleChange}
         required
          />
        </div>

        <div>
        <input 
        name ='phone'
        type="text"
        value={phone}
         placeholder='Phone  Number' 
         onChange ={handleChange}
         required
         />
    </div>

        <div>
        <input 
        name ='email'
        type="email" 
        value={email}
        placeholder='Email Adress' 
        onChange ={handleChange}
        required />
        </div>
        <button type='submit' className='add-btn'>SUBMIT</button>
        
    </form>
    
</div>

   )
   
    const submitModeContent = (
       
        <div className='personal-submit'>
        <h4 className='names-submit'>{firstname} {personal.lastname} </h4>
        <p className='details-submit'>Phone: {personal.phone} <br />Email: {personal.email}</p>
        <button className=' personalEdit-submit hide' onClick={handleEdit}>EDIT</button>
    </div>
     
    )
 
 
    return (
        <>
     

       {personal.editmode ? editModeContent:submitModeContent}
       {console.log(personal)}
        </>
    )
}