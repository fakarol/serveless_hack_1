const output =  require("@output");

const handler = async (event) => {
        let lista = ["foo", "bar", "baz", "qux", "fred"]
        let {
        httpMethod:method,
        queryStringParameters:p
    } = event
         let {payload} = p;
         var item = lista.find(function(current){
            return current == payload
        })

    if ( method == "GET" && item ) {

       
        return output(p)
        
    }

    return output("NOT FOUND")
        
        }

      module.exports = { handler }