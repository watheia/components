import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { DocsTheme } from '@waweb/docs.theme.docs-theme';
import { WaReactAspect } from './wa-react.aspect';

export class WaReactPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const previewMain = new WaReactPreviewMain();
    // register a new provider to wrap all compositions
    // using our custom theme.
    react.registerProvider([DocsTheme]);
    return previewMain;
  }
}

WaReactAspect.addRuntime(WaReactPreviewMain);
