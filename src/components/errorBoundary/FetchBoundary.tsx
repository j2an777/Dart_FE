import { Component, ComponentProps, ComponentType, PropsWithChildren } from 'react';
import { ErrorFallback } from '..';

export interface FallbackProps {
  error: Error | null;
}

type ErrorFallbackProps = ComponentProps<typeof ErrorFallback>;

interface Props {
  fallback: ComponentType<ErrorFallbackProps>;
  onReset: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

const initialState: State = {
  hasError: false,
  error: null,
};

class FetchBoundary extends Component<PropsWithChildren<Props>, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }
  reset() {
    this.setState(initialState);
    this.props.onReset();
  }

  static getDerivedStateFromError(error: Pick<State, 'error'>) {
    return { hasError: true, error };
  }

  render() {
    const Fallback = this.props.fallback;
    const onReset = this.reset.bind(this);
    if (this.state.error) {
      return <Fallback onReset={onReset} />;
    }

    return this.props.children;
  }
}

export default FetchBoundary;
