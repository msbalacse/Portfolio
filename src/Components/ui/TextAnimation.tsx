import { TypeAnimation } from 'react-type-animation';

type arrtxtanimationProps = {
  arr: (string | number)[];
  theme: string;
};

const TextAnimation = (props: arrtxtanimationProps) => {
  let textColor = props.theme === 'light' ? 'text-black' : 'text-white';

  return (
    <p
      className={`${textColor} font-extrabold tracking-wider text-md md:text-lg`}
    >
      <TypeAnimation
        sequence={props.arr}
        wrapper="span"
        speed={80}
        style={{ color: textColor }}
        repeat={Infinity}
      />
    </p>
  );
};

export default TextAnimation;
