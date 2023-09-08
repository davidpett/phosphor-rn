import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCactusBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 204h-44v-16a72.08 72.08 0 0 0 72-72 32 32 0 0 0-64 0 8 8 0 0 1-8 8V56a44 44 0 0 0-88 0v28a8 8 0 0 1-8-8 32 32 0 0 0-64 0 72.08 72.08 0 0 0 72 72v56H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24ZM96 124H84a48.05 48.05 0 0 1-48-48 8 8 0 0 1 16 0 32 32 0 0 0 32 32h12a12 12 0 0 0 12-12V56a20 20 0 0 1 40 0v80a12 12 0 0 0 12 12h12a32 32 0 0 0 32-32 8 8 0 0 1 16 0 48.05 48.05 0 0 1-48 48h-12a12 12 0 0 0-12 12v28h-40v-68a12 12 0 0 0-12-12Z" />
  </Svg>
);
const Memo = memo(SvgCactusBold);
export default Memo;
