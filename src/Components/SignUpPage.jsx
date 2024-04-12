import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import ButtonComp from "./ButtonComp";
import InputComp from "./InputComp";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [validationError, setValidationError] = useState(false);

  const navigate = useNavigate();

  const dummyUsernames = [
    { id: 1, username: "john" },
    { id: 2, username: "gagan" },
  ];

  const isUsernameTaken = dummyUsernames.some(
    (user) => user.username === username.toLowerCase()
  );
  // console.log(filterUser, "see this");

  useEffect(() => {
    setValidationError(isUsernameTaken);
  }, [isUsernameTaken]);

  // Tailwind common Styles:
  const warningTextColor = "text-[#ec716f]";
  const marginClass = "my-6";

  return (
    <section className="relative w-full h-screen flex md:justify-center md:h-auto">
      <div className="relative w-fit h-full before:content-[''] before:absolute before:top-[0] before:left-[0] before:w-full before:h-full md:hidden">
        <img
          className="aspect-[389/584] h-full object-cover"
          src="images/image.png"
          alt=""
        />
      </div>
      <div className="flex justify-center h-full">
        <div className="text-[15px] absolute top-[20px] right-[20px]">
          <p>
            Already a member? <a href="/signin">Sign In</a>
          </p>
        </div>
        <div className="w-1/2 py-10 md:px-10 md:max-w-[440px] md:w-full">
          <h2 className="text-[#000] font-bold text-[1.3rem] mt-[15px] inline-block">
            Sign up to Dribbble
          </h2>
          {validationError && (
            <ul className={`mt-4 ml-5 ${warningTextColor} list-disc text-sm`}>
              <li>Username has already been taken</li>
            </ul>
          )}
          <form onSubmit={() => navigate("/profile")}>
            <div className={`flex gap-4 ${marginClass}`}>
              <div>
                <label
                  htmlFor="name"
                  className="text-[13px] inline-block font-black tracking-[1px]"
                >
                  Name
                </label>
                <InputComp id="name" required />
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="text-[13px] inline-block font-black tracking-[1px]"
                >
                  {validationError && (
                    <FontAwesomeIcon
                      className={warningTextColor}
                      icon={faTriangleExclamation}
                    />
                  )}{" "}
                  Username
                </label>
                <InputComp
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={
                    validationError ? `${warningTextColor} !bg-[#feeeee]` : ""
                  }
                  type="text"
                  id="username"
                  required
                  otherProps={{ placeholder: "Try to enter John/Gagan" }}
                />
              </div>
            </div>
            <div className={marginClass}>
              <label
                htmlFor="email"
                className="text-[13px] inline-block font-black tracking-[1px]"
              >
                Email
              </label>
              <InputComp type="email" id="email" required />
            </div>
            <div className={marginClass}>
              <label
                htmlFor="password"
                className="text-[13px] inline-block font-black tracking-[1px]"
              >
                Password
              </label>
              <InputComp
                type="password"
                id="password"
                required
                otherProps={{ placeholder: "6+ Characters" }}
              />
            </div>
            <div className="my-8 text-[#607d8b] font-normal text-[14px]">
              <label>
                <input type="checkbox" required /> Create an account means
                you're okay with our{" "}
                <a href="termsofservices">Terms Of Services</a>,{" "}
                <a href="privacypolicy">Privacy Policy</a>, and our default{" "}
                <a href="notificatonsettings">Notificaton Settings</a>{" "}
              </label>
            </div>
            <ButtonComp otherProps={{ disabled: validationError }}>Create Account</ButtonComp>
          </form>
          <p className="text-[10px] text-[grey] mt-[20px]">
            This Site is protected by reCAPTCHA and the Google{" "}
            <a href="/privacypolicy">Privacy Policy</a> and{" "}
            <a href="/termsofservices">Terms Of Services</a> apply
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUpPage;
