import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMathOperationsBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M116 72a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12Zm-12 100H84v-20a12 12 0 0 0-24 0v20H40a12 12 0 0 0 0 24h20v20a12 12 0 0 0 24 0v-20h20a12 12 0 0 0 0-24Zm48 4h64a12 12 0 0 0 0-24h-64a12 12 0 0 0 0 24Zm64 16h-64a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24Zm-64.49-87.51a12 12 0 0 0 17 0L184 89l15.51 15.52a12 12 0 0 0 17-17L201 72l15.52-15.51a12 12 0 0 0-17-17L184 55l-15.51-15.49a12 12 0 0 0-17 17L167 72l-15.49 15.51a12 12 0 0 0 0 16.98Z" />
  </Svg>
);
const Memo = memo(SvgMathOperationsBold);
export default Memo;
