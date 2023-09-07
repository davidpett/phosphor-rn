import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWrenchBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M230.47 67.5a12 12 0 0 0-19.26-4.32L172.43 99l-12.68-2.72L157 83.57l35.79-38.78a12 12 0 0 0-4.32-19.26 76 76 0 0 0-99.23 98.27L31.17 174c-.22.19-.44.39-.64.6a36 36 0 0 0 50.91 50.91c.21-.2.41-.42.6-.64l50.16-58.07a76 76 0 0 0 98.27-99.3ZM160 148a52.1 52.1 0 0 1-25.13-6.46A12 12 0 0 0 120 144.2l-55.79 64.55a12 12 0 0 1-17-17L111.8 136a12 12 0 0 0 2.65-14.89A52 52 0 0 1 160 44h.89l-25.72 27.87a12 12 0 0 0-2.91 10.65l5.66 26.35a12 12 0 0 0 9.21 9.21l26.35 5.66a12 12 0 0 0 10.65-2.91L212 95.12v.89A52.06 52.06 0 0 1 160 148Z" />
  </Svg>
);
const Memo = memo(SvgWrenchBold);
export default Memo;
