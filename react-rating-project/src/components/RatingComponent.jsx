import React, { useState } from "react";
import Modal from "react-modal"; // Import react-modal

function RatingComponent() {
  let [rating, setRating] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal open/close

  // Function to handle button click and update the rating
  const handleRatingClick = (newRating) => {
    setRating(newRating);
  };

  // Function to handle the "Submit" button click
  const handleRatingSubmit = () => {
    if (rating === "") {
      // Check if rating is not selected, show the modal
      setIsModalOpen(true);
    } else {
      setIsSubmitted(true);
    }
  };

  // Function to handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const ratings = [1, 2, 3, 4, 5];

  return (
    <div style={{ width: "400px", height: "450px" }}>
      {!isSubmitted && (
        <div className="bg-slate-800 rounded-lg p-12 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-white text-left mr-28 mb-2">
            How did we do?
          </h2>
          <p className="text-gray-500 text-base mb-2">
            Please let us know how we did with your support request. 
            All feedback is appreciated to help us improve our offering!
          </p>
          <div className="mt-3 flex flex-wrap gap-2 justify-center">
            {ratings.map((value) => (
              <button
                key={value}
                onClick={() => handleRatingClick(value)}
                className="px-5 py-3 ml-1 rounded-full bg-slate-700 text-slate-500 font-bold text-lg hover:bg-orange-500"
              >
                {value}
              </button>
            ))}
          </div>
          <button
            onClick={handleRatingSubmit}
            className="px-4 py-2 rounded-full bg-orange-600 text-white font-bold text-lg mt-5 w-72"
          >
            Submit
          </button>
        </div>
      )}

      {isSubmitted && (
        <div>
          <p>You selected {rating} out of 5</p>
          <h2>Thank you!</h2>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Please select a rating"
      >
        <h2>Please select a rating</h2>
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
}

export default RatingComponent;
