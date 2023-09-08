import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBackspaceBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 36H68.53a20.09 20.09 0 0 0-17.15 9.71L5.71 121.83a12 12 0 0 0 0 12.34l45.67 76.12A20.09 20.09 0 0 0 68.53 220H216a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20Zm-4 160H70.8L30 128l40.8-68H212Zm-108.49-52.49L119 128l-15.52-15.51a12 12 0 0 1 17-17L136 111l15.51-15.52a12 12 0 0 1 17 17L153 128l15.52 15.51a12 12 0 0 1-17 17L136 145l-15.51 15.52a12 12 0 0 1-17-17Z" />
  </Svg>
);
const Memo = memo(SvgBackspaceBold);
export default Memo;
