import React, { useEffect } from "react";
import { useState } from "react";
function Paginate() {
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);

 const handlePrev=()=>{
   console.log(activePage);
   setActivePage((prev)=>prev-1);
 } 

 const handleNext=()=>{
    console.log(activePage);
    setActivePage((prev)=>prev+1);
 }


  return (
    <div className="paginate">
      <div className="flex gap-3 border">
        <button
          className="font-bold text-md" 
          disabled={activePage === 1? true : false}
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="font-bold text-md"
          disabled={activePage ===totalPages ? true : false}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Paginate;
