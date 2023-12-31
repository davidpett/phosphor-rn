import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSkipForwardDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M196.3 134.65 68.19 214.77A8 8 0 0 1 56 208.12V47.88a8 8 0 0 1 12.19-6.65l128.11 80.12a7.83 7.83 0 0 1 0 13.3Z"
      opacity={0.2}
    />
    <Path d="M200 32a8 8 0 0 0-8 8v69.23L72.43 34.45A15.95 15.95 0 0 0 48 47.88v160.24a16 16 0 0 0 24.43 13.43L192 146.77V216a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8ZM64 207.93V48.05l127.84 80Z" />
  </Svg>
);
const Memo = memo(SvgSkipForwardDuotone);
export default Memo;
