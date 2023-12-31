import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVignetteDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M216 48H40a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8Zm-88 128c-35.35 0-64-21.49-64-48s28.65-48 64-48 64 21.49 64 48-28.65 48-64 48Z"
      opacity={0.2}
    />
    <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 160H40V56h176v144ZM178.05 87.66C164.59 77.56 146.81 72 128 72s-36.59 5.56-50 15.66C63.79 98.27 56 112.6 56 128s7.79 29.73 22 40.34c13.41 10.1 31.19 15.66 50 15.66s36.59-5.56 50.05-15.66C192.21 157.73 200 143.4 200 128s-7.79-29.73-21.95-40.34ZM128 168c-30.88 0-56-17.94-56-40s25.12-40 56-40 56 17.94 56 40-25.12 40-56 40Z" />
  </Svg>
);
const Memo = memo(SvgVignetteDuotone);
export default Memo;
