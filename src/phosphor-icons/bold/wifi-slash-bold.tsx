import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWifiSlashBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216.88 207.93a12 12 0 1 1-17.76 16.14l-51.34-56.47a56.06 56.06 0 0 0-52.71 7.1 12 12 0 0 1-14.14-19.4 79.35 79.35 0 0 1 41.92-15.12l-19.34-21.28a104.18 104.18 0 0 0-40.06 19.55 12 12 0 0 1-14.9-18.81 128.46 128.46 0 0 1 37.06-20.43l-17.31-19a151.14 151.14 0 0 0-36.68 22.28 12 12 0 1 1-15.23-18.58 175.52 175.52 0 0 1 35-22.38L39.12 48.07a12 12 0 1 1 17.76-16.14ZM128 188a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm64.55-49.55a12 12 0 0 0 14.9-18.81A127.27 127.27 0 0 0 170 99.05a12 12 0 0 0-7.87 22.67 103.62 103.62 0 0 1 30.42 16.73Zm47.06-54.54A176.33 176.33 0 0 0 128 44c-3.94 0-7.93.13-11.86.39a12 12 0 1 0 1.59 24c3.4-.23 6.86-.34 10.27-.34a152.24 152.24 0 0 1 96.38 34.46 12 12 0 1 0 15.23-18.55Z" />
  </Svg>
);
const Memo = memo(SvgWifiSlashBold);
export default Memo;
