import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCpuBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M152 92h-48a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12Zm-12 48h-24v-24h24Zm92 0h-12v-24h12a12 12 0 0 0 0-24h-12V56a20 20 0 0 0-20-20h-36V24a12 12 0 0 0-24 0v12h-24V24a12 12 0 0 0-24 0v12H56a20 20 0 0 0-20 20v36H24a12 12 0 0 0 0 24h12v24H24a12 12 0 0 0 0 24h12v36a20 20 0 0 0 20 20h36v12a12 12 0 0 0 24 0v-12h24v12a12 12 0 0 0 24 0v-12h36a20 20 0 0 0 20-20v-36h12a12 12 0 0 0 0-24Zm-36 56H60V60h136Z" />
  </Svg>
);
const Memo = memo(SvgCpuBold);
export default Memo;
