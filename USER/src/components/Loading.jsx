import { Skeleton, Spin } from "antd";

const Loading = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        {/* <Skeleton active loading={true} /> */}
        <Spin size="large" />
      </div>
    </>
  );
};

export default Loading;
