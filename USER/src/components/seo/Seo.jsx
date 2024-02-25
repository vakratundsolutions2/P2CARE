import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const Seo = ({
  metaTitle,
  metaDescription,
  metaTags,
  ogmetaimage,
  ogmetadescription,
  ogmetatitle,
}) => {
  const location = useLocation();
  return (
    <>
      <Helmet
        title={metaTitle ? metaTitle : "P2CARE"}
        meta={[
          { property: "og:title", content: ogmetatitle },

          { property: "og:description", content: ogmetadescription },
          { property: "og:image", content: ogmetaimage },

          { name: "viewport", content: "width=device-width, maximum-scale=1" },
          {
            name: "description",
            content: metaDescription,
          },

          { name: "keywords", content: metaTags },
          { name: "twitter:card", content: "Website" },
          {
            name: "twitter:site",
            content: `https://www.p2care.com${location.pathname}`,
          },
          {
            name: "twitter:title",
            content: metaTitle,
          },
          {
            name: "twitter:description",
            content: metaDescription,
          },
          {
            name: "og:type",
            content: "website",
          },

          {
            name: "og:url",
            content: `https://www.p2care.com${location.pathname}`,
          },
        ]}
      />
    </>
  );
};

export default Seo;
