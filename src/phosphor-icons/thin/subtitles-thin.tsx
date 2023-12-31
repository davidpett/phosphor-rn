import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSubtitlesThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12Zm4 140a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h192a4 4 0 0 1 4 4ZM52 136a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H56a4 4 0 0 1-4-4Zm152 0a4 4 0 0 1-4 4h-96a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4Zm-48 32a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4Zm48 0a4 4 0 0 1-4 4h-16a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgSubtitlesThin);
export default Memo;
