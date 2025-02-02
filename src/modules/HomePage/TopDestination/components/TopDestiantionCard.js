import img from "../../../../assets/card.jpg";
import "../components/TopDestinationCard.css";
import arrow from "../../../../assets/Vector.png";
export default function TopDestinationCard() {
  return (
    <div className="top-destination-card">
      <img className="top-destination-img" src={img} alt="tourImage" />
      <h1 className="tour-title">title</h1>
      <div className="tour-info">
        <p className="tour-price">000</p>
        <div className="tour-date-div">
          <img className="arrow" src={arrow} alt="arrowImage" />
          <p className="tour-date">44/44/44</p>
        </div>
      </div>
    </div>
  );
}
