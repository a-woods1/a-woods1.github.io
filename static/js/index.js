
    var modal; 

    /*
    function hover(){
        $("#palette").attr("src", "assets/icons/palette2.png");
    }

    function unhover(){
        $("#palette").attr("src", "assets/icons/palette.png");
    }
    */
    function displayModal(){
        $("#animatedModal").show();      
    }
    
    function closeModal(){
        modal.close();
    }
        
    $(document).ready(function(){
        
        new WOW().init();
    
        var scroll = new SmoothScroll('a[href*="#"]', {
            // Selectors
            ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
            header: null, // Selector for fixed headers (must be a valid CSS selector)

            // Speed & Easing
            speed: 500, // Integer. How fast to complete the scroll in milliseconds
            offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
            easing: 'Linear', // Easing pattern to use
            customEasing: function (time) {}, // Function. Custom easing pattern

            // Callback API
            before: function () {}, // Callback to run before scroll
            after: function () {} // Callback to run after scroll
        });
        
        modal = $("#modal").animatedModal({
            modalTarget: 'animatedModal',
            animatedIn: 'slideInRight',
            animatedOut: 'slideOutRight',
            color: '#20252a' /* black */
            /*,
                // Callbacks
            beforeOpen: function() {
                console.log("The animation was called");
            },           
            afterOpen: function() {
                console.log("The animation is completed");
            }, 
            beforeClose: function() {
                console.log("The animation was called");
            }, 
            afterClose: function() {
            console.log("The animation is completed");
            }
            */
        });

        
        $("#show_more").click(function(){
            $(".mobile_hidden").show();
            $("#show_more").hide();
        });
        
    });
