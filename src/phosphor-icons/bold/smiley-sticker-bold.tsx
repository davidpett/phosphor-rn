import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSmileyStickerBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 20a108 108 0 1 0 31.74 211.26 12 12 0 0 0 5-3l63.57-63.57a12.05 12.05 0 0 0 3-5A108.08 108.08 0 0 0 128 20Zm81.12 129.91-59.2 59.2a83.87 83.87 0 1 1 59.2-59.2ZM76 108a16 16 0 1 1 16 16 16 16 0 0 1-16-16Zm104 0a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm-1.61 50c-11 19.06-29.39 30-50.39 30s-39.36-10.93-50.39-30a12 12 0 0 1 20.78-12c3.89 6.73 12.91 18 29.61 18s25.72-11.28 29.61-18a12 12 0 1 1 20.78 12Z" />
  </Svg>
);
const Memo = memo(SvgSmileyStickerBold);
export default Memo;
