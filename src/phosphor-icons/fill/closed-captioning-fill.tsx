import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgClosedCaptioningFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM116 162.64a40 40 0 1 1 0-69.28 8 8 0 1 1-8 13.85 24 24 0 1 0 0 41.58 8 8 0 0 1 8 13.85Zm80 0a40 40 0 1 1 0-69.28 8 8 0 1 1-8 13.85 24 24 0 1 0 0 41.58 8 8 0 0 1 8 13.85Z" />
  </Svg>
);
const Memo = memo(SvgClosedCaptioningFill);
export default Memo;
