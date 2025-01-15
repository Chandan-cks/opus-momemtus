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
    backgroundColor: "black",
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
        <p style={{color:'white'}}>
                Privacy policy Last updated on August 2024 This policy describes
                how Opus Momentus Proprietary Ltd ("OM") treat personal
                information collected on the OM www.opusmomentus.com website.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia asperiores aliquid odio amet, eligendi perferendis hic minus ea ducimus! Deleniti, quos recusandae voluptate quaerat suscipit itaque, quisquam, facilis soluta alias provident necessitatibus sunt. Nostrum laboriosam excepturi facilis quaerat saepe libero non blanditiis nesciunt eius autem, culpa aspernatur optio perferendis ab itaque, dolore quo delectus. Perspiciatis obcaecati reprehenderit voluptas, cum sapiente accusantium quae! Ipsam placeat neque eius necessitatibus tenetur, totam sint non voluptas laboriosam esse. Ducimus, dicta perferendis voluptate eos repellat culpa quidem commodi hic neque, officiis quaerat cum. Velit facilis sapiente repellendus praesentium tempore ipsam omnis nostrum aspernatur, nesciunt modi itaque voluptate numquam magnam, impedit culpa quis laboriosam est atque odio. Ducimus, asperiores! Perferendis, ea recusandae dolorum in consequatur rerum odit reprehenderit? Facilis omnis consequuntur commodi perferendis obcaecati, eveniet ipsam velit hic sunt, sapiente corrupti recusandae ipsum. Culpa deserunt optio perspiciatis corporis. Libero veritatis, at quas earum porro temporibus corporis tempore natus eum incidunt? Architecto in deleniti, mollitia voluptas error expedita voluptatem reprehenderit a laborum quasi cumque beatae dolore corrupti! Fuga id repudiandae assumenda eligendi quisquam! Esse, totam. Facere esse nam est consequatur reprehenderit sint sit aliquam distinctio maxime possimus doloremque totam quia temporibus quod dolor minus numquam, voluptate cupiditate modi aliquid? Est consequatur ab, at nam ducimus officiis. Sit, sunt, veniam soluta accusantium, modi quam maiores sapiente tempore porro iusto et adipisci velit! Maxime porro maiores omnis ipsum quasi cupiditate necessitatibus provident vitae tempora, illo voluptates nam sint animi ea ab itaque expedita aliquid eos. Voluptas earum dolores porro sunt modi neque soluta dignissimos quidem! Fugit, voluptas quibusdam. At harum aut eum provident porro voluptate blanditiis non ex. Sapiente accusantium nemo molestias quae eum, voluptates consequuntur commodi beatae. Repellendus, velit distinctio quam repudiandae consectetur blanditiis minus voluptas sequi nulla a reprehenderit laboriosam mollitia cupiditate aperiam dolores doloremque voluptatem fuga dolorum aliquam. Aperiam, ullam. Consectetur reprehenderit labore optio quam porro suscipit quasi non, sunt nam, impedit incidunt nisi distinctio, fugit quas hic odit? Ratione sapiente exercitationem qui, nihil, dignissimos veritatis atque cumque fuga minus praesentium magni. Optio debitis ducimus dolorum laboriosam sint veniam. Aut molestiae velit libero mollitia sint, accusantium tenetur quia vel odit, harum rem ab saepe, qui nulla reiciendis possimus dolores? Error, nam voluptatibus voluptatem ipsa facilis eius sunt placeat delectus temporibus deleniti hic distinctio doloribus corporis atque assumenda necessitatibus consequuntur dolore. Sed provident necessitatibus numquam eum explicabo atque odio quisquam nostrum. Odio impedit quibusdam amet natus sed sit atque eligendi maxime ullam quam magni eum, porro placeat assumenda consequuntur exercitationem. Recusandae, consequatur ut blanditiis est doloribus asperiores assumenda sunt neque? Quisquam, veniam! Nostrum quaerat excepturi numquam sit et voluptatum est deleniti, repellendus, accusantium pariatur quasi ad alias necessitatibus id. Tempore perferendis reprehenderit ea nobis veritatis iure magnam fugit dolor nostrum quod. Quis iusto consectetur quia? Deleniti, assumenda. Rerum, sed? Aspernatur, obcaecati voluptatum. Incidunt dolorem ipsum omnis suscipit quia! Laborum quasi dolorum quas, quos nobis enim voluptate itaque rerum similique earum soluta quibusdam eos odio tempore quisquam corrupti molestiae? Facere, veritatis? Ut expedita corrupti ex dignissimos, laboriosam aspernatur.
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
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-8 h-8 rounded-full flex items-center justify-center">
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
            <FaSquarePhone className="icon white" />
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
