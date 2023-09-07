import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderSimpleDashed = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M24 80V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2l29.87 22.4a8 8 0 1 1-9.6 12.8L93.33 64H40v16a8 8 0 0 1-16 0Zm64 120H40v-8a8 8 0 0 0-16 0v8.62A15.4 15.4 0 0 0 39.38 216H88a8 8 0 0 0 0-16Zm72 0h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16Zm64-56a8 8 0 0 0-8 8v48h-16a8 8 0 0 0 0 16h16.89A15.13 15.13 0 0 0 232 200.89V152a8 8 0 0 0-8-8Zm-8-72h-48a8 8 0 0 0 0 16h48v24a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16ZM32 160a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8Z" />
  </Svg>
);
const Memo = memo(SvgFolderSimpleDashed);
export default Memo;
