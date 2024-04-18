import { useState, Dispatch, SetStateAction } from "react";

interface ClosetPageProps {
  setCloset: Dispatch<SetStateAction<boolean>>;
}

export default function ClosetPage(props: ClosetPageProps) {
  const handleClick = () => {
    props.setCloset(false);
  };

  return (
    <div>
      <h1 className="homepage-header">{"Fit-Me-UP!"}</h1>
      <h1>{"Closet Page"}</h1>
      <button onClick={handleClick}>Back to Home</button>
    </div>
  );
}
