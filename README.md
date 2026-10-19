# Ôn Thi Tiếng Anh — ngân hàng câu hỏi có giải thích

- `index.html`: website học viên (hiện giải thích sau khi trả lời và khi xem lại thi thử).
- `admin.html`: trang quản trị riêng, quản lý/sửa trường **Giải thích đáp án**.
- `questions.js`: dữ liệu mặc định, có thể upload đè file cùng tên trong GitHub repo.
- `questions.json`: file sao lưu/nhập dữ liệu tại trang Admin.

## Đưa lên GitHub Pages
Giải nén và tải riêng các file trong thư mục lên thư mục gốc repo (KHÔNG tải nguyên ZIP). Nếu chỉ cập nhật câu hỏi, tải đè **questions.js**. Chờ Actions deploy hoàn tất, sau đó Ctrl+Shift+R.

**Chú ý:** Trình duyệt có thể đang có bản ngân hàng câu hỏi cũ trong localStorage. Vào `admin.html` > **Khôi phục từ file** để dùng file mới, hoặc **Nhập JSON**. Hãy sao lưu bản cũ trước khi khôi phục. Bản Admin này lưu cục bộ; để học viên khác thấy thay đổi, xuất questions.js mới và commit lên GitHub.

## Giới hạn độ chính xác
Dữ liệu hiện có chứa 3 bài điền từ đầy đủ (Camping, Honey, Money) từ ảnh; các bài đọc khác trong ảnh **chưa được số hóa** vào bộ dữ liệu. Các giải thích từ sách là diễn giải ôn tập, không có bảng đáp án chính thức của nhà xuất bản. Câu viết lại được chấm so khớp đáp án mẫu.
