import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCurrencyJpyLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m204.64 51.8-64 78.2H176a6 6 0 0 1 0 12h-42v20h42a6 6 0 0 1 0 12h-42v42a6 6 0 0 1-12 0v-42H80a6 6 0 0 1 0-12h42v-20H80a6 6 0 0 1 0-12h35.34l-64-78.2a6 6 0 1 1 9.28-7.6L128 126.53l67.36-82.33a6 6 0 0 1 9.28 7.6Z" />
  </Svg>
);
const Memo = memo(SvgCurrencyJpyLight);
export default Memo;
