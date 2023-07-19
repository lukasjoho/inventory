import React, { FC } from "react";

interface ContainerProps {
  children: JSX.Element[];
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="px-4 md:px-8 lg:px-16 max-w-[1600px] w-full">
      {children}
    </div>
  );
};

export default Container;
