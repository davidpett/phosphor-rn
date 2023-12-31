import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaperPlaneLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M236.17 201.09 140.1 33.16a14 14 0 0 0-24.41 0l-95.88 168a14 14 0 0 0 16.85 20.05l90.48-31h.07a2.11 2.11 0 0 1 1.42 0l90.64 31a14 14 0 0 0 16.9-20.07Zm-10.66 8.17a1.91 1.91 0 0 1-2.28.57L134 179.3V120a6 6 0 0 0-12 0v59.21l-89.3 30.65a1.87 1.87 0 0 1-2.2-.6 1.83 1.83 0 0 1-.24-2.22L126.14 39a1.93 1.93 0 0 1 1.74-1 2 2 0 0 1 1.78 1.07L225.73 207a1.86 1.86 0 0 1-.22 2.26Z" />
  </Svg>
);
const Memo = memo(SvgPaperPlaneLight);
export default Memo;
