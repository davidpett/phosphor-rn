import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberFourThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M180 152a4 4 0 0 1-4 4h-20v52a4 4 0 0 1-8 0v-52H72a4 4 0 0 1-3.77-5.35l40-112a4 4 0 1 1 7.54 2.69L77.68 148H148V96a4 4 0 0 1 8 0v52h20a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgNumberFourThin);
export default Memo;
