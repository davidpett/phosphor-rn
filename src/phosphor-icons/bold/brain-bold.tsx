import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBrainBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M252 124a60.14 60.14 0 0 0-32-53.08 52 52 0 0 0-92-32.11 52 52 0 0 0-92 32.11 60 60 0 0 0 0 106.14 52 52 0 0 0 92 32.13 52 52 0 0 0 92-32.13A60.05 60.05 0 0 0 252 124ZM88 204a28 28 0 0 1-26.85-20.07c1 0 1.89.07 2.85.07h8a12 12 0 0 0 0-24h-8a36 36 0 0 1-12-69.95 12 12 0 0 0 8-11.32V72a28 28 0 0 1 56 0v60.15a52.43 52.43 0 0 0-12.4-5.77 12 12 0 0 0-7.2 22.9A28 28 0 0 1 88 204Zm104-44h-8a12 12 0 0 0 0 24h8c1 0 1.9 0 2.85-.07a28 28 0 1 1-35.18-34.67 12 12 0 0 0-7.13-22.92 52 52 0 0 0-12.54 5.81V72a28 28 0 0 1 56 0v6.73a12 12 0 0 0 8 11.32 36 36 0 0 1-12 70Zm16-44a12 12 0 0 1-12 12 40 40 0 0 1-40-40v-4a12 12 0 0 1 24 0v4a16 16 0 0 0 16 16 12 12 0 0 1 12 12ZM60 128a12 12 0 0 1 0-24 16 16 0 0 0 16-16v-4a12 12 0 0 1 24 0v4a40 40 0 0 1-40 40Z" />
  </Svg>
);
const Memo = memo(SvgBrainBold);
export default Memo;
