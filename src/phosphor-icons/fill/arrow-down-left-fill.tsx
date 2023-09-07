import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowDownLeftFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M197.66 69.66 127.31 140l46.35 46.34A8 8 0 0 1 168 200H64a8 8 0 0 1-8-8V88a8 8 0 0 1 13.66-5.66L116 128.69l70.34-70.35a8 8 0 0 1 11.32 11.32Z" />
  </Svg>
);
const Memo = memo(SvgArrowDownLeftFill);
export default Memo;
