export default function Toolbar() {
    return (
      <div
        className="Toolbar"
        onClick={() => {
          alert("Bạn đã nhấp chuột vào thanh công cụ!");
        }}
      >
        <button onClick={() => alert("Bắt đầu phát!")}>Phát phim</button>
        <button onClick={() => alert("Đang tải lên!")}>Tải lên hình ảnh</button>
      </div>
    );
  }