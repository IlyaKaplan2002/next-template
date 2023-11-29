import { ButtonBase } from "@mui/material";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SecondaryButton: FC<Props> = ({ children }) => {
  return (
    <ButtonBase className="rounded-btn border border-solid border-white border-opacity-10 bg-transparent px-4 py-2.5 text-sm/4 font-medium text-white">
      {children}
    </ButtonBase>
  );
};

export default SecondaryButton;
