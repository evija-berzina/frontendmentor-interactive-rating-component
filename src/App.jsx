import {useState} from 'react';
import {RaitingCard} from './components/RaitingCard';
import {SubmitionCard} from './components/SubmitionCard';

function App() {
  const [isSubmited, setIsSubmited] = useState(false);
  const [activeRating, setActiveRating] = useState(null);

  return (
    <>
    { isSubmited
      ? <SubmitionCard
          activeRating={activeRating}
          setActiveRating={setActiveRating}
        />
      : <RaitingCard
          setIsSubmited={setIsSubmited}
          activeRating={activeRating}
          setActiveRating={setActiveRating}
        />
    }
    </>
  );
}

export default App
