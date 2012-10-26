var calculator = {
   add: function(expression){
       var delimiters = [',', '\n'];
       if (expression === '') {
           return 0;
       }
       var delimiter_regexp = /^\/\/(.+)\n(.+)$/g
       var mat = delimiter_regexp.exec(expression);
       if (mat && mat.length) {
           var delimiters = mat[1].substr(1).substr(0, mat[1].length - 2).split("][");
           expression = mat[2];
       }
       var delimiter = '(' + delimiters.join(")|(") + ')';
       delimiter = delimiter.replace(/\*/g, '\\*');
       console.log(delimiter);
       var numbers = expression.split(new RegExp(delimiter));
       var result = 0;
       var errorString = "";
       for (var i=0; i < numbers.length; i++)
       {
           var number = parseInt(numbers[i]);
           if (number < 0)
           {
               errorString += (errorString.length > 0 ? ", " : " ") + number;
           } else if (number <= 1000 ) {
               result += number;
           }
       }
       if (errorString.length > 0)
       {
           throw "negatives not allowed:" + errorString;
       }
       return result;
   }
}