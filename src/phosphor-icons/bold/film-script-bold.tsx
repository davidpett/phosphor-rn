import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFilmScriptBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20Zm-4 192H60V44h136ZM76 80a16 16 0 1 1 16 16 16 16 0 0 1-16-16Zm0 96a16 16 0 1 1 16 16 16 16 0 0 1-16-16Zm0-48a16 16 0 1 1 16 16 16 16 0 0 1-16-16Z" />
  </Svg>
);
const Memo = memo(SvgFilmScriptBold);
export default Memo;
