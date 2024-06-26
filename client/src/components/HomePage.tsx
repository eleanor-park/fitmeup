import "../styles/homepage.css";
import SavedPage from "./SavedPage";
import ClosetPage from "./ClosetPage";
import { useState } from "react";


export default function HomePage() {
  const [onSavedPage, setOnSavedPage] = useState(false);
  const [onClosetPage, setOnClosetPage] = useState(false);
  const savedPage = <SavedPage setSaved={setOnSavedPage}/>;
  const closetPage = <ClosetPage setCloset={setOnClosetPage} />;

  const handleClickSaved = () => {
    setOnSavedPage(true);
  };

  const handleClickCloset = () => {
    setOnClosetPage(true);
  };

  return (
    <div>
      {!onSavedPage && !onClosetPage && (
          <div>
            <h1 className="homepage-header">{"Fit-Me-UP!"}</h1>
            <h1>{"Home Page"}</h1>
            <button onClick={handleClickSaved}>Go to Saved Page</button>
            <button onClick={handleClickCloset}>Go to Closet Page</button>
          </div>
        )}
      {onSavedPage && savedPage}
      {onClosetPage && closetPage}
    </div>
  );
}
