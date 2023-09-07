import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgYinYangBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20ZM44 128a84.09 84.09 0 0 1 84-84 36 36 0 0 1 0 72 60 60 0 0 0-58.81 71.9A83.73 83.73 0 0 1 44 128Zm84 84a36 36 0 0 1 0-72 60 60 0 0 0 58.81-71.9A83.94 83.94 0 0 1 128 212Zm16-36a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm-32-96a16 16 0 1 1 16 16 16 16 0 0 1-16-16Z" />
  </Svg>
);
const Memo = memo(SvgYinYangBold);
export default Memo;
