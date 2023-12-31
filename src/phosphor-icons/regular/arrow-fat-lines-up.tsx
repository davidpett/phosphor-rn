import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowFatLinesUp = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m229.66 114.34-96-96a8 8 0 0 0-11.32 0l-96 96A8 8 0 0 0 32 128h40v24a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8v-24h40a8 8 0 0 0 5.66-13.66ZM176 112a8 8 0 0 0-8 8v24H88v-24a8 8 0 0 0-8-8H51.31L128 35.31 204.69 112Zm8 104a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h96a8 8 0 0 1 8 8Zm0-32a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h96a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgArrowFatLinesUp);
export default Memo;
