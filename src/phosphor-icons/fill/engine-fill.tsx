import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEngineFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M256 112v64a8 8 0 0 1-16 0v-24h-16v16a16 16 0 0 1-16 16h-12.69L160 219.31a15.86 15.86 0 0 1-11.31 4.69H83.31A15.86 15.86 0 0 1 72 219.31L36.69 184A15.86 15.86 0 0 1 32 172.69V152H16v24a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0v24h16V80a16 16 0 0 1 16-16h64V48H88a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16h-24v16h20.69A15.86 15.86 0 0 1 160 68.69L195.31 104H208a16 16 0 0 1 16 16v16h16v-24a8 8 0 0 1 16 0Z" />
  </Svg>
);
const Memo = memo(SvgEngineFill);
export default Memo;
