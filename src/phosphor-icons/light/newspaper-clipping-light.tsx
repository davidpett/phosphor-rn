import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNewspaperClippingLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 42H40a14 14 0 0 0-14 14v160a6 6 0 0 0 8.68 5.37L64 206.71l29.32 14.66a6 6 0 0 0 5.36 0L128 206.71l29.32 14.66a6 6 0 0 0 5.36 0L192 206.71l29.32 14.66a6 6 0 0 0 2.68.63 5.93 5.93 0 0 0 3.15-.9A6 6 0 0 0 230 216V56a14 14 0 0 0-14-14Zm2 164.29-23.32-11.66a6 6 0 0 0-5.36 0L160 209.29l-29.32-14.66a6 6 0 0 0-5.36 0L96 209.29l-29.32-14.66a6 6 0 0 0-5.36 0L38 206.29V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2ZM198 112a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6Zm0 32a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6Zm-86-54H64a6 6 0 0 0-6 6v64a6 6 0 0 0 6 6h48a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6Zm-6 64H70v-52h36Z" />
  </Svg>
);
const Memo = memo(SvgNewspaperClippingLight);
export default Memo;
