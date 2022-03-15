import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:3500/users";

const createRequest = (url) => ({ url });

export const Users = createApi({
  reducerPath: "Users",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (user) => createRequest(`/user`),
    }),
  }),
});

export const { useGetUsersQuery } = Users;
