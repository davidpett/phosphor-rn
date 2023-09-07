import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowDownDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m200 144-72 72-72-72Z" opacity={0.2} />
    <Path d="M207.39 140.94A8 8 0 0 0 200 136h-64V40a8 8 0 0 0-16 0v96H56a8 8 0 0 0-5.66 13.66l72 72a8 8 0 0 0 11.32 0l72-72a8 8 0 0 0 1.73-8.72ZM128 204.69 75.31 152h105.38Z" />
  </Svg>
);
const Memo = memo(SvgArrowDownDuotone);
export default Memo;
