import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSunDimThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M124 40v-8a4 4 0 0 1 8 0v8a4 4 0 0 1-8 0Zm64 88a60 60 0 1 1-60-60 60.07 60.07 0 0 1 60 60Zm-8 0a52 52 0 1 0-52 52 52.06 52.06 0 0 0 52-52ZM61.17 66.83a4 4 0 0 0 5.66-5.66l-8-8a4 4 0 0 0-5.66 5.66Zm0 122.34-8 8a4 4 0 0 0 5.66 5.66l8-8a4 4 0 0 0-5.66-5.66Zm136-136-8 8a4 4 0 0 0 5.66 5.66l8-8a4 4 0 1 0-5.66-5.66Zm-2.34 136a4 4 0 0 0-5.66 5.66l8 8a4 4 0 0 0 5.66-5.66ZM40 124h-8a4 4 0 0 0 0 8h8a4 4 0 0 0 0-8Zm88 88a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0v-8a4 4 0 0 0-4-4Zm96-88h-8a4 4 0 0 0 0 8h8a4 4 0 0 0 0-8Z" />
  </Svg>
);
const Memo = memo(SvgSunDimThin);
export default Memo;
