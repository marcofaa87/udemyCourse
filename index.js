$('document').ready
(
    function()
    {
        $('body').mousemove
        (
            function(event)
            {
                var R = Math.floor(Math.random()*255);
                var G = Math.floor(Math.random()*255);
                var B = Math.floor(Math.random()*255);
                var rgb = 'rgb('+R+','+G+','+B+')';
                $("body").get(0).style.setProperty("--f1", rgb);
            }
        )
    }
)