import React, { useEffect } from 'react';
import PersonalBg from './components/PersonalBg'
import Education from './components/Education'
import Experience from './components/Experience'

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import './App.css'


function App() {

  const handleDownload = () => {
  
    
      // Select all elements with the class name "hide"
      const hideElements = document.querySelectorAll('.hide');
  
      // Loop through each element and set the display style to "none"
      hideElements.forEach((element) => {
        element.style.display = 'none';
      });
    

    const pdf = new jsPDF('p', 'mm', 'a4');

    // Capture the content div as an image using html2canvas
    html2canvas(document.querySelector('.final-render')).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      // Add the captured image to the PDF
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);

      // Save the PDF file with the name "resume.pdf"
      pdf.save('resume.pdf');
    });
  };


  return (
    <div className='final-render'>
      
      <PersonalBg />
      <Education/>     
      <Experience/>
      <button className='finish-btn hide ' onClick={handleDownload}>Download</button>

    </div>
  )
}

export default App
