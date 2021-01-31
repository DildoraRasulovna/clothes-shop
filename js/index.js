// const $ = require("jquery");
// selection contact dropdown
$('.drop-select').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.drop-menu').slideToggle(300);
});
$('.drop-select').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.drop-menu').slideUp(300);
});
$('.drop-select .drop-menu li').click(function () {
  $(this).parents('.drop-select').find('span').text($(this).text());
  $(this).parents('.drop-select').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/
// selection

function counter() {
  var oTop;
  if ($('.counter').length !== 0) {
    oTop = $('.counter').offset().top - window.innerHeight;
  }
  if ($(window).scrollTop() > oTop) {
    $('.counter').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        }
      });
    });
  }
}
$(window).on('scroll', function () {
  counter();
});




// DATA SOURCE 
let data = [
  // DRESSES
  {
    title: "Long dress",
    imgUrl: "images/ld1.jpg",
    price: "15$",
    material: "Chenille",


  },
  {
    title: "Long dress",
    imgUrl: "images/ld2.jpg",
    price: "16$",
    material: "Canvas",

  },
  {
    title: "Long dress",
    imgUrl: "images/ld3.jpg",
    price: "13$",
    material: "Cashmere",


  },
  {
    title: "Long dress",
    imgUrl: "images/ld4.jpg",
    price: "14$",
    material: "Cashmere",


  },
  {
    title: "Long dress",
    imgUrl: "images/ld5.jpg",
    price: "18$",
    material: "Chenille",

  },
  {
    title: "Short dress",
    imgUrl: "images/ld6.jpg",
    price: "10$",
    material: "Chenille",

  },
  {
    title: "Short dress",
    imgUrl: "images/ld7.jpg",
    price: "11$",
    material: "Chiffon",
  },
  {
    title: "Short dress",
    imgUrl: "images/ld8.jpg",
    price: "16$",
    material: "Crêpe",
  },
  {
    title: "Short dress",
    imgUrl: "images/ld9.jpg",
    price: "15$",
    material: "Damask",
  },
  {
    title: "Long dress",
    imgUrl: "images/ld10.jpg",
    price: "19$",
    material: "Damask",
  },
  // BAGS
  {
    title: "Bag",
    imgUrl: "images/bag1.jpg",
    price: "19$",
    material: "Nylon",
  },
  {
    title: "Bag",
    imgUrl: "images/bag2.jpg",
    price: "22$",
    material: "Nylon",
  },
  {
    title: "Bag",
    imgUrl: "images/bag3.jpg",
    price: "8$",
    material: "Denim",
  },
  {
    title: "Bag",
    imgUrl: "images/bag4.jpg",
    price: "10$",
    material: "Mesh",
  },
  {
    title: "Bag",
    imgUrl: "images/bag5.jpg",
    price: "6$",
    material: "Mesh",
  },
  {
    title: "Bag",
    imgUrl: "images/bag6.jpg",
    price: "12$",
    material: "Leather",
  },
  {
    title: "Bag",
    imgUrl: "images/bag7.jpg",
    price: "12$",
    material: "Chenille",
  },
  // blouses
  {
    title: "Blouse",
    imgUrl: "images/bl1.jpg",
    price: "12$",
    material: "Chenille",
  },
  {
    title: "Blouse",
    imgUrl: "images/bl2.jpg",
    price: "8$",
    material: "Cotton",
  },
  {
    title: "Blouse",
    imgUrl: "images/bl3.jpg",
    price: "11$",
    material: "Chiffon",
  },
  {
    title: "Blouse",
    imgUrl: "images/bl4.jpg",
    price: "12$",
    material: "Canvas",
  },
  {
    title: "Blouse",
    imgUrl: "images/bl5.jpg",
    price: "10$",
    material: "Cotton",
  },
  {
    title: "Blouse",
    imgUrl: "images/bl6.jpg",
    price: "17$",
    material: "Chenille",
  },
  {
    title: "Blouse",
    imgUrl: "images/bl7.jpg",
    price: "14$",
    material: "Crepe",
  },
  {
    title: "Blouse",
    imgUrl: "images/bl8.jpg",
    price: "10$",
    material: "Chenille",
  },
  {
    title: "Blouse",
    imgUrl: "images/bl9.jpg",
    price: "16$",
    material: "Chenille",
  },
  // trainer
  {
    title: "Trainers",
    imgUrl: "images/tr1.jpg",
    price: "25$",
    material: "Synthetic",
  },
  {
    title: "Trainers",
    imgUrl: "images/tr2.jpg",
    price: "23$",
    material: "Synthetic",
  },
  {
    title: "Trainers",
    imgUrl: "images/tr3.jpg",
    price: "27$",
    material: "Canvas",
  },
  {
    title: "Trainers",
    imgUrl: "images/tr4.jpg",
    price: "28$",
    material: "Leather",
  },
  {
    title: "Trainers",
    imgUrl: "images/tr5.jpg",
    price: "30$",
    material: "Vinyl",
  },
  // SPORT WEAR
  {
    title: "Sports Suit",
    imgUrl: "images/sport1.jpg",
    price: "30$",
    material: "Chenille",

  },
  {
    title: "Sports Suit",
    imgUrl: "images/sport2.jpg",
    price: "33$",
    material: "Chenille",
  },
  {
    title: "Sports Suit",
    imgUrl: "images/sport3.jpg",
    price: "38$",
    material: "Chenille",
  },

  // JUMPERS
  {
    title: "Jumper",
    imgUrl: "images/jp1.jpg",
    price: "24$",
    material: "Wool",

  },
  {
    title: "Jumper",
    imgUrl: "images/jp2.jpg",
    price: "29$",
    material: "Linen",

  },
  {
    title: "Jumper",
    imgUrl: "images/jp3.jpg",
    price: "22$",
    material: "Wool",

  },
  {
    title: "Jumper",
    imgUrl: "images/jp4.jpg",
    price: "24$",
    material: "Chenille",

  },
  {
    title: "Jumper",
    imgUrl: "images/jp5.jpg",
    price: "25$",
    material: "Cotton",

  },
  {
    title: "Jumper",
    imgUrl: "images/jp6.jpg",
    price: "35$",
    material: "Chenille",

  },
  // SHOES
  {
    title: "Shoes",
    imgUrl: "images/shoes2.jpg",
    price: "34$",
    material: "Chenille",

  },
  {
    title: "Shoes",
    imgUrl: "images/shoes3.jpg",
    price: "45$",
    material: "Chenille",

  },
  {
    title: "Shoes",
    imgUrl: "images/shoes4.jpg",
    price: "30$",
    material: "Chenille",
  },
  {
    title: "Shoes",
    imgUrl: "images/shoes5.jpg",
    price: "32$",
    material: "Chenille",
  },
  {
    title: "Shoes",
    imgUrl: "images/shoes6.jpg",
    price: "40$",
    material: "Chenille",
  },
  // SUIT WITH SKIRT
  {
    title: "Suit & Skirt",
    imgUrl: "images/ss1.jpg",
    price: "45$",
    material: "Chenille",

  },
  {
    title: "Suit & Skirt",
    imgUrl: "images/ss3.jpg",
    price: "60$",
    material: "Chenille",
  },
  {
    title: "Suit & Skirt",
    imgUrl: "images/ss4.jpg",
    price: "65$",
    material: "Chenille",
  },
  {
    title: "Suit & Skirt",
    imgUrl: "images/ss5.jpg",
    price: "120$",
    material: "Chenille",
  },
  // SUIT AND PANTS
  {
    title: "Suit & Pants",
    imgUrl: "images/sp3.jpg",
    price: "68$",
    material: "Chenille",
  },
  {
    title: "Suit & Pants",
    imgUrl: "images/sp4.jpg",
    price: "110$",
    material: "Chenille",
  }
]
function inc() {
  let number = document.querySelector('[name="number"]');
  number.value = parseInt(number.value) + 1;
}

function dec() {
  let number = document.querySelector('[name="number"]');
  if (parseInt(number.value) > 0) {
    number.value = parseInt(number.value) - 1;
  }
}

$(document).ready(function () {
  buildProductView(data);
  popUp(data);
  console.log(buildProductView(data))
});
// low to high sort
$(".lowToHigh").on("click", () => {
  let lowToHigh = data.sort((a, b) => a.price - b.price);
  buildProductView(lowToHigh);
});
// high to low sort
$(".highToLow").on("click", () => {
  let highToLow = data.sort((a, b) => b.price - a.price);
  buildProductView(highToLow);
});

Filter
for (let i = 0; i < $(".brands").length; i++) {
  $(".brands")[i].addEventListener("click", function () {
    let titleName = this.innerHTML;
    brandFilter(titleName);
  });
}
function brandFilter(titleName) { // Apple
  let titlePro = [];
  if (titleName === 'All') {
    titlePro = data;
  } else {
    titlePro = data.filter((elem) => {
      if (elem.title.includes(titleName)) {
        return true;
      } else {
        return false;
      }
    });
  }
  buildProductView(titlePro)

}




function buildProductView(products) {

  let fullCardContainer = products.map((elem, indx) => {
    let product = '<div  style="border: 8px solid #fff;" class="col-sm-12 col-md-4 mt-4" >' +
      '<div class="card " >' +
      '<!-- Card image -->' +
      '<div class="view overlay">' +
      ' <img  style="height: 330px;width: 100%;" class="card-img-top"  src=" ' + elem.imgUrl + ' " alt="Card image cap">' +
      '<a>' +
      '<div class="mask rgba-white-slight"></div>' +
      ' </a>' +
      ' </div>' +
      ' <!-- Card content -->' +
      ' <div class="card-body" style="font-weight: normal;font-size:large;">' +

      '<!-- Title -->' +
      '<h4 class="card-title">' + elem.title + '</h4>' +
      ' <!-- Text -->' +
      '<p><strong>Material:' + elem.material + '</strong></p>' +
      '<p><strong>Price:' + elem.price + '</strong></p>' +
      '<!-- Button trigger modal -->' +
      '<button class="btn blue-gradient btn-rounded btn-md" data-toggle="modal"' +
      ' data-target="#centralModalSm"> <i class="fas fa-2x fa-cart-plus "></i>' +
      ' Add to cart </button>' +
      ' <button class="btn aqua-gradient btn-rounded btn-md"> <i class="fas fa-2x fa-heart "></i>' +
      '</button>' +
      ' <!-- Central Modal large -->' +
      '<div class="modal fade" id="centralModalSm" tabindex="-1" role="dialog"' +
      ' aria-labelledby="myModalLabel" aria-hidden="true">' +

      ' <!-- Change class .modal-sm to change the size of the modal -->' +
      ' <div style="height: 400px;" class="modal-dialog modal-lg" role="document">' +


      ' <div class="modal-content">' +
      '<div class="modal-header">' +
      '<h4 class="modal-title w-100" id="myModalLabel">Product Detail</h4>' +
      ' <button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
      ' <span aria-hidden="true">&times;</span>' +
      ' </button>' +
      '</div>' +
      '<div class="modal-body">' +
      '<div class="row">' +
      '<div class="col-md-6">' +
      ' <img style="height: 100%;width: 100%;" src="' + elem.imgUrl + '" alt="">' +
      ' </div>' +
      '<div class="col-md-6">' +

      ' <!--Dropdown primary-->' +
      '<div class="dropdown">' +
      ' <span' +
      ' style="color:  rgba(0, 1, 2, 0.938);font-size:x-large;font-weight:normal;">' +
      ' Color:</span>' +
      '<!--Trigger-->' +
      '<a style="width: 140px !important;"' +
      ' class="btn btn-default dropdown-toggle ml-5" type="button"' +
      ' id="dropdownMenu2" data-toggle="dropdown"' +
      ' aria-haspopup="true" aria-expanded="false">Grey</a>' +
      ' <!--Menu-->' +
      '<div class="dropdown-menu dropdown-default ">' +
      ' <a class="dropdown-item" href="#"></a>' +
      ' <a class="dropdown-item" href="#">White</a>' +
      '<a class="dropdown-item" href="#">Black</a>' +
      '<a class="dropdown-item" href="#">Red</a>' +
      '<a class="dropdown-item" href="#">Brown</a>' +
      '<a class="dropdown-item" href="#">Blue</a>' +
      ' </div>' +
      ' </div>' +
      ' <!--Dropdown primary-->' +
      ' <div class="dropdown">' +
      '<span' +
      ' style="color:  rgba(0, 1, 2, 0.938);font-size:x-large;font-weight:normal;">' +
      'Sizes:</span>' +
      ' <!--Trigger-->' +
      ' <a style="width: 140px!important;"' +
      '  class="btn btn-default dropdown-toggle ml-5" type="button"' +
      '  id="dropdownMenu2" data-toggle="dropdown"' +
      '  aria-haspopup="true" aria-expanded="false">S-80</a>' +
      '<!--Menu-->' +
      ' <div class="dropdown-menu dropdown-default mt-2">' +
      '<a class="dropdown-item" href="#"></a>' +
      ' <a class="dropdown-item" href="#">S-80</a>' +
      ' <a class="dropdown-item" href="#">M-85</a>' +
      ' <a class="dropdown-item" href="#">L-90</a>' +
      '<a class="dropdown-item" href="#">XL-95</a>' +
      ' <a class="dropdown-item" href="#">XXL-100</a>' +
      '</div>' +
      ' </div>' +
      '<div class="def-number-input number-input ">' +
      ' <span' +
      ' style="color:  rgba(0, 1, 2, 0.938);font-size:x-large;font-weight:normal;">' +
      ' Quantity:</span>' +
      ' <button' +
      ' class=" btn btn-sm btn-default ml-3 "> <i' +
      ' class="fas fa-minus fa-2x" ></i ></button > ' +
      '<input style="width: 50px;" class="quantity " min="0"' +
      '  name="quantity" value="1" type="number">' +
      ' <button' +
      ' class=" btn btn-sm btn-default ml-3 "> <i' +
      ' class="fas fa-plus fa-2x" ></i ></button > ' +
      '</div>' +
      ' <div class="mt-2" style="display:block">' +
      ' <span' +
      ' style="color:  rgba(0, 1, 2, 0.938);font-size:x-large;font-weight:normal;">' +
      ' Price:</span>' +
      ' <span class="ml-5"' +
      'style="color: rgba(0, 1, 2, 0.938);font-size:x-large;font-weight:normal;">' + elem.price +
      '</span>' +
      ' </div>' +
      ' <div class="mt-2" style="display:block">' +
      ' <span' +
      ' style="color:  rgba(0, 1, 2, 0.938);font-size:x-large;font-weight:normal;">' +
      ' Material:</span>' +
      ' <span class="ml-3 mt-5"' +
      ' style="color: rgba(0, 1, 2, 0.938);font-size:x-large;font-weight:normal;">' + elem.material +
      ' </span>' +
      ' </div>' +
      ' </div>' +
      ' </div>' +
      ' <div class="modal-footer">' +
      ' <button type="button" class="btn btn-outline-default  "' +
      ' data-dismiss="modal">Save' +
      ' changes</button>' +
      ' <button type="button" class="btn aqua-gradient ">Buy Now</button>' +
      ' </div>' +
      ' </div>' +
      ' </div>' +
      ' </div>' +
      '</div>' +
      ' </div>' +

      '</div>' +
      '</div> ';
    console.log(product);
    return product;
  }).join('');
  $("#products").empty();
  $("#products").append(fullCardContainer);
}
$('.carousel-3d-basic').mdbCarousel3d();

