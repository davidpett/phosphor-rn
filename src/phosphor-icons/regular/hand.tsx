import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHand = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M188 48a27.75 27.75 0 0 0-12 2.71V44a28 28 0 0 0-54.65-8.6A28 28 0 0 0 80 60v64l-3.82-6.13a28 28 0 0 0-48.6 27.82c16 33.77 28.93 57.72 43.72 72.69C86.24 233.54 103.2 240 128 240a88.1 88.1 0 0 0 88-88V76a28 28 0 0 0-28-28Zm12 104a72.08 72.08 0 0 1-72 72c-20.38 0-33.51-4.88-45.33-16.85C69.44 193.74 57.26 171 41.9 138.58a6.36 6.36 0 0 0-.3-.58 12 12 0 0 1 20.79-12 1.76 1.76 0 0 0 .14.23l18.67 30A8 8 0 0 0 96 152V60a12 12 0 0 1 24 0v60a8 8 0 0 0 16 0V44a12 12 0 0 1 24 0v76a8 8 0 0 0 16 0V76a12 12 0 0 1 24 0Z" />
  </Svg>
);
const Memo = memo(SvgHand);
export default Memo;
