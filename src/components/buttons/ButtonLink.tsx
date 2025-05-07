import { IButtonLink } from "../../types";
import { Link } from "react-router-dom";

const ButtonLink = ({ children, to, active }: IButtonLink) => {
  return (
    <Link
      to={to}
      className={`flex md:w-13 w-10 md:h-13 h-10 items-center justify-center px-auto rounded-full group hover:bg-[#636363b4] ${
        active ? "bg-[#9e9e9ecc]" : "bg-transparent"
      }`}
    >
      <div className="lg:group-hover:text-white lg:group-focus:text-white">
        {children}
      </div>
    </Link>
  );
};

export default ButtonLink;
