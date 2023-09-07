import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberCircleFourThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92Zm36-76a4 4 0 0 1-4 4h-12v28a4 4 0 0 1-8 0v-28H96a4 4 0 0 1-3.79-5.26l24-72a4 4 0 1 1 7.58 2.52L101.55 140H140v-28a4 4 0 0 1 8 0v28h12a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgNumberCircleFourThin);
export default Memo;
