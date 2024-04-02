"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const clinet = new pg_1.Client({
    connectionString: "postgresql://theSahilThadani:IgKE4zajTkS2@ep-square-limit-90874182.us-east-2.aws.neon.tech/BackendMaster?sslmode=require"
});
function InsertToDb(Accounts) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield clinet.connect();
            const { username, email, password } = Accounts;
            const Inserquery = 'INSERT INTO accounts (username,email,password) VALUES ($1,$2,$3)';
            const VALUE = [username, email, password];
            const res = yield clinet.query(Inserquery, VALUE);
            console.log("Insertion Completed response: " + res);
        }
        catch (e) {
            console.log("Insertion Failed error: " + e);
        }
        finally {
            yield clinet.end(); //close connection
        }
    });
}
const user = {
    username: 'theSahilThadani',
    email: 'SahilThadani@gmail.com',
    password: 'Sahil@1234',
};
InsertToDb(user);
