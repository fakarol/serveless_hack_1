const output =  require("@output");

const handler = async (event) => {
        let {
        httpMethod:method,
        queryStringParameters:p
    } = event

    if ( method == "GET") {

        return output(p)
    }

    return output({})
        
        }

      module.exports = { handler }
