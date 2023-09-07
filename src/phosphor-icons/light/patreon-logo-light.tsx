import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPatreonLogoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 42a62 62 0 1 0 62 62 62.07 62.07 0 0 0-62-62Zm0 112a50 50 0 1 1 50-50 50.06 50.06 0 0 1-50 50ZM80 42H64a14 14 0 0 0-14 14v152a14 14 0 0 0 14 14h16a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14Zm2 166a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2Z" />
  </Svg>
);
const Memo = memo(SvgPatreonLogoLight);
export default Memo;
