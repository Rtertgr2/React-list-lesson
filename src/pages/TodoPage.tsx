import TodoList from '../TodoList/TodoList'

export default function TodoPage() {
  return (
    <section className="page">
      <h1>หน้า Todo List</h1>
      <TodoList title="รายการที่ต้องทำ (Todo)" />
    </section>
  )
}
