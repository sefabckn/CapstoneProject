import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:3500";

const createRequest = (url) => ({ url });

export const Users = createApi({
  reducerPath: "Users",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (users) => createRequest("/users"),
    }),
    createUsers: builder.mutation({
      query: (user) => ({
        headers: {
          "Content-type": "application/json",
        },
        url: "users",
        method: "POST",
        body: user,
      }),
    }),
    updateUsers: builder.mutation({
      query: (user) => ({
        headers: {
          "Content-type": "application/json",
        },
        url: "users",
        method: "PUT",
        body: user,
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useCreateUsersMutation,
  useUpdateUsersMutation,
} = Users;
