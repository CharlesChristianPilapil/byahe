// Gallery.js
import React, { useRef, useState } from "react";
import Section from "../../components/Section";
import Articles from "./Articles";
import { gallery } from "../../constants";
import Modal from "../../components/Modal";
import Email from "../../components/Email";

export default function Gallery() {
  const [modalData, setModalData] = useState(null);
  const dialog = useRef();

  function handleClick(image, description) {
    setModalData({ image, description });
  }

  function closeModal() {
    setModalData(null);
  }
  
  return (
    <>
      {modalData !== null && (
        <Modal ref={dialog} onClose={closeModal}>
          <Email image={modalData.image} text={modalData.description} />
        </Modal>
      )}

      <Section title='Our Gallery'>
        <div className="max-w-[1110px] mx-auto grid grid-cols-1 gap-[2rem] justify-center sm:grid-cols-2 md:gap-[1rem] lg:grid-cols-4">
          {gallery.map((entry, index) => (
            <Articles
              key={index}
              title={entry.title}
              image={entry.image}
              preview={entry.preview}
              article={entry.article}
              onClick={() => handleClick(entry.image, entry.article)}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
