import { useState } from "react";
import { SectionContainer } from "./ProfilePage";
import ButtonComp, { BackButton } from "./ButtonComp";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function WhatBringsPage() {
  // const [passedCheckedData, setPassedCheckedData] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  // console.log(passedCheckedData, "see here")

  const navigate = useNavigate();

  const cardsArray = [
    {
      id: 1,
      heading: "I'm a designer looking to share my work",
    },
    {
      id: 2,
      heading: "I'm looking to hire a designer",
    },
    {
      id: 3,
      heading: "I'm looking for design inspiration",
    },
  ];

  return (
    <SectionContainer
      heading="What brings you to Dribbble?"
      para="Select the option that best describes you. Don't worry, you can explore other options later."
      formClassName="w-full max-w-[700px]"
      h1ClassName="text-center"
      pClassName="text-center"
      onSubmit={() => navigate("/verify-email")}
      elementBeforeLogo={
        <BackButton className="hidden md:inline-block sm:absolute sm:left-6" />
      }
      elementAfterLogo={<BackButton className="md:hidden" />}
    >
      <div className="role flex text-center justify-center gap-6 mt-20 sm:flex-col sm:-mt-2">
        {/* {cardsArray.map((cards) => {
          return (
            <Fragment key={cards.id}>
              <CardSelectionComp
                id={cards.id}
                passCheckedData={(checked) => setPassedCheckedData(checked)}
                heading={cards.heading}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    navigate("/verify-email");
                  }
                }}
              />
            </Fragment>
          );
        })} */}

        <CardSelectionComp
          id="1"
          // passCheckedData={(checked) => setPassedCheckedData(checked)}
          checked={checked1}
          heading={cardsArray[0].heading}
          inputElement={
            <input
              className="hidden"
              type="checkbox"
              name={cardsArray[0].heading}
              value={cardsArray[0].heading}
              id="check1"
              onChange={(e) => setChecked1(e.target.checked)}
            />
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate("/verify-email");
            }
          }}
        />
        <CardSelectionComp
          id="2"
          // passCheckedData={(checked) => setPassedCheckedData(checked)}
          checked={checked2}
          heading={cardsArray[1].heading}
          inputElement={
            <input
              className="hidden"
              type="checkbox"
              name={cardsArray[1].heading}
              value={cardsArray[1].heading}
              id="check2"
              onChange={(e) => setChecked2(e.target.checked)}
            />
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate("/verify-email");
            }
          }}
        />
        <CardSelectionComp
          id="3"
          // passCheckedData={(checked) => setPassedCheckedData(checked)}
          checked={checked3}
          heading={cardsArray[2].heading}
          inputElement={
            <input
              className="hidden"
              type="checkbox"
              name={cardsArray[2].heading}
              value={cardsArray[2].heading}
              id="check3"
              onChange={(e) => setChecked3(e.target.checked)}
            />
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate("/verify-email");
            }
          }}
        />
      </div>
      <div className="flex flex-col items-center gap-3 w-full mt-12 sm:m-0">
        <span
          className={`text-sm font-medium ${
            !(checked1 || checked2 || checked3) ? "opacity-0 invisible" : "sm:mt-6"
          }`}
        >
          Anything else? You can select multiple
        </span>
        <ButtonComp extraInfo={(checked1 || checked2 || checked3)} otherProps={{ disabled: !(checked1 || checked2 || checked3) }}>
          Finish
        </ButtonComp>
      </div>
    </SectionContainer>
  );
}

const CardSelectionComp = ({ heading, id, onKeyDown, passCheckedData, checked, inputElement }) => {
  // const [checked, setChecked] = useState({ state: false, id: null});

  // passCheckedData(checked);

  return (
    <label
      htmlFor={`check${id}`}
      onKeyDown={onKeyDown}
      className={`option flex flex-col items-center justify-end cursor-pointer bg-[#fff] p-4 h-[230px] w-[780px] sm:w-full sm:h-[250px] relative outline outline-[1px] outline-[#bcb8b8] rounded-[15px] hover:opacity-80 ${
        checked ? "outline-[2px] outline-[rgb(255,69,132)] sm:mt-12" : ""
      }`}
    >
      <img className="z-[1]" src={`images/img${id}.png`} alt="" />
      <h2 className="text-base my-4 font-semibold text-[#000]">{heading}</h2>
      {checked && (
        <p className="text-xs text-[#8f8f8f]">
          With over 7 million shots from a vast community of designers, Dribbble
          is the leading source for design inspiration.
        </p>
      )}
      {/* <input
        className="hidden"
        type="checkbox"
        name={heading}
        value={heading}
        id={`check${id}`}
        onChange={(e) => setChecked({ state: e.target.checked, id: id })}
      /> */}
      {inputElement}
      <span
        className={`inline-flex mt-2 rounded-full text-[#ff4584] text-xl ${
          checked
            ? ""
            : "outline-gray-400 outline-1 outline -outline-offset-1"
        }`}
      >
        <FontAwesomeIcon
          className={
            checked ? "opacity-100 visible" : "opacity-0 invisible"
          }
          icon={faCircleCheck}
        />
      </span>
    </label>
  );
};

export default WhatBringsPage;
