import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgToteBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M239 66.75A20.12 20.12 0 0 0 224 60h-44.17a52 52 0 0 0-103.66 0H32.08a20 20 0 0 0-19.94 22.35l14.25 120A20.06 20.06 0 0 0 46.33 220h163.34a20.06 20.06 0 0 0 19.94-17.65l14.25-120a20 20 0 0 0-4.86-15.6ZM128 36a28 28 0 0 1 27.71 24h-55.42A28 28 0 0 1 128 36Zm78.19 160H49.81L36.5 84H76v20a12 12 0 0 0 24 0V84h56v20a12 12 0 0 0 24 0V84h39.5Z" />
  </Svg>
);
const Memo = memo(SvgToteBold);
export default Memo;
