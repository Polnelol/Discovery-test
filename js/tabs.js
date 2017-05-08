//tabs 1

(function($){               
    jQuery.fn.lightTabs1 = function(options){
        
        var createTabs1 = function(){
            tabs1 = this;
            i = 0;
            
            showPage1 = function(i){
                $(tabs1).children("div").children("div").hide();
                $(tabs1).children("div").children("div").eq(i).show();
                $(tabs1).children("ul").children("li").removeClass("active");
                $(tabs1).children("ul").children("li").eq(i).addClass("active");
            }
            
            showPage1(0);                
            
            $(tabs1).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(tabs1).children("ul").children("li").click(function(){
                showPage1(parseInt($(this).attr("data-page")));
            });             
        };      
        return this.each(createTabs1);
    };  
})(jQuery);
$(document).ready(function(){
    $(".trouble__tabs-1").lightTabs1();
});

//tabs 2

(function($){               
    jQuery.fn.lightTabs2 = function(options){
        
        var createTabs2 = function(){
            tabs2 = this;
            i = 0;
            
            showPage2 = function(i){
                $(tabs2).children("div").children("div").hide();
                $(tabs2).children("div").children("div").eq(i).show();
                $(tabs2).children("ul").children("li").removeClass("active");
                $(tabs2).children("ul").children("li").eq(i).addClass("active");
            }
            
            showPage2(0);                
            
            $(tabs2).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(tabs2).children("ul").children("li").click(function(){
                showPage2(parseInt($(this).attr("data-page")));
            });             
        };      
        return this.each(createTabs2);
    };  
})(jQuery);
$(document).ready(function(){
    $(".trouble__tabs-2").lightTabs2();
});

