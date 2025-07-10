const Eventhandler = () => {
    return (
        <>
            <div>
                <Play />
                <Upload />
              
            </div>
        </>
    )
}
export default Eventhandler

function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

function Play({ }) {

    return (
        <Button onClick={() => alert('Plaing!')}>
            Play
        </Button>
    );

}

function Upload() {
    return (
        <Button onClick={() => alert('Uploading!')}>
            Upload
        </Button>
    );
}




