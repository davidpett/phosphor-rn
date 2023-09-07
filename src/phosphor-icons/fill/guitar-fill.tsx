import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGuitarFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m245.66 42.34-32-32a8 8 0 0 0-12.72 9.41l-60.42 60.41c-22.79-11.86-48.31-10.87-63.77 4.58a42.27 42.27 0 0 0-9.39 14.37 8.24 8.24 0 0 1-7.55 4.89c-14.59.49-27.26 5.72-36.65 15.11C11.08 131.22 6 148.6 8.74 168.07 11.4 186.7 21.07 205.15 36 220s33.34 24.56 52 27.22a71.13 71.13 0 0 0 10.1.78c15.32 0 28.83-5.23 38.76-15.16 9.39-9.39 14.62-22.06 15.11-36.65a8.24 8.24 0 0 1 4.92-7.55 42.22 42.22 0 0 0 14.37-9.39c15.45-15.46 16.44-41 4.58-63.77l60.41-60.42a8 8 0 0 0 9.41-12.72Zm-152 163.31a8 8 0 0 1-11.31 0l-32-32a8 8 0 0 1 11.32-11.31l32 32a8 8 0 0 1-.01 11.31Zm42.14-45.86a28 28 0 1 1 0-39.59 28 28 0 0 1 0 39.59Zm31.06-58a86.94 86.94 0 0 0-6-6.68 85.23 85.23 0 0 0-6.69-6L176 67.31 188.69 80ZM200 68.68 187.32 56 212 31.31 224.69 44Z" />
  </Svg>
);
const Memo = memo(SvgGuitarFill);
export default Memo;
