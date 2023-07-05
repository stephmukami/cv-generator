import React, {useState} from 'react'

export default function ExperienceForm({handleCheckBox,handleChange,handleDelete,id,employer,workStart,workEnd,ischecked,activities,occupation}){
return (
    <>
              <form className='experience-form'>
                <div>
                <input  
                name = 'occupation'
                onChange={(e)=> handleChange(e,id)}
                value={occupation}
                 type="text"
                  placeholder='Title of  occupation' />
                </div>

                <div>
                <input 
                name ='employer'
                onChange={(e)=> handleChange(e,id)}
                value = {employer}
                type="text" 
                placeholder='Employer' />
                </div>
              
                
                <div>
                <label htmlFor="">Start date</label>
                <input 
                name = 'workStart'
                onChange={(e)=> handleChange(e,id)}
                value = {workStart}
                id='work-start' 
                type="date" 
                placeholder='From' />
                </div>
                   
                <div className='time-section'>
                <div>
                <label htmlFor="">End date</label>
                <label className='ongoing' htmlFor="">Ongoing</label>
            

            {ischecked ?   (

            <input 
            name="workEnd" 
            onChange={(e) => handleChange(e, id)} 
            value={workEnd} 
            id="work-end" 
            type="date" 
            placeholder="To" />) : <p>Work Ongoing</p>
            }

                </div>

                <div id="button-3" className="button r">
                <input 
                name = 'checkbox'
                onChange={() => handleCheckBox( id)}
                checked = {ischecked}
                className="checkbox"
                 type="checkbox"/>
                <div className="knobs"></div>
                <div className="layer"></div>
                </div>
                </div>

                <div className='activities'>
                <textarea 
                onChange={(e)=> handleChange(e,id)}
                value = {activities}
                name="activities" 
                id="" 
                cols="30" 
                rows="5" 
                placeholder='Main activities and responsibilities'>

                </textarea>
                </div>
                
                <div className='buttons'>
               
            <button className='delete-btn-exp ' onClick={() => handleDelete(id)}>DELETE</button>
                <br />
                </div>
            

            </form>
    </>
)
}