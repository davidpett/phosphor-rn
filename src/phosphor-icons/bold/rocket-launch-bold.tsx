import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRocketLaunchBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M227.85 46.89a20 20 0 0 0-18.74-18.74c-13.13-.77-46.65.42-74.48 28.24L131 60H74.36a19.83 19.83 0 0 0-14.14 5.86l-34.35 34.33a20 20 0 0 0 11.35 33.95l37.14 5.18 42.32 42.32 5.19 37.18A19.88 19.88 0 0 0 135.34 235a20.13 20.13 0 0 0 6.37 1 19.9 19.9 0 0 0 14.1-5.87l34.34-34.35a19.85 19.85 0 0 0 5.85-14.14V125l3.6-3.59c27.83-27.87 29.02-61.41 28.25-74.52ZM76 84h31l-31.25 31.28-27.23-3.8Zm75.6-10.63A72.27 72.27 0 0 1 204 52a72.17 72.17 0 0 1-21.38 52.41L128 159l-31-31ZM172 180l-27.49 27.49-3.8-27.23L172 149Zm-71.67 21.62C91.67 213.65 74.16 228 40 228a12 12 0 0 1-12-12c0-34.15 14.35-51.66 26.39-60.33a12 12 0 0 1 14 19.47c-6 4.31-12.89 12.5-15.42 27.87 15.37-2.53 23.56-9.44 27.87-15.42a12 12 0 1 1 19.47 14Z" />
  </Svg>
);
const Memo = memo(SvgRocketLaunchBold);
export default Memo;
