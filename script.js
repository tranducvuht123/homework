function test() {

    let a = prompt("Nhập họ tên:").toString();
    console.log("a= ", a);
    if (!a || a === "") {
        alert("Bạn chưa nhập họ tên");
        // window.location.reload();
    } else {
        alert("Bạn đã nhập họ tên" + a);
        let b = prompt("Nhập gmail:").toString();
        if (!b && b === "") {
            alert("Bạn chưa nhập gmail")
        } else {
            alert("Bạn đã nhập gmail" + b);
        }
    }

}