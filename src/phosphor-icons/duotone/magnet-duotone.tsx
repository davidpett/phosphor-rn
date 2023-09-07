import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMagnetDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="m168.36 200.36-30 29.35a8 8 0 0 1-11.26-.05L98.46 201a8 8 0 0 1 .08-11.4l30-29Zm-142-82.76a8 8 0 0 0 0 11.28L55 157.54a8 8 0 0 0 11.38-.06l29.18-29.92-39.79-39.79Z"
      opacity={0.2}
    />
    <Path d="M207 50.25A87.46 87.46 0 0 0 144.6 24h-.33A87.48 87.48 0 0 0 82 49.81l-31.89 32.3L20.61 112a16 16 0 0 0 .06 22.56l28.66 28.66a15.92 15.92 0 0 0 11.32 4.69h.09a16 16 0 0 0 11.36-4.82l60.9-62.4a16.08 16.08 0 0 1 22.41-.21 15.6 15.6 0 0 1 4.73 11.19 16.89 16.89 0 0 1-4.85 12L93 183.88a16 16 0 0 0-.17 22.79l28.66 28.66a16.06 16.06 0 0 0 22.52.12l61.8-60.45c34.45-34.5 34.98-90.44 1.19-124.75ZM60.65 151.89 32 123.24l23.8-24.12 28.52 28.52ZM132.79 224l-28.68-28.65 24.38-23.57L157 200.32Zm61.76-60.44-26.11 25.54L140 160.68l26.44-25.57.1-.09a33 33 0 0 0 9.57-23.5A31.44 31.44 0 0 0 166.47 89a32.2 32.2 0 0 0-44.9.5l-26.08 26.68L67 87.74l26.35-26.65A71.51 71.51 0 0 1 144.27 40h.27a71.55 71.55 0 0 1 51.05 21.48c27.66 28.07 27.16 73.9-1.04 102.1Z" />
  </Svg>
);
const Memo = memo(SvgMagnetDuotone);
export default Memo;