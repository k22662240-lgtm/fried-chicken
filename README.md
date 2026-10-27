# 🍗 ไก่ทองคำ Masterclass (GoldenCrisp Academy)
> เว็บไซต์ Landing Page คอร์สสอนสูตรไก่ทอดเงินล้าน สร้างอาชีพทำเงิน ออกแบบด้วย Tailwind CSS, Modern Vanilla JavaScript, และรองรับการนำขึ้นโฮสต์ฟรีผ่าน GitHub Pages

---

## 🌟 จุดเด่นของเว็บไซต์ (Features)
- **High-Converting Copywriting**: โครงสร้างหน้าเว็บออกแบบตามหลักการตลาดเพื่อดึงดูดผู้สนใจคอร์สเรียนอาหาร/สร้างอาชีพ
- **Interactive Profit Calculator**: เครื่องคำนวณกำไรจากการเปิดร้านไก่ทอดแบบ Real-time ให้ผู้เข้าชมเห็นตัวเลขรายได้และกำไรสุทธิต่อเดือน
- **Responsive 100%**: รองรับการเปิดบนมือถือ (Mobile), แท็บเล็ต (Tablet) และคอมพิวเตอร์ (Desktop) ได้สวยงามสมบูรณ์แบบ
- **Modern Tech Stack**: ใช้ Tailwind CSS, Lucide Icons, Google Fonts (Prompt & Kanit), CSS Glassmorphism และ Shimmer Effects
- **Lead Capture & Modal Form**: ฟอร์มลงทะเบียนพร้อมระบบแจ้งเตือน Toast Alert เมื่อกดสมัคร
- **FAQ Accordion**: แถบคำถามที่พบบ่อยสามารถคลิกขยายดูรายละเอียดได้อย่างลื่นไหล

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)
```text
├── index.html          # โครงสร้างหน้า Landing Page หลัก
├── css/
│   └── custom.css      # กำหนดฟอนต์ภาษาไทย เอฟเฟกต์แสงเงา Shimmer และสไตล์เฉพาะ
├── js/
│   └── app.js          # ระบบคำนวณกำไร, เมนู Mobile, Accordion, Modal, Toast
├── assets/             # โฟลเดอร์สำหรับใส่รูปภาพเพิ่มเติม
├── .gitignore          # ไฟล์ยกเว้นที่ไม่นำขึ้น Git
├── deploy_guide.md     # คู่มือแนะนำวิธีนำโปรเจกต์ขึ้น GitHub และเปิด GitHub Pages
└── README.md           # รายละเอียดโปรเจกต์
```

---

## 🚀 วิธีเปิดดูเว็บไซต์ในเครื่อง (How to Run Locally)
1. ดับเบิลคลิกเปิดไฟล์ `index.html` ผ่านเว็บเบราว์เซอร์ใดก็ได้ (Google Chrome, Microsoft Edge, Safari)
2. หรือหากใช้ **VS Code** สามารถติดตั้ง Extension `Live Server` แล้วกดคลิกขวาที่ `index.html` > เลือก **Open with Live Server**

---

## 🌐 การนำโปรเจกต์ขึ้น GitHub & เผยแพร่เว็บฟรี (GitHub Pages)
สามารถดูคู่มือฉบับเต็มทีละสเต็ปได้ที่ [deploy_guide.md](./deploy_guide.md)

### สรุปขั้นตอนอย่างย่อ:
1. สร้าง New Repository บน [GitHub.com](https://github.com/new)
2. อัปโหลดไฟล์ทั้งหมดขึ้น Repository (ผ่าน Git CLI, GitHub Desktop หรือลากไฟล์วางบนเว็บ GitHub)
3. ไปที่แท็บ **Settings** > **Pages**
4. ในส่วน **Build and deployment** เลือก Source: `Deploy from a branch`
5. เลือก Branch: `main` และโฟลเดอร์ `/(root)` แล้วกด **Save**
6. รอประมาณ 1-2 นาที คุณจะได้ URL เว็บไซต์จริง เช่น `https://<username>.github.io/<repo-name>/` พร้อมแชร์ให้ทุกคนเข้าชมได้ทันที!
