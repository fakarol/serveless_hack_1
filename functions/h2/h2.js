const handler = async (event) => {

    if(event.httpMethod == "POST"){
      try {
        return {
          statusCode: 200,
          body: JSON.stringify({ "content": "post"}),
    
        }
      } catch (error) {
        return { statusCode: 500, body: error.toString() }
      }
  
    }
   
  }
  
  module.exports = { handler }
  