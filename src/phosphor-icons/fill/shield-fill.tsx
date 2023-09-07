import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShieldFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 56v58.77c0 89.61-75.82 119.34-91 124.39a15.53 15.53 0 0 1-10 0c-15.2-5.05-91-34.78-91-124.39V56a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16Z" />
  </Svg>
);
const Memo = memo(SvgShieldFill);
export default Memo;
