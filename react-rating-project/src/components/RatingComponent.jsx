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
    <div>
      {!isSubmitted && (
        <div className="bg-slate-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white">How did we do?</h2>
          <p className="text-gray-400">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="mt-4">
            {ratings.map((value) => (
              <button
                key={value}
                onClick={() => handleRatingClick(value)}
                className="mr-2 px-4 py-2 rounded bg-white text-indigo-800 font-bold"
              >
                {value}
              </button>
            ))}
          </div>
          <button
            onClick={handleRatingSubmit}
            className="mt-4 px-4 py-2 rounded bg-white text-indigo-800 font-bold"
          >
            Submit
          </button>
        </div>
      )}

      {isSubmitted && (
        <div>
          {/* Display the selected rating */}
          <p>You selected {rating} out of 5</p>
          <h2>Thank you!</h2>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      )}

      {/* Modal for showing the alert */}
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
