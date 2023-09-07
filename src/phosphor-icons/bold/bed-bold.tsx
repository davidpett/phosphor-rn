import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBedBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 68H28V48a12 12 0 0 0-24 0v160a12 12 0 0 0 24 0v-28h200v28a12 12 0 0 0 24 0v-96a44.05 44.05 0 0 0-44-44ZM92 156H28V92h64Zm136 0H116V92h92a20 20 0 0 1 20 20Z" />
  </Svg>
);
const Memo = memo(SvgBedBold);
export default Memo;
