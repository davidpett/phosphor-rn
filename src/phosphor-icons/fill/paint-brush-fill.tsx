import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaintBrushFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 32a8 8 0 0 0-8-8c-44.08 0-89.31 49.71-114.43 82.63A60 60 0 0 0 32 164c0 30.88-19.54 44.73-20.47 45.37A8 8 0 0 0 16 224h76a60 60 0 0 0 57.37-77.57C182.3 121.31 232 76.08 232 32Zm-107.58 81.55q5.14-6.66 10.09-12.55A76.23 76.23 0 0 1 155 121.49q-5.9 4.94-12.55 10.09a60.54 60.54 0 0 0-18.03-18.03Zm42.7-2.68a92.57 92.57 0 0 0-22-22c31.78-34.53 55.75-45 69.9-47.91-2.85 14.16-13.37 38.13-47.9 69.91Z" />
  </Svg>
);
const Memo = memo(SvgPaintBrushFill);
export default Memo;
