import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTargetThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M218.26 84.89a100.16 100.16 0 1 1-22.44-30.37l25.35-25.35a4 4 0 1 1 5.66 5.66l-96 96a4 4 0 0 1-5.66-5.66l31-31a44 44 0 1 0 15.78 31.3 4 4 0 0 1 8-.46 52 52 0 1 1-18.1-36.51l28.34-28.33A92 92 0 0 0 63 193.05 92 92 0 0 0 211 88.33a4 4 0 1 1 7.22-3.44Z" />
  </Svg>
);
const Memo = memo(SvgTargetThin);
export default Memo;
