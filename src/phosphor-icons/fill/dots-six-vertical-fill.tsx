import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDotsSixVerticalFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M192 16H64a16 16 0 0 0-16 16v192a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V32a16 16 0 0 0-16-16Zm-92 184a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm0-60a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm0-60a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm56 120a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm0-60a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm0-60a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z" />
  </Svg>
);
const Memo = memo(SvgDotsSixVerticalFill);
export default Memo;
