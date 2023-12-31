import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWindowsLogoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M107.69 51.88a12 12 0 0 0-9.84-2.6l-60 10.91A12 12 0 0 0 28 72v36a12 12 0 0 0 12 12h60a12 12 0 0 0 12-12V61.09a12 12 0 0 0-4.31-9.21ZM88 96H52V82l36-6.54Zm135.69-65.21a12 12 0 0 0-9.84-2.6l-76 13.81A12 12 0 0 0 128 53.82V108a12 12 0 0 0 12 12h76a12 12 0 0 0 12-12V40a12 12 0 0 0-4.31-9.21ZM204 96h-52V63.83l52-9.45Zm-104 40H40a12 12 0 0 0-12 12v36a12 12 0 0 0 9.85 11.81l60 10.91A12 12 0 0 0 112 194.91V148a12 12 0 0 0-12-12Zm-12 44.53L52 174v-14h36ZM216 136h-76a12 12 0 0 0-12 12v54.18a12 12 0 0 0 9.85 11.82l76 13.82A12 12 0 0 0 228 216v-68a12 12 0 0 0-12-12Zm-12 65.62-52-9.45V160h52Z" />
  </Svg>
);
const Memo = memo(SvgWindowsLogoBold);
export default Memo;
