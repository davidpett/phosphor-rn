import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCellSignalXFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M147.21 173.17a4 4 0 0 1 0 5.66L143 183a24 24 0 0 0-4.66 27.31 4 4 0 0 1-3.64 5.66H32a16 16 0 0 1-15.06-10.59 16.38 16.38 0 0 1 4.07-17L180.68 28.69a16 16 0 0 1 18.13-3.16A16.41 16.41 0 0 1 208 40.46v83.83a4 4 0 0 1-3.46 4A23.92 23.92 0 0 0 191 135l-4.2 4.2a4 4 0 0 1-5.66 0L177 135a24 24 0 0 0-33.62-.33c-9.69 9.33-9.46 25.14 0 34.65Zm48.1 2.83 18.35-18.35a8 8 0 0 0-11.32-11.31L184 164.68l-18.35-18.34a8 8 0 0 0-11.31 11.31L172.68 176l-18.35 18.34a8 8 0 0 0 11.31 11.32L184 187.31l18.35 18.35a8 8 0 0 0 11.32-11.32Z" />
  </Svg>
);
const Memo = memo(SvgCellSignalXFill);
export default Memo;
