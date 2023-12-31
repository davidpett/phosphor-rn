import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStorefrontThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M28 112a36 36 0 0 0 16 29.92V208a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-66.08A36 36 0 0 0 228 112V96a4.09 4.09 0 0 0-.13-1.1L213.5 44.7A12 12 0 0 0 202 36H54a12 12 0 0 0-11.5 8.7L28.15 94.9A4.09 4.09 0 0 0 28 96Zm22.19-65.1A4 4 0 0 1 54 44h148a4 4 0 0 1 3.84 2.9L218.7 92H37.3ZM100 100h56v12a28 28 0 0 1-56 0Zm-64 12v-12h56v12a28 28 0 0 1-56 0Zm168 96a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4v-62.06a36 36 0 0 0 44-17.48 36 36 0 0 0 64 0 36 36 0 0 0 44 17.48Zm-12-68a28 28 0 0 1-28-28v-12h56v12a28 28 0 0 1-28 28Z" />
  </Svg>
);
const Memo = memo(SvgStorefrontThin);
export default Memo;
