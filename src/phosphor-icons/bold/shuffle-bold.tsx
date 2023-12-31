import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShuffleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240.49 175.51a12 12 0 0 1 0 17l-24 24a12 12 0 0 1-17-17L203 196h-2.09a76.17 76.17 0 0 1-61.85-31.83l-41.68-58.39A52.1 52.1 0 0 0 55.06 84H32a12 12 0 0 1 0-24h23.06a76.17 76.17 0 0 1 61.85 31.83l41.71 58.39A52.1 52.1 0 0 0 200.94 172H203l-3.52-3.51a12 12 0 0 1 17-17Zm-95.62-72.62a12 12 0 0 0 16.93-1.13A52 52 0 0 1 200.94 84H203l-3.52 3.51a12 12 0 0 0 17 17l24-24a12 12 0 0 0 0-17l-24-24a12 12 0 0 0-17 17L203 60h-2.09a76 76 0 0 0-57.2 26 12 12 0 0 0 1.16 16.89Zm-33.74 50.22a12 12 0 0 0-16.93 1.13A52 52 0 0 1 55.06 172H32a12 12 0 0 0 0 24h23.06a76 76 0 0 0 57.2-26 12 12 0 0 0-1.13-16.89Z" />
  </Svg>
);
const Memo = memo(SvgShuffleBold);
export default Memo;
