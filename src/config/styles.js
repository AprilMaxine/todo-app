import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'serif',
    color: '#2c3e50',
    textAlign: 'center', 
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    fontFamily: 'notoserif',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  taskList: {
    flex: 1,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#ddd',
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
  taskText: {
    padding: 10,
    fontSize: 18, 
    fontFamily: 'notoserif',
    color: '#333',
    fontStyle: 'italic',
  },
  taskButtons: {
    flexDirection: 'row',
  },
  taskButton: {
    padding: 8,
    borderRadius: 5,
    marginLeft: 5,
  },
});

export default styles;
