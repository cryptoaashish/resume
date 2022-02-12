const hoc = function(WrappedComponent, props) {
    return <WrappedComponent {...props} />;
};

export default hoc;