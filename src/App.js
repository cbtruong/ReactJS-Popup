import { useRef, useState } from 'react';
import './App.css';

function App() {
  const popupRef=useRef();
  const handleClosePopup=()=>{
    popupRef.current.style.zIndex = "-1";
    popupRef.current.style.opacity = "0";
  }
  const handleOpenPopup=()=>{
    popupRef.current.style.zIndex = "999";
    popupRef.current.style.opacity = "1";
  }
  return (
    <div className="popups">
      <button onClick={handleOpenPopup}>Submit</button>
      <div className="popup" ref={popupRef}>
        <div className="popup_wrapper">
          <i class='bx bxs-user-circle popup_icon'></i>
          <h1>Thank You!</h1>
          <p>Your detail has been successfully submitted</p>
          <button onClick={handleClosePopup}>OK</button>
        </div>
      </div>
    </div>
  );
}

export default App;
