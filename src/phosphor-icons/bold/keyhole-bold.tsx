import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgKeyholeBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84Zm0-144a44 44 0 0 0-32.94 73.16l-9.92 24.92A16 16 0 0 0 100 188h56a16 16 0 0 0 14.86-21.92l-9.92-24.92A44 44 0 0 0 128 68Zm7.59 74.38L144.2 164h-32.4l8.61-21.62a12 12 0 0 0-4.11-14.16 20 20 0 1 1 23.4 0 12 12 0 0 0-4.11 14.16Z" />
  </Svg>
);
const Memo = memo(SvgKeyholeBold);
export default Memo;
