import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHeartbeatLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M72 134H32a6 6 0 0 1 0-12h36.79L83 100.67a6 6 0 0 1 10 0l27 40.51 11-16.51a6 6 0 0 1 5-2.67h24a6 6 0 0 1 0 12h-20.79L125 155.33a6 6 0 0 1-10 0l-27-40.51-11 16.51a6 6 0 0 1-5 2.67ZM178 34c-21 0-39.26 9.47-50 25.34C117.26 43.47 99 34 78 34a60.07 60.07 0 0 0-60 60v2.19a6 6 0 1 0 12-.38V94a48.05 48.05 0 0 1 48-48c20.28 0 37.31 10.83 44.45 28.27a6 6 0 0 0 11.1 0C140.69 56.83 157.72 46 178 46a48.05 48.05 0 0 1 48 48c0 55.73-81.61 105.65-98 115.11-9.84-5.66-43.09-25.82-68.16-53.16a6 6 0 1 0-8.84 8.1c30.94 33.77 72.41 56.29 74.16 57.23a6 6 0 0 0 5.68 0 334.68 334.68 0 0 0 53.06-37C219.8 153.59 238 123.2 238 94a60.07 60.07 0 0 0-60-60Z" />
  </Svg>
);
const Memo = memo(SvgHeartbeatLight);
export default Memo;
