import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPizzaFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M239.54 63a15.91 15.91 0 0 0-7.25-9.9 201.49 201.49 0 0 0-208.58 0 16 16 0 0 0-5.37 22l96 157.27a16 16 0 0 0 27.36 0l96-157.27a15.82 15.82 0 0 0 1.84-12.1Zm-55.1 68.53a40 40 0 0 0-41.38 67.77L128 224l-31.5-51.57a40 40 0 1 0-41.35-67.76L48.8 94.26a152 152 0 0 1 158.39 0Z" />
  </Svg>
);
const Memo = memo(SvgPizzaFill);
export default Memo;
