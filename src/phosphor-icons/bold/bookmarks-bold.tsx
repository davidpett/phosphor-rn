import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBookmarksBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M192 20H96a20 20 0 0 0-20 20v20H64a20 20 0 0 0-20 20v144a12 12 0 0 0 19.32 9.51L108 199.14l44.69 34.37A12 12 0 0 0 172 224v-46.4l20.68 15.91A12 12 0 0 0 212 184V40a20 20 0 0 0-20-20Zm-44 179.63-32.69-25.14a12 12 0 0 0-14.63 0L68 199.63V84h80Zm40-40-16-12.3V80a20 20 0 0 0-20-20h-52V44h88Z" />
  </Svg>
);
const Memo = memo(SvgBookmarksBold);
export default Memo;
