const Form  = props => {
    return (
        <>
            <form onSubmit={e => props.onSubmit(e)}>
                {props.children}
            </form>
        </>
    )
}

export default Form;