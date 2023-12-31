import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandPointingThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M188 92a23.88 23.88 0 0 0-16.07 6.19A24 24 0 0 0 132 82.13V44a24 24 0 0 0-48 0v94l-11.25-18.06A24 24 0 0 0 31.2 144l4.68 8.25C53.21 182.8 64.66 203 77.66 216.33 91.28 230.3 105.86 236 128 236a84.09 84.09 0 0 0 84-84v-36a24 24 0 0 0-24-24Zm16 60a76.09 76.09 0 0 1-76 76c-40 0-51.35-20.08-85.16-79.71L38.15 140a16 16 0 0 1 27.71-16 .75.75 0 0 1 .07.12l18.68 30A4 4 0 0 0 92 152V44a16 16 0 0 1 32 0v68a4 4 0 0 0 8 0v-12a16 16 0 0 1 32 0v20a4 4 0 0 0 8 0v-4a16 16 0 0 1 32 0Z" />
  </Svg>
);
const Memo = memo(SvgHandPointingThin);
export default Memo;
