import Product from './Product.js';

// Câu 2: Khởi tạo mảng products gồm ít nhất 5 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau
const products = [
  new Product(1, 'iPhone 15', 25000000, 10, 'Electronics', true),
  new Product(2, 'Samsung Galaxy S24', 22000000, 0, 'Electronics', false),
  new Product(3, 'Áo thun nam', 150000, 50, 'Clothing', true),
  new Product(4, 'Quần jean nữ', 350000, 5, 'Clothing', true),
  new Product(5, 'Túi xách da', 800000, 3, 'Accessories', true),
  new Product(6, 'Đồng hồ thông minh', 5000000, 0, 'Electronics', false),
  new Product(7, 'Giày thể thao', 1200000, 15, 'Accessories', true)
];

console.log('=== DANH SÁCH SẢN PHẨM BAN ĐẦU ===');
console.log(products);
console.log('\n');

// Câu 3: Tạo mảng mới chỉ chứa name, price của mỗi sản phẩm
console.log('=== CÂU 3: Mảng chỉ chứa name và price ===');
const nameAndPrice = products.map(product => ({
  name: product.name,
  price: product.price
}));
console.log(nameAndPrice);
console.log('\n');

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
console.log('=== CÂU 4: Sản phẩm còn hàng trong kho ===');
const inStockProducts = products.filter(product => product.quantity > 0);
console.log(inStockProducts);
console.log('\n');

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30 hay không
console.log('=== CÂU 5: Kiểm tra có sản phẩm giá trên 30 triệu ===');
const hasExpensiveProduct = products.some(product => product.price > 30000000);
console.log(`Có sản phẩm giá trên 30 triệu: ${hasExpensiveProduct}`);
console.log('\n');

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không
console.log('=== CÂU 6: Kiểm tra tất cả Accessories có đang bán ===');
const allAccessoriesAvailable = products
  .filter(product => product.category === 'Accessories')
  .every(product => product.isAvailable === true);
console.log(`Tất cả Accessories đang được bán: ${allAccessoriesAvailable}`);
console.log('\n');

// Câu 7: Tính tổng giá trị kho hàng (price × quantity)
console.log('=== CÂU 7: Tổng giá trị kho hàng ===');
const totalInventoryValue = products.reduce((total, product) => {
  return total + (product.price * product.quantity);
}, 0);
console.log(`Tổng giá trị kho hàng: ${totalInventoryValue.toLocaleString('vi-VN')} VNĐ`);
console.log('\n');

// Câu 8: Dùng for...of duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
console.log('=== CÂU 8: Duyệt mảng với for...of ===');
for (const product of products) {
  const status = product.isAvailable ? 'Đang bán' : 'Hết hàng';
  console.log(`${product.name} - ${product.category} - ${status}`);
}
console.log('\n');

// Câu 9: Dùng for...in để in ra tên thuộc tính và giá trị tương ứng
console.log('=== CÂU 9: Dùng for...in ===');
console.log('--- In ra tên thuộc tính ---');
for (const key in products[0]) {
  console.log(key);
}
console.log('\n--- In ra giá trị tương ứng ---');
for (const key in products[0]) {
  console.log(`${key}: ${products[0][key]}`);
}
console.log('\n');

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
console.log('=== CÂU 10: Danh sách sản phẩm đang bán và còn hàng ===');
const availableAndInStock = products
  .filter(product => product.isAvailable === true && product.quantity > 0)
  .map(product => product.name);
console.log(availableAndInStock);
