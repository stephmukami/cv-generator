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
      console.log("handling submit")
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
            editmode:true
        })
        )
        console.log('change in education')
    }
    function handleChange(e) {
      const { name, value } = e.target;
      setEducation((prevState) => ({
        ...prevState,
        editmode: true,
        degreeArray: education.degreeArray.map((degree) => ({
          ...degree,
          [name]: value,
        })),
      }));
      console.log("handling change");
      console.log(e.target);
    }
    
    
    /* 
      handleAddNew = () => {
        this.setState({
            editMode: true,
            degreeArr: this.state.degreeArr.concat({
                school: "",
                title: "",
                date: "",
                id: uniqid(),
            })
        })
    }
    
  function handleaddTask(text){
    const atask = {
      id: uniqid(),
      text
      
    }
    setActualTasks([atask,...actualtasks])
    
  }
  function handleDelete(id){
    setActualTasks(
      actualtasks.filter(atask=> atask.id !==id)
    )
  }

  handleDelete = (e) => {
        this.setState({
            editMode: true,
            degreeArr: this.state.degreeArr.filter(degree => {
                return degree.id !== e.target.className ; 
            })
        })
    }
    const id = e.currentTarget.id;
    */
    function handleDelete(id) {
      console.log("handling delete");
      
    
      setEducation((prevState) => {
        const updatedDegreeArray = education.degreeArray.filter((degree) => degree.id !== id);
    
        return {
          ...prevState,
          editmode: true,
          degreeArray: updatedDegreeArray,
        };
      });
    
      
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
                degreeArray.map(item=>{
                  return <EducationForm
                              handleChange = {handleChange} //check to see if state apllies
                              handleDelete = {handleDelete}
                              key = {item.id}
                              institution = {item.institution}
                              email = {item.email}
                              qualification = {item.qualification}
                              start ={item.start}
                              end ={item.end}
                            />
                })
                //is this state
              }
              <hr />
              <button onClick={handleAddNew}>ADD</button> 
              <button onClick={handleSubmit}>SUBMIT</button>
              </>

  )

const submitModeContent = (
                    <>
                    <p>submitted education content</p>
                    <button onClick={handleEdit}>EDIT</button>
                    </>
)

    return (
        <>
        {editmode ? editModeContent : submitModeContent}
        </>
    )
}