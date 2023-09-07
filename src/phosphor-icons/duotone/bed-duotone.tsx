import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBedDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 112v56H104V80h104a32 32 0 0 1 32 32Z" opacity={0.2} />
    <Path d="M208 72H24V48a8 8 0 0 0-16 0v160a8 8 0 0 0 16 0v-32h208v32a8 8 0 0 0 16 0v-96a40 40 0 0 0-40-40ZM24 88h72v72H24Zm88 72V88h96a24 24 0 0 1 24 24v48Z" />
  </Svg>
);
const Memo = memo(SvgBedDuotone);
export default Memo;
