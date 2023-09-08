import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBracketsRoundFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16ZM99.61 176.86a8 8 0 0 1-7.19 14.3A71.23 71.23 0 0 1 56 128a71.23 71.23 0 0 1 36.42-63.16 8 8 0 0 1 7.18 14.3C98.37 79.78 72 93.76 72 128s26.48 48.28 27.61 48.86Zm64 14.3a8 8 0 1 1-7.16-14.32c1.1-.56 27.58-14.52 27.58-48.84s-26.48-48.28-27.61-48.86a8 8 0 0 1 7.19-14.3A71.23 71.23 0 0 1 200 128a71.23 71.23 0 0 1-36.42 63.16Z" />
  </Svg>
);
const Memo = memo(SvgBracketsRoundFill);
export default Memo;
