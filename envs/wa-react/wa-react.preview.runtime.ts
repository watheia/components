import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { ThemeCompositions } from '@waweb/docs.theme.theme-compositions';
import { Theme } from '@waweb/base-ui.theme.theme-provider';
import { WaReactAspect } from './wa-react.aspect';

export class WaReactPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const myReactPreviewMain = new WaReactPreviewMain();
    // register a new provider to wrap all compositions
    // using this environment with a custom theme.
    react.registerProvider([ThemeCompositions, Theme]);
    return myReactPreviewMain;
  }
}

WaReactAspect.addRuntime(WaReactPreviewMain);
