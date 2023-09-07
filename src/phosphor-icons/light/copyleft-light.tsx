import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCopyleftLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90Zm46-90a46 46 0 0 1-82.8 27.61 6 6 0 0 1 9.6-7.21 34 34 0 1 0 0-40.8 6 6 0 0 1-9.6-7.21A46 46 0 0 1 174 128Z" />
  </Svg>
);
const Memo = memo(SvgCopyleftLight);
export default Memo;
