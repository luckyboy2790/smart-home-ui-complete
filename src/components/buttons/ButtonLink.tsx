import { IButtonLink } from "../../types";
import { Link } from "react-router-dom";

const ButtonLink = ({ children, to, active }: IButtonLink) => {
  return (
    <Link
      to={to}
      className={`flex w-13 h-13 items-center justify-center px-auto rounded-full group ${
        active ? "bg-[#2e2e2ed3]" : "bg-transparent"
      }`}
    >
      <div className="lg:group-hover:text-white lg:group-focus:text-white">
        {children}
      </div>
    </Link>
  );
};

export default ButtonLink;
