import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgInfoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M108 84a16 16 0 1 1 16 16 16 16 0 0 1-16-16Zm128 44A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108Zm-24 0a84 84 0 1 0-84 84 84.09 84.09 0 0 0 84-84Zm-72 36.68V132a20 20 0 0 0-20-20 12 12 0 0 0-4 23.32V168a20 20 0 0 0 20 20 12 12 0 0 0 4-23.32Z" />
  </Svg>
);
const Memo = memo(SvgInfoBold);
export default Memo;
