import { Link } from "react-router-dom";

const FooterMenu = ({ title, list }) => {
  return (
    <div className="flex flex-col gap-1 sm:gap-3">
      <span className="text-white text-[16px] sm:text-xl font-normal sm:font-semibold">
        {title}
      </span>
      <ul className="flex flex-col gap-1 sm:gap-3 text-[14px] sm:text-[16px] font-normal text-[#A4A4B8] text-left ">
        {list.map((item) => (
          <li key={item} className="hover:text-[#0063FF]">
            <Link to={"/"}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenu;
