import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStrategyLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M68 154a34 34 0 1 0 34 34 34 34 0 0 0-34-34Zm0 56a22 22 0 1 1 22-22 22 22 0 0 1-22 22ZM35.76 107.76 51.52 92 35.76 76.24a6 6 0 0 1 8.48-8.48L60 83.52l15.76-15.76a6 6 0 0 1 8.48 8.48L68.48 92l15.76 15.76a6 6 0 1 1-8.48 8.48L60 100.48l-15.76 15.76a6 6 0 0 1-8.48-8.48Zm184.48 96a6 6 0 1 1-8.48 8.48L196 196.48l-15.76 15.76a6 6 0 0 1-8.48-8.48L187.52 188l-15.76-15.76a6 6 0 0 1 8.48-8.48L196 179.52l15.76-15.76a6 6 0 0 1 8.48 8.48L204.48 188Zm-45.69-91.46c-6 21.66-24.55 40.38-45.09 45.52a6.14 6.14 0 0 1-1.46.18 6 6 0 0 1-1.46-11.82c16.29-4.07 31.62-19.67 36.44-37.09 3.33-12 3.39-30.24-15.22-48.85L142 54.48V80a6 6 0 0 1-12 0V40a6 6 0 0 1 6-6h40a6 6 0 0 1 0 12h-25.52l5.76 5.76C174 69.47 180.45 91 174.55 112.3Z" />
  </Svg>
);
const Memo = memo(SvgStrategyLight);
export default Memo;
