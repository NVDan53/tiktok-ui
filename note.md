1. focus-within
2. input:not(:placeholder-shown) ~ .search-button
3. border-color: currentColor;
4. Pass value from container layout to children via props
5. Css in component is used
6. Rule: Đã đi qua file thì network đã phải tải file
7. Dùng onError function để handle khi ảnh img bị lỗi
8. Dùng display: flex để căn chỉnh height của element
9. Đối với svg: để set color ăn theo color bên ngoài thì dùng thuộc tính: fill="currentColor"
10. Use encodeURIComponent khi search query param
11. debounce là kĩ thuật buộc 1 hàm phải đợi một thời gian mới được thực thi
12. [Trick]: dùng display flex đe làm content cua element fit, flex sẽ lam cho đo rong cua element con fit voi do rong cua element cha
13. over-flow: overlay => nôi lên tren, khong chiêm dien tich 

> Handle logic search
- Search debounce : 2s mới search
- Khi mới load trang: không focus vô ô input search
- Khi nhập từ khóa: show button [x] để clear text và show icon loading khi nhập text để search
- Khi clear text (nhấn button [x]): vẫn focus vô ô input search
- Khi search có kết quả: bấm blur ra ngoài -> nhấp vô lại ô input search -> vẫn có kết quả tìm kiếm như lúc search
- Khi nhấn search thì qua trang kết quả tìm kiếm


# API
- https://tiktok.fullstack.edu.vn/api/users/search?q=hoaa&type=less