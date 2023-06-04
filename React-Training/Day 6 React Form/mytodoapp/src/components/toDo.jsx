import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editingValue, setEditingValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditingValue(todos[index]);
  };

  const cancelEditing = () => {
    setEditingIndex(-1);
    setEditingValue("");
  };

  const updateTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = editingValue;
    setTodos(updatedTodos);
    setEditingIndex(-1);
    setEditingValue("");
  };

  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        Todo App
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="center">
        <TextField
          label="Enter a task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a task"
          variant="outlined"
          size="small"
          margin="dense"
        />
        <Button
          onClick={addTodo}
          variant="contained"
          color="primary"
          size="medium"
          sx={{ ml: 1 }}
        >
          Add
        </Button>
      </Box>
      <List sx={{ marginTop: 2 }}>
        {todos?.map((todo, index) => (
          <ListItem key={index}>
            {editingIndex === index ? (
              <>
                <TextField
                  value={editingValue}
                  onChange={(e) => setEditingValue(e.target.value)}
                  variant="outlined"
                  size="small"
                  margin="dense"
                />
                <Button
                  onClick={() => updateTodo(index)}
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ ml: 1 }}
                >
                  Update
                </Button>
                <Button
                  onClick={cancelEditing}
                  variant="contained"
                  size="small"
                  sx={{ ml: 1 }}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <>
                <ListItemText primary={todo} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    onClick={() => startEditing(index)}
                    aria-label="edit"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    onClick={() => deleteTodo(index)}
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Todo;
