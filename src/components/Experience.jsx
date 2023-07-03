import React from 'react'
export default function Experience(){
    return (
        <>

        <div className="experience-container form-format">
            <br />
            <h3 className='section'> Work Experience</h3>
            <form className='experience-form'>
                <div>
                <input   type="text" placeholder='Title of  occupation' />
                </div>
                <div>
                <input type="text" placeholder='Employer' />
                </div>
              
                
                <div>
                <label htmlFor="">Start date</label>
                <input id='work-start' type="date" placeholder='From' />
                </div>
                   
                   <div className='time-section'>
                <div>
                <label htmlFor="">End date</label>
                <label className='ongoing' htmlFor="">Ongoing</label>
                <input  id='work-end' type="date" placeholder='To' />
                </div>

                <div id="button-3" className="button r">
                <input className="checkbox" type="checkbox"/>
                <div className="knobs"></div>
                <div className="layer"></div>
                </div>
                </div>

                <div className='activities'>
                    <textarea name="" id="" cols="30" rows="5" placeholder='Main activities and responsibilities'></textarea>
                </div>
                
                <div className='buttons'>
                <button className='add-btn-exp'>ADD</button>
            <button className='delete-btn-exp '>DELETE</button>
                </div>
            

            </form>
          
             <br />
        </div>
        </>
    )
}