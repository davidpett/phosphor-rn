import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFireExtinguisherThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m217.15 52.17-70.34-21.1 39-19.49a4 4 0 1 0-3.58-7.16L135 28a76.07 76.07 0 0 0-75 76v104a4 4 0 0 0 8 0v-36h24v60a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12V104a44.06 44.06 0 0 0-40-43.81V37.38l74.85 22.45A3.82 3.82 0 0 0 216 60a4 4 0 0 0 1.15-7.83ZM68 164v-60a68.08 68.08 0 0 1 64-67.87v24.06A44.06 44.06 0 0 0 92 104v60Zm100 72h-64a4 4 0 0 1-4-4v-60h72v60a4 4 0 0 1-4 4Zm4-132v60h-72v-60a36 36 0 0 1 72 0Z" />
  </Svg>
);
const Memo = memo(SvgFireExtinguisherThin);
export default Memo;
