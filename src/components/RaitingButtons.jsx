import { useEffect } from 'react';
import './RaitingButtons.css';


export function RaitingButtons({activeRating, setActiveRating}) {
  const ratings = [1, 2, 3, 4, 5]

  useEffect(() => {
    console.log(activeRating);
  }, [activeRating]);

  function chooseRating(number) {
    setActiveRating(number);
  }

  return (
    <div className="btns-container">
      {ratings.map((rating) => (
          <button
            key={rating}
            className={`rating-btns ${activeRating === rating ? "btn-white" : "btn-grey"}`}
            onClick={() => chooseRating(rating)}
            type="button"
          >{rating}</button>
        )
      )}
      {/* <button
        className={`rating-btns ${activeRating === 1 ? "btn-white" : "btn-grey"}`}
        onClick={() => chooseRating(1)}
        type="button"
      >1</button>
      <button
        className={`rating-btns ${activeRating === 2 ? "btn-white" : "btn-grey"}`}
        onClick={() => chooseRating(2)}
        type="button"
      >2</button>
      <button
        className={`rating-btns ${activeRating === 3 ? "btn-white" : "btn-grey"}`}
        onClick={() => chooseRating(3)}
        type="button"
      >3</button>
      <button
        className={`rating-btns ${activeRating === 4 ? "btn-white" : "btn-grey"}`}
        onClick={() => chooseRating(4)}
        type="button"
      >4</button>
      <button
        className={`rating-btns ${activeRating === 5 ? "btn-white" : "btn-grey"}`}
        onClick={() => chooseRating(5)}
        type="button"
      >5</button> */}
    </div>
  );
}