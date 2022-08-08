// stores.ts
import { writable } from 'svelte/store'
import { localStore } from './localStore'
import type { TodoType } from './types/todo.type'

export const alert = writable<string>('Welcome to the To-Do list app!')

const initialTodos: TodoType[] = [
  { id: 1, name: 'Complete Seminar Demo', completed: true },
  { id: 2, name: 'Complete Seminar Printable File', completed: false },
]

export const todos = localStore<TodoType[]>('mdn-svelte-todo', initialTodos)
