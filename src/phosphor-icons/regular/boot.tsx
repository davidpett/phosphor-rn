import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBoot = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M192 112h-32V56a16 16 0 0 0-16-16H32a8 8 0 0 0-7.47 10.86c11.06 28.84 8.76 83.71-.22 114.93A8.25 8.25 0 0 0 24 168v32a16 16 0 0 0 16 16h26.11a16 16 0 0 0 7.16-1.69L85.89 208h16.22l12.62 6.31a16 16 0 0 0 7.16 1.69h28.22a16 16 0 0 0 7.16-1.69l12.62-6.31h16.22l12.62 6.31a16 16 0 0 0 7.16 1.69H232a16 16 0 0 0 16-16v-32a56.06 56.06 0 0 0-56-56ZM42.86 56H144v24h-32a8 8 0 0 0 0 16h32v16h-32a8 8 0 0 0 0 16h80a40.07 40.07 0 0 1 39.2 32H42.25c6.75-30.84 8.16-74.17.61-104ZM232 200h-26.11l-12.62-6.31a16 16 0 0 0-7.16-1.69h-16.22a16 16 0 0 0-7.16 1.69L150.11 200h-28.22l-12.62-6.31a16 16 0 0 0-7.16-1.69H85.89a16 16 0 0 0-7.16 1.69L66.11 200H40v-24h192Z" />
  </Svg>
);
const Memo = memo(SvgBoot);
export default Memo;
