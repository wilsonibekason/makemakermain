import { useState, useEffect, createContext, useContext } from "react";
import { client } from "../client";
const HomeContext = createContext({});

export const HomeProvider = ({ children }) => {
  const [features, setFeatures] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [stats, setStats] = useState([]);
  const [footerLinks, setFooterLinks] = useState([]);
  const [socialMedia, setSocialMedia] = useState([]);
  const [clients, setClients] = useState([]);

  // useEffect(() => {
  //   let cancelled = false;
  //   const query = `*[_type == "features"]`;
  //   client
  //     .fetch(query)
  //     .then((data) => {
  //       !cancelled && setFeatures(data);
  //     })
  //     .catch((err) => console.log(err));
  //   return () => {
  //     console.log("features cancelled");
  //     cancelled = true;
  //   };
  // }, [features]);
  // useEffect(() => {
  //   let cancelled = false;
  //   const query = `*[_type == "feedback"]`;
  //   client
  //     .fetch(query)
  //     .then((data) => {
  //       !cancelled && setFeedback(data);
  //     })
  //     .catch((err) => console.log(err));
  //   return () => {
  //     console.log("feedback cancelled");
  //     cancelled = true;
  //   };
  // }, [feedback]);
  // useEffect(() => {
  //   let cancelled = false;
  //   const query = `*[_type == "stats"]`;
  //   client
  //     .fetch(query)
  //     .then((data) => {
  //       !cancelled && setStats(data);
  //     })
  //     .catch((err) => console.log(err));
  //   return () => {
  //     console.log("stats cancelled");
  //     cancelled = true;
  //   };
  // }, [stats]);
  // useEffect(() => {
  //   let cancelled = false;
  //   const query = '*[_type == "footerLinks"]';
  //   client
  //     .fetch(query)
  //     .then((data) => {
  //       !cancelled && setFooterLinks(data);
  //     })
  //     .catch((err) => console.log(err));
  //   return () => {
  //     console.log("footerLinks cancelled");
  //     cancelled = true;
  //   };
  // }, [footerLinks]);
  // useEffect(() => {
  //   let cancelled = false;
  //   const query = `*[_type == "socialMedia"]`;
  //   client
  //     .fetch(query)
  //     .then((data) => {
  //       !cancelled && setSocialMedia(data);
  //     })
  //     .catch((err) => console.log(err));
  //   return () => {
  //     console.log("socialMedia cancelled");
  //     cancelled = true;
  //   };
  // }, [socialMedia]);
  // useEffect(() => {
  //   let cancelled = false;
  //   const query = `*[_type == "clients"]`;
  //   client
  //     .fetch(query)
  //     .then((data) => {
  //       !cancelled && setClients(data);
  //     })
  //     .catch((err) => console.log(err));
  //   return () => {
  //     console.log("clients cancelled");
  //     cancelled = true;
  //   };
  // }, [clients]);

  return (
    <HomeContext.Provider
      value={{ features, feedback, stats, footerLinks, socialMedia, clients }}
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
