import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHeartBreakFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M239.81 99.5c-5.19 67.42-103.7 121.23-108 123.54a8 8 0 0 1-7.58 0C119.8 220.67 16 164 16 94a62 62 0 0 1 96.47-51.55 4 4 0 0 1 .61 6.17L99.72 62a8 8 0 0 0 0 11.31l32.53 32.53L111 127a8 8 0 1 0 11.31 11.31l26.88-26.87a8 8 0 0 0 0-11.31l-32.49-32.5 17.47-17.47A61.63 61.63 0 0 1 178.41 32c36.32.23 64.18 31.29 61.4 67.5Z" />
  </Svg>
);
const Memo = memo(SvgHeartBreakFill);
export default Memo;
