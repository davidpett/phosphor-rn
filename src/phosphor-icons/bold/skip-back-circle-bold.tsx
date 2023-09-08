import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSkipBackCircleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84Zm37.82-134.5a12 12 0 0 0-12.18.32L108 106.35V88a12 12 0 0 0-24 0v80a12 12 0 0 0 24 0v-18.35l45.64 28.53A12 12 0 0 0 172 168V88a12 12 0 0 0-6.18-10.5ZM148 146.35 118.64 128 148 109.65Z" />
  </Svg>
);
const Memo = memo(SvgSkipBackCircleBold);
export default Memo;
