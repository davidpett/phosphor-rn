import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBug = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M144 92a12 12 0 1 1 12 12 12 12 0 0 1-12-12Zm-44-12a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm116 64a87.76 87.76 0 0 1-3 23l22.24 9.72A8 8 0 0 1 232 192a7.89 7.89 0 0 1-3.2-.67L207.38 182a88 88 0 0 1-158.76 0l-21.42 9.33a7.89 7.89 0 0 1-3.2.67 8 8 0 0 1-3.2-15.33L43 167a87.76 87.76 0 0 1-3-23v-8H16a8 8 0 0 1 0-16h24v-8a87.76 87.76 0 0 1 3-23l-22.2-9.67a8 8 0 1 1 6.4-14.66L48.62 74a88 88 0 0 1 158.76 0l21.42-9.36a8 8 0 0 1 6.4 14.66L213 89.05a87.76 87.76 0 0 1 3 23v8h24a8 8 0 0 1 0 16h-24ZM56 120h144v-8a72 72 0 0 0-144 0Zm64 95.54V136H56v8a72.08 72.08 0 0 0 64 71.54ZM200 144v-8h-64v79.54A72.08 72.08 0 0 0 200 144Z" />
  </Svg>
);
const Memo = memo(SvgBug);
export default Memo;
