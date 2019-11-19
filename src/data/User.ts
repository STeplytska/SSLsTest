export default class User {
    email: string;
    password: string;
    message: string;
    messagePass: string;

    constructor(email: string, password: string, message: string, messagePass: string) {
        this.email = email;
        this.password = password;
        this.message = message;
        this.messagePass = messagePass;
    }
}