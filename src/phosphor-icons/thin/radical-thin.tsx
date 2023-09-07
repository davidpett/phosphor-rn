import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRadicalThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M236 72v24a4 4 0 0 1-8 0V76H122.77l-47 125.4a4 4 0 0 1-7.49 0l-48-128a4 4 0 0 1 7.49-2.81L72 188.61l44.26-118A4 4 0 0 1 120 68h112a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgRadicalThin);
export default Memo;
