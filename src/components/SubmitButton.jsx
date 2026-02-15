import './SubmitButton.css';

export function SubmitButton({setIsSubmited}) {

  function ratingSubmited() {
    setIsSubmited(true);
  }

  return (
    <>
      <button className="submit-btn" type="submit" onClick={ratingSubmited}>Submit</button>
    </>
  );
}