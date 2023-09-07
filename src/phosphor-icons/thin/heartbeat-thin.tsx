import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHeartbeatThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M72 132H32a4 4 0 0 1 0-8h37.86l14.81-22.22a4 4 0 0 1 6.66 0l28.67 43 12.67-19A4 4 0 0 1 136 124h24a4 4 0 0 1 0 8h-21.86l-14.81 22.22a4 4 0 0 1-6.66 0L88 111.21l-12.67 19A4 4 0 0 1 72 132Zm106-96c-21.44 0-39.92 10.19-50 27.07C117.92 46.19 99.44 36 78 36a58.07 58.07 0 0 0-58 58v2.13a4 4 0 0 0 8-.26V94a50.06 50.06 0 0 1 50-50c21.11 0 38.85 11.31 46.3 29.51a4 4 0 0 0 7.4 0C139.15 55.31 156.89 44 178 44a50.06 50.06 0 0 1 50 50c0 58-86 109.46-100 117.42-8.47-4.82-43.5-25.61-69.63-54.12a4 4 0 0 0-5.9 5.4c30.72 33.52 71.9 55.89 73.63 56.82a4 4 0 0 0 3.8 0 333.81 333.81 0 0 0 52.7-36.73C218 152.47 236 122.59 236 94a58.07 58.07 0 0 0-58-58Z" />
  </Svg>
);
const Memo = memo(SvgHeartbeatThin);
export default Memo;
