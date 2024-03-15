import { SVGAttributes } from 'react';

interface IconProps extends SVGAttributes<SVGElement> {
  svgClassName?: string;
}

export const LeftArrowIcon: React.FC<IconProps> = ({
  svgClassName,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={svgClassName}
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m15 6l-6 6l6 6"
      />
    </svg>
  );
};
