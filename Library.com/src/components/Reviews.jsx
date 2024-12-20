import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to include Bootstrap CSS

function Reviews() {
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([
    {
      name: "John Doe",
      rating: 5,
      review:
        "A very peaceful environment to study with great resources and a friendly atmosphere!",
    },
    {
      name: "Sarah Lee",
      rating: 4,
      review:
        "The library's resources were really helpful for my exam prep. The quiet zones are ideal for focus.",
    },
  ]);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const reviewText = e.target.review.value;
    if (name && reviewText) {
      setReviews([...reviews, { name, rating, review: reviewText }]);
      e.target.reset();
      setRating(0); // Reset rating after submission
    }
  };

  return (
    <section
      id="ratings-reviews"
      className="section ratings-reviews-container container mt-5"
    >
      <h2 className="ratings-reviews-title text-center mb-4">
        Rate Your Experience
      </h2>

      {/* Rating Stars */}
      <div className="ratings-stars mb-3 text-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <label
            key={star}
            htmlFor={`star${star}`}
            className={`star h1 ${
              rating >= star ? "text-warning" : "text-muted"
            }`}
            onClick={() => handleRating(star)}
          >
            &#9733;
          </label>
        ))}
      </div>

      {/* Review Form */}
      <form id="reviewForm" className="review-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="review"
            className="form-control"
            placeholder="Your Review"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit Review
        </button>
      </form>

      {/* Display Reviews */}
      <div id="reviews-list" className="reviews-list mt-5">
        {reviews.map((review, index) => (
          <div key={index} className="review-item mb-4 p-3 border rounded">
            <p className="review-name font-weight-bold">{review.name}</p>
            <p className="review-rating text-warning">
              {Array.from({ length: review.rating }, (_, i) => (
                <span key={i}>&#9733;</span>
              ))}
            </p>
            <p className="review-text">{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
