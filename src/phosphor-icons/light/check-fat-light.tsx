import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCheckFatLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m241.87 69.66-24-23.56a14 14 0 0 0-19.77 0l-92.72 91.34a2 2 0 0 1-2.83 0l-.09-.08-36.61-35.31a14 14 0 0 0-19.75 0l-24 24a14 14 0 0 0 0 19.79l71.62 72a14 14 0 0 0 19.8 0L241.91 89.5a14 14 0 0 0-.04-19.84ZM233.42 81 105 209.41a2 2 0 0 1-2.81 0l-71.62-72a2 2 0 0 1 0-2.82l24-24A2 2 0 0 1 56 110a2 2 0 0 1 1.41.58l.08.08 36.66 35.28a14 14 0 0 0 19.72 0l92.72-91.35a2 2 0 0 1 2.87 0l24 23.56a2 2 0 0 1-.04 2.85Z" />
  </Svg>
);
const Memo = memo(SvgCheckFatLight);
export default Memo;
