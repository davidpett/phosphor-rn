import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFilmScriptDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M208 40v176a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8Z"
      opacity={0.2}
    />
    <Path d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16Zm0 192H56V40h144v176ZM96 80a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm0 96a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm0-48a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgFilmScriptDuotone);
export default Memo;
