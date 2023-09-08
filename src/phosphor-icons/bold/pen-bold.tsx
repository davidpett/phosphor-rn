import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPenBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m230.15 70.54-44.69-44.68a20 20 0 0 0-28.28 0L33.86 149.17A19.86 19.86 0 0 0 28 163.31V208a20 20 0 0 0 20 20h44.69a19.85 19.85 0 0 0 14.14-5.86l79.46-79.45 4.16 13.89-34.93 34.93a12 12 0 0 0 17 17l40-40a12 12 0 0 0 3-11.94l-9.94-33.13 24.59-24.59a20 20 0 0 0-.02-28.31ZM65 152l71-71 39 39-71 71Zm-13 21 31 31H52Zm140-70-39-39 18.34-18.34 39 39Z" />
  </Svg>
);
const Memo = memo(SvgPenBold);
export default Memo;
