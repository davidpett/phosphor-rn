import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWineFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m205.33 95.67-21.77-73.93a8 8 0 0 0-7.67-5.74H80.11a8 8 0 0 0-7.67 5.74L50.67 95.67a63.46 63.46 0 0 0 17.42 64.67A87.41 87.41 0 0 0 120 183.63V224H88a8 8 0 1 0 0 16h80a8 8 0 1 0 0-16h-32v-40.37a87.39 87.39 0 0 0 51.91-23.29 63.48 63.48 0 0 0 17.42-64.67ZM86.09 32h83.82L190 100.19c.09.3.17.6.25.9-21.42 7.68-45.54-1.6-58.63-8.23-25.19-12.75-45.19-14.37-59.94-11.93Z" />
  </Svg>
);
const Memo = memo(SvgWineFill);
export default Memo;
