import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHeartbeatBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M71.76 140H31.7a12 12 0 1 1 0-24h33.63l12.45-18.66a12 12 0 0 1 20 0l22 33 6-9a12 12 0 0 1 10-5.34h24a12 12 0 1 1 0 24h-17.6l-12.46 18.66a12 12 0 0 1-20 0l-22-33-6 9a12 12 0 0 1-9.96 5.34ZM177.91 28c-20.12 0-38 7.93-50.07 21.56C115.74 35.93 97.89 28 77.76 28a66 66 0 0 0-65.69 58.68A12 12 0 0 0 36 89.32 42 42 0 0 1 77.76 52c17.83 0 32.75 9.4 38.95 24.54a12 12 0 0 0 22.25 0C145.16 61.4 160.08 52 177.91 52A42.08 42.08 0 0 1 220 94c0 29.42-25.86 57.77-47.56 76.36a329 329 0 0 1-44.58 31.81c-10.87-6.45-35.37-22-56.51-42.73a12 12 0 1 0-16.84 17.12c30.39 29.81 66.15 49.2 67.66 50a12.06 12.06 0 0 0 11.39 0C138 224.14 244 166.34 244 94a66.12 66.12 0 0 0-66.09-66Z" />
  </Svg>
);
const Memo = memo(SvgHeartbeatBold);
export default Memo;
