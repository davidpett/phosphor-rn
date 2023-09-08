import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHoodieDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="m232 128-22.39 82.1a8 8 0 0 1-7.72 5.9H176a8 8 0 0 1-8-8v-24H88v24a8 8 0 0 1-8 8H54.11a8 8 0 0 1-7.72-5.9L24 128l48-72 56 32 56-32Z"
      opacity={0.2}
    />
    <Path d="m238.66 123.56-56.3-84.44A16 16 0 0 0 169.05 32H87a16 16 0 0 0-13.31 7.12l-56.3 84.44a8 8 0 0 0-1.06 6.54l22.39 82.11A16.05 16.05 0 0 0 54.11 224H80a16 16 0 0 0 16-16v-16h64v16a16 16 0 0 0 16 16h25.89a16.05 16.05 0 0 0 15.44-11.79l22.39-82.11a8 8 0 0 0-1.06-6.54ZM80 176V69.79l24 13.71V136a8 8 0 0 0 16 0V92.64l4 2.36a8 8 0 0 0 8 0l4-2.31V128a8 8 0 0 0 16 0V83.5l24-13.71V176Zm89.05-128 3.54 5.31L128 78.79 83.41 53.31 87 48ZM80 208H54.11l-21.43-78.59L64 82.42V176a16 16 0 0 0 16 16Zm121.89 0H176v-16a16 16 0 0 0 16-16V82.42l31.32 47Z" />
  </Svg>
);
const Memo = memo(SvgHoodieDuotone);
export default Memo;
