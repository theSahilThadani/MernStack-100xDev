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
function Getone(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://theSahilThadani:IgKE4zajTkS2@ep-square-limit-90874182.us-east-2.aws.neon.tech/BackendMaster?sslmode=require"
        });
        try {
            yield client.connect();
            const queryGetOne = 'SELECT * FROM accounts WHERE username = $1';
            const values = [username];
            const res = yield client.query(queryGetOne, values);
            console.log(res.rows);
        }
        catch (e) {
            console.log(e);
        }
        finally {
            yield client.end();
        }
    });
}
Getone('theSahilThadani');
