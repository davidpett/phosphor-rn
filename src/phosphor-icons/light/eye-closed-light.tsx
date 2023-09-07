import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEyeClosedLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M229.21 165a6 6 0 0 1-10.42 6l-20-35.08a122 122 0 0 1-39 18.09l6.17 37a6 6 0 0 1-4.93 6.91 6.85 6.85 0 0 1-1 .08 6 6 0 0 1-5.91-5L148 156.44a128.86 128.86 0 0 1-40 0L101.92 193a6 6 0 0 1-5.92 5 6.85 6.85 0 0 1-1-.08 6 6 0 0 1-4.92-6.92l6.17-37a122 122 0 0 1-39-18.09L37.21 171a6 6 0 1 1-10.42-6l20.85-36.48a152 152 0 0 1-20.31-20.77 6 6 0 0 1 9.34-7.54C53.54 121.11 83.07 146 128 146s74.46-24.89 91.33-45.77a6 6 0 0 1 9.34 7.54 152 152 0 0 1-20.31 20.77Z" />
  </Svg>
);
const Memo = memo(SvgEyeClosedLight);
export default Memo;
