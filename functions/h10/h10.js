const middy = require("middy");
const {jsonBodyParser} = require("middy/middlewares")
const output =  require("@output");

const postLista = async (event) => {
        let lista = ["foo", "bar", "baz", "qux", "fred"]
        let {
        httpMethod:method,
        queryStringParameters:p,
        body:b
    } = event;       
    let {payload} = b;
    var rray = lista.find(function(current){
        return current == payload
    })
    if ( method == "GET" && rray) {
    
        return output(b)      
    }
    return output("NOT FOUND")      
    } 

      exports.handler = middy(postLista)
                        .use(jsonBodyParser())