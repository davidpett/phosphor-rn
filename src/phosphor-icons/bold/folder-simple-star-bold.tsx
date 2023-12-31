import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderSimpleStarBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M120 208a12 12 0 0 1-12 12H40a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h53.33a20.12 20.12 0 0 1 12 4L132 68h84a20 20 0 0 1 20 20v20a12 12 0 0 1-24 0V92h-81.33a20.12 20.12 0 0 1-12-4L92 68H44v128h64a12 12 0 0 1 12 12Zm119.64-37.13-20.58 17 6.25 25.26a12 12 0 0 1-17.73 13.22L184 212.46l-23.58 13.88a12 12 0 0 1-17.73-13.22l6.25-25.26-20.58-17a12 12 0 0 1 6.72-21.22l27.42-2.12 10.5-24.28a12 12 0 0 1 22 0l10.48 24.29 27.42 2.12a12 12 0 0 1 6.72 21.22Zm-38.2.42-5-.39a12 12 0 0 1-10.09-7.21l-2.33-5.4-2.33 5.4a12 12 0 0 1-10.1 7.21l-5 .39 3.48 2.87a12 12 0 0 1 4 12.13l-1.21 4.89 5.07-3a12 12 0 0 1 12.18 0l5.07 3-1.18-4.89a12 12 0 0 1 4-12.13Z" />
  </Svg>
);
const Memo = memo(SvgFolderSimpleStarBold);
export default Memo;
