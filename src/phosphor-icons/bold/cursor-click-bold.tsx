import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCursorClickBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M84 16v-4a12 12 0 0 1 24 0v4a12 12 0 0 1-24 0Zm-68 92a12 12 0 0 0 0-24h-4a12 12 0 0 0 0 24Zm112.2-68.62a12 12 0 0 0 15.18-7.59l4-12a12 12 0 0 0-22.76-7.58l-4 12a12 12 0 0 0 7.58 15.17Zm-104 81.24-12 4a12 12 0 1 0 7.58 22.76l12-4a12 12 0 1 0-7.58-22.76Zm197.93 60.55a20 20 0 0 1 0 28.29l-12.68 12.68a20 20 0 0 1-28.29 0l-45.51-45.51L118.54 216a19.81 19.81 0 0 1-18.27 12h-1a19.81 19.81 0 0 1-18-13.74L29 54.16A20 20 0 0 1 54.16 29l160.08 52.27a20 20 0 0 1 1.76 37.27l-39.37 17.12Zm-19.8 14.14-46.83-46.84a20 20 0 0 1 6.17-32.47l35-15.21-142.38-46.5 46.49 142.37 15.21-35A20 20 0 0 1 130.6 150a19.74 19.74 0 0 1 3.74-.36 20 20 0 0 1 14.13 5.86l46.84 46.84Z" />
  </Svg>
);
const Memo = memo(SvgCursorClickBold);
export default Memo;
