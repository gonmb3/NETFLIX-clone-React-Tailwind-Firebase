const key = "14db605e64e1053a793ca802a573eff2";

const requests = {
    requestsPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestsTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestsNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    requestsRecommendations: `https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=${key}&language=en-US&page=1`,
    requestsUpComming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&&language=en-US&page=1`,
}

export default requests;