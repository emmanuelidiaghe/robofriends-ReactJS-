const scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '3px solid white',borderRadius: '5px', height: '500px'}}>
            {props.children}
        </div>
    )
}

export default scroll;