import ButtonComp from "./ButtonComp";
import { navList } from "../Data/MappingData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-[#fff] flex justify-between items-center px-[20px] py-[4px] lg:justify-center lg:py-3 sticky top-0 z-10">
      <FontAwesomeIcon
        onClick={() => setOpen(!open)}
        className="hidden lg:inline-block cursor-pointer absolute left-0 mx-[20px]"
        icon={open ? faXmark : faBars}
      />
      <img
        className="h-5 cursor-pointer mx-2 hidden lg:inline-block"
        src="images/dribbble-black.png"
        alt=""
        id="logo"
      />
      <UlComp ulClassName="lg:hidden" />
      <NavRightComp containerClassName="lg:hidden" />
      {open && (
        <div className="hidden lg:flex flex-col gap-4 w-full max-w-[18rem] shadow-md absolute left-0 top-[100%] m-2 p-4 rounded-2xl bg-white border border-[#c4c4c4]">
          <UlComp
            ulClassName="lg:flex-col"
            listClassName="first-of-type:hidden"
          />
          <NavRightComp
            containerClassName="lg:flex-col"
            inputClassName="w-full"
          />
        </div>
      )}
    </nav>
  );
}

const UlComp = ({ ulClassName, listClassName }) => {
  return (
    <ul className={`menu flex gap-4 items-center list-none ${ulClassName}`}>
      {navList.map((items) => {
        return (
          <li className={listClassName}>
            <a
              className="text-[15px] p-[10px] text-[rgb(112,_111,_111)] no-underline [transition:0.3s_ease] font-medium text-xs !font-[Poppins] hover:text-[rgb(228,_64,_176)]"
              href="/"
            >
              {items.item}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const NavRightComp = ({ containerClassName, inputClassName }) => {
  return (
    <div className={`search flex items-center gap-4 ${containerClassName}`}>
      <label
        htmlFor="searchInput"
        className="rounded-lg px-4 py-2 flex gap-2 items-center bg-[rgba(237,_237,_237,_0.905)] text-[rgb(159,_157,_157)] focus-within:outline-[#ff4584] focus-within:outline focus-within:outline-4"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          className={`w-20 outline-none border-none bg-transparent ${inputClassName}`}
          type="text"
          placeholder="Search"
          id="searchInput"
        />
      </label>
      <NavImgContainer imgSrc="images/noti.png">Notifications</NavImgContainer>
      <NavImgContainer imgClassName="w-10" imgSrc="images/profile.png">
        Profile
      </NavImgContainer>
      <ButtonComp className="!min-w-0 w-fit lg:w-full !px-4">Upload</ButtonComp>
    </div>
  );
};

const NavImgContainer = ({
  children,
  containerClassName,
  imgClassName,
  imgSrc,
}) => {
  return (
    <div
      className={`flex items-center gap-4 lg:w-full lg:relative lg:border lg:border-[#c4c4c4] lg:py-3 lg:px-2 lg:rounded-lg ${containerClassName}`}
    >
      <img
        className={`cursor-pointer w-8 lg:absolute ${imgClassName}`}
        src={imgSrc}
        alt="no found"
      />
      <span className="hidden lg:block w-full text-center text-xs">
        {children}
      </span>
    </div>
  );
};

export default Header;
