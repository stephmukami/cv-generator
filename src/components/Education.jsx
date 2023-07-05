import React,{useState} from 'react'
import EducationForm from './EducationForm'
import uniqid from 'uniqid'
export default function Education(){
  // editmode could have been different state to isolate its altering in handleSubmit and handleEdit
    const [education,setEducation] = useState({
      editmode: true,
      degreeArray:[{
        id: uniqid(),
        qualification :'',
        institution :'',
        email :'',
        start :'',
        end :''
      }]
    })

    function handleSubmit(e){
      e.preventDefault()
       setEducation((prevState)=>({
        ...prevState,
        editmode:false
       }))
        
     }

     function handleEdit(e){ // could have managed editmode only if separate piece of state as handleChange does updates too
      const {name,value} = e.target; //destructure e.target
        setEducation( (prevState)=>({
            ...prevState,
            editmode:true,
            [name] :value

        })
        )
        console.log('change in education')
    }
    function handleChange(e,id) {
      const { name, value } = e.target;
      setEducation((prevState) => ({
        ...prevState,
        editmode: true, //can add education.degreeArray
        degreeArray: degreeArray.map((degree) => 
        degree.id == id ?{
          ...degree,
          [name] :value
        } : degree

          ),
      }));
      
      
    }
    
    
    function handleDelete(id) {
      setEducation((prevState) => {
       // const updatedDegreeArray = prevState.degreeArray.filter((degree) => degree.id !== id);
        return {
          ...prevState,
          editmode: true,
          degreeArray: degreeArray.filter((degree) => degree.id !== id) //then put the updatedDegreeArray
        };
      });
      console.log(education.degreeArray)
      
    }
    
    
    

   function handleAddNew(){
    const newDegree = {
        id: uniqid(),
        qualification :'',
        institution :'',
        email :'',
        start :'',
        end :''

    }
    setEducation((prevState)=>({
        ...prevState,
        editmode:true,
        degreeArray: [...degreeArray,newDegree]
    }))
   }

   const {editmode,degreeArray} = education
  const editModeContent = (
              <>
              {
                degreeArray.map(item=>(
                   <EducationForm
                              handleChange = {handleChange} 
                              handleDelete = {handleDelete}
                              key = {item.id}
                              institution = {item.institution}
                              email = {item.email}
                              qualification = {item.qualification}
                              start ={item.start}
                              end ={item.end}
                              id= {item.id}
                            />
                ))
                
              }
            <br />
            <div className='doubleBtn-edit'>
            <button onClick={handleAddNew}>ADD</button> 
              <button onClick={handleSubmit}>SUBMIT</button>
            </div>
              
              </>

  )

const submitModeContent = (
                    <>
                    
                    {
                      degreeArray.map( item=>{
                        return (
                        <div className='parentEducation-submit' key={item.id}>
                          <div className='ed-school-submit'>
                            <h5>Education and Training</h5>
                          <p> {item.qualification}</p>
                          <p>{item.institution}</p>
                          <p>{item.email}</p>
                          </div>

                          <div className='ed-dates-submit'>
                          <p>{item.start} : {item.end}</p>
                          
                          </div>
                          
                          
                         
                        </div>
                        )
                      })
                    }
                    <button className='eduEdit-submit hide' onClick={handleEdit}>EDIT</button>
                    </>
)

    return (
        <>
        {editmode ? editModeContent : submitModeContent}
        </>
    )
}