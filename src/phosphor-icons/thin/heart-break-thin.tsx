import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHeartBreakThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M178 36a57.59 57.59 0 0 0-41 17l-9 9-9-9a58 58 0 0 0-99 41c0 28.59 18 58.47 53.4 88.79a333.81 333.81 0 0 0 52.7 36.73 4 4 0 0 0 3.8 0 333.81 333.81 0 0 0 52.7-36.73C218 152.47 236 122.59 236 94a58.07 58.07 0 0 0-58-58Zm-50 175.42C114 203.46 28 152.07 28 94a50 50 0 0 1 85.36-35.36l9 9-13.19 13.16a4 4 0 0 0 0 5.66l27.36 27.36-19.36 19.35a4 4 0 0 0 5.66 5.66L145 116.64a4 4 0 0 0 0-5.65l-27.34-27.36 13.16-13.16 11.8-11.81A50 50 0 0 1 228 94c0 58-86 109.46-100 117.42Z" />
  </Svg>
);
const Memo = memo(SvgHeartBreakThin);
export default Memo;
