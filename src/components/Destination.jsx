import Mountain1 from "../Photos/1.jpg";
import Mountain2 from "../Photos/2.jpg";
import Mountain3 from "../Photos/5.jpg";
import Mountain4 from "../Photos/8.jpg";

import "./Destination.css";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano,Bagtangas"
        text="Located near Naples in Italy, Mount Vesuvius is perhaps the world
          most famous volcano. Almost two thousand years ago, in the late
          summer (or early autumn) of AD 79, Mount Vesuvius violently erupted.
          The eruption continued for two days, causing huge amounts of
          volcanic ash to rain down on the surrounding area."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul,Batangas"
        text="Mount Daguldol is within the vicinity of 
        the town of San Juan in Batangas. Normally it will take you
         around 3 hours to reach the jump off point Barrio Hugom by private
          vehicle. The site has been a favorite trekking location of mountaineers.
          Daguldol provides great views overlooking the nearby beach, lush woodlands,
           rolling slopes, and nearby mountains. The view at the summit is the best as you
            can experience both the sea and the mountains."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};
export default Destination;
