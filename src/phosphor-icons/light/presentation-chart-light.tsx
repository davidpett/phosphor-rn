import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPresentationChartLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 42h-82V24a6 6 0 0 0-12 0v18H40a14 14 0 0 0-14 14v120a14 14 0 0 0 14 14h43.52l-24.21 30.25a6 6 0 0 0 9.38 7.5L98.88 190h58.24l30.19 37.75a6 6 0 0 0 9.38-7.5L172.48 190H216a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14Zm2 134a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Zm-116-56v24a6 6 0 0 1-12 0v-24a6 6 0 0 1 12 0Zm32-16v40a6 6 0 0 1-12 0v-40a6 6 0 0 1 12 0Zm32-16v56a6 6 0 0 1-12 0V88a6 6 0 0 1 12 0Z" />
  </Svg>
);
const Memo = memo(SvgPresentationChartLight);
export default Memo;
