import { useState } from "react";
import AvatarEditor from "react-avatar-editor";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

import { Button, message, Modal, Upload } from "antd";
import { useRef } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { imageDetail, imageDetail2 } from "../features/imageSlice";
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const myStyle = {
  button: {
    height: "2rem",
  },
  borderbottom: {
    borderBottom: "1px solid #ccc",
  },
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};
const MyEditor = ({ ImgName, ImgName2, Title, Title2 }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [ImgModal, setImgModal] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [Scale, setScale] = useState(1.2);
  const [Rotate, setRotate] = useState(0);
  const [PreviewLink, setPreviewLink] = useState("");

  const editorRef = useRef();

  const previewHandle = () => {
    const canvasImage = editorRef.current.getImage();
    const dataUrl = canvasImage.toDataURL();
    setPreviewLink(dataUrl);
  };

  const handleChange = (info) => {
    console.log(info.file.status);
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <>
      <button
        style={{
          border: 0,
          background: "none",
        }}
        type="button"
      >
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div
          style={{
            marginTop: 8,
          }}
        >
          Upload
        </div>
      </button>
    </>
  );

  const handleOk = () => {
    if (ImgName) dispatch(imageDetail({ dataUrl: PreviewLink, ImgName }));
    if (ImgName2) dispatch(imageDetail2({ dataUrl2: PreviewLink, ImgName2 }));
    setImgModal(false);
  };

  return (
    <>
      <Modal
        open={ImgModal}
        onOk={handleOk}
        onCancel={() => setImgModal(false)}
        title={`Image editor ${Title ? Title : '' || Title2 ? Title2 : ''}`}
        okText="Submit"
        width="60%"
      >
        <div className="m-4">
          <Upload
            listType="picture-card"
            className="avatar-uploader"
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="avatar"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "5px",
                }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
          {imageUrl ? (
            <>
              <div className="d-flex w-100">
                <div className="m-3 ">
                  <AvatarEditor
                    image={imageUrl}
                    ref={editorRef}
                    width={200}
                    height={200}
                    border={50}
                    // borderRadius={100}
                    color={[0, 0, 0, 0.3]} // RGBA
                    scale={Scale}
                    rotate={Rotate}
                  />

                  <button
                    className="btn btn-primary btn-sm m-3"
                    type="button"
                    style={myStyle.button}
                    onClick={previewHandle}
                  >
                    Preview
                  </button>
                </div>

                <div className="d-flex  align-items-center flex-column  w-100  p-4 ">
                  <div
                    className="gap-4 d-flex justify-content-center   "
                    style={myStyle.borderbottom}
                  >
                    <p className="fs-5 px-4">Scale </p>
                    <button
                      className="btn  btn-info btn-sm"
                      type="button"
                      style={myStyle.button}
                      onClick={() => setScale(Scale + 0.1)}
                    >
                      +
                    </button>

                    <button
                      className="btn btn-info btn-sm"
                      type="button"
                      style={myStyle.button}
                      onClick={() => setScale(Scale - 0.1)}
                    >
                      -
                    </button>
                  </div>

                  <div
                    className="gap-4 d-flex my-4 pb-2"
                    style={myStyle.borderbottom}
                  >
                    <p className="fs-5 px-4">Rotate </p>
                    <button
                      className="btn  btn-info btn-sm"
                      type="button"
                      style={myStyle.button}
                      onClick={() => setRotate(Rotate + 90)}
                    >
                      +
                    </button>

                    <button
                      className="btn btn-info btn-sm"
                      type="button"
                      style={myStyle.button}
                      onClick={() => setRotate(Rotate - 90)}
                    >
                      -
                    </button>
                  </div>
                  {PreviewLink ? (
                    <>
                      <div className="d-flex  flex-column w-100   justify-content-center align-items-center">
                        <p className="lead">Preview</p>
                        <img src={PreviewLink} alt="" className="w-25" />
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </Modal>
      <div className="  col-md-6">
        <div className="col-9"></div>
        <div className="col-3 d-flex px-2 my-4 align-items-center w-100">
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => setImgModal(true)}
            type="button"
          >
            Edit {Title ? Title : "image" || Title2 ? Title2 : "image"}
          </button>
        </div>
      </div>
    </>
  );
};

export default MyEditor;
