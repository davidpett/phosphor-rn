import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgToiletFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M60 88h136a4 4 0 0 0 4-4V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v44a4 4 0 0 0 4 4Zm28-40h15.73a8.18 8.18 0 0 1 8.27 7.47 8 8 0 0 1-8 8.53H88.27A8.18 8.18 0 0 1 80 56.53 8 8 0 0 1 88 48Zm136 64.06a8 8 0 0 0-8-8.06H40a8 8 0 0 0-8 8.06 96.1 96.1 0 0 0 51.68 85.08l-3.47 24.27a16.43 16.43 0 0 0 1.63 10A16 16 0 0 0 96 240h63.66a16.52 16.52 0 0 0 9.72-3 16 16 0 0 0 6.46-15.23l-3.52-24.6A96.1 96.1 0 0 0 224 112.06ZM96 224l2.93-20.5a96.15 96.15 0 0 0 58.14 0L160 224Z" />
  </Svg>
);
const Memo = memo(SvgToiletFill);
export default Memo;
