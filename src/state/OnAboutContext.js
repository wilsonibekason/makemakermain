import React, { useState, useEffect, createContext, useContext } from "react";
import { client } from "../client";

const AboutContext = createContext({});

export const AboutProvider = ({ children }) => {
  const [aboutHeader, setAboutHeader] = useState();
  const [sectionContents, setSectionContents] = useState([]);
  const [aboutSection, setAboutSection] = useState();
  const [aboutTip, setAboutTip] = useState();
  const [aboutTeamCard, setAboutTeamCard] = useState();
  const [aboutTeam, setAboutTeam] = useState();
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [contactCard, setContactCard] = useState([]);
  const [contactHeader, setContactHeader] = useState([]);
  const [aboutValues, setAboutValues] = useState([]);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const { fullName, email, message } = formData;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading((prev) => !prev);
    setError((prev) => !prev);
    const aboutComment = {
      _type: "aboutComment",
      fullName,
      email,
      message,
    };
    if (!fullName | !email | !message)
      setIsFormSubmitted(false) &&
        setError((prev) => !prev) &&
        setLoading(false);
    client
      .create(aboutComment)
      .then(() => {
        setIsFormSubmitted(true);
        setLoading(false);
        setError(false);
        setFormData({
          fullName: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => console.log(error?.response?.body?.error?.description));
  };
  useEffect(() => {
    let cancelled = false;
    // querying for aboutHeader
    const headerQuery = '*[_type == "aboutHeader"]';
    client.fetch(headerQuery).then((data) => setAboutHeader(data));
    // querying for sectionHeader
    const sectionContentQuery = '*[_type == "sectionContent"]';
    client.fetch(sectionContentQuery).then((data) => setSectionContents(data));
    // querying fot about section contents
    const aboutSectioonQuery = '*[_type == "aboutSection"]';
    client.fetch(aboutSectioonQuery).then((data) => setAboutSection(data));
    // querying for the aboutTip contents
    const aboutTipQuery = '*[_type == "aboutTip"]';
    client.fetch(aboutTipQuery).then((data) => setAboutTip(data));
    // querying for the aboutTeam contents
    const aboutTeamQuery = '*[_type == "aboutTeam"]';
    client.fetch(aboutTeamQuery).then((data) => setAboutTeam(data));
    // querying for the aboutCard contents
    const aboutTeamCardQuery = '*[_type == "CardContent"]';
    client.fetch(aboutTeamCardQuery).then((data) => setAboutTeamCard(data));
    /// querying for the contacthEADER schema
    const contactHeaderQuery = '*[_type == "contactHeader"]';
    client
      .fetch(contactHeaderQuery)
      .then((data) => !cancelled && setContactHeader(data));

    // querying for the contactCard schema
    const contactCardQuery = '*[_type == "contactCard"]';
    client
      .fetch(contactCardQuery)
      .then((data) => !cancelled && setContactCard(data));
    //// querying for aboutvalues schema
    const aboutValueQuery = '*[_type == "aboutValues"]';
    client
      .fetch(aboutValueQuery)
      .then((data) => !cancelled && setAboutValues(data));
    // clean up
    return () => {
      console.log("fetched and cencelled");
      cancelled = true;
    };
  }, []);

  // destructuring for section contents
  const sectionItem1 = sectionContents[0];
  const sectionItem2 = sectionContents[1];
  const sectionItem3 = sectionContents[2];
  //   const sectionItem4 = sectionContents[3];
  // destructuring for about section
  //   const sectionTitle = aboutSection?.map((item) => item?.articleTitle);
  //   const sectionDesc = aboutSection?.map((item) => item?.articleDesc);
  //   const sectionImage = aboutSection?.map((item) => urlFor(item?.cardImgUrl));
  //   const sectionAuthor = aboutSection?.map((item) => item?.companyName);
  //   const cardTitle = aboutSection?.map((item) => item?.cardTitle);
  //   const cardDesc = aboutSection?.map((item) => item?.cardDesc);
  // destructuring for aboutTeam And aboutTeamCard sections
  const aboutTeamTitle = aboutTeam?.map((item) => item?.title);
  const aboutTeamDesc = aboutTeam?.map((item) => item?.description);
  return (
    <AboutContext.Provider
      value={{
        aboutHeader,
        sectionItem1,
        sectionItem2,
        sectionItem3,
        aboutSection,
        aboutTip,
        aboutTeam,
        aboutTeamCard,
        aboutTeamTitle,
        aboutTeamDesc,
        contactCard,
        contactHeader,
        aboutValues,
        //// comment
        message,
        fullName,
        email,
        handleChange,
        handleSubmit,
        error,
        loading,
        isFormSubmitted,
      }}
    >
      {children}
    </AboutContext.Provider>
  );
};

export const useStateContextAbout = () => useContext(AboutContext);
