import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCellSignalSlash = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M88 152v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0Zm-48 32a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-8a8 8 0 0 0-8-8Zm173.92 26.62-160-176a8 8 0 1 0-11.84 10.76L112 122.29V200a8 8 0 0 0 16 0v-60.11l24 26.4V200a8 8 0 0 0 16 0v-16.11l34.08 37.49a8 8 0 1 0 11.84-10.76Zm-53.92-87a8 8 0 0 0 8-8V72a8 8 0 0 0-16 0v43.63a8 8 0 0 0 8 8Zm40 44a8 8 0 0 0 8-8V32a8 8 0 0 0-16 0v127.63a8 8 0 0 0 8 8Z" />
  </Svg>
);
const Memo = memo(SvgCellSignalSlash);
export default Memo;
