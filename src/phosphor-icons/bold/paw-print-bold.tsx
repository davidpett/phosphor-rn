import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPawPrintBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M236 108a24 24 0 1 1-24-24 24 24 0 0 1 24 24Zm-168 0a24 24 0 1 0-24 24 24 24 0 0 0 24-24Zm24-24a24 24 0 1 0-24-24 24 24 0 0 0 24 24Zm72 0a24 24 0 1 0-24-24 24 24 0 0 0 24 24Zm48 100a44 44 0 0 1-61.1 40.55 60.15 60.15 0 0 0-45.8 0A44 44 0 0 1 67 145.34a31.33 31.33 0 0 0 14.91-18.74 48 48 0 0 1 92.18 0A31.34 31.34 0 0 0 189 145.34 44 44 0 0 1 212 184Zm-24 0a20 20 0 0 0-10.49-17.6l-.1-.06a55.22 55.22 0 0 1-26.37-33 24 24 0 0 0-46.08 0 55.21 55.21 0 0 1-26.37 33.05l-.1.06A20 20 0 0 0 88 204a19.77 19.77 0 0 0 7.8-1.58h.13a84 84 0 0 1 64.14 0h.13A19.77 19.77 0 0 0 168 204a20 20 0 0 0 20-20Z" />
  </Svg>
);
const Memo = memo(SvgPawPrintBold);
export default Memo;
