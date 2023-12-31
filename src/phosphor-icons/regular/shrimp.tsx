import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShrimp = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M136 116a12 12 0 1 1 12 12 12 12 0 0 1-12-12Zm87.8-30.62A80.09 80.09 0 0 1 144 160h-32a12 12 0 0 0 0 24h56a8 8 0 0 1 0 16h-48v16h32a8 8 0 0 1 0 16H96a80 80 0 0 1 0-160h116a12 12 0 0 0 0-24h-84a24 24 0 0 1-24-24 8 8 0 0 1 16 0 8 8 0 0 0 8 8h84a28 28 0 0 1 11.8 53.38Zm-173 111.91 33.22-23.73V172a28 28 0 0 1 1-7.48L33 140.87a63.74 63.74 0 0 0 17.84 56.42Zm39-8.2-25.68 18.37A63.6 63.6 0 0 0 96 216h8v-17.17a28.13 28.13 0 0 1-14.16-9.74Zm14.2-43.92V88h-8a64.07 64.07 0 0 0-58.22 37.48l55.87 25.39a28 28 0 0 1 10.35-5.7ZM207.5 88H120v56h24a64.09 64.09 0 0 0 63.5-56Z" />
  </Svg>
);
const Memo = memo(SvgShrimp);
export default Memo;
