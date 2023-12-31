import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderNotchOpenLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M243.36 111.81A14 14 0 0 0 232 106h-18V88a14 14 0 0 0-14-14h-69.33a2 2 0 0 1-1.2-.4l-27.73-20.8a14.06 14.06 0 0 0-8.4-2.8H40a14 14 0 0 0-14 14v144a6 6 0 0 0 6 6h179.1a6 6 0 0 0 5.69-4.1l28.49-85.47a14 14 0 0 0-1.92-12.62ZM40 62h53.34a2 2 0 0 1 1.2.4l27.73 20.8a14.06 14.06 0 0 0 8.4 2.8H200a2 2 0 0 1 2 2v18h-55.57a13.94 13.94 0 0 0-7.77 2.35l-20 13.31a2 2 0 0 1-1.11.34H69.42a13.93 13.93 0 0 0-13 8.8L38 176.84V64a2 2 0 0 1 2-2Zm193.9 58.63L206.78 202H40.86l26.7-66.74a2 2 0 0 1 1.86-1.26h48.16a13.94 13.94 0 0 0 7.77-2.35l20-13.31a2 2 0 0 1 1.11-.34H232a2 2 0 0 1 1.9 2.63Z" />
  </Svg>
);
const Memo = memo(SvgFolderNotchOpenLight);
export default Memo;
