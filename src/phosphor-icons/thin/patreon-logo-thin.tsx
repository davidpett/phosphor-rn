import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPatreonLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 44a60 60 0 1 0 60 60 60.07 60.07 0 0 0-60-60Zm0 112a52 52 0 1 1 52-52 52.06 52.06 0 0 1-52 52ZM80 44H64a12 12 0 0 0-12 12v152a12 12 0 0 0 12 12h16a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12Zm4 164a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgPatreonLogoThin);
export default Memo;
