import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgClosedCaptioning = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16Zm0 144H32V64h192v128Zm-105.08-40.29a8 8 0 0 1-2.92 10.93 40 40 0 1 1 0-69.28 8 8 0 1 1-8 13.85 24 24 0 1 0 0 41.58 8 8 0 0 1 10.92 2.92Zm80 0a8 8 0 0 1-2.92 10.93 40 40 0 1 1 0-69.28 8 8 0 1 1-8 13.85 24 24 0 1 0 0 41.58 8 8 0 0 1 10.92 2.92Z" />
  </Svg>
);
const Memo = memo(SvgClosedCaptioning);
export default Memo;
