let jsonfile = require('jsonfile')

function pages(pageList){
    jsonfile.readFileSync(file, function(err, obj) {
      console.log(obj)
    })
}
