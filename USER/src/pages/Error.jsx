import { useNavigate } from "react-router-dom";
import IMG from     "../assets/images/no-result-search.png";
import Seo from "../components/seo/SEO";

const Error = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/");
  };
  const gotoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Seo
        metaTitle="404 Not Found"
        
      />

      <div className="card">
        <div className="d-flex justify-content-center p-5">
          <img src={IMG} alt="" className="noresult_Img" />
        </div>
        <div className="text-center">
          <h1 className="mt-5 mb-4">404 Not Found</h1>
          <div className="d-flex justify-content-center gap-4">
            <button className="btn btn-primary" onClick={gotoBack}>
              Go Back
            </button>
            <button className="btn btn-primary" onClick={gotoHome}>
              Go To Homepage
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
