import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCameraSlashFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M53.92 34.62a8 8 0 1 0-11.84 10.76L51.73 56H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h149.19l4.89 5.38a8 8 0 1 0 11.84-10.76ZM128 168a36 36 0 0 1-27.88-58.77L148 161.92a35.72 35.72 0 0 1-20 6.08Zm104-88v106a8 8 0 0 1-13.92 5.38l-130-143a8 8 0 0 1-.74-9.81l2-3A8 8 0 0 1 96 32h64a8 8 0 0 1 6.66 3.56L180.28 56H208a24 24 0 0 1 24 24Z" />
  </Svg>
);
const Memo = memo(SvgCameraSlashFill);
export default Memo;
