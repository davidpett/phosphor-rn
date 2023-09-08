import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSigma = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 72V56H80.65l53.6 67a8 8 0 0 1 0 10l-53.6 67H184v-16a8 8 0 0 1 16 0v24a8 8 0 0 1-8 8H64a8 8 0 0 1-6.25-13l60-75-60-75A8 8 0 0 1 64 40h128a8 8 0 0 1 8 8v24a8 8 0 0 1-16 0Z" />
  </Svg>
);
const Memo = memo(SvgSigma);
export default Memo;
