import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUsersBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M125.18 156.94a64 64 0 1 0-82.36 0 100.23 100.23 0 0 0-39.49 32 12 12 0 0 0 19.35 14.2 76 76 0 0 1 122.64 0 12 12 0 0 0 19.36-14.2 100.33 100.33 0 0 0-39.5-32ZM44 108a40 40 0 1 1 40 40 40 40 0 0 1-40-40Zm206.1 97.67a12 12 0 0 1-16.78-2.57A76.31 76.31 0 0 0 172 172a12 12 0 0 1 0-24 40 40 0 1 0-14.85-77.16 12 12 0 1 1-8.92-22.28 64 64 0 0 1 65 108.38 100.23 100.23 0 0 1 39.49 32 12 12 0 0 1-2.62 16.73Z" />
  </Svg>
);
const Memo = memo(SvgUsersBold);
export default Memo;
