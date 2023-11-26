import todoStyles from '../config/styles';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TodoScreen() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;

    if (editingTodo !== null) {
      const updatedTodos = todos.map((todo) =>
        todo.id === editingTodo.id ? { ...todo, text: newTodo } : todo
      );
      setTodos(updatedTodos);
      setEditingTodo(null);
    } else {
      setTodos([...todos, { id: Date.now().toString(), text: newTodo }]);
    }
    setNewTodo('');
  };

  const handleEditTodo = (id, text) => {
    setNewTodo(text);
    setEditingTodo({ id, text });
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <View style={[todoStyles.container, { backgroundColor: 'pink' }]}>
      <Text style={todoStyles.title}>To Do Notes</Text>

      <View style={todoStyles.inputContainer}>
        <TextInput
          style={[todoStyles.input, { backgroundColor: '#D3D3D3' }]}
          placeholder="Enter To Do"
          value={newTodo}
          onChangeText={(text) => setNewTodo(text)}
        />
        <TouchableOpacity style={todoStyles.addButton} onPress={handleAddTodo}>
          <Text style={todoStyles.buttonText}>{editingTodo ? 'Update' : 'Create'}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={todoStyles.taskList}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[todoStyles.task, { backgroundColor: '#E8BEAC', borderColor: 'black' }]}>
            <Text style={todoStyles.taskText}>{item.text}</Text>
            <View style={todoStyles.taskButtons}>
              <TouchableOpacity
                style={[todoStyles.taskButton, todoStyles.editButton]}
                onPress={() => handleEditTodo(item.id, item.text)}
              >
                 <Icon name="pencil" size={20} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={[todoStyles.taskButton, todoStyles.deleteButton]}
                onPress={() => handleDeleteTodo(item.id)}
              >
                <Icon name="trash" size={20} color="brown" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}
