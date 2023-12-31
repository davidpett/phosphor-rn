import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextHFourLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M254 176a6 6 0 0 1-6 6h-10v26a6 6 0 0 1-12 0v-26h-42a6 6 0 0 1-5.69-7.9l24-72a6 6 0 1 1 11.38 3.8L192.32 170H226v-26a6 6 0 0 1 12 0v26h10a6 6 0 0 1 6 6ZM144 50a6 6 0 0 0-6 6v54H46V56a6 6 0 0 0-12 0v120a6 6 0 0 0 12 0v-54h92v54a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6Z" />
  </Svg>
);
const Memo = memo(SvgTextHFourLight);
export default Memo;
