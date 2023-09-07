import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSigmaBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M180 72V60H89l48.4 60.5a12 12 0 0 1 0 15L89 196h91v-12a12 12 0 0 1 24 0v24a12 12 0 0 1-12 12H64a12 12 0 0 1-9.37-19.5l58-72.5-58-72.5A12 12 0 0 1 64 36h128a12 12 0 0 1 12 12v24a12 12 0 0 1-24 0Z" />
  </Svg>
);
const Memo = memo(SvgSigmaBold);
export default Memo;
