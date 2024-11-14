// const accordion = document.getElementsByClassName('menu');
// 	for (i=0; i<accordion.length; i++) {
// 	accordion[i].addEventListener('click', function () {
// 		this.classList.toggle('active');
// 	}) 
// }

// let active = document.querySelectorAll(".sideMenu");
// 		for(let j = 0; j < active.length; j++){
// 		active[j].classList.remove("active");
// 		active[j].nextElementSibling.style.maxHeight = null; //or 0px
// 		}



// try {
// 		var acc = document.getElementsByClassName("menu");
// 		var i;

// 		for (i = 0; i < acc.length; i++) {
//       acc[i].addEventListener("click", function() {
        
//       var panel = this.nextElementSibling;
//       if (panel.style.maxHeight){
//         panel.style.maxHeight = panel.scrollHeight + "px";
//       panel.style.maxHeight = null;
      
//       } else {
//         let active = document.querySelectorAll(".sideMenu .menu.active");
//           for(let j = 0; j < active.length; j++){
//             active[j].classList.remove("active"); if(j!=i){
//               acc[j].nextElementSibling.style.maxHeight = null;
//             }
//             active[j].nextElementSibling.style.maxHeight = null;
//           }
//         this.classList.toggle("active");
//         panel.style.maxHeight = panel.scrollHeight + "px";
//       }
//       });
// 		}
//   } catch (e) {
// 	console.log(e); 
//   }



  var acc = document.getElementsByClassName("label");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        for (let j = 0; j < acc.length; j++) {
        acc[j].classList.remove("active");
          if(j!=i){
            acc[j].nextElementSibling.style.maxHeight = null;
          }
        }
        this.classList.add("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
          this.classList.remove("active");
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });      
    }


    

    

    // document.addEventListener("DOMContentLoaded", (event) => {
    //   console.log("DOM fully loaded and parsed");      
    // });


  //   $("#slideMenu").click(function() { 
  //     console.log('Button clicked!'); 
  //     var menu = $(".left_col");
  //     if ($(menu).is(":visible")) {
  //         $(menu).animate({width: 0}, 1000, function() {$(menu).hide();});
  //     } else {
  //         $(menu).show().animate({width: 100}, 1000);           
  //     }
  // })




    document.addEventListener("DOMContentLoaded", (event) => {

      // let SLIDE = document.querySelector('#slideMenu');
      
      // SLIDE.addEventListener('click', function() {
      //   console.log('Button clicked!'); 
      //   alert('h1');
      // });

    });


    $BODY = $('body'),
    $MENU_TOGGLE = $('#menu_toggle'),
    $SIDEBAR_MENU = $('#sidebar-menu'),
    $SIDEBAR_FOOTER = $('.sidebar-footer'),
    $LEFT_COL = $('.left_col'),
    $RIGHT_COL = $('.right_col'),
    $NAV_MENU = $('.nav_menu'),
    $FOOTER = $('footer');



    $MENU_TOGGLE.on('click', function() {
      if ($BODY.hasClass('nav-md')) {
          $SIDEBAR_MENU.find('li.active ul').hide();
          $SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
      } else {
          $SIDEBAR_MENU.find('li.active-sm ul').show();
          $SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
      }

      $BODY.toggleClass('nav-md nav-sm');

     // setContentHeight();
  });




  var myElement = document.getElementById('sideMenu');
  //var myElement =document.getElementsByClassName("left_col");
new SimpleBar(myElement, { autoHide: true });


   

    








