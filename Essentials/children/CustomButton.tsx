import type { CSSProperties, PropsWithChildren } from "react";

interface CustomButtonProps {
  onClick: () => void;
  styles?: CSSProperties;
}

const CustomButton = ({
  onClick,
  styles = {},
  children,
}: PropsWithChildren<CustomButtonProps>) => {
  return (
    <button onClick={onClick} style={styles}>
      {children}
    </button>
  );
};

export default CustomButton;
