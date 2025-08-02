import axios from "../utils/axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TopNav from "./partials/TopNav";
import HorizontalCard from "./partials/HorizontalCard";
import Loading from "./partials/Loading";

function MovieDetails() {
  const navigate = useNavigate();
  const { media_type, id } = useParams();
  const [movie, setMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [watchProviders, setWatchProviders] = useState(null);
  const [videos, setVideos] = useState([]);
  const [showTrailer, setShowTrailer] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllDetails = async () => {
      setLoading(true);
      try {
        const { data: movieData } = await axios.get(`/${media_type}/${id}`);
        const { data: recData } = await axios.get(
          `/${media_type}/${id}/recommendations`
        );
        const { data: providersData } = await axios.get(
          `/${media_type}/${id}/watch/providers`
        );
        const { data: videosData } = await axios.get(
          `/${media_type}/${id}/videos`
        );

        setMovie(movieData);
        setRecommendations(recData.results);
        setWatchProviders(providersData.results);
        setVideos(videosData.results || []);
      } catch (error) {
        console.log("Error fetching details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllDetails();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  const backdropUrl = `https://image.tmdb.org/t/p/original/${
    movie.backdrop_path || movie.poster_path
  }`;
  const posterUrl = `https://image.tmdb.org/t/p/w500/${
    movie.poster_path || movie.backdrop_path
  }`;

  
  const trailer =
    videos.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    ) || videos.find((video) => video.site === "YouTube");

  const handlePlayTrailer = () => {
    if (trailer) {
      setShowTrailer(true);
    }
  };

  const closeTrailer = () => {
    setShowTrailer(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {showTrailer && trailer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl mx-4">
            <button
              onClick={closeTrailer}
              className="absolute -top-12 right-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 text-white transition-colors z-10"
            >
              <i className="ri-close-line text-xl" />
            </button>

            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&rel=0`}
                title={trailer.name || "Movie Trailer"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-white">
                {trailer.name || "Official Trailer"}
              </h3>
              {trailer.published_at && (
                <p className="text-gray-400 text-sm mt-1">
                  Published:{" "}
                  {new Date(trailer.published_at).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={backdropUrl}
            alt={movie.title || movie.original_name || "Movie backdrop"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />
        </div>

        <div className="relative z-10 flex items-center gap-6 p-6 bg-black/20 backdrop-blur-sm">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300 group"
          >
            <i className="ri-arrow-left-line text-white text-xl group-hover:scale-110 transition-transform" />
          </button>

          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-600/20 hover:bg-yellow-600/30 transition-colors">
              <i className="ri-external-link-line text-yellow-400 text-lg" />
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/20 hover:bg-blue-600/30 transition-colors">
              <i className="ri-earth-fill text-blue-400 text-lg" />
            </button>
            <span className="text-yellow-400 font-semibold text-lg tracking-wide">
              IMDB
            </span>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="flex-shrink-0">
              <div className="relative group">
                <img
                  className="w-80 h-[480px] object-cover rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                  src={posterUrl}
                  alt={movie.title || movie.original_name || "Movie poster"}
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            <div className="flex-1 space-y-6">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-2">
                  {movie.title || movie.original_name || movie.original_title}
                </h1>
                {movie.tagline && (
                  <p className="text-xl text-gray-300 italic">
                    {movie.tagline}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm">
                {movie.release_date && (
                  <span className="flex items-center gap-2 px-3 py-1 bg-gray-800/50 rounded-full">
                    <i className="ri-calendar-line text-blue-400" />
                    {new Date(movie.release_date).getFullYear()}
                  </span>
                )}

                {movie.runtime && (
                  <span className="flex items-center gap-2 px-3 py-1 bg-gray-800/50 rounded-full">
                    <i className="ri-time-line text-green-400" />
                    {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
                  </span>
                )}

                {movie.vote_average && (
                  <span className="flex items-center gap-2 px-3 py-1 bg-yellow-600/20 rounded-full">
                    <i className="ri-star-fill text-yellow-400" />
                    {movie.vote_average.toFixed(1)}
                  </span>
                )}
              </div>

              {movie.genres && movie.genres.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium border border-purple-600/30"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              )}

              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <i className="ri-file-text-line text-blue-400" />
                  Overview
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg max-w-4xl">
                  {movie.overview || "No overview available."}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={handlePlayTrailer}
                  disabled={!trailer}
                  className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    trailer
                      ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 hover:shadow-red-500/25"
                      : "bg-gray-600 cursor-not-allowed opacity-50"
                  }`}
                >
                  <i
                    className={`text-xl ${
                      trailer ? "ri-play-fill" : "ri-play-line"
                    }`}
                  />
                  {trailer ? "Play Trailer" : "No Trailer Available"}
                </button>

                <button className="flex items-center gap-3 px-6 py-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl font-medium text-white transition-all duration-300 border border-gray-600/30 hover:border-gray-500/50">
                  <i className="ri-heart-line text-xl" />
                  Add to Favorites
                </button>

                <button className="flex items-center gap-3 px-6 py-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl font-medium text-white transition-all duration-300 border border-gray-600/30 hover:border-gray-500/50">
                  <i className="ri-share-line text-xl" />
                  Share
                </button>
              </div>

              {watchProviders && Object.keys(watchProviders).length > 0 && (
                <div className="space-y-4 pt-6 border-t border-gray-700/30">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <i className="ri-tv-line text-green-400" />
                    Where to Watch
                  </h3>

                  {watchProviders.US && (
                    <div className="space-y-4">
                      {watchProviders.US.flatrate &&
                        watchProviders.US.flatrate.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                              Stream
                            </h4>
                            <div className="flex flex-wrap gap-3">
                              {watchProviders.US.flatrate
                                .slice(0, 6)
                                .map((provider) => (
                                  <div
                                    key={provider.provider_id}
                                    className="flex items-center gap-2 px-3 py-2 bg-green-600/20 border border-green-600/30 rounded-lg hover:bg-green-600/30 transition-colors group"
                                  >
                                    <img
                                      src={`https://image.tmdb.org/t/p/w45${provider.logo_path}`}
                                      alt={provider.provider_name}
                                      className="w-6 h-6 rounded group-hover:scale-110 transition-transform"
                                    />
                                    <span className="text-sm font-medium text-green-300">
                                      {provider.provider_name}
                                    </span>
                                  </div>
                                ))}
                            </div>
                          </div>
                        )}

                      {watchProviders.US.rent &&
                        watchProviders.US.rent.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                              Rent
                            </h4>
                            <div className="flex flex-wrap gap-3">
                              {watchProviders.US.rent
                                .slice(0, 6)
                                .map((provider) => (
                                  <div
                                    key={provider.provider_id}
                                    className="flex items-center gap-2 px-3 py-2 bg-yellow-600/20 border border-yellow-600/30 rounded-lg hover:bg-yellow-600/30 transition-colors group"
                                  >
                                    <img
                                      src={`https://image.tmdb.org/t/p/w45${provider.logo_path}`}
                                      alt={provider.provider_name}
                                      className="w-6 h-6 rounded group-hover:scale-110 transition-transform"
                                    />
                                    <span className="text-sm font-medium text-yellow-300">
                                      {provider.provider_name}
                                    </span>
                                  </div>
                                ))}
                            </div>
                          </div>
                        )}

                      {watchProviders.US.buy &&
                        watchProviders.US.buy.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                              Buy
                            </h4>
                            <div className="flex flex-wrap gap-3">
                              {watchProviders.US.buy
                                .slice(0, 6)
                                .map((provider) => (
                                  <div
                                    key={provider.provider_id}
                                    className="flex items-center gap-2 px-3 py-2 bg-blue-600/20 border border-blue-600/30 rounded-lg hover:bg-blue-600/30 transition-colors group"
                                  >
                                    <img
                                      src={`https://image.tmdb.org/t/p/w45${provider.logo_path}`}
                                      alt={provider.provider_name}
                                      className="w-6 h-6 rounded group-hover:scale-110 transition-transform"
                                    />
                                    <span className="text-sm font-medium text-blue-300">
                                      {provider.provider_name}
                                    </span>
                                  </div>
                                ))}
                            </div>
                          </div>
                        )}

                      {watchProviders.US.link && (
                        <div className="pt-2">
                          <a
                            href={watchProviders.US.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                          >
                            <i className="ri-external-link-line" />
                            View more options on TMDb
                          </a>
                        </div>
                      )}
                    </div>
                  )}

                  {!watchProviders.US && (
                    <p className="text-gray-400 text-sm">
                      Streaming information not available for your region.
                    </p>
                  )}
                </div>
              )}

              {(movie.production_companies || movie.spoken_languages) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-700/50">
                  {movie.production_companies &&
                    movie.production_companies.length > 0 && (
                      <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                          Production Companies
                        </h3>
                        <div className="space-y-1">
                          {movie.production_companies
                            .slice(0, 3)
                            .map((company) => (
                              <p key={company.id} className="text-gray-300">
                                {company.name}
                              </p>
                            ))}
                        </div>
                      </div>
                    )}

                  {movie.spoken_languages &&
                    movie.spoken_languages.length > 0 && (
                      <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                          Languages
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {movie.spoken_languages.map((lang) => (
                            <span
                              key={lang.iso_639_1}
                              className="px-2 py-1 bg-gray-700/50 rounded text-sm text-gray-300"
                            >
                              {lang.english_name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {recommendations && recommendations.length > 0 && (
        <div className="bg-gradient-to-b from-black to-gray-900 py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <i className="ri-film-line text-blue-400" />
              You Might Also Like
            </h2>
            <HorizontalCard data={recommendations} />
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
