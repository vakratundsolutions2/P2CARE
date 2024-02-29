import { useRef, useState } from "react";
import { Modal } from "antd";
import ImageCropper from "./ImageCropper";
// import Modal from "./Modal";
import "react-image-crop/dist/ReactCrop.css";
const Profile = ({ imageName }) => {
  const avatarUrl = useRef("");

  const [modalOpen, setModalOpen] = useState(false);

  const updateAvatar = (imgSrc) => {
    avatarUrl.current = imgSrc;
  };

  return (
    <div className="d-flex flex-column align-items-start w-100 ">
      <div className="position-relative my-3  py-3 ">
        {avatarUrl.current ? (
          <>
            <img
              src={avatarUrl.current}
              className="  form-control p-0"
              style={{ width: "150px", height: "150px" }}
            />
          </>
        ) : (
          ""
        )}

        <div className="mx-3 px-4 py-2">
          <button
            className="btn btn-primary "
            title="Change photo"
            type="button"
            onClick={() => setModalOpen(true)}
          >
            {imageName ? imageName : "Upload image"}
          </button>
        </div>
      </div>

      {modalOpen && (
        <Modal
          updateAvatar={updateAvatar}
          open={modalOpen}
          onCancel={() => setModalOpen(false)}
          title={`Upload ${imageName}`}
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
