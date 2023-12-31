import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHamburgerFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M35.58 98.06a16 16 0 0 1-3.23-13.44C39.78 49.5 80 24 128 24s88.22 25.5 95.65 60.62A16 16 0 0 1 207.93 104H48.07a16 16 0 0 1-12.49-5.94Zm193.68 54.42-41.13 15L151 152.57a8 8 0 0 0-5.94 0l-37 14.81L71 152.57a8 8 0 0 0-5.7-.09l-44 16a8 8 0 0 0 5.47 15L40 178.69V184a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40v-9.67l18.73-6.81a8 8 0 1 0-5.47-15ZM24 136h208a8 8 0 0 0 0-16H24a8 8 0 0 0 0 16Z" />
  </Svg>
);
const Memo = memo(SvgHamburgerFill);
export default Memo;
