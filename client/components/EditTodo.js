import React, { useState } from 'react';
import { deleteTodo } from '../store/todosSlice'
import axios from 'axios';

const DeleteTodo = () => {
    // DELETE /api/todos/:id
    const dispatch = useDispatch("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { data: deleted } = await axios.post('/api/todos/:id', {
        taskName,
        assignee
        });
        dispatch(deleteTodo(deleted))
        navigate('/');
    }

    return (
        <button type='delete'>Delete</button>
    )
}

export default DeleteTodo;