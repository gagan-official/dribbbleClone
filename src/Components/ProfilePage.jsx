import { faCamera, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonComp from "./ButtonComp";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const [fileImage, setFileImage] = useState("");
  const [location, setlocation] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  useEffect(() => {
    setBtnDisabled(!(fileImage.length !== 0 && location.length !== 0));
  }, [fileImage, location]);

  return (
    <SectionContainer
      onSubmit={() => navigate("/what-brings-you-here")}
      heading="Welcome! Let's create your profile"
      para="Let others get to know you better! You can do these later"
    >
      <h2 className="text-[20px] font-bold font-['Franklin_Gothic_Medium',_'Arial_Narrow',_Arial,_sans-serif] sm:text-center">
        Add an avatar
      </h2>
      <div className="user-img flex gap-12 p-4 sm:gap-5 sm:flex-col sm:items-center">
        <label
          className="flex
            justify-center
            items-center
            relative
            overflow-hidden
            w-[140px]
            aspect-square
            border-[2px]
            border-dashed
            border-[#cfcfcf]
            rounded-full
            cursor-pointer
            text-[#b4b4b4]
            after:bg-[#0001]
            after:absolute
            after:top-0
            after:left-0
            after:w-full
            after:h-full
            after:opacity-0
            after:rounded-full
            hover:after:opacity-100
            "
          htmlFor="file"
          id="uploadbtn"
        >
          <input
            onChange={handleFileChange}
            className="absolute opacity-0"
            type="file"
            accept="image/*"
            id="file"
            required
          />
          <FontAwesomeIcon icon={faCamera} className="absolute text-xl" />
          <img
            style={{
              width: "calc(100% + 4px)",
              height: "calc(100% + 4px)",
            }}
            className="bg-transparent relative -top-[2px] -left-[2px]"
            src={fileImage}
            id="photo"
            alt=""
          />
        </label>
        <div>
          <label
            htmlFor="file"
            className="px-3 py-2 block w-fit my-4 rounded-md border font-medium text-sm cursor-pointer hover:opacity-80 sm:w-full sm:text-center"
          >
            Choose image
          </label>
          <button
            type="button"
            className="flex items-center gap-2 text-sm text-[#999] hover:text-[#555]"
          >
            <FontAwesomeIcon icon={faChevronRight} /> Or choose one of our
            defaults
          </button>
        </div>
      </div>
      <div className="add-location my-8">
        <h2 className="text-[20px] font-bold font-['Franklin_Gothic_Medium',_'Arial_Narrow',_Arial,_sans-serif]">
          Add your location
        </h2>
        <input
          type="text"
          className="location w-full my-4 outline-none text-[15px] border-[none] border-b border-[#c1c1c1] focus-visible:border-[#383838]"
          placeholder="Enter a location"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate("/what-brings-you-here");
            }
          }}
          onChange={(e) => setlocation(e.target.value)}
          value={location}
          required
        />
      </div>
      <div className="flex flex-col items-center gap-2 w-fit">
        <ButtonComp extraInfo={!btnDisabled} otherProps={{ disabled: btnDisabled }}>Next</ButtonComp>
      </div>
    </SectionContainer>
  );
}

export const DribbbleLogoComp = ({ elementBeforeLogo, elementAfterLogo }) => {
  return (
    <div className="logo w-24 flex gap-8 items-center sm:self-center">
      {elementBeforeLogo}
      <img
        // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgybX_NMbhXJqb7k48mtucFLipUdJdffPOLmUk0itOZDoDrtAq"
        src="images/dribbble-text-red.png"
        id="logo"
        className="w-full aspect-[16/5] object-cover"
        alt=""
      />
      {elementAfterLogo}
    </div>
  );
};

export const SectionContainer = ({
  onSubmit,
  heading,
  para,
  formClassName,
  h1ClassName,
  pClassName,
  elementBeforeLogo,
  elementAfterLogo,
  children,
}) => {
  return (
    <section className="h-screen p-8 flex flex-col gap-8 md:h-auto">
      <DribbbleLogoComp
        elementBeforeLogo={elementBeforeLogo}
        elementAfterLogo={elementAfterLogo}
      />
      <form onSubmit={onSubmit} className={`w-3/5 self-center md:w-full ${formClassName}`}>
        <div className="heading mb-11 text-[20px]">
          <h1
            className={`text-3xl mb-3 font-bold font-['Franklin_Gothic_Medium',_'Arial_Narrow',_Arial,_sans-serif] ${h1ClassName}`}
          >
            {heading}
          </h1>
          <p className={`text-sm text-gray-500 ${pClassName}`}>{para}</p>
        </div>
        {children}
      </form>
    </section>
  );
};

export default ProfilePage;
