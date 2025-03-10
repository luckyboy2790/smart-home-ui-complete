import { Props } from "../../types";

const Main = ({ children }: Props) => {
    return (
        <div className="min-w-full lg:row-start-2 lg:justify-start lg:flex lg:flex-col lg:col-start-2 lg:text-xl lg:h-screen lg:min-w-min lg:mx-4 lg:mt-4">
            {children}
        </div>
    );
};

Main.Container = function mainContainer({ children }: Props) {
    return <div className="w-11/12 gap-4 py-2 mx-auto">{children}</div>;
};



export default Main;