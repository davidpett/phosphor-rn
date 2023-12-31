import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgKnifeLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M230.4 33.6a26 26 0 0 0-36.83.06L19.71 212a6 6 0 0 0 2.94 10.05 153.08 153.08 0 0 0 34.5 3.95c33 0 66.11-10.76 97.22-31.86 31.47-21.35 49.68-45.41 50.44-46.42a6 6 0 0 0-.56-7.85l-20.11-20.14 46.33-49.39a26.09 26.09 0 0 0-.07-36.74Zm-38.46 110.93a226.59 226.59 0 0 1-44.61 39.87c-36.18 24.45-73.55 33.84-111.26 28L146.55 99.09Zm30-82.61-.13.14-46.13 49.18-20.75-20.75 47.18-48.39a14 14 0 0 1 19.8 19.82Z" />
  </Svg>
);
const Memo = memo(SvgKnifeLight);
export default Memo;
