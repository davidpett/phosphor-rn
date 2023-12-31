import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderSimpleUserDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 176a24 24 0 1 1-24-24 24 24 0 0 1 24 24Z" opacity={0.2} />
    <Path d="M214.61 198.62a32 32 0 1 0-45.23 0 40 40 0 0 0-17.11 23.32 8 8 0 0 0 5.67 9.79 8.15 8.15 0 0 0 2.06.27 8 8 0 0 0 7.73-5.95C170.56 215.42 180.54 208 192 208s21.44 7.42 24.27 18.05a8 8 0 1 0 15.46-4.11 40 40 0 0 0-17.12-23.32ZM192 160a16 16 0 1 1-16 16 16 16 0 0 1 16-16Zm40-72v32a8 8 0 0 1-16 0V88h-85.33a16.12 16.12 0 0 1-9.6-3.2L93.33 64H40v136h80a8 8 0 0 1 0 16H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2L130.67 72H216a16 16 0 0 1 16 16Z" />
  </Svg>
);
const Memo = memo(SvgFolderSimpleUserDuotone);
export default Memo;
