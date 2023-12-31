import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSpeakerSimpleSlashLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M186 152v-48a6 6 0 0 1 12 0v48a6 6 0 0 1-12 0Zm38-70a6 6 0 0 0-6 6v80a6 6 0 0 0 12 0V88a6 6 0 0 0-6-6Zm-11.56 130a6 6 0 0 1-8.88 8.08L158 169.92V224a6 6 0 0 1-9.68 4.74L77.94 174H32a14 14 0 0 1-14-14V96a14 14 0 0 1 14-14h46.07L43.56 44a6 6 0 0 1 8.88-8ZM146 156.72 89 94H32a2 2 0 0 0-2 2v64a2 2 0 0 0 2 2h48a6 6 0 0 1 3.68 1.26L146 211.73Zm-30.17-89L146 44.27v62.56a6 6 0 0 0 12 0V32a6 6 0 0 0-9.68-4.74l-39.85 31a6 6 0 1 0 7.36 9.47Z" />
  </Svg>
);
const Memo = memo(SvgSpeakerSimpleSlashLight);
export default Memo;
