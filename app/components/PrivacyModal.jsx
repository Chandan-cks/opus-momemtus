import React, { useState } from "react";

const PrivacyModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        style={{
          padding: "10px 20px",
          background: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Privacy Policy
      </button>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "5px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <span
              style={{
                color: "#aaa",
                float: "right",
                fontSize: "28px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={handleCloseModal}
            >
              &times;
            </span>
            <div>
              <h2>Privacy Policy</h2>
              <p>
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
              {/* ... rest of your privacy policy content ... */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PrivacyModal;
