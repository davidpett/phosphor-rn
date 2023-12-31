import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderDashedLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M94 208a6 6 0 0 1-6 6H39.38A13.39 13.39 0 0 1 26 200.62V192a6 6 0 0 1 12 0v8.62a1.4 1.4 0 0 0 1.38 1.38H88a6 6 0 0 1 6 6Zm66-6h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12Zm64-56a6 6 0 0 0-6 6v48.89a1.11 1.11 0 0 1-1.11 1.11H200a6 6 0 0 0 0 12h16.89A13.12 13.12 0 0 0 230 200.89V152a6 6 0 0 0-6-6Zm-8-72h-48a6 6 0 0 0 0 12h48a2 2 0 0 1 2 2v24a6 6 0 0 0 12 0V88a14 14 0 0 0-14-14ZM26 80V56a14 14 0 0 1 14-14h52.69a13.94 13.94 0 0 1 9.9 4.1l29.65 29.66A6 6 0 0 1 128 86H32a6 6 0 0 1-6-6Zm12-6h75.51L94.1 54.59a2 2 0 0 0-1.41-.59H40a2 2 0 0 0-2 2Zm-6 84a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6Z" />
  </Svg>
);
const Memo = memo(SvgFolderDashedLight);
export default Memo;
