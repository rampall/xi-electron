import { elt } from '../../utils/dom';
import { STYLES } from '../style-map';
import { COLORS } from '../theme';

import { View, ViewOptions, Viewport } from './index';
import ViewController from '../view-controller';
import FontMetrics from './font-metrics';
import LineCache from '../line-cache';

/**
 * A View built by using the DOM.
 */
export default class DOMView implements View {

  // Wrapper element.
  private wrapper: HTMLElement;

  // Parent ViewController's FontMetrics.
  private metrics: FontMetrics;

  // Parent ViewController's LineCache.
  private lineCache: LineCache;

  /**
   * Create the view.
   * @param  {ViewController} controller Parent ViewController.
   * @param  {FontMetrics}    metrics    Font measurements.
   * @param  {ViewOptions}    opts       Configuration options.
   */
  constructor(controller: ViewController,  opts: ViewOptions) {
    this.wrapper = controller.wrapper;
  }

  /**
   * Called whenever the view is resized.
   */
  resize(): void {/* ... */}

  /**
   * Scrolls so that the given "line" and "char" are visible in the view.
   * @param  {number} line Line number.
   * @param  {number} char Column number.
   */
  scrollTo(line: number, char: number): void {/* ... */}

  /**
   * Get information about the currently visible viewport of the editor.
   * @return {Object} An object with measurements about the current viewport:
   *                  "top" and "height" are measured in lines, "left" and
   *                   "width" in chars.
   */
  getViewport(): Viewport {
    return {
      top:    0,
      height: 0,
      left:   0,
      width:  0
    };
  }

  // Renders the document.
  render(): void {/* ... */}
}
