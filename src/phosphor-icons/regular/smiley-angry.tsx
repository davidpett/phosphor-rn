import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSmileyAngry = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M92 152a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm72-24a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm68 0A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88 88.1 88.1 0 0 0 88-88Zm-44.44-46.66L128 110.39l-43.56-29a8 8 0 1 0-8.88 13.32l48 32a8 8 0 0 0 8.88 0l48-32a8 8 0 0 0-8.88-13.32Zm-15.13 96C148 171.73 139.94 168 128 168s-20 3.73-28.43 9.34a8 8 0 0 0 8.86 13.32C114.93 186.34 120 184 128 184s13.07 2.34 19.57 6.66a8 8 0 1 0 8.86-13.32Z" />
  </Svg>
);
const Memo = memo(SvgSmileyAngry);
export default Memo;
