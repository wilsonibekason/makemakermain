const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  heading1:
    "font-poppins font-medium xs:text-[50px] text-[42px] text-white xs:leading-[80px] leading-[68px] w-full uppercase",
  heading3:
    "font-poppins font-medium xs:text-[15px] text-[14px] green__txt xs:leading-[30px] leading-[28px] w-full uppercase",
  BlogHeading1:
    "font-poppins font-medium xs:text-2xl text-2xl text-black xs:leading-[80px] leading-[68px] w-full uppercase",
  CheckoutHeading:
    "font-poppins font-medium xs:text-2xl text-2xl text-black xs:leading-[80px] leading-[68px]  uppercase",
  linkText:
    "font-poppins font-semibold xs:text-[45px] text-[40px] text-white xs:leading-[60px] leading-[50px] cursor-pointer align-middle mt-2 md:float-right mj-4  ",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
  paragraph2: "font-poppins font-normal text-black text-sm leading-[30.8px]",
  span1: "text-[12px] text-gray-400 font-semibold font-poppins uppercase",
  span2: "text-[12px] text-blue-400 font-semibold font-poppins uppercase",
  span3: "text-[12px] text-dimwhite font-semibold font-poppins uppercase",
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  transitionTextEffect:
    "transition duration-500 ease transform hover:-translate-y-1",
  buttonOutline:
    "border   active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  grid: "grid grid-cols-1 lg:grid-cols-12 gap-12",
  gridContents: "lg:col-span-9 col-span-1",
  gridSidebar: "lg:col-span-3 col-span-1",
  gridSideStatus: "lg:sticky relative top-8",
};

export const blogLayout = {
  section: `bg-white p-8 pb-12  shadow-sm mb-8`,
  section2: "bg-white shadow-lg rounded-lg p-4 lg:p-8 pb-12 mb-8",
  adjacentButton:
    "transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration w-[50px] hover:w-[60px]",
};

export const shopLayout = {
  section: "container mx-auto px-10 mb-8",
  sectionGrid: "grid grid-cols-1 lg:grid-cols-12 md:grid-cols-12 gap-12 mt-8",
  sectionGridDivider: "col-span-1 lg:col-span-7",
  sectionGridDivider2: "col-span-1 lg:col-span-5",
  sectionGridMultix:
    "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-16 mx-4",
  sectionTripplix: "grid grid-cols-1 lg:grid-cols-12 gap-12",
  sectionTripplix1: "lg:col-span-2 col-span-1",
  sectionTripplix2: "lg:col-span-8 col-span-1",
  sectionTripplix3: "lg:col-span-2 col-span-1",
  cartSection: "lg:flex  mx-auto",
  cartSectionLayout: "flex-grow m-5 shadow-sm",
  cartLayout2: "flex flex-col p-10 shadow",
  cartLayout: "flex flex-col p-5 space-y-10 bg-white",
  cartColors: ["bg-red-200", "bg-tail-400", "bg-black"],
};

export default styles;
