import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFlameLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M172.34 52.86a218.34 218.34 0 0 0-41.25-34 6 6 0 0 0-6.18 0 218.34 218.34 0 0 0-41.25 34C56.4 81.48 42 113 42 144a86 86 0 0 0 172 0c0-31-14.4-62.52-41.66-91.14ZM94 184c0-29.8 25.11-50.41 34-56.78 8.91 6.35 34 26.87 34 56.78a34.05 34.05 0 0 1-32.25 34h-3.5A34.05 34.05 0 0 1 94 184Zm74.42 21.94A45.68 45.68 0 0 0 174 184c0-42.9-41.16-68.09-42.91-69.14a6 6 0 0 0-6.18 0C123.16 115.91 82 141.1 82 184a45.68 45.68 0 0 0 5.58 21.94A74 74 0 0 1 54 144c0-59.83 59.62-103.26 74-112.86 14.39 9.6 74 53 74 112.86a74 74 0 0 1-33.58 61.94Z" />
  </Svg>
);
const Memo = memo(SvgFlameLight);
export default Memo;
