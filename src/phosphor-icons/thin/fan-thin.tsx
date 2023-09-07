import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFanThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M229.12 136a56 56 0 0 0-86-31.56 28.25 28.25 0 0 0-4.56-2.39l17.27-68.94a4 4 0 0 0-1.72-4.34A56 56 0 1 0 100 126.62V128a27.39 27.39 0 0 0 .26 3.76l-68.35 19.52a4 4 0 0 0-2.91 3.66 56 56 0 0 0 41.45 56.62 56.46 56.46 0 0 0 14.59 1.93 56.07 56.07 0 0 0 55.73-60.59 27.93 27.93 0 0 0 4.33-2.77l51.09 49.44a4 4 0 0 0 2.81 1.13 4.06 4.06 0 0 0 1.84-.45A56 56 0 0 0 229.12 136ZM128 148a20 20 0 1 1 20-20 20 20 0 0 1-20 20ZM76 76a48 48 0 0 1 71.4-41.92l-16.55 66.06c-.94-.09-1.89-.14-2.85-.14a28.06 28.06 0 0 0-26.34 18.49A47.82 47.82 0 0 1 76 76Zm33 123a48 48 0 0 1-72-40.87l65.5-18.7A28 28 0 0 0 128 156a28.81 28.81 0 0 0 4.94-.44A47.81 47.81 0 0 1 109 199Zm107.6-24.46a47.93 47.93 0 0 1-17 17.22l-49-47.37a27.91 27.91 0 0 0-1.3-34.44 48 48 0 0 1 67.22 64.59Z" />
  </Svg>
);
const Memo = memo(SvgFanThin);
export default Memo;
