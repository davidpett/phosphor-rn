import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMountainsThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M164 76a24 24 0 1 0-24-24 24 24 0 0 0 24 24Zm0-40a16 16 0 1 1-16 16 16 16 0 0 1 16-16Zm87.44 162-54.56-92.08a11.91 11.91 0 0 0-10.33-5.92 11.89 11.89 0 0 0-10.32 5.88l-29.61 50-48.28-81.97a12 12 0 0 0-20.68 0L4.55 198A4 4 0 0 0 8 204h240a4 4 0 0 0 3.44-6ZM84.55 78a4 4 0 0 1 6.9 0l27.12 46H57.43ZM15 196l37.71-64h70.58L161 196Zm155.29 0-19-32.29L183.11 110a4 4 0 0 1 6.88 0l51 86Z" />
  </Svg>
);
const Memo = memo(SvgMountainsThin);
export default Memo;
