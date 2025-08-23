import { db } from "../firebase/firebase";
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";

const taskCollection = collection(db, "tasks");

const TaskList = {
  // CREATE
  CreateTask: async (task) => {
    await addDoc(taskCollection, task);
  },

  // READ
  GetTask: async () => {
    const snapshot = await getDocs(taskCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },

  // UPDATE
  UpdateTask: async (id, updatedTask) => {
    const taskDoc = doc(db, "tasks", id);
    await updateDoc(taskDoc, updatedTask);
  },

  // DELETE
  RemoveTask: async (id) => {
    const taskDoc = doc(db, "tasks", id);
    await deleteDoc(taskDoc);
  },
};

export default TaskList;
