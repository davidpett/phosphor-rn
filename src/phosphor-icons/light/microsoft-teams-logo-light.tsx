import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMicrosoftTeamsLogoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M82 110H72a6 6 0 0 1 0-12h32a6 6 0 0 1 0 12H94v42a6 6 0 0 1-12 0Zm148-17.26V152a38.05 38.05 0 0 1-36 38 62 62 0 0 1-116 0H40a14 14 0 0 1-14-14V80a14 14 0 0 1 14-14h59.34a38 38 0 0 1 70-28.19A30 30 0 0 1 208 82h11.28A10.75 10.75 0 0 1 230 92.74Zm-56.58-43.29A37.28 37.28 0 0 1 174 56a38 38 0 0 1-10.28 26H184a18 18 0 1 0-10.58-32.55ZM112 66h24a14 14 0 0 1 13.84 12A26 26 0 1 0 112 66ZM40 178h96a2 2 0 0 0 2-2V80a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v96a2 2 0 0 0 2 2Zm146-10V96a2 2 0 0 0-2-2h-34v82a14 14 0 0 1-14 14H91.1a50 50 0 0 0 94.9-22Zm32-74h-20.16a14.71 14.71 0 0 1 .16 2v72a62.69 62.69 0 0 1-.72 9.46A26 26 0 0 0 218 152Z" />
  </Svg>
);
const Memo = memo(SvgMicrosoftTeamsLogoLight);
export default Memo;
