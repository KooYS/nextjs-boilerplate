import 'twin.macro';
import { css as cssImport } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import styledImport from '@emotion/styled';

declare module 'twin.macro' {
  // The styled and css imports
  // eslint-disable-next-line no-unused-vars
  const styled: typeof styledImport;
  // eslint-disable-next-line no-unused-vars
  const css: typeof cssImport;
}

declare module 'react' {
  // The css prop
  // eslint-disable-next-line no-unused-vars, no-undef
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSInterpolation;
  }
  // The inline svg css prop
  // eslint-disable-next-line no-unused-vars, no-undef, @typescript-eslint/no-unused-vars
  interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    css?: CSSInterpolation;
  }
}
// The 'as' prop on styled components
declare global {
  // eslint-disable-next-line no-unused-vars
  namespace JSX {
    // eslint-disable-next-line no-unused-vars, no-undef
    interface IntrinsicAttributes<T> extends DOMAttributes<T> {
      as?: string;
    }
  }
}
