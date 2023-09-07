import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTiktokLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 76a52.06 52.06 0 0 1-52-52 4 4 0 0 0-4-4h-40a4 4 0 0 0-4 4v132a24 24 0 1 1-34.28-21.69 4 4 0 0 0 2.28-3.62V88a4 4 0 0 0-4.7-3.94C53.49 90.08 28 121 28 156a72 72 0 0 0 144 0v-46.56A99.26 99.26 0 0 0 224 124a4 4 0 0 0 4-4V80a4 4 0 0 0-4-4Zm-4 39.92a91.32 91.32 0 0 1-49.66-17.18A4 4 0 0 0 164 102v54a64 64 0 0 1-128 0c0-29.52 20.32-55.79 48-63v35.31A32 32 0 1 0 132 156V28h32.13A60.11 60.11 0 0 0 220 83.87Z" />
  </Svg>
);
const Memo = memo(SvgTiktokLogoThin);
export default Memo;
