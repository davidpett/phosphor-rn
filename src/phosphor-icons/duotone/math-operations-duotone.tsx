import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMathOperationsDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Z"
      opacity={0.2}
    />
    <Path d="M112 72a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm-8 104H80v-24a8 8 0 0 0-16 0v24H40a8 8 0 0 0 0 16h24v24a8 8 0 0 0 16 0v-24h24a8 8 0 0 0 0-16Zm48 0h64a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16Zm64 16h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16Zm-61.66-90.34a8 8 0 0 0 11.32 0L184 83.31l18.34 18.35a8 8 0 0 0 11.32-11.32L195.31 72l18.35-18.34a8 8 0 0 0-11.32-11.32L184 60.69l-18.34-18.35a8 8 0 0 0-11.32 11.32L172.69 72l-18.35 18.34a8 8 0 0 0 0 11.32Z" />
  </Svg>
);
const Memo = memo(SvgMathOperationsDuotone);
export default Memo;
