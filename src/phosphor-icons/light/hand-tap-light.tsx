import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandTapLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M50 76a58 58 0 0 1 116 0 6 6 0 0 1-12 0 46 46 0 0 0-92 0 6 6 0 0 1-12 0Zm138 46a25.87 25.87 0 0 0-14.59 4.49A26 26 0 0 0 134 110.1V76a26 26 0 0 0-52 0v87l-7.53-12.1a26 26 0 0 0-45 26.13l29.32 50A6 6 0 0 0 69.16 221l-29.29-50a14 14 0 0 1 24.25-14 1 1 0 0 0 .1.17l18.68 30A6 6 0 0 0 94 184V76a14 14 0 0 1 28 0v68a6 6 0 1 0 12 0v-12a14 14 0 0 1 28 0v20a6 6 0 0 0 12 0v-4a14 14 0 0 1 28 0v36c0 22.13-7.3 37.18-7.37 37.32a6 6 0 0 0 2.69 8 5.83 5.83 0 0 0 2.68.68 6 6 0 0 0 5.38-3.32c.35-.7 8.63-17.55 8.63-42.68v-36A26 26 0 0 0 188 122Z" />
  </Svg>
);
const Memo = memo(SvgHandTapLight);
export default Memo;
