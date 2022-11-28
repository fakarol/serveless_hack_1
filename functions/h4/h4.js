const handler = async (event) => {

    if(event.httpMethod == "DELETE"){
      try {
        return {
          statusCode: 200,
          body: JSON.stringify({ "content": "delete"}),
    
        }
      } catch (error) {
        return { statusCode: 500, body: error.toString() }
      }
  
    }
   
  }
  
  module.exports = { handler }