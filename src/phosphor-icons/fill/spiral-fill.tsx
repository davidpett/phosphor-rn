import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSpiralFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 132a103.63 103.63 0 0 1-27.36 70.23c-3.26 3.55-8.92-.59-6.43-4.71A95.41 95.41 0 0 0 212 148a80.1 80.1 0 0 0-80-80 64.07 64.07 0 0 0-64 64 48.05 48.05 0 0 0 48 48 32 32 0 0 0 32-32 7.38 7.38 0 0 0 0-.82A16 16 0 0 0 132.67 132a8.23 8.23 0 0 0-8.67 7.4 8 8 0 0 0 8 8.6 16 16 0 0 1-16 16 32 32 0 0 1-32-32 48.05 48.05 0 0 1 48-48 64.07 64.07 0 0 1 64 64 80.1 80.1 0 0 1-80 80c-74.16 0-92.77-68.55-92-98.81C25.5 73.73 70.94 28.84 126.41 28A104.12 104.12 0 0 1 232 132Z" />
  </Svg>
);
const Memo = memo(SvgSpiralFill);
export default Memo;