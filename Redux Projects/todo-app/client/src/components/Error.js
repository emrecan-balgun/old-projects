function Error({ message }) {
    return (
        <div style={{ padding: 15, fontSize: 16, color: 'red', opacity: 0.8}}>
            Error: {message}
        </div>
    )
}

export default Error
