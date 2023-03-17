class CouldNotFindEntityForUsernameAndPassword extends Error {
    constructor(message) {
        super(message);
    }
}

CouldNotFindEntityForUsernameAndPassword.prototype.constructor = CouldNotFindEntityForUsernameAndPassword