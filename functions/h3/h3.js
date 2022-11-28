const handler = async (event) => {

    if(event.httpMethod == "PUT"){
      try {
        return {
          statusCode: 200,
          body: JSON.stringify({ "content": "put"}),
    
        }
      } catch (error) {
        return { statusCode: 500, body: error.toString() }
      }
  
    }
   
  }
  
  module.exports = { handler }