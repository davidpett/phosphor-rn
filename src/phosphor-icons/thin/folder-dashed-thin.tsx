import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderDashedThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M92 208a4 4 0 0 1-4 4H39.38A11.4 11.4 0 0 1 28 200.62V192a4 4 0 0 1 8 0v8.62a3.39 3.39 0 0 0 3.38 3.38H88a4 4 0 0 1 4 4Zm68-4h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8Zm64-56a4 4 0 0 0-4 4v48.89a3.12 3.12 0 0 1-3.11 3.11H200a4 4 0 0 0 0 8h16.89A11.12 11.12 0 0 0 228 200.89V152a4 4 0 0 0-4-4Zm-8-72h-48a4 4 0 0 0 0 8h48a4 4 0 0 1 4 4v24a4 4 0 0 0 8 0V88a12 12 0 0 0-12-12ZM28 80V56a12 12 0 0 1 12-12h52.69a11.9 11.9 0 0 1 8.48 3.52l29.66 29.65A4 4 0 0 1 128 84H32a4 4 0 0 1-4-4Zm8-4h82.34L95.51 53.17A4 4 0 0 0 92.69 52H40a4 4 0 0 0-4 4Zm-4 80a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4Z" />
  </Svg>
);
const Memo = memo(SvgFolderDashedThin);
export default Memo;
