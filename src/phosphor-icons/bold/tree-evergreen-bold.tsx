import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTreeEvergreenBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M233.47 184.63 192.54 132H208a12 12 0 0 0 9.51-19.32l-80-104a12 12 0 0 0-19 0l-80 104A12 12 0 0 0 48 132h15.46l-40.93 52.63A12 12 0 0 0 32 204h84v36a12 12 0 0 0 24 0v-36h84a12 12 0 0 0 9.47-19.37ZM56.54 180l40.93-52.63A12 12 0 0 0 88 108H72.37L128 35.68 183.63 108H168a12 12 0 0 0-9.47 19.37L199.46 180Z" />
  </Svg>
);
const Memo = memo(SvgTreeEvergreenBold);
export default Memo;
