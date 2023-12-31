import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgParachute = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 120A104.12 104.12 0 0 0 128 16 104.12 104.12 0 0 0 24 120a7.94 7.94 0 0 0 3.05 6.27.93.93 0 0 0 .15.13L120 196v20h-8a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16h-8v-20l92.8-69.6a8 8 0 0 0 3.2-6.4Zm-16.36-8h-39.81c-1.54-37.95-13.91-62.43-25.11-77a88.2 88.2 0 0 1 64.92 77ZM128 34a76.89 76.89 0 0 1 13.88 16.22C149.49 62 158.45 81.87 159.82 112H96.18c1.37-30.13 10.33-50 17.94-61.74A76.92 76.92 0 0 1 128 34Zm26.4 94L128 175.53 101.6 128Zm-71.11 0 19.5 35.09L56 128Zm89.42 0H200l-46.79 35.09Zm-67.43-93c-11.2 14.57-23.57 39.05-25.11 77H40.36a88.2 88.2 0 0 1 64.92-77Z" />
  </Svg>
);
const Memo = memo(SvgParachute);
export default Memo;
