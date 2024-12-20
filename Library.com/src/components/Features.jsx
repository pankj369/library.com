import React, { useEffect } from "react";
import "./Features.css";
const FeatureSection = () => {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll) library
    import("aos").then((AOS) => {
      AOS.init();
    });
  }, []);

  // Toggle visibility of study tip content
  const toggleTip = (index) => {
    const content = document.getElementsByclassName("study-tip-content")[index];
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  };

  return (
    <>
      <div className="featured-books">
        <section id="featuredBooks" data-aos="fade-up">
          <h2>Ours Feature</h2>
          <div className="book-cards">
            <p className="subheading">
              Discover the best features tailored just for you!
            </p>
          </div>
        </section>
      </div>
      <section className="features">
        <div className="feature-card">
          <div className="card-front">
            <i className="fas fa-couch"></i>
            <h3>Study Zone</h3>
            <p>Dedicated study zones for serious learners.</p>
          </div>
          <div className="card-back">
            <i className="fas fa-couch"></i>
            <h3>Quiet Space</h3>
            <p>Perfect for undisturbed study sessions.</p>
          </div>
        </div>
        <div className="feature-card">
          <div className="card-front">
            <i className="fas fa-book"></i>
            <h3>Exclusive Books</h3>
            <p>Access preparation-specific books and materials.</p>
          </div>
          <div className="card-back">
            <i className="fas fa-book"></i>
            <h3>Updated Books</h3>
            <p>Updated frequently to meet your needs.</p>
          </div>
        </div>
        <div className="feature-card">
          <div className="card-front">
            <i className="fas fa-lightbulb"></i>
            <h3>Innovative Ideas</h3>
            <p>Inspiring resources for creative thinkers.</p>
          </div>
          <div className="card-back">
            <i className="fas fa-lightbulb"></i>
            <h3>Bright Insights</h3>
            <p>Explore innovative and insightful concepts.</p>
          </div>
        </div>
      </section>
      <section id="features" className="feature-container"></section>
      <div className="perks-container">
        <h2 className="perks-title">Additional Perks</h2>
        <div className="perks-cards">
          <div className="perks-card">
            <i className="perks-icon fas fa-water"></i>
            <h3>Hydration & Refreshments</h3>
            <p>
              Stay refreshed with clean drinking water and light snacks
              available at all times.
            </p>
          </div>

          <div className="perks-card">
            <i className="perks-icon fas fa-microphone"></i>
            <h3>Motivational Events</h3>
            <p>
              Attend workshops and guest lectures to inspire and guide your
              academic journey.
            </p>
          </div>

          <div className="perks-card">
            <i className="perks-icon fas fa-chart-line"></i>
            <h3>Progress Tracking</h3>
            <p>
              Keep track of your study hours and milestones to stay on top of
              your goals.
            </p>
          </div>
        </div>
      </div>
      <section id="resources" className="section resources-container">
        <h2 className="resources-title">Library Resources</h2>
        <div className="resources-list">
          <div className="resource-card">
            <i className="fas fa-book fa-3x"></i>
            <h3 className="resource-title">Books</h3>
            <p className="resource-description">
              A wide selection of textbooks, reference books, and novels to
              cater to all academic fields.
            </p>
          </div>

          <div className="resource-card">
            <i className="fas fa-newspaper fa-3x"></i>
            <h3 className="resource-title">Magazines</h3>
            <p className="resource-description">
              Stay updated with the latest trends, news, and academic journals
              through our magazine collection.
            </p>
          </div>

          <div className="resource-card">
            <i className="fas fa-laptop fa-3x"></i>
            <h3 className="resource-title">Online Databases</h3>
            <p className="resource-description">
              Access academic databases, research papers, and e-books for
              in-depth learning and study.
            </p>
          </div>

          <div className="resource-card">
            <i className="fas fa-chalkboard-teacher fa-3x"></i>
            <h3 className="resource-title">Workshops</h3>
            <p className="resource-description">
              Participate in regular workshops on topics like time management,
              exam preparation, and more.
            </p>
          </div>
        </div>
      </section>

      <section id="events" className="section events-container">
        <h2 className="events-title">Upcoming Events</h2>
        <div className="events-list">
          <div className="event-card">
            <h3 className="event-title">Library Workshop: Time Management</h3>
            <p className="event-date">Date: 25th Nov 2024</p>
            <p className="event-description">
              Join us for a workshop on effective time management. Learn
              strategies to stay focused and maximize your productivity.
            </p>
            <a href="#!" className="event-link">
              Learn More
            </a>
          </div>

          <div className="event-card">
            <h3 className="event-title">Guest Lecture: Study Techniques</h3>
            <p className="event-date">Date: 30th Nov 2024</p>
            <p className="event-description">
              A guest lecture from a renowned educator on study techniques that
              will help you improve your learning process.
            </p>
            <a href="#!" className="event-link">
              Learn More
            </a>
          </div>

          <div className="event-card">
            <h3 className="event-title">Library Meetup: Motivational Talk</h3>
            <p className="event-date">Date: 5th Dec 2024</p>
            <p className="event-description">
              A motivational talk to inspire students to pursue their academic
              goals with confidence and focus.
            </p>
            <a href="#!" className="event-link">
              Learn More
            </a>
          </div>
        </div>
      </section>
      <section id="study-tips" className="section study-tips-container">
        <h2 className="study-tips-title">Study Tips for Success</h2>
        <div className="study-tips-list">
          <div className="study-tip">
            <button className="study-tip-title" onClick="toggleTip(0)">
              1. Time Management is Key
            </button>
            <div className="study-tip-content">
              <p>
                Effective time management helps you balance your studies and
                personal life. Create a study schedule and stick to it.
              </p>
            </div>
          </div>

          <div className="study-tip">
            <button className="study-tip-title" onClick="toggleTip(1)">
              2. Take Regular Breaks
            </button>
            <div className="study-tip-content">
              <p>
                Don’t study for long periods without breaks. Take a 5-10 minute
                break after every 45 minutes of studying to stay fresh.
              </p>
            </div>
          </div>
          <div className="study-tip">
            <button className="study-tip-title" onClick="toggleTip(2)">
              3. Set Realistic Goals
            </button>
            <div className="study-tip-content">
              <p>
                Set achievable goals for each study session. Break your tasks
                into smaller chunks and focus on one thing at a time.
              </p>
            </div>
          </div>

          <div className="study-tip">
            <button className="study-tip-title" onClick="toggleTip(3)">
              4. Stay Organized
            </button>
            <div className="study-tip-content">
              <p>
                Keep your study materials organized. Use folders and planners to
                track your assignments and important deadlines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="section testimonials-container">
        <h2 className="testimonials-title">What Our Students Say</h2>
        <div className="testimonials-cards">
          <div className="testimonial-card">
            <p className="testimonial-text">
              "The library environment is so peaceful and perfect for my exam
              preparation. Highly recommended!"
            </p>
            <h4 className="student-name">- Priya Sharma</h4>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">
              "I love the resources provided here, especially the magazines and
              preparation books. It's a game-changer!"
            </p>
            <h4 className="student-name">- Rahul Verma</h4>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">
              "The motivational events and workshops really helped me stay
              focused and inspired. Amazing place!"
            </p>
            <h4 className="student-name">- Sneha Gupta</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
