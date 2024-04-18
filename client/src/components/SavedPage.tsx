import { useState, Dispatch, SetStateAction } from "react";


interface SavedPageProps {
    setSaved: Dispatch<SetStateAction<boolean>>;
}

export default function SavedPage(props: SavedPageProps) {

     const handleClick = () => {
       props.setSaved(false);
     };
    
    return (
      <div>
        <h1 className="homepage-header">{"Fit-MEEEE-UP!"}</h1>
        <h1>{"Saved Page"}</h1>
        <button onClick={handleClick}>Back to Home</button>
      </div>
    );
}