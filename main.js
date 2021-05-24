// Bài 1: Tính tiền luong nhân viên
/**
 * Phân tích:
 * inout: lương 1 ngay = 100.000, sô ngày làm, tiền lương nhân viên.
 * handle: tienLuongNhanVien = soNgayLam * luongMot
 * output: tienLuongNhanVien 
 */

var btnTinhNao = document.getElementById('btnTinhNao');
btnTinhNao.onclick = function() {
    var luongMotNgay = 100000;
    var soNgayLam = document.getElementById('soNgayLam').value;
    var tienLuongNhanVien = soNgayLam * luongMotNgay;

    alert('Tièn lương nhân viên là: ' + tienLuongNhanVien + ' VNĐ')
}

//Bài 2: Tính giá trị trung bình

/**
 * phân tich:
 * input: nhập 5 số thực bất kỳ, giá trị trung bình
 * handle: giaTriTrungBinh = (tongNamSoThuc) / 5
 * output: giaTriTrungBinh
 */

var btnTinhRa = document.getElementById('btnTinhRa');

btnTinhRa.onclick = function() {
    var soThucThuNhat = document.getElementById('soThucThuNhat').value;
    var soThucThuHai = document.getElementById('soThucThuHai').value;
    var soThucThuBa = document.getElementById('soThucThuBa').value;
    var soThucThuTu = document.getElementById('soThucThuTu').value;
    var soThucThuNam = document.getElementById('soThucThuNam').value;

    var giaTriTrungBinh = (Number(soThucThuNhat) + Number(soThucThuHai) + Number(soThucThuBa) + Number(soThucThuTu) + Number(soThucThuNam)) / 5;

    alert('Giá trị trung binh là: ' + giaTriTrungBinh);

}


//Bài 3: Quy đổi tiền
/**
 * phân tích:
 * input: giá 1 USD: 23.500 VNĐ, số tiền USD cần đổi sang tiền Việt.
 * handle: soTienVietSauKhiDoi = soTienDOCanDOi * 23.500
 * output: soTienVietSauKhiDoi
 */

var btnDoiTien = document.getElementById('btnDoiTien');
btnDoiTien.onclick = function() {
    var soTienDoCanDoi = document.getElementById('soTienDoCanDoi').value;
    var soTienVietSauKhiDoi = soTienDoCanDoi * 23500;

    alert('Số tiền Việt sau khi đổi là: ' + soTienVietSauKhiDoi + ' VNĐ')
}



//Bài 4: Bài 4: Tính diện tích và chu vi hình chữ nhật

/**
 * phân tích:
 * input: chiều dài hcn, chiều rộng hcn, chu vi hcn, dien tich hcn
 * handle: chu vi hcn = (dài + rộng)*2, diện tích hcn = dài * rộng
 * output: chuViHcn, dienTichHcn
 */

var btnTinhToan = document.getElementById('btnTinhToan');
btnTinhToan.onclick = function() {
    var chieuDai = document.getElementById('chieuDai').value;
    var chieuRong = document.getElementById('chieuRong').value;
    var chuViHcn = (Number(chieuDai) + Number(chieuRong)) * 2;
    var dienTichHcn = chieuDai * chieuRong;

    alert('Chu vi HCN là: ' + chuViHcn + ' cm ' + ' -- Diện tích HCN là: ' + dienTichHcn + ' cm2');
}



//Bài 5: Tính tổng 2 ký số
/**
 * input: số tự nhiên có 2 chữ sô bất kỳ, số hàng đơn vị, số hàng chục, tổng 2 ký số vừa nhập.
 * handle: tổng 2 ký số = lấy số hàng chục + số habngf đơn vị
 * output: tongHaiKySo
 */

var btnTinhTong = document.getElementById('btnTinhTong');
btnTinhTong.onclick = function() {
    var soTuNhienHaiChuSo = document.getElementById('soTuNhienHaiChuSo').value;
    var soHangDonVi = soTuNhienHaiChuSo % 10;
    var soHangChuc = Math.floor(soTuNhienHaiChuSo / 10);
    var tongHaiKySo = soHangChuc + soHangDonVi;

    alert('Tổng hai ký số là: ' + tongHaiKySo);
}