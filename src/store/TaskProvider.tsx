import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import AsyncStorage  from "@react-native-async-storage/async-storage";
import { Task } from "../pages/Home";

export interface ITaskContext {
  tasks: Task[];
  addTask(task: Task): void;
  removeTask(id: string): void;
}

const tasksData = '@MyTasks:Tasks'

export const TaskContext = createContext({} as ITaskContext)

export default function TaskProvider({ children }: PropsWithChildren) {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    async function loadTasks () {
      const taskList = await AsyncStorage.getItem(tasksData)

      if (taskList) {
        setTasks(JSON.parse(taskList))
      }
    }

    loadTasks()
  }, [])

  const addTask = async (task: Task) => {
    try {
      const newTaskList = [...tasks, task]
      setTasks(newTaskList)
      await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList))
    } catch (err) {
      throw new Error(err as string)
    }
  }

  const removeTask = async (id: string) => {
    try {
      const removeFilter = tasks.filter(item => item.id != id)
      setTasks(removeFilter)
      await AsyncStorage.setItem(tasksData, JSON.stringify(removeFilter))
    } catch (err) {
      throw new Error(err as string)
    }
  }

  return <TaskContext.Provider value={{ tasks, addTask, removeTask }}>{children}</TaskContext.Provider>
}

export const useTaskContext = () => {
  const context = useContext(TaskContext)

  if (!context) {
    throw new Error('This hook must be used in TaskProvider')
  }

  return context
}