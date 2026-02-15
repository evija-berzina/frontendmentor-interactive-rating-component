import { useState, useEffect } from 'react';
import './RaitingButtons.css';


export function RaitingButtons() {
  const [activeRating, setActiveRating] = useState(null);
  
  useEffect(() => {
    console.log("activeRating changed:", activeRating);
  }, [activeRating]);

  function chooseRating(number) {
    // const raitings = [1, 2, 3, 4, 5];
    // raitings.map(raiting => raiting === setActiveRating)
    setActiveRating(number);
  }

  return (
    <div className="btns-container">
      <button
        className={activeRating === 1 ? "active-rating-btns" : "rating-btns"}
        onClick={() => chooseRating(1)}
        type="button"
      >1</button>
      <button
        className={activeRating === 2 ? "active-rating-btns" : "rating-btns"}
        onClick={() => chooseRating(2)}
        type="button"
      >2</button>
      <button
        className={activeRating === 3 ? "active-rating-btns" : "rating-btns"}
        onClick={() => chooseRating(3)}
        type="button"
      >3</button>
      <button
        className={activeRating === 4 ? "active-rating-btns" : "rating-btns"}
        onClick={() => chooseRating(4)}
        type="button"
      >4</button>
      <button
        className={activeRating === 5 ? "active-rating-btns" : "rating-btns"}
        onClick={() => chooseRating(5)}
        type="button"
      >5</button>
    </div>
  );
}