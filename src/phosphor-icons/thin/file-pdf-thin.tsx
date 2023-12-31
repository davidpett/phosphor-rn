import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFilePdfThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M220 152a4 4 0 0 1-4 4h-28v24h20a4 4 0 0 1 0 8h-20v20a4 4 0 0 1-8 0v-56a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4ZM88 172a24 24 0 0 1-24 24H52v12a4 4 0 0 1-8 0v-56a4 4 0 0 1 4-4h16a24 24 0 0 1 24 24Zm-8 0a16 16 0 0 0-16-16H52v32h12a16 16 0 0 0 16-16Zm80 8a32 32 0 0 1-32 32h-16a4 4 0 0 1-4-4v-56a4 4 0 0 1 4-4h16a32 32 0 0 1 32 32Zm-8 0a24 24 0 0 0-24-24h-12v48h12a24 24 0 0 0 24-24ZM44 112V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88v24a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0Zm112-28h42.34L156 41.65Z" />
  </Svg>
);
const Memo = memo(SvgFilePdfThin);
export default Memo;
