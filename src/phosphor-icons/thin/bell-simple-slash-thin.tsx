import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBellSimpleSlashThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M71.75 60.18 51 37.31a4 4 0 0 0-6 5.38l18.8 20.63A75.52 75.52 0 0 0 52 104c0 36.13-8.58 64-14.36 73.95A12 12 0 0 0 48 196h136.41L205 218.69a4 4 0 1 0 5.92-5.38ZM48 188a3.89 3.89 0 0 1-3.43-2 4 4 0 0 1 0-4C52 169.17 60 139.32 60 104a67.58 67.58 0 0 1 9.4-34.51L177.14 188Zm116 36a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4Zm48.53-48.48a3.94 3.94 0 0 1-1.46.28 4 4 0 0 1-3.72-2.54C200.24 155.17 196 129.28 196 104A68 68 0 0 0 94.46 44.83a4 4 0 1 1-4-6.95A76 76 0 0 1 204 104c0 36.05 8.26 59.89 10.79 66.34a4 4 0 0 1-2.26 5.18Z" />
  </Svg>
);
const Memo = memo(SvgBellSimpleSlashThin);
export default Memo;
