import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUsersThreeThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M237 147.44a4 4 0 0 1-5.48-1.4c-8.33-14-20.93-22-34.56-22a4 4 0 0 1-1.2-.2 36.76 36.76 0 0 1-3.8.2 4 4 0 0 1 0-8 28 28 0 1 0-27.12-35 4 4 0 0 1-7.75-2 36 36 0 1 1 54 39.48c10.81 3.85 20.51 12 27.31 23.48a4 4 0 0 1-1.4 5.44ZM187.46 214a4 4 0 0 1-1.46 5.46 3.93 3.93 0 0 1-2 .54 4 4 0 0 1-3.46-2 61 61 0 0 0-105.08 0 4 4 0 0 1-6.92-4 68.35 68.35 0 0 1 39.19-31 44 44 0 1 1 40.54 0 68.35 68.35 0 0 1 39.19 31ZM128 180a36 36 0 1 0-36-36 36 36 0 0 0 36 36Zm-64-64a28 28 0 1 1 27.12-35 4 4 0 0 0 7.75-2 36 36 0 1 0-53.57 39.75 63.55 63.55 0 0 0-32.5 22.85 4 4 0 0 0 6.4 4.8A55.55 55.55 0 0 1 64 124a4 4 0 0 0 0-8Z" />
  </Svg>
);
const Memo = memo(SvgUsersThreeThin);
export default Memo;
