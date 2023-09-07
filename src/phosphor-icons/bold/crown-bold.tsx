import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCrownBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M246.46 73.17a16 16 0 0 0-17.74-2.26l-46.9 23.38-40-66.49a16.11 16.11 0 0 0-27.6 0l-40 66.49-46.91-23.37A16.1 16.1 0 0 0 4.82 90.35l37 113.35a12 12 0 0 0 17.51 6.61C59.57 210.17 84.39 196 128 196s68.43 14.19 68.62 14.3a12 12 0 0 0 17.57-6.58l37-113.29a16 16 0 0 0-4.73-17.26Zm-50.93 110.35C182.18 178.4 159.2 172 128 172s-54.18 6.42-67.53 11.54l-27-82.71L70 119a16.18 16.18 0 0 0 21-6.11l37-61.49 37 61.5a16.18 16.18 0 0 0 21 6.1l36.52-18.2Zm-19.67-31A12 12 0 0 1 164 162.69a12.91 12.91 0 0 1-1.85-.14 229.32 229.32 0 0 0-68.34 0 12 12 0 0 1-3.66-23.72 253.38 253.38 0 0 1 75.66 0 12 12 0 0 1 10.05 13.69Z" />
  </Svg>
);
const Memo = memo(SvgCrownBold);
export default Memo;