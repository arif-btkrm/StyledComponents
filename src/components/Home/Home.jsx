import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";

const Home = () => {
  const [openModal, setOpenModal] = useState(true);
  // console.log(openModal);
  return (
    <div>
      {openModal && <Modal modalController={setOpenModal} />}
      <Header modalController={setOpenModal} />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
