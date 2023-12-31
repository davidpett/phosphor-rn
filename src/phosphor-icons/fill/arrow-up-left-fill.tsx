import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowUpLeftFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M197.66 197.66a8 8 0 0 1-11.32 0L116 127.31l-46.34 46.35A8 8 0 0 1 56 168V64a8 8 0 0 1 8-8h104a8 8 0 0 1 5.66 13.66L127.31 116l70.35 70.34a8 8 0 0 1 0 11.32Z" />
  </Svg>
);
const Memo = memo(SvgArrowUpLeftFill);
export default Memo;
