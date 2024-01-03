// @packages
import { ReactNode } from "react";

// @interfaces
interface IErrorProps {
  children: ReactNode;
}

const Error = ({ children }: IErrorProps) => (
  <div className="bg-red-700 text-white p-4 text-center uppercase font-lato font-bold text-2xl">
    {children}
  </div>
);

export default Error;
