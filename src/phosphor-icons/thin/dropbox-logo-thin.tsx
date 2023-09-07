import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDropboxLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M234.28 152.71 187 120l47.25-32.71a4 4 0 0 0 0-6.58l-52-36a4 4 0 0 0-4.56 0L128 79.14 78.28 44.71a4 4 0 0 0-4.56 0l-52 36a4 4 0 0 0 0 6.58L69 120l-47.28 32.71a4 4 0 0 0 0 6.58l52 36a4 4 0 0 0 4.56 0L128 160.86l49.72 34.43a4 4 0 0 0 4.56 0l52-36a4 4 0 0 0 0-6.58ZM128 151.14 83 120l45-31.14L173 120Zm52-98.27L225 84l-45 31.13L135 84Zm-104 0L121 84l-45 31.13L31 84Zm0 134.26L31 156l45-31.13L121 156Zm104 0L135 156l45-31.13L225 156Zm-24.82 22.05a4 4 0 0 1-1 5.57l-23.89 16.54a4 4 0 0 1-4.56 0l-23.89-16.54a4 4 0 0 1 4.56-6.58l21.61 15 21.61-15a4 4 0 0 1 5.56 1.01Z" />
  </Svg>
);
const Memo = memo(SvgDropboxLogoThin);
export default Memo;
