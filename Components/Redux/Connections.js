const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
  })
  
  const mapDispatchToProps = {
    // ... normally is an object full of action creators
  }
  
  // `connect` returns a new function that accepts the component to wrap:
  const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
  )
  // and that function returns the connected, wrapper component:
  const ConnectedComponent = connectToStore(Component)
  
  // We normally do both in one step, like this:
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)