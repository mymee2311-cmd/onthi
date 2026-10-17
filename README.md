# Ôn Thi Tiếng Anh — Website với Admin riêng

## Cấu trúc
- `index.html`: website luyện thi dành cho học viên (không có nút Admin).
- `admin.html`: trang quản lý câu hỏi riêng.
- `questions.js`: ngân hàng câu hỏi mặc định và ngân hàng công khai.

## Cách chạy
Mở cả ba file trong cùng một thư mục; khuyến nghị chạy bằng VS Code Live Server.

## Cách đổi câu hỏi và công khai cho tất cả người học
1. Mở `admin.html` (trên GitHub Pages là `https://<username>.github.io/<repository>/admin.html`).
2. Thêm, sửa, xóa câu hỏi. Nhấn Lưu; thay đổi xuất hiện ngay trên trình duyệt hiện tại.
3. Nhấn **Xuất questions.js**. Trang Admin sẽ tải một file `questions.js` mới về máy.
4. Vào GitHub repository, thay file `questions.js` ở thư mục gốc bằng file vừa tải và Commit changes.
5. Đợi GitHub Pages deploy và tải lại trang ôn thi. Các học viên không có bản ghi cục bộ cũ sẽ thấy câu hỏi mới.

Lưu ý: Nếu trình duyệt của học viên có dữ liệu Admin cục bộ cũ thì dữ liệu đó được ưu tiên. Có thể xóa khóa `on_thi_tieng_anh_bank_v1` trong Local Storage để dùng bản công khai mới.

## Bảo mật và giới hạn
- GitHub Pages **không có backend**, `admin.html` không có bảo vệ đăng nhập. Đường dẫn trang Admin có thể truy cập công khai. Đừng đặt mật khẩu quản trị bí mật trong JavaScript.
- Sửa câu ở trang Admin chỉ lưu ở localStorage trên trình duyệt. Bạn phải **Xuất questions.js → upload GitHub** để đồng bộ công khai. Muốn chỉ bạn đăng nhập và cập nhật cho mọi người ngay, cần dùng Firebase Auth/Firestore hoặc backend khác với quy tắc phân quyền.
- **Xuất JSON** để sao lưu và **Nhập JSON** để khôi phục trên cùng hoặc thiết bị khác.
- Để cập nhật nguồn câu mặc định trong trang Admin sau khi bạn đã thay `questions.js`, nên xoá bản lưu cục bộ trong trình duyệt bằng DevTools nếu muốn khôi phục từ file; nút “Khôi phục từ file” sẽ lấy dữ liệu từ `questions.js`.
