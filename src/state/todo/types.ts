export interface IAllTodos { [ listId: string ]: ITodo }

export interface ITodo {
  id: string
  text: string | null
  dateCreated: string | null
  dateCurrent: string | null
  dateCompleted: string | null
}

export interface ITodoUpdates {
  text?: ITodo['text']
  dateCompleted?: ITodo['dateCompleted']
  dateCurrent?: ITodo['dateCurrent']
}