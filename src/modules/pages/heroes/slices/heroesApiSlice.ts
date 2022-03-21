import { mainApi } from "../../../../app/api/mainApi";
import { middlewareApi } from "../../../../app/middlewares/middlewareApi";
import { Heroe, HeroesResponse } from "../interfaces/heroes.interface";

// import { AccessState } from '../../../../types';

export const heroesTags = middlewareApi.enhanceEndpoints({
  addTagTypes: ["Heroes"],
});
// Define a service using a base URL and expected endpoints
export const heroesApi = heroesTags.injectEndpoints({
  // overrideExisting: false,

  endpoints: (builder) => ({
    /**
     * @GET heroes
     */
    getHeroes: builder.query<
      HeroesResponse,
      { offset: number; perPage: number; search?: string }
    >({
      queryFn: async ({ offset, search, perPage }, { dispatch }) => {
        try {
          const { data } = await mainApi.get<HeroesResponse>("/characters", {
            params: {
              // ts: 1,
              // hash: "b7c52d45cff20fd46bd9de266a81c7e6",
              apikey: process.env.REACT_APP_APIKEY,
              offset,
              limit: perPage,
              ...(search && { nameStartsWith: search }),
            },
          });

          return { data };
        } catch (error: any) {
          return { error };
        }
      },
      providesTags: (result) =>
        result
          ? [
              ...result.data.results.map(
                ({ id }) => ({ type: "Heroes", id } as const)
              ),
              { type: "Heroes", id: "LIST" },
            ]
          : [{ type: "Heroes", id: "LIST" }],
    }),

    /**
     * @GET heroe by id
     */
    getHeroe: builder.query<HeroesResponse, { heroeId: number }>({
      queryFn: async ({ heroeId }, { getState }) => {
        try {
          const { data } = await mainApi.get<HeroesResponse>(
            `/characters/${heroeId}`,
            {
              params: {
                apikey: process.env.REACT_APP_APIKEY,
              },
            }
          );

          return { data };
        } catch (error: any) {
          return { error };
        }
      },
      providesTags: (result, error, { heroeId }) => [
        { type: "Heroes", heroeId },
      ],
    }),

    //
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetHeroesQuery,
  useLazyGetHeroesQuery,
  useGetHeroeQuery,
  useLazyGetHeroeQuery,
} = heroesApi;
