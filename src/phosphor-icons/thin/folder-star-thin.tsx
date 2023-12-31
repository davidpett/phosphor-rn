import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderStarThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 84a4 4 0 0 1 4 4v32a4 4 0 0 0 8 0V88a12 12 0 0 0-12-12h-86.34l-28.49-28.49A11.93 11.93 0 0 0 92.69 44H40a12 12 0 0 0-12 12v144.61A11.4 11.4 0 0 0 39.38 212h81.18a4 4 0 0 0 0-8H39.38a3.39 3.39 0 0 1-3.38-3.39V84ZM40 52h52.69a4 4 0 0 1 2.82 1.17L118.34 76H36V56a4 4 0 0 1 4-4Zm195.81 108.41a4 4 0 0 0-3.5-2.79l-32.24-2.49-12.4-28.72a4 4 0 0 0-7.34 0l-12.4 28.72-32.24 2.49a4 4 0 0 0-2.24 7.08l24.46 20.19-7.46 30.11a4 4 0 0 0 5.91 4.41L184 203.18l27.64 16.27a4 4 0 0 0 2 .55 4.05 4.05 0 0 0 2.39-.79 4 4 0 0 0 1.49-4.17l-7.46-30.15 24.46-20.19a4 4 0 0 0 1.29-4.29Zm-32.76 19.91a4 4 0 0 0-1.33 4.05l5.78 23.36-21.5-12.64a4 4 0 0 0-4.06 0l-21.44 12.64 5.78-23.36a4 4 0 0 0-1.33-4.05l-18.76-15.48 24.81-1.92a4 4 0 0 0 3.36-2.4L184 138.1l9.68 22.42a4 4 0 0 0 3.36 2.4l24.77 1.92Z" />
  </Svg>
);
const Memo = memo(SvgFolderStarThin);
export default Memo;
