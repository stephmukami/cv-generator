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
       
        <div>
        
        <p>{firstname}</p>
        <p>{personal.lastname}</p>
        <p>{personal.phone}</p>
        <p>{personal.email}</p>
        <button onClick={handleEdit}>EDIT</button>
    </div>
     
    )
 
 
    return (
        <>
     

       {personal.editmode ? editModeContent:submitModeContent}
       {console.log(personal)}
        </>
    )
}