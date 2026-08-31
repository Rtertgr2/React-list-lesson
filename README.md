# 📓 React Notebook — เรียนรู้ React + TypeScript ผ่าน DummyJSON API

โปรเจกต์เรียนรู้ React + TypeScript ที่รวบรวมบทเรียนหลายเรื่องไว้ในแอปเดียว พร้อมดึงข้อมูลจริงจาก [DummyJSON](https://dummyjson.com) แสดงเป็นร้านค้าออนไลน์

## ✨ ฟีเจอร์หลัก

- **🌐 ดึงข้อมูลจริงจาก API** — ใช้ DummyJSON products endpoint (แบบทั้งหมด + ค้นหา + กรองหมวดหมู่ + pagination)
- **🎨 Warm Notebook design** — โทน terracotta/paper ฟอนต์ Fraunces + IBM Plex
- **🌙 Light/Dark theme** — ปุ่มสลับ theme ผ่าน Navbar (จำค่าใน localStorage)
- **🧭 Multi-page routing** — 6 หน้าด้วย React Router (HashRouter) + animated page transitions (slide/fade ตามทิศทาง)
- **📌 Sticky section heading** — หัวข้อติด navbar ลอยตอนเลื่อน
- **🌊 Ripple effect** — คลิกปุ่มแล้วเห็นวงกลมขยายจากจุดที่กด
- **🃏 Card hover animation** — การ์ดลอยขึ้น + ขอบเปลี่ยนสีตอน hover
- **📱 Responsive** — ใช้งานได้ทั้ง desktop และ mobile

## 📁 โครงสร้างโปรเจกต์

```
src/
├── App.tsx / App.css          (Router + Design tokens)
├── components/
│   ├── Navbar/                (Navbar ลอย + Theme toggle)
│   ├── RippleButton.tsx       (ปุ่ม ripple effect)
│   ├── Greeting/ SubjectList/ Profile/
├── pages/                     (Home/Greeting/Subjects/Profile/Todo/Products)
│   └── AnimatedRoutes.tsx     (Page transition + direction detection)
├── products/                  (DummyJSON module)
│   ├── types.ts / api.ts      (TypeScript types + API client)
│   ├── ProductsPage.tsx       (Grid + search + category + pagination)
│   ├── ProductCard.tsx / ProductDetail.tsx
└── TodoList/                  (CRUD รายการ + Shiny Text)
```

## 🚀 วิธีรัน

```bash
npm install
npm run dev
```

เปิด http://localhost:5173

## 🛠 Tech Stack

| Tool | ใช้สำหรับ |
|------|-----------|
| React 19 + TypeScript | UI + Type safety |
| Vite 8 | Build tool + dev server |
| React Router 7 | Multi-page navigation |
| DummyJSON API | ข้อมูลสินค้าจริง |
| Fraunces + IBM Plex | ฟอนต์ Warm Notebook |

## 📝 สิ่งที่เรียนรู้

- TypeScript interface mapping (JSON → types)
- Generic API client (`fetchJSON<T>`, `PaginatedResponse<T>`)
- Custom hooks (useState, useEffect, useCallback)
- Error handling + loading states
- React Router + animated page transitions
- Design tokens (CSS variables + Light/Dark theme)

## 📌 หน้าต่างๆ

| หน้า | สิ่งที่เรียน |
|------|-------------|
| Greeting | รับ prop เข้าแสดงผล |
| SubjectList | แสดงรายการด้วย `.map()` + `key={item.id}` |
| Profile | ใช้ Fragment แทน `<div>` ห่อ |
| Todo | CRUD รายการ (เพิ่ม/แก้ไข/ลบ/สลับสถานะ) |
| Products | ดึง API + ค้นหา + กรองหมวดหมู่ + pagination |

---

สร้างโดย **Rtertgr2** เพื่อเรียนรู้ React + TypeScript
