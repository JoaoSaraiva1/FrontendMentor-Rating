import React from 'react';
import "./css/RatingComponent.css";

function RatingComponent() {
  return (
    <div>
      {/* Rating state start */}
      <div>
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
        <button>Submit</button>
      </div>
      {/* Rating state end */}

      {/* Thank you state start */}
      <div>
        <p>You selected {/* Add rating here */} out of 5</p>
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
      {/* Thank you state end */}
    </div>
  );
}

export default RatingComponent;
