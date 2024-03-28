interface configs {
    readonly apiKey:string,
    readonly endpoint:string,
}
const config: Readonly<configs> = {
    apiKey:"798798hisu",
    endpoint:"https://api.example.com"
}
// config.apiKey = 'newkey';
// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.
//