import * as React from 'react';
export interface ConfettiProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'ref'> {
    particleCount?: number;
    duration?: number;
    colors?: string[];
    particleSize?: number;
    force?: number;
    height?: number | string;
    width?: number;
    zIndex?: number;
}
declare function ConfettiExplosion({ particleCount, duration, colors, particleSize, force, height, width, zIndex, ...props }: ConfettiProps): JSX.Element;
export default ConfettiExplosion;
