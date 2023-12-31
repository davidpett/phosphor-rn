import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberSevenThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m171.83 49.15-48 160A4 4 0 0 1 120 212a3.82 3.82 0 0 1-1.15-.17 4 4 0 0 1-2.68-5L162.62 52H88a4 4 0 0 1 0-8h80a4 4 0 0 1 3.83 5.15Z" />
  </Svg>
);
const Memo = memo(SvgNumberSevenThin);
export default Memo;
