import { Component, ComponentType, PropsWithChildren } from 'react';

export interface FallbackProps {
  error: Error | null;
}

interface Props {
  fallback: ComponentType<FallbackProps>;
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
  }

  static getDerivedStateFromError(error: Pick<State, 'error'>) {
    return { hasError: true, error };
  }

  render() {
    const Fallback = this.props.fallback;
    const { error } = this.state;
    if (this.state.error) {
      return <Fallback error={error} />;
    }

    return this.props.children;
  }
}

export default FetchBoundary;
