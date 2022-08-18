import { useState, useEffect, createContext, useContext } from "react";
import { client, urlFor } from "../client";
const HomeContext = createContext({});

export const HomeProvider = ({ children }) => {
  const [features, setFeatures] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [stats, setStats] = useState([]);
  const [footerLinks, setFooterLinks] = useState([]);
  const [socialMedia, setSocialMedia] = useState([]);
  const [logoImage, setlogoImage] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    let cancelled = false;
    const query = `*[_type == "features"]`;
    client
      .fetch(query)
      .then((data) => {
        !cancelled && setFeatures(data);
      })
      .catch((err) => console.log(err));
    const statQuery = `*[_type == "stats"]`;
    client
      .fetch(statQuery)
      .then((data) => {
        !cancelled && setStats(data);
      })
      .catch((err) => console.log(err));
    /// load make  maker logo
    const logoQuery = '*[_type == "logo"]';
    client
      .fetch(logoQuery)
      .then((data) => !cancelled && setlogoImage(data[0]))
      .catch((error) => console.log(error?.response?.body?.error?.description));
    const FooterLinkQuery = '*[_type == "footerLinks"]';
    client
      .fetch(FooterLinkQuery)
      .then((data) => {
        !cancelled && setFooterLinks(data);
      })
      .catch((err) => console.log(err));
    const socialQuery = `*[_type == "socialMedia"]`;
    client
      .fetch(socialQuery)
      .then((data) => {
        !cancelled && setSocialMedia(data);
      })
      .catch((err) => console.log(err));
    const clientQuery = `*[_type == "clients"]`;
    client
      .fetch(clientQuery)
      .then((data) => {
        !cancelled && setClients(data);
      })
      .catch((err) => console.log(err));

    return () => {
      console.log("Everything is cancelled");
      cancelled = true;
    };
  }, []);
  const logoIMG = logoImage?.image;
  console.log(urlFor(logoIMG));

  // const logoIMG = logoImage?.map((img) => urlFor(img));
  return (
    <HomeContext.Provider
      value={{
        features,
        feedback,
        stats,
        footerLinks,
        socialMedia,
        clients,
        logoIMG,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useStateContext = () => useContext(HomeContext);
/**?.response?.body?.error?.description
?.response?.body?.error?.description
?.response?.body?.error?.description
?.response?.body?.error?.description
?.response?.body?.error?.description
?.response?.body?.error?.description */
