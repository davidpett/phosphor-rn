import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDiamondsFourFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M86.9 73.82a16.72 16.72 0 0 1 0-23.65l29.27-29.28a16.75 16.75 0 0 1 23.66 0l29.27 29.28a16.72 16.72 0 0 1 0 23.65l-29.27 29.28a16.75 16.75 0 0 1-23.66 0Zm148.21 42.35-29.28-29.28a16.74 16.74 0 0 0-23.65 0l-29.28 29.28a16.75 16.75 0 0 0 0 23.66l29.28 29.28a16.74 16.74 0 0 0 23.65 0l29.28-29.28a16.75 16.75 0 0 0 0-23.66Zm-132 0L73.82 86.89a16.74 16.74 0 0 0-23.65 0l-29.28 29.28a16.75 16.75 0 0 0 0 23.66l29.28 29.28a16.74 16.74 0 0 0 23.65 0l29.28-29.28a16.75 16.75 0 0 0 0-23.66Zm36.73 36.73a16.75 16.75 0 0 0-23.66 0L86.9 182.18a16.72 16.72 0 0 0 0 23.65l29.27 29.28a16.75 16.75 0 0 0 23.66 0l29.27-29.28a16.72 16.72 0 0 0 0-23.65Z" />
  </Svg>
);
const Memo = memo(SvgDiamondsFourFill);
export default Memo;
