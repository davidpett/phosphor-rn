import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSmileyLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M173.19 155c-9.92 17.16-26.39 27-45.19 27s-35.27-9.84-45.19-27a6 6 0 0 1 10.38-6c7.84 13.54 20.2 21 34.81 21s27-7.46 34.81-21a6 6 0 1 1 10.38 6ZM230 128A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102Zm-12 0a90 90 0 1 0-90 90 90.1 90.1 0 0 0 90-90ZM92 118a10 10 0 1 0-10-10 10 10 0 0 0 10 10Zm72-20a10 10 0 1 0 10 10 10 10 0 0 0-10-10Z" />
  </Svg>
);
const Memo = memo(SvgSmileyLight);
export default Memo;
