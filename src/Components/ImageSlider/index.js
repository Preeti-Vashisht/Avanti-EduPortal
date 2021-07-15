// import React, { useState } from "react";

// export default function Images({ imageList, url, id }) {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [current, setCurrent] = useState(0);

//   const length = imageList.length;

//   function openModal() {
//     setModalIsOpen(true);
//   }
//   function closeModal() {
//     setModalIsOpen(false);
//   }

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   if (!Array.isArray(imageList) || imageList.length <= 0) {
//     return null;
//   }
//   return (
//     <div>
//       <img onClick={openModal} key={id} src={url.urls.thumb} alt="" />
//       <Modal
//         ariaHideApp={false}
//         closeTimeoutMS={200}
//         style={customStyles}
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Image modal"
//       >
//         <AiOutlineArrowLeft className="left-arrow" onClick={prevSlide} />
//         <AiOutlineArrowRight className="right-arrow" onClick={nextSlide} />
//         {imageList.map((image, id) => {
//           return (
//             <div className={id === current ? "slide active" : "slide"} key={id}>
//               {id === current && (
//                 <img alt="" className="image" src={image.urls.small} />
//               )}
//             </div>
//           );
//         })}
//       </Modal>
//     </div>
//   );
// }
