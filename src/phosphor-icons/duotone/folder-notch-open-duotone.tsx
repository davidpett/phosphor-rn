import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderNotchOpenDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M208 88v24h-61.58a8.07 8.07 0 0 0-4.44 1.34l-20 13.32a8.07 8.07 0 0 1-4.44 1.34H69.42a8 8 0 0 0-7.42 5l-30 75V64a8 8 0 0 1 8-8h53.33a8 8 0 0 1 4.8 1.6l27.74 20.8a8 8 0 0 0 4.8 1.6H200a8 8 0 0 1 8 8Z"
      opacity={0.2}
    />
    <Path d="M245 110.64a16 16 0 0 0-13-6.64h-16V88a16 16 0 0 0-16-16h-69.33l-27.73-20.8a16.14 16.14 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v144a8 8 0 0 0 8 8h179.1a8 8 0 0 0 7.59-5.47l28.49-85.47a16.05 16.05 0 0 0-2.18-14.42ZM93.34 64l27.73 20.8a16.12 16.12 0 0 0 9.6 3.2H200v16h-53.57a16 16 0 0 0-8.88 2.69l-20 13.31H69.42a15.94 15.94 0 0 0-14.86 10.06L40 166.46V64Zm112 136H43.82l25.6-64h48.16a16 16 0 0 0 8.88-2.69l20-13.31H232Z" />
  </Svg>
);
const Memo = memo(SvgFolderNotchOpenDuotone);
export default Memo;
