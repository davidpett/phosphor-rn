import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCursorLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M168.23 135.74a2 2 0 0 1 .62-3.25L213.61 113a14 14 0 0 0-1.23-26L52.29 34.7A13.95 13.95 0 0 0 34.7 52.29L87 212.38a13.82 13.82 0 0 0 12.6 9.6h.69a13.84 13.84 0 0 0 12.71-8.37l19.46-44.76a2 2 0 0 1 3.25-.62l49.67 49.67a14 14 0 0 0 19.8 0l12.69-12.69a14 14 0 0 0 0-19.8Zm41.18 61-12.68 12.68a2 2 0 0 1-2.83 0l-49.67-49.67a14 14 0 0 0-22.74 4.32L102 208.82a2 2 0 0 1-3.65-.17L46.11 48.57a1.87 1.87 0 0 1 .47-2 1.92 1.92 0 0 1 1.35-.57 2.22 2.22 0 0 1 .64.1l160.08 52.28a2 2 0 0 1 .17 3.65l-44.76 19.46a14 14 0 0 0-4.32 22.74l49.67 49.67a2 2 0 0 1 0 2.83Z" />
  </Svg>
);
const Memo = memo(SvgCursorLight);
export default Memo;
