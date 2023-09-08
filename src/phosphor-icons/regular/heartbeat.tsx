import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHeartbeat = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M72 136H32a8 8 0 0 1 0-16h35.72l13.62-20.44a8 8 0 0 1 13.32 0l25.34 38 9.34-14A8 8 0 0 1 136 120h24a8 8 0 0 1 0 16h-19.72l-13.62 20.44a8 8 0 0 1-13.32 0L88 118.42l-9.34 14A8 8 0 0 1 72 136ZM178 32c-20.65 0-38.73 8.88-50 23.89C116.73 40.88 98.65 32 78 32a62.07 62.07 0 0 0-62 62v2.25a8 8 0 1 0 16-.5V94a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8-10.83-6.31-42.63-26-66.68-52.21a8 8 0 1 0-11.8 10.82c31.17 34 72.93 56.68 74.69 57.63a8 8 0 0 0 7.58 0C136.21 220.66 240 164 240 94a62.07 62.07 0 0 0-62-62Z" />
  </Svg>
);
const Memo = memo(SvgHeartbeat);
export default Memo;
