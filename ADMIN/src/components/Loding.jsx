import { Skeleton, Spin } from "antd";

const Loding = () => {
  return (
    <>
    <div className="d-flex justify-content-center">

      {/* <Skeleton active loading={true} /> */}
      <Spin size="large" />
    </div>
    </>
  );
};

export default Loding;
