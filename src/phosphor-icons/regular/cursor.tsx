import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCursor = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m169.64 134.33 44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A15.95 15.95 0 0 0 32.8 52.92L85.07 213a15.82 15.82 0 0 0 14.41 11h.78a15.84 15.84 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76.06-.05Zm95.15-.09-49.67-49.67a16 16 0 0 0-26 4.93l-19.41 44.66L48 48l159.87 52.2-44.65 19.42a16 16 0 0 0-4.93 26L208 195.31Z" />
  </Svg>
);
const Memo = memo(SvgCursor);
export default Memo;
