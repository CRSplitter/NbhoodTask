


let get = function(url, cb)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() { 
        if (xhr.readyState == 4 && xhr.status == 200)
            cb(xhr.response);
    }
    xhr.open("GET", url, true);
    xhr.send();
    
}
let parseAndMap = (itemsToParseAndMap, attribute) => {
  let result =JSON.parse(itemsToParseAndMap)
  result.map(element => element.source = attribute)
  return result
}

get('http://localhost:3000/', function(localpressItems) {
  parsedItems = []
  let localpressItemsArray = parseAndMap(localpressItems, 'localpress')
  
      get('http://localhost:3000/', function(globalpressItems) {
       let globalpressItemsArray = parseAndMap(globalpressItems, 'globalpress')
        parsedItems = localpressItemsArray.concat(globalpressItemsArray)
        parsedItems.sort((obj1, obj2)=> obj1.timestamp-obj2.timestamp)
      })
   
  })
  

 

