import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPathLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 170a30.05 30.05 0 0 0-29.4 24H72a34 34 0 0 1 0-68h96a38 38 0 0 0 0-76H72a6 6 0 0 0 0 12h96a26 26 0 0 1 0 52H72a46 46 0 0 0 0 92h98.6a30 30 0 1 0 29.4-36Zm0 48a18 18 0 1 1 18-18 18 18 0 0 1-18 18Z" />
  </Svg>
);
const Memo = memo(SvgPathLight);
export default Memo;
