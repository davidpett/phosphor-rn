import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCellSignalX = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M213.66 194.34a8 8 0 0 1-11.32 11.32L184 187.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L172.69 176l-18.35-18.34a8 8 0 0 1 11.32-11.32L184 164.69l18.34-18.35a8 8 0 0 1 11.32 11.32L195.31 176ZM160 128a8 8 0 0 0 8-8V72a8 8 0 0 0-16 0v48a8 8 0 0 0 8 8Zm40 0a8 8 0 0 0 8-8V32a8 8 0 0 0-16 0v88a8 8 0 0 0 8 8Zm-80-24a8 8 0 0 0-8 8v88a8 8 0 0 0 16 0v-88a8 8 0 0 0-8-8Zm-40 40a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8Zm-40 40a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-8a8 8 0 0 0-8-8Z" />
  </Svg>
);
const Memo = memo(SvgCellSignalX);
export default Memo;
