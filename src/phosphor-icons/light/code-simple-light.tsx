import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCodeSimpleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M92 68.49 25 128l67 59.52a6 6 0 1 1-8 9l-72-64a6 6 0 0 1 0-9l72-64a6 6 0 0 1 8 9Zm152 55-72-64a6 6 0 0 0-8 9L231 128l-67 59.52a6 6 0 1 0 8 9l72-64a6 6 0 0 0 0-9Z" />
  </Svg>
);
const Memo = memo(SvgCodeSimpleLight);
export default Memo;
