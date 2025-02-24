# 🚀 Nx + Angular + Spartan UI Micro Frontend  

## 📌 Giới thiệu  
Dự án sử dụng **Nx**, **Angular**, và **Spartan UI** để xây dựng một hệ thống **Micro Frontend** với **Module Federation**.  

## 🏗️ Kiến trúc  
- **Shell (Host App)**: Ứng dụng chính quản lý layout và điều hướng.  
- **Remotes**:  
  - `products`: Quản lý sản phẩm  
  - `categories`: Quản lý danh mục  
- **Shared Library**: Chứa các component dùng chung.  
- **UI Library**: Sử dụng **Spartan UI** để tạo giao diện hiện đại và linh hoạt.  

## 🔧 Công nghệ  
- **Nx**: Quản lý workspace và tối ưu build.  
- **Angular**: Framework frontend mạnh mẽ.  
- **Module Federation**: Cho phép tích hợp các remote apps.  
- **Spartan UI**: Bộ UI đơn giản, hiện đại và tối ưu hiệu suất.  
