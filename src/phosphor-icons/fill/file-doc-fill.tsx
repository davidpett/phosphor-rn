import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileDocFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M48 120h160a8 8 0 0 0 8-8V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 8 8Zm104-76 44 44h-44ZM52 144H36a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h16a36 36 0 0 0 0-72Zm0 56h-8v-40h8a20 20 0 0 1 0 40Zm169.53-4.91a8 8 0 0 1 .25 11.31A30.06 30.06 0 0 1 200 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30.06 30.06 0 0 1 21.78 9.6 8 8 0 0 1-11.56 11.06A14.18 14.18 0 0 0 200 160c-8.82 0-16 9-16 20s7.18 20 16 20a14.24 14.24 0 0 0 10.22-4.66 8 8 0 0 1 11.31-.25ZM128 144c-17.64 0-32 16.15-32 36s14.36 36 32 36 32-16.15 32-36-14.36-36-32-36Zm0 56c-8.82 0-16-9-16-20s7.18-20 16-20 16 9 16 20-7.18 20-16 20Z" />
  </Svg>
);
const Memo = memo(SvgFileDocFill);
export default Memo;