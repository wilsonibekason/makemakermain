import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Masonry from "react-masonry-css";

const Lightboxoptions = {
  setting: {
    disableKeyboardControls: true,
    disableWheelControls: true,
  },
  button: {
    showAutoPlayButton: false,
    showDownloadButton: true,
    showFullscreenButton: false,
    showThumbnailsButton: false,
    showNextButton: false,
    showPrevButton: false,
  },
  thumbnails: {
    showThumbnails: false,
  },
};

const breakPointColumnsObj = {
  default: 3,
  1000: 2,
  600: 1,
};
const Photos = ({ photos }) => {
  const gallery =
    photos &&
    !!photos.length &&
    photos.map((photo, index) => {
      return (
        <div
          key={index}
          className="relative inline-block mb-[1em] min-w-full w-full overflow-hidden "
        >
          <img
            src={photo.urls.regular}
            alt={"Author: " + photo.user.name}
            className="w-full block transition-all duration-800 cursor-zoom-in hover:opacity-100"
          />
          {/* items detatails */}
          <div className="hover:opacity-100 hover:whitespace-nowrap hover:overflow-hidden hover:overflow-ellipsis opacity-0 transition duration-500 ">
            {/* details-like */}
            <div className="grid absolute top-[15px] right-[15px] text-center ">
              <p className="p-2 bg-[#ffffff8f] text-[#222222] rounded-sm text-[0.9em] whitespace-nowrap overflow-hidden overflow-ellipsis text-center relative">
                <span role={"img"} aria-label="heart emoji">
                  ❤️
                </span>
                {photo.likes}
              </p>
            </div>
            <div className="absolute flex w-full left-0 bottom-0 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:.masonry-bg">
              {/* details-profile-image */}
              <a
                href={photo.user.links.html}
                className="p-[15px] flex text-white items-center z-10"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <img
                  src={photo.user.profile_image.small}
                  alt={photo.user.username}
                  className="mr-2 w-[35px] rounded-full"
                />
                {/* details-profile-username */}
                <div className="flex-1 overflow-hidden inline-block overflow-ellipsis whitespace-nowrap">
                  {photo.user.name}
                </div>
              </a>
              <a
                href={photo.links.download + "?force=true"}
                className="detail-profile-button"
                target={"_self"}
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      );
    });
  let content = gallery.lenght && gallery;
  return (
    <SimpleReactLightbox>
      <SRLWrapper options={Lightboxoptions}>
        <Masonry
          breakpointCols={breakPointColumnsObj}
          className="flex ml-[-30px] w-auto"
          columnClassName="pl-[30px] bg-clip-padding "
        >
          {content}
        </Masonry>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
};

export default Photos;
