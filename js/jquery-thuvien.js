$(document).ready(function () {
    var cart = $("#giohang").children(".check-out-cart-item");
    var cartQuatily = cart.length;
    var itemQuantity = $("#quantity").children("span").eq(0);
    itemQuantity.text(cartQuatily); // Gán giá trị sl sản phẩm vào icon giỏ hàng
    var totalsQuantity = $("#quantity-all")
    var countsp = $("#count").children("a").children("i").children("span").eq(0);
    countsp.text(cartQuatily);
    // var imgsp = cart.eq(0).children(".check-out-card-item-img").children("img").attr("src");
    // Đoạn này trỏ đến địa chỉ ảnh
    // var namesp = cart.eq(0).children(".check-out-card-details").children(".item-card-name").children("a").children("h5").eq(0).text();
    //Trỏ đến tên sp
    // var idsp = cart.eq(0).children(".check-out-card-details").children(".item-card-name").children("p").children("span").eq(0).text();
    //Trỏ đến ID sản phẩm
    // var pricesp = cart.eq(0).children(".check-out-card-details").children(".item-card-name").children("p").children("span").eq(1).text();
    //Trỏ đến giá sp

    $(".remove").click(function (e) {
        e.preventDefault();
        //Xóa 1 hàng sản phẩm theo class
        var removeDiv = $(this).parent().parent().parent(); //This có ý nghĩa là tại ví trí class đó
        removeDiv.remove();


    });

    //Lấy số lượng hiện tại của sản phẩm
    $(".in-num").change(function (e) {
        e.preventDefault();
        var productSl = this.value;
        var pricesp = cart.eq(0).children(".check-out-card-details").children(".item-card-name").children("p").children("span").eq(1).text();
        var sumTotal = productSl * pricesp;

    });

});

