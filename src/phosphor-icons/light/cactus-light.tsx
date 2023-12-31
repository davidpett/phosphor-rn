import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCactusLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 210h-50v-28h6a66.08 66.08 0 0 0 66-66 26 26 0 0 0-52 0 14 14 0 0 1-14 14h-6V56a38 38 0 0 0-76 0v34h-6a14 14 0 0 1-14-14 26 26 0 0 0-52 0 66.08 66.08 0 0 0 66 66h6v68H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12ZM96 130H84a54.06 54.06 0 0 1-54-54 14 14 0 0 1 28 0 26 26 0 0 0 26 26h12a6 6 0 0 0 6-6V56a26 26 0 0 1 52 0v80a6 6 0 0 0 6 6h12a26 26 0 0 0 26-26 14 14 0 0 1 28 0 54.06 54.06 0 0 1-54 54h-12a6 6 0 0 0-6 6v34h-52v-74a6 6 0 0 0-6-6Z" />
  </Svg>
);
const Memo = memo(SvgCactusLight);
export default Memo;
