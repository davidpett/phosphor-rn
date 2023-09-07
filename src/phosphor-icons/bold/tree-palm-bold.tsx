import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTreePalmBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240.69 50.47a70.87 70.87 0 0 0-103.54 0A76.58 76.58 0 0 0 128 62.19a76.58 76.58 0 0 0-9.15-11.72 70.87 70.87 0 0 0-103.54 0 12 12 0 0 0 3.9 19.28L66 90.12a75.45 75.45 0 0 0-43.43 89 12 12 0 0 0 18.85 6.41L116 128.75V224a12 12 0 0 0 24 0v-95.25l74.54 56.79a12 12 0 0 0 18.85-6.41 75.45 75.45 0 0 0-43.43-89l46.83-20.37a12 12 0 0 0 3.9-19.28ZM67.08 52a47.16 47.16 0 0 1 34.38 15 52.41 52.41 0 0 1 10.84 17.08L48 56.1A46.28 46.28 0 0 1 67.08 52ZM44.39 153.15a51.72 51.72 0 0 1 38.14-43.38A52.83 52.83 0 0 1 96.09 108a50.4 50.4 0 0 1 7 .47ZM205 133.81a51.14 51.14 0 0 1 6.57 19.34L153 108.46a52.21 52.21 0 0 1 20.51 1.31A51.61 51.61 0 0 1 205 133.81Zm-61.3-49.73A52.41 52.41 0 0 1 154.54 67a47.16 47.16 0 0 1 34.38-15A46.28 46.28 0 0 1 208 56.1Z" />
  </Svg>
);
const Memo = memo(SvgTreePalmBold);
export default Memo;
