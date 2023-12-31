import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgThumbsDownThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m235.85 157.52-12-96A20 20 0 0 0 204 44H32a12 12 0 0 0-12 12v88a12 12 0 0 0 12 12h45.53l38.89 77.79A4 4 0 0 0 120 236a36 36 0 0 0 36-36v-20h60a20 20 0 0 0 19.85-22.48ZM76 148H32a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h44Zm149 19.94a12 12 0 0 1-9 4.06h-64a4 4 0 0 0-4 4v24a28 28 0 0 1-25.58 27.9L84 151.06V52h120a12 12 0 0 1 11.91 10.51l12 96a12 12 0 0 1-2.91 9.43Z" />
  </Svg>
);
const Memo = memo(SvgThumbsDownThin);
export default Memo;
