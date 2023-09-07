import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChatCircleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 20a108 108 0 0 0-96.15 157.23L21 209.66A20 20 0 0 0 46.34 235l32.43-10.81A108 108 0 1 0 128 20Zm0 192a84 84 0 0 1-42.06-11.27 12 12 0 0 0-6-1.62 12.1 12.1 0 0 0-3.8.62l-29.79 9.93 9.93-29.79a12 12 0 0 0-1-9.81A84 84 0 1 1 128 212Z" />
  </Svg>
);
const Memo = memo(SvgChatCircleBold);
export default Memo;
