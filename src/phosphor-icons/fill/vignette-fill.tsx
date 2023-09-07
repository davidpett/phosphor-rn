import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVignetteFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm-16 88c0 30.93-32.24 56-72 56s-72-25.07-72-56 32.24-56 72-56 72 25.07 72 56Z" />
  </Svg>
);
const Memo = memo(SvgVignetteFill);
export default Memo;
