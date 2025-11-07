import baseApi from "../baseApi";

export const portfolioApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPortfolio: builder.query({
      query: () => ({
        url: "/portfolio",
        method: "GET",
      }),
    }),
	
  }),
});

export const { useGetPortfolioQuery } = portfolioApi;
