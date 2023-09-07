import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVirtualRealityThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m119.71 97.51-26 64a4 4 0 0 1-7.42 0l-26-64a4 4 0 0 1 7.42-3L90 149.37l22.29-54.88a4 4 0 0 1 7.42 3ZM252 128a76.08 76.08 0 0 1-76 76H80a76 76 0 0 1 0-152h96a76.08 76.08 0 0 1 76 76Zm-8 0a68.07 68.07 0 0 0-68-68H80a68 68 0 0 0 0 136h96a68.07 68.07 0 0 0 68-68Zm-68.5 9.06 12 21a4 4 0 0 1-1.49 5.45 3.92 3.92 0 0 1-2 .53 4 4 0 0 1-3.47-2l-12.75-22.34a24.85 24.85 0 0 1-3.79.3h-16v20a4 4 0 0 1-8 0V96a4 4 0 0 1 4-4h20a24 24 0 0 1 11.5 45.06ZM180 116a16 16 0 0 0-16-16h-16v32h16a16 16 0 0 0 16-16Z" />
  </Svg>
);
const Memo = memo(SvgVirtualRealityThin);
export default Memo;
