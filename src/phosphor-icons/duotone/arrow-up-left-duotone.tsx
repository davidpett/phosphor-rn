import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowUpLeftDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M168 64 64 168V64Z" opacity={0.2} />
    <Path d="M197.66 186.34 127.31 116l46.35-46.34A8 8 0 0 0 168 56H64a8 8 0 0 0-8 8v104a8 8 0 0 0 13.66 5.66L116 127.31l70.34 70.35a8 8 0 0 0 11.32-11.32ZM72 72h76.69l-38.34 38.34L72 148.69Z" />
  </Svg>
);
const Memo = memo(SvgArrowUpLeftDuotone);
export default Memo;
