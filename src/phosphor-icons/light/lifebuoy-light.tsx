import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLifebuoyLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm36.47 130a45.87 45.87 0 0 0 0-56l31.24-31.23a89.81 89.81 0 0 1 0 118.44ZM94 128a34 34 0 1 1 34 34 34 34 0 0 1-34-34Zm93.22-67.71L156 91.53a45.87 45.87 0 0 0-56 0L68.78 60.29a89.81 89.81 0 0 1 118.44 0ZM60.29 68.78 91.53 100a45.87 45.87 0 0 0 0 56l-31.24 31.22a89.81 89.81 0 0 1 0-118.44Zm8.49 126.93L100 164.47a45.87 45.87 0 0 0 56 0l31.23 31.24a89.81 89.81 0 0 1-118.44 0Z" />
  </Svg>
);
const Memo = memo(SvgLifebuoyLight);
export default Memo;
