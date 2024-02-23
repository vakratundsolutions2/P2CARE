import { useRef, useState } from "react";
import { Modal } from "antd";
import ImageCropper from "./ImageCropper";
// import Modal from "./Modal";
import "react-image-crop/dist/ReactCrop.css";
const Profile = () => {
  const avatarUrl = useRef("");
  // const avatarUrl = useRef(
  //   "https://avatarfiles.alphacoders.com/161/161002.jpg"
  // );
  const [modalOpen, setModalOpen] = useState(false);

  const updateAvatar = (imgSrc) => {
    avatarUrl.current = imgSrc;
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="position-relative my-3  py-3">
        {avatarUrl.current ? (
          <>
            <img
              src={avatarUrl.current}
              alt="Avatar"
              className="  border border-secondary "
              style={{ width: "150px", height: "150px" }}
            />
          </>
        ) : (
          ""
        )}

        <button
          className="btn btn-primary "
          title="Change photo"
          type="button"
          onClick={() => setModalOpen(true)}
        >
          open
        </button>
      </div>

      {modalOpen && (
        <Modal
          updateAvatar={updateAvatar}
          open={modalOpen}
          onCancel={() => setModalOpen(false)}
          onOk={() => setModalOpen(false)}
        >
          <ImageCropper
            updateAvatar={updateAvatar}
            closeModal={() => setModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default Profile;
