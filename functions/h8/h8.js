const middy = require("middy");
const {jsonBodyParser} = require("middy/middlewares")
const output =  require("@output");

const postLista = async (event) => {
        let {
        httpMethod:method,
        queryStringParameters:p,
        body:b
    } = event;       

    if ( method == "GET") {
       let {item}= p;
        return output(b)      
    }
    return output({})      
    } 

      exports.handler = middy(postLista)
                        .use(jsonBodyParser())