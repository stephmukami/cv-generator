import React ,{useState} from 'react'
import ExperienceForm from './ExperienceForm'
import uniqid from 'uniqid'
export default function Experience(){
   const [ischecked,setChecked] = useState(false);
    const [isedit,setEdit] = useState(true);
    const [experienceArray,setExperienceArray] = useState([
        {
            id:uniqid(),
            occupation:'',
            employer: '',
            workStart:  '',   
            workEnd:  '', 
            activities: '',
            ischecked: true
    },
    ]);

    function handleSubmit(e){
            e.preventDefault();
            setEdit(false);
    }

    function handleEdit(){
        setEdit(true);
    }

    function handleChange(e,id){
        setEdit(true);
        const {name,value,type,checked} = e.target
        setExperienceArray((prevArray)=>
        prevArray.map((item)=>
        item.id === id ? { ...item, [name]: type === 'checkbox' ? checked : value } : item
        )
        );
        
    };

    function handleAdd(){
        setEdit(true)
        const newExperience =   {
            id:uniqid(),
            occupation:'',
            employer: '',
            workStart:  '',   
            workEnd:  '', 
            activities: '',
            ischecked: true
    };
        setExperienceArray( (prevArray) =>
        [...prevArray,newExperience]
        );
    }

    function handleDelete(id){
        setEdit(true);
        setExperienceArray((prevArray) =>
        prevArray.filter((item)=> item.id !==id)

        );
    }
    
   function handleCheckBox(id) {
  setExperienceArray((prevArray) =>
    prevArray.map((item) =>
      item.id === id ? { ...item, ischecked: !item.ischecked } : item
    )
  );
}


    const editModeContent = (
        <div className="experience-container form-format">
        <br />
        <h3 className='section'> Work Experience</h3>
        <div className='parentExp-edit'>
            
        {experienceArray.map(item=>(
            
                <ExperienceForm
                    handleChange = {handleChange}
                    handleDelete = {handleDelete}
                    key= {item.id}
                    id = {item.id}
                    occupation= {item.occupation}
                    employer = {item.employer}
                    workStart = {item.workStart}
                    workEnd = {item.workEnd}
                    activities = {item.activities}
                    handleCheckBox = {handleCheckBox}
                    ischecked={item.ischecked}
                />
            ))}
             <br />  
        </div>
        
            <br />
            <div className='doubleBtn-edit'>
            <button onClick={handleAdd}>ADD</button> 
              <button onClick={handleSubmit}>SUBMIT</button>
            </div>

      
        
     
    </div>
    )

    const submitModeContent = (
        <>
          {
            experienceArray.map(item =>{
                return (
                    <div className='parentExp-submit' key={item.id}>
                            <div className='exp-details'>
                            <h5>Work Experience</h5>
                                <p>{item.occupation}</p>
                                <p>{item.employer}</p>
                                
                                <p>{item.activities}</p>
                            </div>
                    
                    <div className='exp-dates'>
                        <p>{item.workStart}</p>
                        <br />
                        <p>:</p>
                        <br />
                        <p>{item.ischecked ?   item.workEnd : 'Work Ongoing'}</p> 
                    </div>
                    
                    </div>
                )
            }

            )
         }
         <button className='expBtn-edit hide' onClick={handleEdit}>EDIT</button>
        </>
    )

    return (
        <>
            {
                isedit ? editModeContent : submitModeContent
            }
        </>
    )
}