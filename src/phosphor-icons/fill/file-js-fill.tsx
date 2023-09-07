import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileJsFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m213.66 82.34-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 8 8h112a8 8 0 0 1 8 8v96a8 8 0 0 0 8 8h24a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66ZM152 88V44l44 44Zm-4.19 108.31a20.82 20.82 0 0 1-9.19 15.23C133.43 215 127 216 121.13 216a61.14 61.14 0 0 1-15.13-2 8 8 0 1 1 4.3-15.41c4.38 1.2 15 2.7 19.55-.36.88-.59 1.83-1.52 2.14-3.93.35-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.56 20.56 0 0 1 9-14.95c11.84-8 30.71-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.09 1.11 1.9 2.31 1.49 6.45 2.68 10.45 3.84 9.79 2.83 26.35 7.66 24.11 24.97ZM80 152v38a26 26 0 0 1-52 0 8 8 0 0 1 16 0 10 10 0 0 0 20 0v-38a8 8 0 0 1 16 0Z" />
  </Svg>
);
const Memo = memo(SvgFileJsFill);
export default Memo;
