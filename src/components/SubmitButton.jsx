import './SubmitButton.css';

export function SubmitButton({setIsSubmited, activeRating}) {

  function ratingSubmited() {
    activeRating === null ? setIsSubmited(false) : setIsSubmited(true);
  }

  return (
    <>
      <button className="submit-btn" type="submit" onClick={ratingSubmited}>Submit</button>
    </>
  );
}