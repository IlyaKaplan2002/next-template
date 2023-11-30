import { spaceGrotesk } from "@/styles/fonts";
import { ButtonBase } from "@mui/material";
import classNames from "classnames";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PrimaryButton: FC<Props> = ({ children }) => {
  return (
    <ButtonBase
      className={classNames(
        spaceGrotesk.className,
        "rounded-btn bg-btn px-4 py-2.5 text-sm/4 font-medium text-white",
      )}
    >
      {children}
    </ButtonBase>
  );
};

export default PrimaryButton;
