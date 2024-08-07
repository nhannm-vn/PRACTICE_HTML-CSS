// document: ám chỉ tới html. html load xong rồi bắt đầu chạy hàm
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide("#splide-demo",{
        perPage: 5,// hiển thị số block
        rewind : true,// sau khi hết thì quay lại
        perMove: 1,// mỗi lần di 1 thằng
        type   : 'loop',//vòng lặp
        autoplay: true,//để chờ mấy giây rồi đi
        wheel    : true,//lấy chuột lăn thì tự đi 
        // breakpoint: điểm dừng
        breakpoints: {
            // dưới 1320 hiển thị 4
            1320: {
              perPage: 4,
            },
            1058: {
                perPage: 3,
            },
            796: {
                perPage: 2,
            },
            534: {
                perPage: 1,
            },
        }
    });
    // tạo ra vật thể đó
    splide.mount();
    // mount: kêu nó hiển thị đi
});
