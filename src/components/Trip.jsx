import "./Trip.css";
import TripData from "./TripData";
import Trip1 from "../Photos/5.jpg";
import Trip2 from "../Photos/8.jpg";
import Trip3 from "../Photos/6.jpg";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="It is a sovereign state and has an elected legislature.
               Indonesia has one of the unique cultures in the world. With multiple
                countries influencing during its colonial era, Indonesia has one of the
                most diverse cultures in the world."
        />
        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Malaysia boasts one of South East Asia's most vibrant economies,
           the fruit of decades of industrial growth and political stability. Consisting
            of two regions separated by the South China Sea, Malaysia is a multi-ethnic,
             multi-religious federation of 13 states and three federal territories."
        />
        <TripData
          image={Trip3}
          heading="Trip in France"
          text="Once you have visited France, you'll want to make a house and live
           for the rest of your life there! The country is magical in every dimension. Be it
            natural beauty, wine, food, fashion or architecture, France scores everywhere."
        />
      </div>
    </div>
  );
}
export default Trip;
