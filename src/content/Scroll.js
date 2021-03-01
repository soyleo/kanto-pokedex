const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', height: '60vh' }}>
            {props.children}
        </div>
    );
}

export default Scroll;