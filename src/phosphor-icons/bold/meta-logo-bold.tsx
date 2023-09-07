import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMetaLogoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M244 149.31c0 16.84-3.37 31.33-9.75 41.91-8.19 13.59-20.92 20.78-36.81 20.78-30.33 0-50.72-38.05-72.3-78.33C109.46 104.41 90 68 74 68c-7.71 0-17.16 9.37-24.66 24.45A133.82 133.82 0 0 0 36 149.31c0 12.3 2.24 22.78 6.3 29.52 3.77 6.26 8.94 9.17 16.26 9.17 13.75 0 30.63-29 36.18-38.49a12 12 0 0 1 20.74 12.09c-8.91 15.28-16.53 26-24 33.78C80.75 206.56 70 212 58.56 212c-15.89 0-28.62-7.19-36.81-20.78-6.38-10.58-9.75-25.07-9.75-41.91C12 105.34 35.58 44 74 44c30.33 0 50.72 38.05 72.3 78.33C162 151.59 181.47 188 197.44 188c7.32 0 12.49-2.91 16.26-9.17 4.06-6.74 6.3-17.22 6.3-29.52a133.82 133.82 0 0 0-13.33-56.86C199.17 77.37 189.72 68 182 68c-5.72 0-12.61 5-20.49 14.83a12 12 0 0 1-18.74-15C155.62 51.8 168.45 44 182 44c17.65 0 34 13.41 46.15 37.76A159 159 0 0 1 244 149.31Z" />
  </Svg>
);
const Memo = memo(SvgMetaLogoBold);
export default Memo;
