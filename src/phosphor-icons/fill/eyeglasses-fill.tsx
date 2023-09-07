import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEyeglassesFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 72v92a44 44 0 0 1-87.81 4h-32.38A44 44 0 0 1 24 164V72a32 32 0 0 1 32-32 8 8 0 0 1 0 16 16 16 0 0 0-16 16v58.08A44 44 0 0 1 110.32 152h35.36A44 44 0 0 1 216 130.08V72a16 16 0 0 0-16-16 8 8 0 0 1 0-16 32 32 0 0 1 32 32Z" />
  </Svg>
);
const Memo = memo(SvgEyeglassesFill);
export default Memo;
