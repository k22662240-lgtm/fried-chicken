# คู่มือการนำโปรเจกต์ขึ้น GitHub & เผยแพร่เว็บฟรี (GitHub Pages)

เนื่องจากระบบปัจจุบันยังไม่ได้ติดตั้งคำสั่ง `git` บนเครื่องคอมพิวเตอร์ คุณสามารถเลือกทำตามวิธีใดวิธีหนึ่งที่สะดวกที่สุดจาก 3 วิธีด้านล่างนี้ได้เลยครับ:

---

## 📌 วิธีที่ 1: อัปโหลดผ่านหน้าเว็บ GitHub (ง่ายและเร็วที่สุด ไม่ต้องลงโปรแกรมเพิ่ม)

1. **เข้าสู่ระบบ GitHub**:
   - ไปที่เว็บไซต์ [https://github.com](https://github.com) และล็อกอินเข้าสู่บัญชีของคุณ (หากยังไม่มี ให้กด Sign up ฟรี)
2. **สร้าง Repository ใหม่**:
   - กดปุ่ม **`+`** มุมขวาบน แล้วเลือก **`New repository`** (หรือเข้าลิงก์ [https://github.com/new](https://github.com/new))
   - ตั้งชื่อโปรเจกต์ในช่อง **Repository name** เช่น `fried-chicken-landing` หรือ `golden-crisp-masterclass`
   - เลือกเป็น **`Public`** (เพื่อให้เปิด GitHub Pages ดูออนไลน์ได้ฟรี)
   - ไม่ต้องติ๊กช่อง Add a README file (เพราะในโปรเจกต์ของเรามีแล้ว)
   - กดปุ่มสีเขียว **`Create repository`**
3. **อัปโหลดไฟล์โปรเจกต์**:
   - ในหน้า Repository ที่เพิ่งสร้าง จะมีข้อความสีฟ้าเขียนว่า **"uploading an existing file"** ให้คลิกลิงก์นั้น
   - ลากไฟล์และโฟลเดอร์ทั้งหมดจาก `d:\Projects\test` ได้แก่:
     - `index.html`
     - โฟลเดอร์ `css` (พร้อมไฟล์ custom.css ข้างใน)
     - โฟลเดอร์ `js` (พร้อมไฟล์ app.js ข้างใน)
     - `README.md`
     - `.gitignore`
     - `deploy_guide.md`
   - มาวางลงในกรอบอัปโหลดบนหน้าเว็บ
   - ในช่อง commit ด้านล่าง พิมพ์ว่า `Initial commit: fried chicken landing page`
   - กดปุ่มสีเขียว **`Commit changes`**

---

## 📌 วิธีที่ 2: ใช้โปรแกรม GitHub Desktop (แนะนำสำหรับคนที่ชอบหน้าต่างสวยงาม)

1. ดาวน์โหลดและติดตั้ง [GitHub Desktop](https://desktop.github.com/)
2. เปิดโปรแกรมแล้วลงชื่อเข้าใช้ด้วยบัญชี GitHub ของคุณ
3. ไปที่เมนู **File** > **Add Local Repository...**
4. กด **Choose...** แล้วเลือกโฟลเดอร์ `d:\Projects\test`
5. หากโปรแกรมขึ้นเตือนว่ายังไม่ได้เป็น repository ให้กดคลิก **Create a repository here**
6. กดปุ่ม **`Publish repository`** ด้านบนเพื่อส่งขึ้นบัญชี GitHub ของคุณได้ทันที

---

## 📌 วิธีที่ 3: ติดตั้ง Git CLI สำหรับนักพัฒนาที่ต้องการใช้ Terminal

1. ดาวน์โหลดตัวติดตั้ง Git for Windows จาก [https://gitforwindows.org/](https://gitforwindows.org/) หรือ [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. ติดตั้งตามขั้นตอนมาตรฐาน (กด Next จนเสร็จ)
3. ปิดและเปิด PowerShell / VS Code Terminal ใหม่ จากนั้นพิมพ์คำสั่งตามลำดับ:

```powershell
# 1. เข้าไปที่โฟลเดอร์โปรเจกต์
cd d:\Projects\test

# 2. เริ่มต้น Git repository
git init

# 3. เพิ่มไฟล์ทั้งหมดเข้า staging
git add .

# 4. บันทึก commit แรก
git commit -m "feat: initial commit for fried chicken landing page"

# 5. เปลี่ยนชื่อ branch เป็น main
git branch -M main

# 6. เชื่อมต่อกับ repository บน GitHub ของคุณ (แทนที่ <username> และ <repo-name> ด้วยของคุณจริง)
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 7. Push ไฟล์ขึ้น GitHub
git push -u origin main
```

---

## 🌐 ขั้นตอนเปิดใช้งาน GitHub Pages (ให้เว็บไซต์ออนไลน์ฟรี มีลิงก์เข้าดูได้จริง)

หลังจากที่คุณนำไฟล์ขึ้น GitHub สำเร็จแล้ว ให้ทำตามขั้นตอนนี้เพื่อเปิดเว็บให้ทุกคนเข้าชมได้:

1. เปิดหน้า Repository ของคุณบน GitHub
2. คลิกแท็บ **`Settings`** (เมนูรูปฟันเฟืองด้านบน)
3. ที่เมนูด้านซ้าย เลือกหัวข้อ **`Pages`**
4. ในส่วน **Build and deployment** ให้ตั้งค่าดังนี้:
   - **Source:** เลือก `Deploy from a branch`
   - **Branch:** เลือก `main` และโฟลเดอร์เลือก `/(root)`
5. กดปุ่ม **`Save`**
6. รอประมาณ 1-2 นาที แล้วรีเฟรชหน้าเว็บ คุณจะเห็นแถบสีเขียวพร้อมลิงก์เว็บไซต์ เช่น:
   ```text
   Your site is live at https://<your-username>.github.io/<your-repo-name>/
   ```
7. สามารถนำลิงก์นี้ไปส่งให้ลูกค้า หรือแชร์บน Facebook, LINE, TikTok ได้ทันที!
