import { IButtonLink } from "../../types";
import { Link } from "react-router-dom";

const ButtonLink = ({ children, to }: IButtonLink) => {
  return (
    <Link
      to={to}
      className="flex items-center justify-center px-auto h-12 rounded-full shadow-lg group bg-dark lg:hover:border-r-4 lg:hover:border-accent-light lg:rounded-none lg:w-full lg:hover:bg-linear-to-r from-accent-light to-dark lg:py-10 lg:shadow-none lg:bg-dark lg:focus:border-r-4 lg:focus:border-accent lg:focus:bg-linear-to-r lg:focus:outline-hidden "
    >
      <div className="text-accent-light lg:group-hover:text-white lg:group-focus:text-white lg:text-4xl">
        {children}
      </div>
    </Link>
  );
};

export default ButtonLink;
