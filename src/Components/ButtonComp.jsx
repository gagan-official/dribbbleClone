import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function ButtonComp({ otherProps, className, type, onClick, extraInfo, children }) {
  return (
    <>
      <button
        className={`px-[40px] py-[10px] inline-block text-[12px] tracking-[1px] bg-[#ff4584] text-[#fff] border-[1px] border-[solid] border-[#ff4584] rounded-[10px] font-medium min-w-[185px] cursor-pointer hover:bg-[#f53677] disabled:pointer-events-none disabled:opacity-70 md:w-full ${className}`}
        type={type || "submit"}
        onClick={onClick}
        {...otherProps}
      >
        {children}
      </button>
      {extraInfo && (
        <span className="text-[.7rem] text-[#999] font-medium">
          or press RETURN
        </span>
      )}
    </>
  );
}

export const BackButton = ({ className }) => {
  const navigate = useNavigate();
  return (
    <FontAwesomeIcon
      icon={faChevronRight}
      className={`-scale-100 rounded-lg px-4 py-3 bg-[#ebebeb] text-[#626262] text-xs cursor-pointer hover:opacity-80 ${className}`}
      title="Go back"
      onClick={() => navigate(-1)}
    />
  );
};

export default ButtonComp;
