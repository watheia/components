import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { DocsTheme } from '@waweb/docs.theme.docs-theme';

import { DocumenterReactAspect } from './mdx-env.aspect';

export class DocumenterReactPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const documenterReactPreviewMain = new DocumenterReactPreviewMain();
    // uncomment the line below to register a new provider to wrap all compositions using this environment with a custom theme.
    react.registerProvider([DocsTheme]);

    return documenterReactPreviewMain;
  }
}

DocumenterReactAspect.addRuntime(DocumenterReactPreviewMain);
