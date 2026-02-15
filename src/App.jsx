import {useState} from 'react';
import {RaitingCard} from './components/RaitingCard';
import {SubmitionCard} from './components/SubmitionCard';
import './App.css';

function App() {
  const [isSubmited, setIsSubmited] = useState(false);

  return (
    <>
    { isSubmited
      ? <SubmitionCard />
      : <RaitingCard
          setIsSubmited={setIsSubmited}
        />
    }
    </>
  );
}

export default App
