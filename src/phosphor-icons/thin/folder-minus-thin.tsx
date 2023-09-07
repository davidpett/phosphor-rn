import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderMinusThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 76h-86.34l-28.49-28.48A11.9 11.9 0 0 0 92.69 44H40a12 12 0 0 0-12 12v144.62A11.4 11.4 0 0 0 39.38 212h177.51A11.12 11.12 0 0 0 228 200.89V88a12 12 0 0 0-12-12ZM40 52h52.69a4 4 0 0 1 2.82 1.17L118.34 76H36V56a4 4 0 0 1 4-4Zm180 148.89a3.12 3.12 0 0 1-3.11 3.11H39.38a3.39 3.39 0 0 1-3.38-3.38V84h180a4 4 0 0 1 4 4ZM156 144a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgFolderMinusThin);
export default Memo;