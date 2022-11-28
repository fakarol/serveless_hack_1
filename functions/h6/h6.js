const output = require("@output")

const handler = async (event) => {

  switch (event.httpMethod) {
    case "GET":
      return output({"method":"GET" , "content":"message GET"})
      
    case "POST":
      return output({"method":"POST" , "content":"message POST"})

    case "PUT":
      return output({"method":"PUT" , "content":"message PUT"})

    case "DELETE":
      return output({"method":"DELETE" , "content":"message DELETE"})

    default:
      return output({})
  }  
    
      }

module.exports = { handler }