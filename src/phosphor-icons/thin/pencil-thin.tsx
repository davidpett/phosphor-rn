import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPencilThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224.49 76.2 179.8 31.51a12 12 0 0 0-17 0L39.52 154.83a11.9 11.9 0 0 0-3.52 8.48V208a12 12 0 0 0 12 12h44.69a12 12 0 0 0 8.48-3.51L224.48 93.17a12 12 0 0 0 0-17ZM45.66 160 136 69.65 158.34 92 68 182.34ZM44 208v-38.34l21.17 21.17L86.34 212H48a4 4 0 0 1-4-4Zm52 2.34L73.66 188 164 97.65 186.34 120ZM218.83 87.51 192 114.34 141.66 64l26.82-26.83a4 4 0 0 1 5.66 0l44.69 44.68a4 4 0 0 1 0 5.66Z" />
  </Svg>
);
const Memo = memo(SvgPencilThin);
export default Memo;
