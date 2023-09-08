import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileHtmlThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M124 152a4 4 0 0 1-4 4h-12v52a4 4 0 0 1-8 0v-52H88a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4Zm-60-4a4 4 0 0 0-4 4v24H36v-24a4 4 0 0 0-8 0v56a4 4 0 0 0 8 0v-24h24v24a4 4 0 0 0 8 0v-56a4 4 0 0 0-4-4Zm176 56h-16v-52a4 4 0 0 0-8 0v56a4 4 0 0 0 4 4h20a4 4 0 0 0 0-8Zm-46.93-55.85a4 4 0 0 0-4.5 1.79L168 184.23l-20.57-34.29A4 4 0 0 0 140 152v56a4 4 0 0 0 8 0v-41.56l16.57 27.62a4 4 0 0 0 6.86 0L188 166.44V208a4 4 0 0 0 8 0v-56a4 4 0 0 0-2.93-3.85Zm17.76-63A4 4 0 0 1 212 88v24a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17ZM198.34 84 156 41.65V84Z" />
  </Svg>
);
const Memo = memo(SvgFileHtmlThin);
export default Memo;
