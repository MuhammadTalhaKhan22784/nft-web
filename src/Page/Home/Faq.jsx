import React, { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

const faqData = [
  {
    title: "1. What are the benefits of owning Brainoids?",
    text: `Brainoids owners receive full commercial and creative rights over their NFTs, as well as members-only benefits + voting rights in the MetaBrain, the Brainoids DAO, other utilities, and more!`,
  },
  {
    title: "2. MetaBrain? DAO? What's that?",
    text: `The MetaBrain is the name for the Brainoids DAO, or decentralized autonomous organization. This means that Brainoids will be fully community-run rather than relying on centralized leadership. Blockchain technologies and smart contracts enable this structure through transparency and security, guaranteeing each member's potential impact.`,
  },
  {
    title: "3. Will there be a $TOKEN? Wen stake?",
    text: `After launch, we will deploy our ERC-20 token that members may earn by staking their NFTs or purchasing on the open market. As the DAO is established, we will provide more information on tokenomics and utility. To be clear: this token does not represent a financial security in any way and 1 $token = 1 $token. It is strictly a utility token to be used for governance purposes within the MetaBrain. See discord for more.`,
  },
  {
    title: `4. Back to the NFTs - How unique are my Brainoids?`,
    text: `Brainoids are randomly generated from 180+ different attributes, creating billions of possible outcomes. However, only 5,555 will ever be minted. While each Brainoids is one of a kind, some are more rare than others. We will provide rarity information and resources upon reveal.`,
  },
  {
    title: `5. How and where can I mint?`,
    text: (
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        quo, at velit vero animi ducimus! Est autem ullam alias, voluptate
        debitis dignissimos facere temporibus consectetur facilis magnam labore
        esse blanditiis?
      </span>
    ),
  },
];
const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <>
      <section id="faq" className="faq_section">
        <div className="faq_overlay">
          <h1>Frequently Asked Questions</h1>
          <div className="container">
            <div className="row">
              <div className="col-12">
                {faqData.map((data, i) => {
                  return (
                    <div
                      key={i}
                      className={`faq-wrapper ${
                        activeFaq === i ? "active-faq" : ""
                      }`}
                    >
                      <div
                        className="faq-qs"
                        onClick={() =>
                          setActiveFaq((prev) => (prev === i ? null : i))
                        }
                      >
                        <h6>{data.title}</h6>
                        <span className="faq-arrow">
                          <MdArrowForwardIos />
                        </span>
                      </div>
                      <div className="faqs-answer">
                        <p>{data.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
