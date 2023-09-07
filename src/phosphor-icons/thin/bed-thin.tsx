import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBedThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 76H20V48a4 4 0 0 0-8 0v160a4 4 0 0 0 8 0v-36h216v36a4 4 0 0 0 8 0v-96a36 36 0 0 0-36-36ZM20 84h80v80H20Zm88 80V84h100a28 28 0 0 1 28 28v52Z" />
  </Svg>
);
const Memo = memo(SvgBedThin);
export default Memo;
