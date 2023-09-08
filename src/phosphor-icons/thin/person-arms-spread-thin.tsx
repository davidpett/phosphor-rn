import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPersonArmsSpreadThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 68a28 28 0 1 0-28-28 28 28 0 0 0 28 28Zm0-48a20 20 0 1 1-20 20 20 20 0 0 1 20-20Zm99.6 68.57A15.7 15.7 0 0 0 212 76H44a16 16 0 0 0-6.7 30.52h.06l53.89 23.73-21.92 83.3a16 16 0 0 0 7.9 20.91A15.82 15.82 0 0 0 84 236a16 16 0 0 0 14.42-9.07L128 176l29.58 51a16 16 0 0 0 29.07-13.35l-21.92-83.3 54-23.76a15.69 15.69 0 0 0 8.87-18.02Zm-12.21 10.66-57 25.11a4 4 0 0 0-2.26 4.68L179 215.94a4.12 4.12 0 0 0 .24.67 8 8 0 0 1-3.87 10.63 8 8 0 0 1-10.63-3.87 3 3 0 0 0-.16-.31L131.46 166a4 4 0 0 0-6.92 0l-33.12 57.06a3 3 0 0 0-.16.31 8 8 0 1 1-14.5-6.76 4.12 4.12 0 0 0 .24-.67L99.87 129a4 4 0 0 0-2.26-4.68l-57-25.09A8 8 0 0 1 44 84h168a8 8 0 0 1 3.41 15.23Z" />
  </Svg>
);
const Memo = memo(SvgPersonArmsSpreadThin);
export default Memo;
