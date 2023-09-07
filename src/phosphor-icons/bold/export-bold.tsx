import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgExportBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M220 112v96a20 20 0 0 1-20 20H56a20 20 0 0 1-20-20v-96a20 20 0 0 1 20-20h24a12 12 0 0 1 0 24H60v88h136v-88h-20a12 12 0 0 1 0-24h24a20 20 0 0 1 20 20ZM96.49 72.49 116 53v83a12 12 0 0 0 24 0V53l19.51 19.52a12 12 0 1 0 17-17l-40-40a12 12 0 0 0-17 0l-40 40a12 12 0 1 0 17 17Z" />
  </Svg>
);
const Memo = memo(SvgExportBold);
export default Memo;
