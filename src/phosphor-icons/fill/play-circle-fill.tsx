import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPlayCircleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24Zm36.44 110.66-48 32A8.05 8.05 0 0 1 112 168a8 8 0 0 1-8-8V96a8 8 0 0 1 12.44-6.66l48 32a8 8 0 0 1 0 13.32Z" />
  </Svg>
);
const Memo = memo(SvgPlayCircleFill);
export default Memo;
