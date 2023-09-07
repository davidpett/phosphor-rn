import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGenderMaleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 36h-48a4 4 0 0 0 0 8h38.35l-51.53 51.52a76 76 0 1 0 5.66 5.66L212 49.66V88a4 4 0 0 0 8 0V40a4 4 0 0 0-4-4Zm-63.93 164.11a68 68 0 1 1 0-96.18 68.08 68.08 0 0 1 0 96.18Z" />
  </Svg>
);
const Memo = memo(SvgGenderMaleThin);
export default Memo;
