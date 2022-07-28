import React from "react";

const LazyLoader = (importComponent, fallback) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null,
      };
    }
    //set to state and load component
    componentDidMount() {
      importComponent().then((com) =>
        this.setState({ component: com.default })
      );
    }
    render() {
      const CompoState = this.state.component;
      return CompoState ? (
        <CompoState {...this.props} />
      ) : fallback ? (
        fallback
      ) : (
        <div>
          loading...
        </div>
      );
    }
  };
};

export default LazyLoader;
