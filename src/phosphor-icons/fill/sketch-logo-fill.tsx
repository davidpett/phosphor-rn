import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSketchLogoFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m246 98.73-56-64a8 8 0 0 0-6-2.73H72a8 8 0 0 0-6 2.73l-56 64a8 8 0 0 0 .17 10.73l112 120a8 8 0 0 0 11.7 0l112-120a8 8 0 0 0 .13-10.73ZM222.37 96H180l-36-48h36.37ZM74.58 112l30.13 75.33L34.41 112Zm106.84 0h40.17l-70.3 75.33ZM75.63 48H112L76 96H33.63Z" />
  </Svg>
);
const Memo = memo(SvgSketchLogoFill);
export default Memo;
