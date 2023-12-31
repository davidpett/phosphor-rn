import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShieldChevronFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 40H48a16 16 0 0 0-16 16v58.77c0 89.61 75.82 119.34 91 124.39a15.53 15.53 0 0 0 10 0c15.2-5.05 91-34.78 91-124.39V56a16 16 0 0 0-16-16Zm0 74.79c0 17.64-3.36 32.63-8.72 45.34l-66.69-46.68a8 8 0 0 0-9.18 0l-66.69 46.68c-5.36-12.71-8.72-27.7-8.72-45.34V56h160Z" />
  </Svg>
);
const Memo = memo(SvgShieldChevronFill);
export default Memo;
