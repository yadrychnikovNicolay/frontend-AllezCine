
///////////////////////////////// onload age restriction
$(window).on('load' , function(){
  $('#myModal3').modal({
    backdrop: 'static',
    keyboard: false
  });
  $('#myModal3').modal('show');
   $('#giveAcces').on('click' , function (){
      $('#myModal3').modal('hide');
})
       $('#denyAcces').on('click' , function(){
        $(location).attr('href', 'http://imdb.com')
   })
})
//////////////////////////////////
$(document).ready(function(){
$('#searchButton').on('mouseover' , function (){
    $(this).addClass('animated rubberBand')
 })
  $('#searchButton').on(' mouseleave' , function(){
    $(this).removeClass('animated rubberBand')
  })

$('#logo').on('mouseenter' , function(){
  $(this).addClass('animated rubberBand').delay(2000)
});
$('#logo').on('mouseleave' , function(){
  $(this).removeClass('animated rubberBand')
});
$('#regiButton').on('click' , function (){
  $('#myModal').modal();
})
$('#regiButton1').on('click' , function (){
  $('#myModal1').modal();
});
$('.card').on('mouseenter' , function(){
  $(this).addClass('hover');
})
$('.card').on('mouseleave' , function(){
  $(this).removeClass('hover');
})

$('.showFilms').on('click' , function () {
  $('#hidden').removeAttr('id').attr('show');
  })

 $(window).scroll(function() {
  if ($('body').height() <= ($(window).height() + $(window).scrollTop())) {
  $('#hiddenIcon').removeClass('hidden')
    }
  });
})



$(".movie-item").click(function() {
  let title = $(this).attr('data-title');
  let year = $(this).attr('data-year');
  let trailer = $(this).attr('data-trailer');
  let genre = $(this).attr('data-genre')
  let synopsis = $(this).attr('data-synopsis');
  let rating =$(this).attr('data-score');
  $(".title").text(title);
  $('.genre').text(genre);
  $(".year").text("Release : " + year);
  $("#modalPreview").html('<div class="embed-responsive embed-responsive-16by9"><<iframe width=450 height=250 src="' + trailer + '" frameborder="0" encrypted-media allowfullscreen></iframe></div>');
  $("#modalPreview").append("<div  style = margin-top:1em class=synopsis>" +  synopsis + "</div>");
});

$(".card-img-top").on("click", function() {
   $('#imagepreview').attr('src', $(this).attr('src')); // here asign the image to the modal when the user click the enlarge link
   let title = $(this).siblings('.movie-item').attr('data-title');
   $('#myModalLabel').html(title)
   $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});
