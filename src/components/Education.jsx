import React,{useState} from 'react'
import EducationForm from './EducationForm'
import uniqid from 'uniqid'
export default function Education(){
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
        console.log("submitted education")
     }

     function handleEdit(e){
      console.log("handling edit")
        const {name,value} = e.target; //destructure e.target
        setEducation((prevState)=>({
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
        editmode: true,
        degreeArray: education.degreeArray.map((degree) => 
        degree.id == id ?{
          ...degree,
          [name] :value
        } : degree

          ),
      }));
      console.log("handling change");
      
    }
    
    
    function handleDelete(id) {
      console.log("handling delete");
      
    console.log(education.degreeArray[0].id)
    console.log('and the id is')
    console.log(id)
      setEducation((prevState) => {
        const updatedDegreeArray = prevState.degreeArray.filter((degree) => degree.id !== id);
    
        return {
          ...prevState,
          editmode: true,
          degreeArray: updatedDegreeArray,
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
        degreeArray: [...education.degreeArray,newDegree]
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
                //is this state
              }
              <hr />
              <button onClick={handleAddNew}>ADD</button> 
              <button onClick={handleSubmit}>SUBMIT</button>
              </>

  )

const submitModeContent = (
                    <>
                    
                    {
                      degreeArray.map( item=>{
                        return (
                        <div>
                          <p>{item.qualification}</p>
                          <p>{item.institution}</p>
                          <p>{item.email}</p>
                         <p>{item.start}</p>
                          <p>{item.end}</p>
                        </div>
                        )
                      })
                    }
                    <button onClick={handleEdit}>EDIT</button>
                    </>
)

    return (
        <>
        {editmode ? editModeContent : submitModeContent}
        </>
    )
}