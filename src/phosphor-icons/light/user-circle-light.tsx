import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUserCircleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26ZM71.44 198a66 66 0 0 1 113.12 0 89.8 89.8 0 0 1-113.12 0ZM94 120a34 34 0 1 1 34 34 34 34 0 0 1-34-34Zm99.51 69.64a77.53 77.53 0 0 0-40-31.38 46 46 0 1 0-51 0 77.53 77.53 0 0 0-40 31.38 90 90 0 1 1 131 0Z" />
  </Svg>
);
const Memo = memo(SvgUserCircleLight);
export default Memo;
