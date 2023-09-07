import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileDocThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M52 148H36a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h16a32 32 0 0 0 0-64Zm0 56H40v-48h12a24 24 0 0 1 0 48Zm166.77-6a4 4 0 0 1 .12 5.66A26.11 26.11 0 0 1 200 212c-15.44 0-28-14.36-28-32s12.56-32 28-32a26.11 26.11 0 0 1 18.89 8.36 4 4 0 1 1-5.78 5.54A18.15 18.15 0 0 0 200 156c-11 0-20 10.77-20 24s9 24 20 24a18.15 18.15 0 0 0 13.11-5.9 4 4 0 0 1 5.66-.1ZM128 148c-15.44 0-28 14.36-28 32s12.56 32 28 32 28-14.36 28-32-12.56-32-28-32Zm0 56c-11 0-20-10.77-20-24s9-24 20-24 20 10.77 20 24-9 24-20 24Zm-80-88a4 4 0 0 0 4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v20a4 4 0 0 0 8 0V88a4 4 0 0 0-1.17-2.83l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 4 4Zm108-74.35L198.34 84H156Z" />
  </Svg>
);
const Memo = memo(SvgFileDocThin);
export default Memo;
