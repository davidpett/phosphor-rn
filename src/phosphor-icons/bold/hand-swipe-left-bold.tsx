import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandSwipeLeftBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M252 56a12 12 0 0 1-12 12h-43l11.51 11.51a12 12 0 1 1-17 17l-32-32a12 12 0 0 1 0-17l32-32a12 12 0 1 1 17 17L197 44h43a12 12 0 0 1 12 12Zm-72 60a31.86 31.86 0 0 0-11.22 2A32 32 0 0 0 132 101V76a32 32 0 0 0-64 0v66.83A32 32 0 0 0 16.28 180l.12.2 25.31 42a12 12 0 0 0 20.56-12.4L37 167.92A8 8 0 0 1 50.92 160l.21.34 18.68 30A12 12 0 0 0 92 184V76a8 8 0 0 1 16 0v68a12 12 0 0 0 24 0v-12a8 8 0 0 1 16 0v20a12 12 0 0 0 24 0v-4a8 8 0 0 1 16 0v36c0 11.08-1.28 21.67-3.42 28.32a12 12 0 1 0 22.84 7.36c3-9.16 4.58-21.83 4.58-35.68v-36a32 32 0 0 0-32-32Z" />
  </Svg>
);
const Memo = memo(SvgHandSwipeLeftBold);
export default Memo;
