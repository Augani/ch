import { Component } from 'react';
import IDecayingViewProps from './IDecayingViewProps';

/**
 * A component that decays to nothing when it
 * has the `isVisible` prop set to `false`, or
 * there are no non-decayed children.
 */
export class DecayingView extends Component<IDecayingViewProps> {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public render() {
    if (!this.props.isVisible || this.props.children === undefined) {
      return null;
    }

    return this.props.children;
  }
}
