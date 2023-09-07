import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBellSimpleSlashLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M52.44 36a6 6 0 0 0-8.88 8l17.75 19.56A77.45 77.45 0 0 0 50 104c0 35.74-8.42 63.2-14.08 72.94A14 14 0 0 0 48 198h135.53l20 22a6 6 0 0 0 8.88-8.08ZM48 186a1.9 1.9 0 0 1-1.7-1 2 2 0 0 1 0-2c7.56-13 15.7-43.31 15.7-79a65.63 65.63 0 0 1 7.78-31.12L172.62 186Zm118 38a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6Zm47.27-46.62a5.88 5.88 0 0 1-2.2.42 6 6 0 0 1-5.58-3.81c-7.2-18.31-11.49-44.48-11.49-70a66 66 0 0 0-98.55-57.42 6 6 0 1 1-5.93-10.43A78 78 0 0 1 206 104c0 35.7 8.16 59.24 10.66 65.61a6 6 0 0 1-3.39 7.77Z" />
  </Svg>
);
const Memo = memo(SvgBellSimpleSlashLight);
export default Memo;
