import React from 'react';
import './Invite.css';


const Invite = () => {
  return (
    <div className="invite-container">
      <div className="invite-text">
        <p>
          With proven strategies, innovative technology, and a vision to democratise
          institutional-grade investment solutions, we're building the future of
          finance together.
        </p>
        <button className="invite-button">Invest or partner with us</button>
      </div>
      <div className="invite-image">
        <img src='/rb_3538.png' alt="Coin Stack" />
      </div>
    </div>
  );
};

export default Invite;