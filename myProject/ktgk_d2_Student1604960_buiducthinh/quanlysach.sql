CREATE DATABASE quan_ly_sach;
USE quan_ly_sach;

CREATE TABLE categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(50),
    description VARCHAR(200)
);

CREATE TABLE books (
    book_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200),
    author VARCHAR(100),
    publication_date DATE,
    price DECIMAL(10,2),
    quantity INT,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

insert into categories (category_id,category_name) values
(1,'sach ngu van'),
(2,'sach khoa hoc'),
(3,'sach lich su'),
(4,'sach toan'),
(5,'sach tieng anh');

insert into books (book_id,title,author,publication_date,price,quantity,category_id) values
(1,'be tap lam van 1','le thi bay','2013-09-02',20000,12,1),
(2,'nhung de toan hay nen lam','nguyen thi mai','2011-01-12',10000,11,4),
(3,'nhung thi nghiem vui ve','bui cong nam','2021-12-04',5000,4,2),
(4,'truyen kieu','nam cao','1992-02-02',2000,23,1),
(5,'lich su ve loai khung long','ma van tai','2023-08-26',40000,6,3),
(6,'ren luyen ky nang noi tieng anh','mai van hung','2024-04-02',12000,7,5),
(7,'the gioi dong vat','phung nam minh','2004-07-23',70000,4,2),
(8,'nhung truyen thong dan gian viet nam','ly thi sau','2001-05-02',6000,9,3),
(9,'nhung ngu phap thuong gap trong giao tiep','pham duc tien','2023-08-03',67000,3,5),
(10,'tu duy xu ly cac bai toan phuc tap','tran duc huy','2024-01-23',25000,6,4),
(11,'newton va nhung sang kien thien tai','le duc manh','2022-04-11',14000,3,2),
(12,'ren luyen tu duy cho tre','thai van son','2016-10-10',50000,2,2),
(13,'su dung AI trong cuoc song','tran le bao toan','2024-09-30',40000,5,2),
(14,'tieng anh cho nguoi mat goc','phung thanh nha','2023-10-10',90000,2,5),
(15,'than thoai hi lap','nguyen van q','1989-03-22',8000,1,3);