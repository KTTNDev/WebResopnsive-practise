//  $(document).ready(function(){}) //
// อันนี้คือการเรียกใช้ Jquery//
$(document).ready(function() {
    //ให้ชี้ไปที่ตัวคลาส hamburger แล้วเมื่อมีการ click
    $('.hamburger').on("click", function() {
        // on("click ,function(){......}
        // ....คือ  หลังจาก click จะให้มันทำอะไร 
        $(".nav-grid").toggleClass("open");
        // คือ ให้ชี้ไปที่ class .nav-grid และทำการ toggleClass("open")ขึ้นมา} ")
    })
})



const myFunction = (x) => x.classList.toggle("change");



// function myFunction(x) {
//     x.classList.toggle("change");
// }