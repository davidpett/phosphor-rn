import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPrescriptionThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m177.66 188 25.17-25.17a4 4 0 0 0-5.66-5.66L172 182.34 121.66 132H124a48 48 0 0 0 0-96H72a4 4 0 0 0-4 4v152a4 4 0 0 0 8 0v-60h34.34l56 56-25.17 25.17a4 4 0 0 0 5.66 5.66L172 193.66l25.17 25.17a4 4 0 0 0 5.66-5.66ZM76 44h48a40 40 0 0 1 0 80H76Z" />
  </Svg>
);
const Memo = memo(SvgPrescriptionThin);
export default Memo;
