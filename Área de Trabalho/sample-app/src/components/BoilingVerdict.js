function BoilingVerdict(props){
    if (props.celsius > 100) {
        return <p>A água ferveria.</p>;
    }
    return <p>Á água não ferveria.</p>;
}