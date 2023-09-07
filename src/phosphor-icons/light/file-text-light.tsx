import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileTextLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m212.24 83.76-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24ZM158 46.48 193.52 82H158ZM200 218H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2Zm-34-82a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6Zm0 32a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6Z" />
  </Svg>
);
const Memo = memo(SvgFileTextLight);
export default Memo;
