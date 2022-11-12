import React, { useState, useEffect } from 'react'
import { TodoForm } from '../comonents/TodoForm';
import { TodoList } from '../comonents/TodoList';
import { ITodo } from '../interfaces';

export const TodoPage: React.FC = () => {

    const saved = JSON.parse(localStorage.getItem('todos') || '[]')
    const [todos, setTodos] = useState<ITodo[]>(saved)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string) => {
        const newTodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        setTodos(prev => [newTodo, ...prev])
    }

    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        }))
    }

    const removeHandler = (id: number) => {
        const shouldRemove = window.confirm('Ви дійсно хочете видалити справу?')
        if (shouldRemove) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }
    }


    return (
        <>
            <TodoForm onAdd={addHandler} />
            <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
        </>
    )
} 