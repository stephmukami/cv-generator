import  React from 'react'
export default function EducationForm({handleChange,handleDelete,id,email,institution,qualification,start,end}){
    return(
        <>
          <div className='education-container form-format'>
            <br />
            <h3 className='section ' >Education and Training</h3>

            <form className='education-form'>
                <div className='qualification'>
                <input 
                onChange={(e) => handleChange(e, id)}
                value={qualification}
                 type="text" 
                 name = 'qualification'
                 placeholder='Title of qualification awarded' />
                </div>

                <div>
                <input 
                onChange={(e) => handleChange(e, id)}
                value = {institution}
                type="text" 
                name = 'institution'
                placeholder='Institution' />
                </div>

                <div>
                <input 
                onChange={(e) => handleChange(e, id)}
                value={email}
                type="email" 
                name = 'email'
                placeholder='Email Address' />
                </div>

                <div>
                <input 
                onChange={(e) => handleChange(e, id)}
                value={start}
                name = 'start'
                type="date" 
                placeholder='From' />
                </div>

                <div>   
                    <input 
                    onChange={(e) => handleChange(e, id)}
                    value={end}
                    name = 'end'
                    type="date" 
                    placeholder='To' />
                </div>
                
              
                

            </form>

            <button className='add-btn' onClick={() => handleDelete(id)}>DELETE</button>

            
        </div>
        </>
    )
}