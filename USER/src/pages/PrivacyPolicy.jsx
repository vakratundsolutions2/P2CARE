import { useEffect } from "react";
import BreadCrum from "../components/BreadCrum";
import { GetPrivacyPolicy } from "../features/content/ContentSlice";
import { useDispatch, useSelector } from "react-redux";
import Seo from "../components/seo/Seo";
const PrivacyPolicy = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetPrivacyPolicy());
  }, []);
  const { privacypolicy } = useSelector((state) => state.content);

  return (
    <>
      <Seo
        metaTitle="Privacy Policy - P2CARE"

      />

      <BreadCrum heading={"Privacy Policy"} location={"Privacy Policy"} />
      <div className="terms-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="terms-content"
                dangerouslySetInnerHTML={{
                  __html: privacypolicy.description,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
