import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgExcludeSquare = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 160V96a8 8 0 0 0-8-8h-48V40a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h48v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8v-56Zm-60.69 48-40-40h33.38l40 40ZM48 59.31l40 40v33.38l-40-40ZM92.69 48l40 40H99.31l-40-40ZM104 152v-48h48v48Zm64 4.69v-33.38l40 40v33.38Zm40-16L171.31 104H208Zm-56-56L115.31 48H152ZM48 115.31 84.69 152H48Zm56 56L140.69 208H104Z" />
  </Svg>
);
const Memo = memo(SvgExcludeSquare);
export default Memo;
