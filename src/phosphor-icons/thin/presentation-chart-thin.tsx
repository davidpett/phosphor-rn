import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPresentationChartThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 44h-84V24a4 4 0 0 0-8 0v20H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h47.68l-26.8 33.5a4 4 0 1 0 6.24 5l30.8-38.5h60.16l30.8 38.5a4 4 0 0 0 6.24-5l-26.8-33.5H216a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12Zm4 132a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-120-56v24a4 4 0 0 1-8 0v-24a4 4 0 0 1 8 0Zm32-16v40a4 4 0 0 1-8 0v-40a4 4 0 0 1 8 0Zm32-16v56a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0Z" />
  </Svg>
);
const Memo = memo(SvgPresentationChartThin);
export default Memo;
