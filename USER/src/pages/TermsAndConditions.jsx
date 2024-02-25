import React, { useEffect } from "react";
import BreadCrum from "../components/BreadCrum";
import { useDispatch, useSelector } from "react-redux";
import { GetTermsAndConditions } from "../features/content/ContentSlice";
import Seo from "../components/seo/SEO";

const TermsAndConditions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetTermsAndConditions());
  }, []);
  const { termsandconditions } = useSelector((state) => state.content);

  return (
    <>
      <Seo
        metaTitle={"Terms and Conditions - P2CARE"}
        
      />

      <BreadCrum heading={"Terms & Condition"} location={"Terms & Condition"} />

      <div className="terms-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="terms-content"
                dangerouslySetInnerHTML={{
                  __html: termsandconditions.description,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;