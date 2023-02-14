<< Test_Sigmatech_Nama_AdityaRestuPratama_QualityAssurance

Test SQL
a) Buat query jika mencari employee name dan status employee?
   Jawab : 
   SELECT emp_name, emp_status FROM tbl_employee;
   
b) Buat query untuk menampilkan nama employee yang statusnya resign berserta gaji yang diperoleh?
   Jawab :
   SELECT emp_name, emp_income, emp_status FROM tbl_employee
   INNER JOIN ON tbl_employee.emp_code = tbl_income.emp_code
   WHERE emp_status = 'r';
c) Buat query untuk menampilkan emp_code, nama, status, income dan sorting berdasarkan income
paling besar?
   Jawab :
   SELECT tbl_employee.emp_code, tbl_emp.nama tbl_emp.status, tbl_income.emp_incomes
   FROM tbl_employee 
   INNER JOIN tbl_income ON tbl_employee.emp_code = tbl_income.emp_code 
   ORDER BY tbl_income.emp_income DESC
   

Buatkan script automation (Bahasa Pemograman Apa Saja) untuk alamat website
https://www.saucedemo.com/ beberapa testcase berikut.
link video :
1) Login testing : https://www.loom.com/share/cdcbecc009724f0e9abfb0ef0c6df668
2) Products : https://www.loom.com/share/f30ed81dc42641ca9db65850d2e5eca6
3) add-cart : https://www.loom.com/share/b7b83b4b1317420eb1330bd7c05c3aa7

Untuk automation testing menggunakan playwright typescript, untuk melakukan automation testing

3) Buatlah script automation menggunakan Karate (Karatelabs) untuk URL
https://jsonplaceholder.typicode.com/posts dengan ketentuan passed seperti dibawah ini
API testing : https://documenter.getpostman.com/view/6433005/2s935vkf4k#intro <<report html>>
