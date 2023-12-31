import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandPalmFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 104v48a88 88 0 0 1-176 0V64a16 16 0 0 1 32 0v56a8 8 0 0 0 16 0V32a16 16 0 0 1 32 0v80a8 8 0 0 0 16 0V48a16 16 0 0 1 32 0v80.67A48.08 48.08 0 0 0 128 176a8 8 0 0 0 16 0 32 32 0 0 1 32-32 8 8 0 0 0 8-8v-32a16 16 0 0 1 32 0Z" />
  </Svg>
);
const Memo = memo(SvgHandPalmFill);
export default Memo;
