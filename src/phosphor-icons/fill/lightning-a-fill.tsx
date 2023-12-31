import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLightningAFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m173.87 118.58-95.2 102.85A8 8 0 0 1 65 214.15l13.67-57.56-50-22.44a8 8 0 0 1-2.59-12.73l95.2-102.85A8 8 0 0 1 135 25.85l-13.69 57.56 50 22.43a8 8 0 0 1 2.59 12.74Zm61.71 104.57a7.91 7.91 0 0 1-3.58.85 8 8 0 0 1-7.16-4.42L215.05 200h-38.11l-9.79 19.58a8 8 0 0 1-14.31-7.16l36-72a8 8 0 0 1 14.31 0l36 72a8 8 0 0 1-3.57 10.73ZM207.05 184 196 161.89 184.94 184Z" />
  </Svg>
);
const Memo = memo(SvgLightningAFill);
export default Memo;
