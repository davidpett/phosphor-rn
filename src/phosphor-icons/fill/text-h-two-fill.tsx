import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextHTwoFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-80 128a8 8 0 0 1-16 0v-32H72v32a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0v32h40V80a8 8 0 0 1 16 0Zm64 24h-40a8 8 0 0 1-6.4-12.8l36-48a12 12 0 1 0-19.15-14.46 13.06 13.06 0 0 0-2.58 4.81 8 8 0 1 1-15.68-3.18 28.17 28.17 0 1 1 50.2 22.44L168 168h24a8 8 0 0 1 0 16Z" />
  </Svg>
);
const Memo = memo(SvgTextHTwoFill);
export default Memo;
