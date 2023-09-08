import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLightningBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M219.68 117.26a12 12 0 0 0-7.47-8.5l-54.44-20.41 14-70a12 12 0 0 0-20.54-10.54l-112 120a12 12 0 0 0 4.56 19.43l54.44 20.41-14 70a12 12 0 0 0 20.54 10.54l112-120a12 12 0 0 0 2.91-10.93Zm-103.63 83.67 7.72-38.58a12 12 0 0 0-7.56-13.59L69 131.07l70.93-76-7.72 38.58a12 12 0 0 0 7.56 13.59L187 124.93Z" />
  </Svg>
);
const Memo = memo(SvgLightningBold);
export default Memo;
