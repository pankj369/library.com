import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PromoModal.css";

function PromoModal() {
  const [showModal, setShowModal] = useState(true); // Control modal visibility
  const navigate = useNavigate();

  useEffect(() => {
    // Countdown Timer Logic
    const countdownElement = document.getElementById("countdown");

    // Set the target date for the countdown
    const targetDate = new Date("January 1, 2025 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;

      if (timeLeft <= 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "Offer has expired!";
      } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Function to handle "Claim Offer" button click
  const handleClaimOffer = () => {
    setShowModal(false);
    navigate("/register"); // Navigate to the Register page
  };

  return (
    showModal && (
      <div className="promo-modal-backdrop">
        <div className="promo-modal">
          <div className="promo-header">
            <h5>🎉 Join Our classNamees Today!</h5>
          </div>
          <div className="promo-body">
            <p>
              📚 Enroll in our batches before <strong>1st January</strong> and
              get <strong>15 days of free classNamees</strong>!
            </p>
            <p>
              <strong>🌟 Get 20% off on your next purchase! 🌟</strong>
            </p>
            <p
              id="countdown"
              style={{
                fontSize: "20px",
                color: "#252222",
                textAlign: "center",
              }}
            ></p>
            <p>
              Start your journey to success now. Don’t miss this opportunity!
            </p>
          </div>
          <div className="promo-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShowModal(false)} // Close modal
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleClaimOffer}
            >
              Claim Offer
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default PromoModal;
