import IconStar from '../assets/icon-star.svg';
import './RaitingHeader.css';

export function RaitingHeader() {
  return (
    <div className="header-container">
      <div className="icon-container">
        <img src={IconStar} alt="star icon" />
      </div>
      <h1 className="header-hedding">
        How did we do?
      </h1>
      <p className="header-text">
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
      </p>
    </div>
  );
}
