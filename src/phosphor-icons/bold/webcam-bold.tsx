import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWebcamBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M168 104a40 40 0 1 0-40 40 40 40 0 0 0 40-40Zm-56 0a16 16 0 1 1 16 16 16 16 0 0 1-16-16Zm112 92h-84v-8.87a84 84 0 1 0-24 0V196H32a12 12 0 0 0 0 24h192a12 12 0 0 0 0-24ZM68 104a60 60 0 1 1 60 60 60.07 60.07 0 0 1-60-60Z" />
  </Svg>
);
const Memo = memo(SvgWebcamBold);
export default Memo;
