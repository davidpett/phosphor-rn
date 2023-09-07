import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStepsLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M246 56a6 6 0 0 1-6 6h-50v42a6 6 0 0 1-6 6h-50v42a6 6 0 0 1-6 6H78v42a6 6 0 0 1-6 6H16a6 6 0 0 1 0-12h50v-42a6 6 0 0 1 6-6h50v-42a6 6 0 0 1 6-6h50V56a6 6 0 0 1 6-6h56a6 6 0 0 1 6 6Z" />
  </Svg>
);
const Memo = memo(SvgStepsLight);
export default Memo;
