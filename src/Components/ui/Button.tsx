import { ReactNode } from 'react';

interface ButtonProps {
  onClick: () => void;
  classNames: string;
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, classNames }) => {
  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
};

export default Button;
