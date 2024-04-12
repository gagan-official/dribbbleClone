function VerifyEmailPage() {
  return (
    <div className="heading py-20 md:px-8 w-full max-w-[750px] relative left-[50%] -translate-x-[50%] flex gap-4 flex-col items-center">
      <h2 className="font-bold !font-[Poppins] text-center text-4xl sm:text-3xl text-[rgb(48,_47,_47)]">
        Please verify your email...
      </h2>
      <img className="h-28 md:h-24" src="images/email.png" alt="email-icon" />
      <ParaText>
        Please verify your email address. We've sent a confirmation email to:
      </ParaText>
      <ParaText className="text-black font-bold">account@refero.design</ParaText>
      <ParaText>
        Click the confirmation in that email to begin using Dribbble.
      </ParaText>
      <ParaText>
        Didn't recieve the email? Check your spam folder, it may have been
        caught by a filter. If you still don't see it. you can&nbsp;
        <PinkAnchor>resend the confirmation email.</PinkAnchor>
      </ParaText>
      <ParaText>
        Wrong email address?&nbsp;
        <PinkAnchor className="text-[rgb(232,_45,_148)]">Change it.</PinkAnchor>
      </ParaText>
    </div>
  );
}

const ParaText = ({ children, className }) => {
  return (
    <p className={`text-[17px] text-[#636363] text-center ${className}`}>
      {children}
    </p>
  );
};

const PinkAnchor = ({ children }) => {
  return (
    <a href="/" className="text-[rgb(232,_45,_148)] font-semibold hover:underline">
      {children}
    </a>
  );
};

export default VerifyEmailPage;
