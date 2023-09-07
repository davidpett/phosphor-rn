import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPuzzlePieceBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M222.41 155.16a12 12 0 0 0-11.56-.69A16 16 0 0 1 188 139a16.2 16.2 0 0 1 14.8-15 15.83 15.83 0 0 1 8 1.5 12 12 0 0 0 17.2-10.8V72a20 20 0 0 0-20-20h-32a40.15 40.15 0 0 0-12.62-29.16 39.67 39.67 0 0 0-29.94-10.76 40.08 40.08 0 0 0-37.34 37C96 50.07 96 51 96 52H64a20 20 0 0 0-20 20v28a40.15 40.15 0 0 0-29.16 12.62A40 40 0 0 0 41.1 179.9a28.3 28.3 0 0 0 2.9.1v28a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20v-42.69a12 12 0 0 0-5.59-10.15ZM204 204H68v-38.69a12 12 0 0 0-17.15-10.84A15.9 15.9 0 0 1 42.8 156 16.2 16.2 0 0 1 28 141.06a16 16 0 0 1 22.82-15.52A12 12 0 0 0 68 114.7V76h42.7a12 12 0 0 0 10.83-17.15A15.9 15.9 0 0 1 120 50.8 16.19 16.19 0 0 1 134.94 36a16 16 0 0 1 15.53 22.81A12 12 0 0 0 161.31 76H204v24c-1 0-1.93 0-2.9.11A40 40 0 0 0 204 180Z" />
  </Svg>
);
const Memo = memo(SvgPuzzlePieceBold);
export default Memo;
