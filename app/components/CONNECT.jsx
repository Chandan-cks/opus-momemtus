import React, { useState, useEffect } from "react";
import "./CONNECT.css";
import { FaSquarePhone, FaLinkedin, FaArrowUp } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

// Modal Component with inline styles
const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark background with slight transparency
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    cursor: "pointer",
  };

  const modalContentStyle = {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "8px",
    maxWidth: "800px", // Limit the width for larger screen sizes
    width: "90%",
    maxHeight: "90%",
    overflowY: "auto", // If content overflows, make it scrollable
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    position: "relative",
    cursor: "auto",
  };

  const buttonStyle = {
    backgroundColor: "#ff5a00", // Highlight button color
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "4px",
    fontSize: "16px",
  };

  const buttonHoverStyle = {
    backgroundColor: "#e04e00", // Darker shade when hovering
  };

  return (
    <div
      className="modal-overlay"
      style={modalOverlayStyle}
      onClick={closeModal}
    >
      <div
        className="modal-content"
        style={modalContentStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Privacy Policy</h2>
        <p style={{color:'black'}}>
                Privacy policy Last updated on August 2024 This policy describes
                how Opus Momentus Proprietary Ltd ("OM") treat personal
                information collected on the OM www.opusmomentus.com website.
                This policy does not apply to information that OM may collect
                through other means. Personal information When you visit a
                Website, OM may collect certain personal information about you,
                such as your name, address, and email address, as well as any
                other personal information that you may provide - for example,
                through submission of forms or other documents. Non-personal
                information OM will also collect the following non-personal
                information about your visit(s): ⚫ the IP address and domain
                name used (the IP address is a numerical identifier assigned
                either to your Internet service provider or directly to your
                computer); ⚫ the type of browser and operating system you use;
                and ⚫ the date, time, and duration for which you visit a
                Website, the number of times you have visited a Website, and
                where you come from. For purposes of collecting some of the
                above-referenced information, OM uses tracking tools on its
                Websites, such as browser cookies and web beacons. A cookie and
                a web beacon are pieces of data stored on your device containing
                information about your visit. Third-party analytics service
                providers, such as Google Analytics, may use cookies and web
                beacons through a Website to provide OM with information about
                how you use and interact with the Website. How OM uses
                information that it collects OM uses information it collects in
                the following ways: ⚫ to respond to your requests or questions
                ⚫ to inform you about OM ⚫ to communicate with you about your
                relationship with us ⚫ to improve a Website and the services
                provided ⚫ for security purposes. In addition, OM may use your
                information as otherwise permitted by law. OM may share your
                information in limited circumstances OM may share your
                information with its employees, agents, or third-party service
                providers who need to know such information for purposes of
                performing their jobs, including to respond to requests or
                questions that you may have. In addition, OM may share your
                information with third parties for purposes of complying with
                legal requirements or to respond to legal requests, such as in
                the case of a court order or subpoena or in connection with a
                regulatory investigation. Finally, OM might also share
                information that it collects with others when it is
                investigating potential fraud or for other reasons as permitted
                by law. Protection of information OM is strongly committed to
                protecting any personal information collected through a Website
                against unauthorized access, use, or disclosure. OM will not
                sell or otherwise disclose any personal information collected
                from a Website, other than as described herein. In addition, OM
                has implemented procedures to safeguard the integrity of its
                information technology assets, including but not limited to
                authentication, monitoring, auditing, and encryption. These
                security procedures have been integrated into the design,
                implementation, and day-to-day operations of a Website as part
                of a continuing commitment to the security of electronic content
                as well as the electronic transmission of information. For
                security purposes, OM employs software to monitor traffic to
                identify unauthorized attempts to upload or change information
                or otherwise damage a Website. Any information that an
                individual provides to OM by visiting a Website will be stored
                within Australia. If you live outside of the United States, you
                understand and agree that OM may store your information in
                Australia. Each Website is subject to Australian law, which may
                or may not afford the same level of protection as those in your
                country. Tracking tools As indicated above, OM collects
                non-personal information on its Websites through the use of
                tracking tools, such as browser cookies. Your browser may give
                you the ability to control cookies. How you do so depends on the
                type of cookie. Certain browsers can be set to reject browser
                cookies. Options you select are browser and device specific. If
                you block or delete cookies, not all of the tracking that we
                have described in this policy will stop. Some websites have "do
                not track” features that allow you to tell a website not to
                track you. These features are not all uniform. OM does not
                currently respond to those signals. If you block cookies,
                certain features on OM's sites may not work. If you block or
                reject cookies, not all of the tracking described herein will
                stop. Children and websites Each Website is meant for adults. OM
                does not knowingly collect personally identifiable information
                from children under age 13. If you are a parent or legal
                guardian of a child under 13 who believes that child may have
                visited an OM web site, please contact the address below. Links
                to other sites or third-party services If a link to a
                third-party site is included on a Website and you click on it,
                you will be taken to a website OM does not control. This Policy
                does not apply to the privacy practices of that website. Read
                the privacy policy of other websites carefully. We are not
                responsible for these third-party sites. Disclaimer and policy
                updates This Policy should not be construed as giving business,
                legal, or other advice or warranting as fail-proof the security
                of information provided through the Website. The Internet is not
                100% secure, and OM cannot promise that your use of a Website or
                software will be completely safe. OM disclaims any liability
                with respect to any information obtained by a third party
                through illegal entry into or breach of a Website. OM will
                maintain all information as long as needed to comply with
                internal policies or applicable laws or for record-keeping
                purposes. OM will notify you of any material changes in this
                policy by posting an updated copy on the applicable Websites.
                Please check the applicable Website periodically for updates.
                Contact information For questions regarding this privacy policy,
                please contact info@omproprietary.com. OM will notify you of any
                material changes in this policy by posting an updated copy on
                the applicable Websites. Please check the applicable Website
                periodically for updates.
              </p>
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const CONNECT = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility

  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Open and close the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="connect-container">
      {/* Left Section with Logo */}
      <div className="connect-left">
        <div className="logo-container">
          <div className="logo">
            <span>M</span>
          </div>
        </div>
        <div className="address">
          <p>Bay 5 North, 2 Locomotive Street</p>
          <p>South Eveleigh, 2015 NSW, Australia</p>
        </div>
        <div className="footer-text">
          <p>© 2024 Opus Momentus Proprietary Ltd. All Rights Reserved.</p>
          <p>
            The materials on this website are for illustration and discussion
            purposes only and do not constitute an offering. An offering may be
            made only by delivery of a confidential offering memorandum to
            appropriate investors. PAST PERFORMANCE IS NO GUARANTEE OF FUTURE
            RESULTS.
          </p>
        </div>
      </div>

      {/* Right Section with Contact Information */}
      <div className="connect-right">
        <div className="contact-policy">
          <p onClick={openModal}>Privacy Policy</p>
        </div>
        <div className="contact-info">
          <p>Get in touch</p>
          <div className="contact-item">
            <FaSquarePhone className="icon yellow" />
            <a href="tel:+91 7438092177">+91 743 809 2177</a>
          </div>
          <div className="contact-item">
            <MdMail className="icon yellow" />
            <a href="mailto:info@omproprietary.com">info@omproprietary.com</a>
          </div>
          <div className="contact-item">
            <FaLinkedin className="icon blue" />
            <a
              href="https://www.linkedin.com/in/chandan-sahoo-bb422b16a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Back-to-top Button */}
      {isVisible && (
        <div className="back-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}

      {/* Modal */}
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default CONNECT;
