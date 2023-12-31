import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAlienBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 12A100.11 100.11 0 0 0 28 112c0 24.86 12.86 56.8 34.41 85.44C70.63 208.36 99.64 244 128 244s57.37-35.64 65.59-46.56C215.14 168.8 228 136.86 228 112A100.11 100.11 0 0 0 128 12Zm46.41 171c-13.83 18.38-34.21 37-46.41 37s-32.58-18.61-46.41-37C63.34 158.75 52 131.54 52 112a76 76 0 0 1 152 0c0 19.54-11.34 46.75-29.59 71ZM104 148a36 36 0 0 1-36-36 12 12 0 0 1 12-12 36 36 0 0 1 36 36 12 12 0 0 1-12 12Zm84-36a36 36 0 0 1-36 36 12 12 0 0 1-12-12 36 36 0 0 1 36-36 12 12 0 0 1 12 12Zm-36 72a12 12 0 0 1-12 12h-24a12 12 0 0 1 0-24h24a12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgAlienBold);
export default Memo;
