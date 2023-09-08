import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBellSimpleRingingFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M168 224a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm59.39-163.68a111.36 111.36 0 0 0-39.12-43.08 8 8 0 1 0-8.54 13.53 94.13 94.13 0 0 1 33.46 36.91 8 8 0 0 0 14.2-7.36ZM35.71 72a8 8 0 0 0 7.1-4.32 94.13 94.13 0 0 1 33.46-36.91 8 8 0 1 0-8.54-13.53 111.36 111.36 0 0 0-39.12 43.08A8 8 0 0 0 35.71 72ZM208 112a80 80 0 0 0-160 0c0 26.28-4.78 48.39-13.81 63.94A16 16 0 0 0 48 200h160a16 16 0 0 0 13.79-24.06C212.78 160.38 208 138.27 208 112Z" />
  </Svg>
);
const Memo = memo(SvgBellSimpleRingingFill);
export default Memo;
