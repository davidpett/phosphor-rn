import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGenderIntersexLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 26h-40a6 6 0 0 0 0 12h25.52l-30 29.94A62 62 0 1 0 114 173.7V194H88a6 6 0 0 0 0 12h26v26a6 6 0 0 0 12 0v-26h26a6 6 0 0 0 0-12h-26v-20.3a62 62 0 0 0 45.28-96.5L202 46.48V72a6 6 0 0 0 12 0V32a6 6 0 0 0-6-6Zm-88 136a50 50 0 1 1 50-50 50.06 50.06 0 0 1-50 50Z" />
  </Svg>
);
const Memo = memo(SvgGenderIntersexLight);
export default Memo;
