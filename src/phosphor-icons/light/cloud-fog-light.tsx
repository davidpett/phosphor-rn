import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCloudFogLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M120 198H72a6 6 0 0 1 0-12h48a6 6 0 0 1 0 12Zm64-12h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12Zm-24 32h-56a6 6 0 0 0 0 12h56a6 6 0 0 0 0-12Zm70-126a74.09 74.09 0 0 1-74 74H76a50 50 0 1 1 10.2-99A74.08 74.08 0 0 1 230 92Zm-12 0a62.06 62.06 0 0 0-124-3.65 6 6 0 0 1-12-.7 75.84 75.84 0 0 1 1.07-9A38 38 0 1 0 76 154h80a62.07 62.07 0 0 0 62-62Z" />
  </Svg>
);
const Memo = memo(SvgCloudFogLight);
export default Memo;
