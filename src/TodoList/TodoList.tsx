import { useState } from 'react'
import ShinyText from './ShinyText'
import RippleButton from '../components/RippleButton'
import './TodoList.css'

export type Todo = {
  id: string
  title: string
  done: boolean
  createdAt: number
}

export type TodoListProps = {
  title?: string
}

function makeId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }
  return 'todo-' + Date.now() + '-' + Math.random().toString(16).slice(2)
}

export default function TodoList({ title = 'รายการที่ต้องทำ' }: TodoListProps) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: makeId(), title: 'เรียนรู้ React Components', done: false, createdAt: Date.now() },
    { id: makeId(), title: 'ฝึกใช้ props และ state', done: false, createdAt: Date.now() },
    { id: makeId(), title: 'สร้าง interface ใน TypeScript', done: true, createdAt: Date.now() },
  ])
  const [input, setInput] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editText, setEditText] = useState('')

  const addTodo = () => {
    const text = input.trim()
    if (!text) return
    setTodos((prev) => [
      ...prev,
      { id: makeId(), title: text, done: false, createdAt: Date.now() },
    ])
    setInput('')
  }

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
    if (editingId === id) setEditingId(null)
  }

  const toggleDone = (id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    )
  }

  const startEdit = (todo: Todo) => {
    setEditingId(todo.id)
    setEditText(todo.title)
  }

  const saveEdit = (id: string) => {
    const text = editText.trim()
    if (text) {
      setTodos((prev) =>
        prev.map((t) => (t.id === id ? { ...t, title: text } : t))
      )
    }
    setEditingId(null)
    setEditText('')
  }

  const doneCount = todos.filter((t) => t.done).length

  return (
    <section className="todo-card" aria-label="รายการที่ต้องทำ">
      <h2 className="todo-title">
        <ShinyText text={title} speed={3} color="#c8553d" shineColor="#a23e2b" />
      </h2>

      <div className="todo-progress">
        <span className="todo-bar">
          <span
            className="todo-fill"
            style={{ width: `${todos.length ? (doneCount / todos.length) * 100 : 0}%` }}
          />
        </span>
        <small>
          เสร็จ {doneCount} / {todos.length}
        </small>
      </div>

      <div className="todo-add">
        <input
          className="todo-input"
          value={input}
          placeholder="พิมพ์งานที่ต้องทำ..."
          aria-label="เพิ่มงานใหม่"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        />
        <RippleButton className="btn" onClick={addTodo}>
          เพิ่ม
        </RippleButton>
      </div>

      <ul className="list">
        {todos.map((t) => (
          <li key={t.id} className={`item ${t.done ? 'done' : ''}`}>
            <input
              type="checkbox"
              checked={t.done}
              aria-label={t.done ? 'ทำเสร็จแล้ว' : 'ยังไม่เสร็จ'}
              onChange={() => toggleDone(t.id)}
            />

            {editingId === t.id ? (
              <>
                <input
                  className="todo-input"
                  value={editText}
                  autoFocus
                  aria-label="แก้ไขข้อความ"
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && saveEdit(t.id)}
                />
                <RippleButton className="btn ghost" onClick={() => saveEdit(t.id)}>
                  บันทึก
                </RippleButton>
                <RippleButton className="btn ghost" onClick={() => setEditingId(null)}>
                  ยกเลิก
                </RippleButton>
              </>
            ) : (
              <>
                <span className="txt">{t.title}</span>
                <RippleButton className="btn ghost" onClick={() => startEdit(t)}>
                  แก้ไข
                </RippleButton>
                <RippleButton
                  className="btn danger"
                  onClick={() => removeTodo(t.id)}
                  ariaLabel="ลบรายการ"
                >
                  ลบ
                </RippleButton>
              </>
            )}
          </li>
        ))}
      </ul>

      {todos.length === 0 && <p className="empty">ยังไม่มีรายการ — ลองเพิ่มดูสิ</p>}
    </section>
  )
}
