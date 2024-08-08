// document: ám chỉ tới html. html load xong rồi bắt đầu chạy hàm
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( "#slide-demo",{
        perPage: 5,
        //số block mà nó thể hiện
        rewind : true,
        // sau khi đi hết thì nó sẽ quau lại
        perMove: 1,
        // mỗi lần di 1 thằng
        type   : 'loop',
        //vòng lặp
        autoplay: true,
        //để chờ mấy giây rồi đi
        wheel    : true,
        //lấy chuột lăn thì tự đi 

        // breakpoint: điểm dừng
        breakpoints:{
            1320:{
                perPage: 4,
            },
            1058:{
                perPage: 3,
            },
            798:{
                perPage: 2,
            },
            534:{
                perPage: 1,
            },
        },
    });
    splide.mount();
} );