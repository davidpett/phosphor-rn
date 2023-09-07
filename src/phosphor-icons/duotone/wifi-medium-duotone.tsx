import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWifiMediumDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="m202.33 130.94-68.18 82.18a8 8 0 0 1-12.3 0l-68.18-82.18a116 116 0 0 1 148.66 0Z"
      opacity={0.2}
    />
    <Path d="M247.89 80.91a15.93 15.93 0 0 0-6.17-10.81A186.67 186.67 0 0 0 128 32 186.67 186.67 0 0 0 14.28 70.1a15.93 15.93 0 0 0-6.17 10.81 15.65 15.65 0 0 0 3.54 11.89l104 125.43A15.93 15.93 0 0 0 128 224a15.93 15.93 0 0 0 12.31-5.77l104-125.43a15.65 15.65 0 0 0 3.58-11.89ZM128 208l-62.87-75.8a107.89 107.89 0 0 1 125.74 0Zm73.12-88.16a124 124 0 0 0-146.24 0l-30.79-37.1A170.76 170.76 0 0 1 128 48a170.76 170.76 0 0 1 103.91 34.74Z" />
  </Svg>
);
const Memo = memo(SvgWifiMediumDuotone);
export default Memo;
