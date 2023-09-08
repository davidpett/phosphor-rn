import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWindowsLogoFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M112 144v51.64a8 8 0 0 1-8 8 8.54 8.54 0 0 1-1.43-.13l-64-11.64A8 8 0 0 1 32 184v-40a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8Zm-2.87-89.78a8 8 0 0 0-6.56-1.73l-64 11.64A8 8 0 0 0 32 72v40a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8V60.36a8 8 0 0 0-2.87-6.14ZM216 136h-80a8 8 0 0 0-8 8v57.45a8 8 0 0 0 6.57 7.88l80 14.54a7.61 7.61 0 0 0 1.43.13 8 8 0 0 0 8-8v-72a8 8 0 0 0-8-8Zm5.13-102.14a8 8 0 0 0-6.56-1.73l-80 14.55a8 8 0 0 0-6.57 7.87V112a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8V40a8 8 0 0 0-2.87-6.14Z" />
  </Svg>
);
const Memo = memo(SvgWindowsLogoFill);
export default Memo;
