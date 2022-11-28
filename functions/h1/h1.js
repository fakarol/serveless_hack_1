
const handler = async (event) => {

  if(event.httpMethod == "GET"){
    try {
      return {
        statusCode: 200,
        body: JSON.stringify({ "content": "get"}),
  
      }
    } catch (error) {
      return { statusCode: 500, body: error.toString() }
    }

  }
 
}

module.exports = { handler }
