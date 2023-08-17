import { Col, Row, Input, Button, Select, Tag } from 'antd'
import Todo from '../Todo'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { todosRemainingSelector } from '../../redux/selectors'
// import { addTodo } from '../../redux/actions'
import { addNewTodo } from './todoListSlice'

export default function TodoList() {
  const [todoName, setTodoName] = useState('')

  const [priority, setPriority] = useState('Medium')

  // Use selector react redux
  const todoList = useSelector(todosRemainingSelector)

  const dispatch = useDispatch()

  const handleAddButtonClick = () => {
    // dispatch(
    //   todoListSlice.actions.addTodo({
    //     id: uuidv4(),
    //     name: todoName,
    //     priority: priority,
    //     completed: false,
    //   })
    // )

    dispatch(
      addNewTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    )

    setTodoName('')
    setPriority('Medium')
  }

  const handleInputChange = (event) => {
    const { value } = event.target
    if (value !== '') {
      setTodoName(value)
    }
  }

  const handleSelectChange = (value) => {
    setPriority(value)
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo) => (
          <Todo key={todo.id} id={todo.id} name={todo.name} completed={todo.completed} priority={todo.priority} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select value={priority} onChange={handleSelectChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  )
}
