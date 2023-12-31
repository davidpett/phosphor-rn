import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUserFocusBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228 48v28a12 12 0 0 1-24 0V52h-24a12 12 0 0 1 0-24h28a20 20 0 0 1 20 20Zm-12 120a12 12 0 0 0-12 12v24h-24a12 12 0 0 0 0 24h28a20 20 0 0 0 20-20v-28a12 12 0 0 0-12-12ZM76 204H52v-24a12 12 0 0 0-24 0v28a20 20 0 0 0 20 20h28a12 12 0 0 0 0-24ZM40 88a12 12 0 0 0 12-12V52h24a12 12 0 0 0 0-24H48a20 20 0 0 0-20 20v28a12 12 0 0 0 12 12Zm136 92a12 12 0 0 1-9.6-4.79 48 48 0 0 0-76.82 0 12 12 0 0 1-19.18-14.42 72.1 72.1 0 0 1 23.92-20.5 44 44 0 1 1 67.34 0 72.1 72.1 0 0 1 23.92 20.5A12 12 0 0 1 176 180Zm-48-48a20 20 0 1 0-20-20 20 20 0 0 0 20 20Z" />
  </Svg>
);
const Memo = memo(SvgUserFocusBold);
export default Memo;
