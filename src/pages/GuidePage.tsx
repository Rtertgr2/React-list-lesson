import './Guide.css'

const GUIDE_HTML = `
<h2>📘 สารบัญ</h2>
<ul>
  <li><a href="#prep">1. เตรียมความพร้อม</a></li>
  <li><a href="#install">2. ติดตั้ง Firebase CLI</a></li>
  <li><a href="#create">3. สร้าง Firebase Project</a></li>
  <li><a href="#config">4. ตั้งค่า Hosting</a></li>
  <li><a href="#build">5. Build โปรเจกต์</a></li>
  <li><a href="#deploy">6. Deploy ขึ้น Hosting</a></li>
  <li><a href="#domain">7. ตั้งค่า Custom Domain</a></li>
  <li><a href="#update">8. แก้ไขแล้ว Deploy ใหม่</a></li>
  <li><a href="#troubleshoot">9. ปัญหาที่พบบ่อย</a></li>
</ul>

<h2 id="prep">1. เตรียมความพร้อม</h2>
<table>
  <tr><th>สิ่งต้องมี</th><th>รายละเอียด</th></tr>
  <tr><td>Node.js</td><td>เวอร์ชัน 18+</td></tr>
  <tr><td>npm</td><td>มาพร้อม Node.js</td></tr>
  <tr><td>Git</td><td>ติดตั้งแล้ว</td></tr>
  <tr><td>Google Account</td><td>สำหรับ Firebase</td></tr>
</table>

<h2 id="install">2. ติดตั้ง Firebase CLI</h2>
<pre data-lang="bash"><code>npm install -g firebase-tools
firebase --version</code></pre>

<h2 id="create">3. สร้าง Firebase Project</h2>
<pre data-lang="bash"><code>firebase login
firebase projects:create &lt;project-id&gt; --display-name "&lt;ชื่อ&gt;"
firebase projects:list</code></pre>

<h2 id="config">4. ตั้งค่า Hosting</h2>
<p>สร้างไฟล์ <code>.firebaserc</code>:</p>
<pre data-lang="json"><code>{
  "projects": { "default": "&lt;project-id&gt;" }
}</code></pre>
<p>สร้างไฟล์ <code>firebase.json</code>:</p>
<pre data-lang="json"><code>{
  "hosting": {
    "public": "dist",
    "rewrites": [{ "source": "**", "destination": "/index.html" }]
  }
}</code></pre>

<h2 id="build">5. Build โปรเจกต์</h2>
<pre data-lang="bash"><code>npm run build</code></pre>

<h2 id="deploy">6. Deploy ขึ้น Hosting</h2>
<pre data-lang="bash"><code>firebase deploy</code></pre>
<p>ผลลัพธ์: <code>https://&lt;project-id&gt;.web.app</code></p>

<h2 id="domain">7. ตั้งค่า Custom Domain</h2>
<p>Firebase Console → Hosting → Add custom domain → ทำตามคำแนะนำ</p>

<h2 id="update">8. แก้ไขแล้ว Deploy ใหม่</h2>
<pre data-lang="bash"><code>npm run build
firebase deploy</code></pre>

<h2 id="troubleshoot">9. ปัญหาที่พบบ่อย</h2>
<table>
  <tr><th>ปัญหา</th><th>วิธีแก้</th></tr>
  <tr><td>Project ID ซ้ำ</td><td>เปลี่ยนชื่อใหม่</td></tr>
  <tr><td>command not found</td><td>npm install -g firebase-tools</td></tr>
  <tr><td>SPA routing 404</td><td>เพิ่ม rewrites ใน firebase.json</td></tr>
</table>
`

export default function GuidePage() {
  return (
    <section className="page guide-page">
      <span className="tag">คู่มือ</span>
      <h1 className="sticky-heading">Firebase Deploy Guide</h1>

      <div className="guide-actions">
        <a
          className="btn guide-docs-btn"
          href="https://docs.google.com/document/d/1a2B3c4D5e6F7g8H9i0JkLmNoPqRsTuVwXyZ/edit"
          target="_blank"
          rel="noopener noreferrer"
        >
          📄 เปิดใน Google Docs
        </a>
        <a
          className="btn ghost"
          href="https://firebase.google.com/docs/hosting"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 Firebase Hosting Docs
        </a>
      </div>

      <div
        className="guide-content"
        dangerouslySetInnerHTML={{ __html: GUIDE_HTML }}
      />
    </section>
  )
}
