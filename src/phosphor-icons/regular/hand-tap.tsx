import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandTap = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M48 76a60 60 0 0 1 120 0 8 8 0 0 1-16 0 44 44 0 0 0-88 0 8 8 0 0 1-16 0Zm140 44a27.9 27.9 0 0 0-13.36 3.39A28 28 0 0 0 136 106.7V76a28 28 0 0 0-56 0v80l-3.82-6.13a28 28 0 0 0-48.41 28.17l29.32 50a8 8 0 1 0 13.8-8.04L41.6 170a12 12 0 1 1 20.78-12l.14.23 18.68 30A8 8 0 0 0 96 184V76a12 12 0 0 1 24 0v68a8 8 0 0 0 16 0v-12a12 12 0 0 1 24 0v20a8 8 0 0 0 16 0v-4a12 12 0 0 1 24 0v36c0 21.61-7.1 36.3-7.16 36.42a8 8 0 0 0 3.58 10.73 7.9 7.9 0 0 0 3.58.85 8 8 0 0 0 7.16-4.42c.37-.73 8.85-18 8.85-43.58v-36A28 28 0 0 0 188 120Z" />
  </Svg>
);
const Memo = memo(SvgHandTap);
export default Memo;
