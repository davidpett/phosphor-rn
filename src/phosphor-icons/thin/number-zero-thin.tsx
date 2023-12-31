import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberZeroThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M179.87 65.35C167.65 46.15 149.71 36 128 36S88.35 46.15 76.13 65.35C65.73 81.69 60 103.94 60 128s5.73 46.31 16.13 62.65C88.35 209.85 106.29 220 128 220s39.65-10.15 51.87-29.35C190.27 174.31 196 152.06 196 128s-5.73-46.31-16.13-62.65ZM128 212c-41.45 0-60-42.19-60-84s18.55-84 60-84 60 42.19 60 84-18.55 84-60 84Z" />
  </Svg>
);
const Memo = memo(SvgNumberZeroThin);
export default Memo;
