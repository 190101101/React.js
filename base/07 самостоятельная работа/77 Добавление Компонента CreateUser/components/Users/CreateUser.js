const CreateUser = () => {

    const createUser = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={createUser}>
            <div>
                <label htmlFor="name">name</label>
                <input id="name" type="text"/>
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input id="password" type="password"/>
            </div>
            <div>
                <button type="submit">add user</button>
            </div>
        </form>
    );
}

export default CreateUser;