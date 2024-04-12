import { FooterData, icons } from '../Data/MappingData';
import { DribbbleLogoComp } from './ProfilePage';

function Footer() {
  return (
    <footer className="footer px-12 flex flex-col bg-[#fafafa] md:px-8">
        <div className="flex gap-6 md py-10 justify-between xl:flex-col xl:gap-12 border-b-[1px] border-[#c4c4c4]">
          <div className="footer-content text-[#3d3e50] w-[25%] xl:w-auto xl:flex xl:flex-col xl:items-center">
            <DribbbleLogoComp />
            <p className="text-sm mx-[0] my-[20px]">
              Dribbble is the world's leading community for creatives to share,
              grow, and get hired.
            </p>

            <div className="icons flex gap-4">
              {icons.map((items) => {
                return <IconComp key={items.id}>{items.icon}</IconComp>;
              })}
            </div>
          </div>

          <div className="footer-content grow-[1] basis-[fit-content] flex flex-wrap flex-col content-end max-h-[400px] w-fit gap-6 xl:content-center xl:w-full lg:max-h-[600px] md:max-h-[1000px] sm:max-h-[800px]">
            {FooterData.map((items, index) => {
              return (
                <ul
                  key={index}
                  className="footer-ul flex flex-col gap-3 list-none basis-[fit-content] sm:gap-2"
                >
                  {items.footerDataList.map((list) => {
                    return (
                      <li key={list.id} className="">
                        <DynamicElement
                          heading={list.heading}
                          className={`block text-[#393838] text-sm sm:text-[.7rem] font-light no-underline ${
                            list.heading
                              ? "!font-semibold mt-1"
                              : "[transition:all_.40s_ease] hover:-translate-y-[5px] hover:text-[#e12d90]"
                          }`}
                          href="/"
                        >
                          {list.title}
                        </DynamicElement>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </div>
        <div className="w-full flex text-[rgb(94,_92,_92)] text-[15px] gap-4 justify-between py-10 sm:flex-col sm:items-center">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 text-inherit"
              viewBox="0 0 512 512"
            >
              <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z" />
            </svg>
            2023 Dribbble. All rights reserved.
          </div>
          <div className="text-right flex items-center">
            <b>20,501.853</b>&nbsp;shots dribbled
            <img
              className="min-w-6 w-4 ml-2"
              alt="dribbble-ball"
              src="images/dribbble-ball.png"
            />
          </div>
        </div>
      </footer>
  )
}

const IconComp = ({ children }) => {
  return (
    <a
      className="inline-block [transition:transform_.40s_ease] hover:text-[rgb(225,45,144)] hover:-translate-y-[5px]"
      href="/"
    >
      <svg
        className="w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        {children}
      </svg>
    </a>
  );
};

const DynamicElement = (props) => {
  if (props.heading) {
    return <h4 {...props}>{props.children}</h4>;
  } else {
    return <a {...props}>{props.children}</a>;
  }
};

export default Footer