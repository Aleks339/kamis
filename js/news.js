(function( $ ){
  $.fn.newsPlugin = function( options ){
      return this.each(function(){
          var $h3 = $('h3');
          var $img = $('img');
          var $p = $('p');
          var $div = $('div');
          var totalAppend = $h3 + $img + $p;
          var xhr = new XMLHttpRequest();
          xhr.open('GET', 'http://test.kamis.ru/api/news');
          xhr.onload = function(){
            if(xhr.status === 200){
                var result = JSON.parse(xhr.responseText);
                for (var i = 0; i < result.length; i++){
                    var title = result[i].title;
                    $h3.append( title );
                    var preview = result[i].preview;
                    $p.append( preview );
                    var image = result[i].image;                        
                    $img.append( image );  
                    $div.append( totalAppend );
                }
            }else{
                alert('404');
            }
      }
      xhr.send();
      return false;
    })
  }
})(jQuery);