 callPage('home.html');

	  // function load_page(){
	  // 	if(url == '') url="home.html"
	  // }

    function callPage(url){
      $.ajax({
			   url: url,
			   type: "POST",
			   cache: false,
			   data: "",
			   success: function(data){
			   
			   		$(".globalContent").html(data);
			   }
	    });
    }

    $(function() {
    	$(".hover_style li").on("click", function(e) { 
      	  $(this).addClass("active").siblings().removeClass("active");
    	});
		})


