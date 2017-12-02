var mumble = function (str) {
  if (str.indexOf('[[') === -1) return str;

  var start = 0;
  var end = 0;
  var brackets = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === '[' && str[i+1] === '[') {
      if (brackets === 0) start = i+2;
      brackets++;
    }

    if (str[i] === ']' && str[i+1] === ']') {
      if (brackets === 1) {
        end = i;
        break;
      }
      brackets--;
    }
  }

  var options = mumble(str.substring(start, end)).split('][');
  var randomOpt = options[Math.floor(Math.random()*options.length)];

  var substring = str.substring(0, start-2) + randomOpt + str.substring(end+2);

  return mumble(substring);
};
