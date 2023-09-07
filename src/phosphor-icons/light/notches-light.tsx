import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNotchesLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m212.24 132.24-80 80a6 6 0 1 1-8.48-8.48l80-80a6 6 0 1 1 8.48 8.48Zm-16-96.48a6 6 0 0 0-8.48 0l-152 152a6 6 0 1 0 8.48 8.48l152-152a6 6 0 0 0 0-8.48Z" />
  </Svg>
);
const Memo = memo(SvgNotchesLight);
export default Memo;
