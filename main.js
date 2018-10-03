let templateString = document.getElementById('template').innerHTML;

Handlebars.registerHelper('link', function(instagram) {
  // text = Handlebars.Utils.escapeExpression(text);
  Url  = Handlebars.Utils.escapeExpression(instagram);
  var result = "<a href='" + Url + "'></a>";
  return new Handlebars.SafeString(result);
});


let renderResults = Handlebars.compile(templateString);

let url = 'https://thejsguy.com/teaching/2018/api/v2/restaurants.json';

let promise  = $.ajax({
  type:  'GET',
  url: url
});

promise.then(function(response){
  console.log(response);

  let renderedResults = renderResults({
    RestaurantResults: response.data
  });

let html = 'Loading...';


    $('#results').append(renderedResults);

  }, function(error){
    console.log('error',error);
  });
