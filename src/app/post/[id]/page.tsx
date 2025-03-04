import React from 'react';

const PostDetails = () => {
  return (
    <main className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
          TĂNG HIỆU QUẢ MARKETING VỚI PROMPT KÉP – CHIẾN LƯỢC VƯỢT TRỘI SO VỚI PROMPT ĐƠN
        </h1>
        <img
          src="https://picsum.photos/400/300?random=4"
          alt="Prompt kép concept"
          className="rounded-lg shadow-md mb-8 w-full object-cover"
        />
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">
            Prompt kép là gì và vì sao lại quan trọng?
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Prompt kép là dạng yêu cầu kết hợp nhiều yếu tố trong cùng một nội dung, giúp tăng chiều sâu và sự thu hút của bài viết. Không chỉ đơn giản như một prompt đơn lẻ, prompt kép cho phép khai thác nhiều góc độ, giúp bài viết trở nên đa dạng và có sức thuyết phục mạnh mẽ hơn.
          </p>
        </section>
        <img
          src="https://picsum.photos/400/300?random=123"
          alt="Prompt kép concept"
          className="rounded-lg shadow-md mb-8 w-full object-cover"
        />
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">
            Lợi ích của prompt kép so với prompt đơn
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
            <li><span className="font-medium">Tăng cường tính sáng tạo</span> - Khơi gợi những ý tưởng độc đáo và mới lạ.</li>
            <li><span className="font-medium">Thu hút độc giả mạnh mẽ</span> - Tạo sự tò mò và giữ chân độc giả lâu hơn.</li>
            <li><span className="font-medium">Gia tăng tỷ lệ chuyển đổi</span> - Thuyết phục khách hàng tiềm năng hành động.</li>
            <li><span className="font-medium">Dễ dàng thích ứng với nhiều nền tảng</span> - Phù hợp với nhiều kênh marketing khác nhau.</li>
          </ul>
        </section>
        <img
          src="https://picsum.photos/400/300?random=67"
          alt="Prompt kép concept"
          className="rounded-lg shadow-md mb-8 w-full object-cover"
        />
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
            20 VÍ DỤ PROMPT KÉP CHO BÀI VIẾT MARKETING HIỆU QUẢ
          </h2>
          <ol className="space-y-6">
            {[...Array(20)].map((_, i) => (
              <li key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start">
                  <span className="text-xl font-bold text-orange-500 mr-4">{i + 1}.</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Tiêu đề ví dụ {i + 1}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Mô tả chi tiết về prompt kép này sẽ được đặt ở đây...
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <img
          src="https://picsum.photos/400/300?random=12"
          alt="Prompt kép concept"
          className="rounded-lg shadow-md mb-8 w-full object-cover"
        />
        <section className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Tổng kết
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Sử dụng prompt kép không chỉ giúp bài viết bán hàng trở nên hấp dẫn hơn mà còn tối ưu hóa hiệu quả marketing. Bằng cách kết hợp nhiều yếu tố, bạn có thể tạo ra những nội dung vừa sáng tạo, vừa thuyết phục, giúp gia tăng tỷ lệ chuyển đổi một cách tự nhiên nhất.
          </p>
        </section>

        <div className="text-right text-sm text-gray-500">
          Cập nhật lần cuối: {new Date().toLocaleDateString()}
        </div>
      </div>
    </main>
  );
};

export default PostDetails;