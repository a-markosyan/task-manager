import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Task } from "./taskTypes";

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }), // Adjust your base URL
  tagTypes: ["Tasks"], // Helps with caching and invalidation
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => "/tasks",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Tasks", id } as const)),
              { type: "Tasks", id: "TASKS" },
            ]
          : [{ type: "Tasks", id: "TASKS" }],
    }),
    // addTodo: builder.mutation<Todo, AddTodoPayload>({
    //   query: (newTodo) => ({
    //     url: '/todos',
    //     method: 'POST',
    //     body: newTodo,
    //   }),
    //   invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    // }),
    // updateTodo: builder.mutation<Todo, UpdateTodoPayload>({
    //   query: ({ id, ...patch }) => ({
    //     url: `/todos/${id}`,
    //     method: 'PATCH',
    //     body: patch,
    //   }),
    //   invalidatesTags: (result, error, { id }) => [{ type: 'Todos', id }],
    // }),
    // deleteTodo: builder.mutation<{ success: boolean; id: number }, number>({
    //   query: (id) => ({
    //     url: `/todos/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: (result, error, id) => [{ type: 'Todos', id }],
    // }),
  }),
});

export const {
  useGetTasksQuery,
  // useAddTodoMutation,
  // useUpdateTodoMutation,
  // useDeleteTodoMutation,
} = taskApi;
