// @ts-nocheck

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";

/*
  Kaavish - Living Archives
  Single-file React + Tailwind sample app that includes core screens from the proposal.

  - Simple, student-friendly structure
  - Tailwind utility classes used for styling (no external CSS imports required)
  - Each screen is a functional component you can copy into your project files
  - Replace placeholder data / API calls with real endpoints later
*/

// --------------------------
// Dummy data (replace with API/MongoDB calls)
// --------------------------
const DUMMY_COMMUNITIES = [
  { id: "kolhi", name: "Kolhi (Tharparkar)", description: "A short intro to the Kolhi community.", thumbnail: "/images/kolhi-thumb.jpg" },
  { id: "example", name: "Example Community", description: "Sample community for demo.", thumbnail: "/images/example-thumb.jpg" },
];

const DUMMY_MEDIA = {
  kolhi: [
    { id: "img1", type: "image", title: "Traditional Tattoo", url: "/media/tattoo.jpg", transcript: null },
    { id: "aud1", type: "audio", title: "Oral History - A", url: "/media/oral-a.mp3", transcript: "(transcript will be shown here)" },
    { id: "vid1", type: "video", title: "Kolhi Song", url: "/media/song.mp4", transcript: "(video transcript)" },
  ],
};

// --------------------------
// Layout / Shared components
// --------------------------
function TopNav({ isAdmin }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-5 py-5 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">Living Archives</Link>
        <nav className="space-x-4">
          <Link to="/explore" className="text-sm">Explore</Link>
          <Link to="/about" className="text-sm">About</Link>
          {isAdmin ? <Link to="/admin" className="text-sm font-medium">Admin</Link> : null}
        </nav>
      </div>
    </header>
  );
}
// --------------------------
// Reusable Back Button
// --------------------------
function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="absolute top-6 left-6 bg-white/70 backdrop-blur-sm border border-[#D2B48C] text-[#5C4033] px-3 py-1.5 rounded-full shadow hover:bg-[#FAF3E0] transition-all flex items-center space-x-1"
    >
      {/* <span>←</span> */}
      <span className="text-sm font-large">←</span>
    </button>
  );
}

function Container({ children }) {
  return <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>;
}

// --------------------------
// 1. Landing / Home Page
// --------------------------
export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF3E0] via-[#FFFDF8] to-[#EAD7C3]">
      <TopNav />
      <Container>
        <section className="bg-white/70 backdrop-blur-sm rounded-2xl p-10 shadow-md border border-[#D2B48C] text-center transition-transform hover:scale-[1.01] duration-300">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#8B5E3C] to-[#5C4033] bg-clip-text text-transparent">
            Living Archives
          </h1>
          <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
            A digital archive documenting Sindh's communities through multimedia and immersive 3D experiences.
          </p>
          <div className="flex justify-center space-x-4 mt-8">
          <Link
            to="/explore"
            className="inline-block bg-gradient-to-r bg-gradient-to-r from-[#8B5E3C] to-[#5C4033] text-white px-6 py-3 rounded-full font-medium shadow hover:shadow-lg hover:scale-105 transition-all"
          >
            Explore Communities
          </Link>
                      <Link
              to="/search"
              className="inline-block px-6 py-3 rounded-full border border-[#8B5E3C] text-[#5C4033] text-sm font-medium shadow hover:shadow-lg hover:scale-105 transition-all"
            >
              Search Archives
            </Link>
        </div>
        </section>

        <section className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl shadow hover:shadow-md transition">
            <h2 className="font-semibold text-xl text-[#8B5E3C]">🌾 Featured: Kolhi</h2>
            <p className="text-sm text-gray-700 mt-2">
              A proof-of-concept collection showcasing photos, oral histories, and a 3D virtual tour.
            </p>
            <Link
              to="/community/kolhi"
        className="mt-4 inline-block text-[#5C4033] font-medium hover:underline"
            >
              View Kolhi →
            </Link>
          </div>

          <div className="p-6 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl shadow hover:shadow-md transition">
            <h2 className="font-semibold text-xl text-[#8B5E3C]">💡 About the Project</h2>
            <p className="text-sm text-gray-700 mt-2">
              Built with the MERN stack, this project supports multimedia formats, transcripts, and immersive 3D NeRF-based tours.
            </p>
            <Link
              to="/about"
              className="mt-4 inline-block text-[#5C4033] font-medium hover:underline"
            >
              Learn more →
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
}



// --------------------------
// 2. Explore Communities Page
// --------------------------
export function ExplorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF3E0] via-[#FFFDF8] to-[#EAD7C3]">
      <TopNav />
      <BackButton />
      <Container>
        <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-[#8B5E3C] to-[#5C4033] bg-clip-text text-transparent">
          Explore Communities
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {DUMMY_COMMUNITIES.map((c) => (
            <Link
              key={c.id}
              to={`/community/${c.id}`}
              className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl bg-white/70 backdrop-blur-sm border border-[#D2B48C] transition-transform transform hover:-translate-y-1 duration-300"
            >
              <div className="relative">
                <img
                  src={c.thumbnail}
                  alt={c.name}
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#8B5E3C] mb-1">{c.name}</h3>
                <p className="text-sm text-gray-700 mb-2">{c.description}</p>
                <span className="text-sm text-[#5C4033] font-medium group-hover:underline">
                  View Details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}


// --------------------------
// 3. Community Detail Page
// --------------------------
function MediaList({ communityId }) {
  const media = DUMMY_MEDIA[communityId] || [];
  return (
    <div className="space-y-3">
      {media.map((m) => (
        <Link key={m.id} to={`/community/${communityId}/media/${m.id}`} className="block p-3 border rounded flex items-center gap-3">
          <div className="w-16 h-12 bg-gray-100 flex items-center justify-center rounded">{m.type}</div>
          <div>
            <div className="font-medium">{m.title}</div>
            <div className="text-xs text-gray-500">{m.type.toUpperCase()}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
export function CommunityPage() {
  const { communityId } = useParams();
  const community =
    DUMMY_COMMUNITIES.find((c) => c.id === communityId) || {
      name: "Unknown",
      description: "Community details not found.",
      thumbnail: "/images/default.jpg",
    };

  const media = DUMMY_MEDIA[communityId] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF3E0] via-[#FFFDF8] to-[#EAD7C3]">
      <TopNav />
      <Container>
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg mb-10">
          <img
            src={community.thumbnail}
            alt={community.name}
            className="w-full h-72 object-cover brightness-75"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 bg-black/30">
            <h2 className="text-4xl font-extrabold mb-2 drop-shadow-lg">
              {community.name}
            </h2>
            <p className="max-w-2xl text-sm md:text-base opacity-90">
              {community.description}
            </p>
            <div className="mt-5 space-x-3">
              <Link
                to={`/community/${communityId}/tour`}
                className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2 rounded-full font-medium shadow hover:scale-105 transition-all"
              >
                Open 3D Tour
              </Link>
              <Link
                to={`/community/${communityId}/media`}
                className="inline-block bg-gradient-to-r bg-gradient-to-r from-[#8B5E3C] to-[#5C4033] text-white px-5 py-2 rounded-full font-medium shadow hover:scale-105 transition-all"
              >
                View Media
              </Link>
            </div>
          </div>
        </div>

        {/* Media Section */}
        <section>
          <h3 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#8B5E3C] to-[#5C4033] bg-clip-text text-transparent">
            Media Collection
          </h3>

          {media.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {media.map((m) => (
                <Link
                  key={m.id}
                  to={`/community/${communityId}/media/${m.id}`}
                  className="group bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-gray-200 shadow hover:shadow-xl transition hover:-translate-y-1"
                >
                  <div className="relative">
                    <div className="w-full h-40 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
                      {m.type === "image" ? (
                        <img
                          src={m.url}
                          alt={m.title}
                          className="object-cover h-full w-full group-hover:scale-105 transition-transform"
                        />
                      ) : (
                        <div className="text-gray-500 uppercase tracking-wider font-semibold">
                          {m.type}
                        </div>
                      )}
                    </div>
                    <div className="absolute bottom-2 right-2 text-xs bg-black/40 text-white px-2 py-0.5 rounded">
                      {m.type}
                    </div>
                  </div>

                  <div className="mt-3">
                    <h4 className="font-semibold text-[#8B5E3C]">{m.title}</h4>
                    <p className="text-sm text-gray-600">
                      {m.transcript ? "With transcript" : "No transcript"}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 italic mt-8">
              No media available for this community yet.
            </p>
          )}
        </section>
      </Container>
    </div>
  );
}


// --------------------------
// 4. 3D Virtual Tour Page (placeholder)
// --------------------------
export function VirtualTourPage() {
  const { communityId } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF3E0] via-[#FFFDF8] to-[#EAD7C3]">
      <TopNav />
      <Container>
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#8B5E3C] to-[#5C4033] bg-clip-text text-transparent">
            3D Virtual Tour
          </h2>
          <p className="text-gray-700 mt-3">
            Explore the world of <span className="font-semibold">{communityId}</span> through immersive 3D visualization.
          </p>
        </div>

        {/* 3D Viewer Section */}
        <div className="relative bg-gradient-to-br from-[#5C4033] via-[#8B5E3C] to-[#CBB994] rounded-3xl shadow-2xl overflow-hidden h-[28rem] flex items-center justify-center border border-[#D2B48C]">          {/* Decorative Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>

          {/* Placeholder */}
          <div className="z-10 text-center text-white">
            <div className="text-2xl font-bold tracking-wide">
              3D Viewer Placeholder
            </div>
            <div className="text-sm text-gray-300 mt-2">
              (NeRF / Gaussian Splatting integration goes here)
            </div>
            <div className="mt-6">
              <button
                disabled
                className="px-6 py-2 rounded-full bg-white/10 text-white border border-white/40 cursor-not-allowed"
              >
                Rendering Environment Unavailable
              </button>
            </div>
          </div>

          {/* Animated Light Gradient */}
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#8B5E3C]/10 via-[#5C4033]/10 to-transparent animate-pulse"></div>       
 </div>

        {/* Description Section */}
        <div className="mt-10 bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow border border-gray-100">
          <h3 className="text-2xl font-semibold text-[#8B5E3C] mb-3">
            About This Tour
          </h3>
          <p className="text-gray-700 leading-relaxed">
            This 3D tour will allow users to experience the <span className="font-medium">{communityId}</span> community environment 
            through photogrammetry or NeRF-based reconstructions. It can include walk-throughs of homes, artifacts, and cultural spaces, 
            enabling interactive storytelling and spatial immersion.
          </p>
        </div>

        {/* Back Button */}
        <div className="text-center mt-8">
          <Link
            to={`/community/${communityId}`}
            className="inline-block bg-gradient-to-r bg-gradient-to-r from-[#8B5E3C] to-[#5C4033] text-white px-6 py-2 rounded-full font-medium shadow hover:scale-105 transition-all"
          >
            ← Back to Community
          </Link>
        </div>
      </Container>
    </div>
  );
}


// --------------------------
// 5. Search and Filter Page
// --------------------------
export function SearchPage() {
  const [query, setQuery] = React.useState("");
  const results = React.useMemo(() => {
    if (!query) return DUMMY_COMMUNITIES;
    return DUMMY_COMMUNITIES.filter((c) =>
      c.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF3E0] via-[#FFFDF8] to-[#EAD7C3]">
      <TopNav />
      <Container>
        <h2 className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-[#8B5E3C] to-[#5C4033] bg-clip-text text-transparent">
          Search Communities
        </h2>

        {/* Search Bar */}
        <div className="flex justify-center mb-10">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="🔍  Search communities or media..."
            className="w-full max-w-2xl p-4 rounded-full border border-gray-300 shadow-sm bg-white/70 backdrop-blur-sm focus:ring-2 focus:ring-[#A67B5B] outline-none text-gray-800 transition-all"
          />
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((c) => (
              <Link
                key={c.id}
                to={`/community/${c.id}`}
                className="group relative block rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all bg-white/80 backdrop-blur-sm border border-[#D2B48C]"
              >
                <img
                  src={c.thumbnail}
                  alt={c.name}
                  className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    {c.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {c.description}
                  </p>
                  <span className="text-[#5C4033] text-sm font-medium mt-2 inline-block group-hover:underline">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 mt-16">
            No results found for <span className="font-semibold">"{query}"</span> 😔
          </div>
        )}
      </Container>
    </div>
  );
}


// --------------------------
// 6. Media Detail / Player Page
// --------------------------
export function MediaDetailPage() {
  const { communityId, mediaId } = useParams();
  const media =
    (DUMMY_MEDIA[communityId] || []).find((m) => m.id === mediaId) || null;

  if (!media) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FAF3E0] via-[#FFFDF8] to-[#EAD7C3] flex items-center justify-center">
        <div className="text-center bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold text-[#8B5E3C] mb-2">
            Media not found
          </h3>
          <Link
            to={`/community/${communityId}`}
            className="text-[#8B5E3C] hover:underline"
          >
            ← Back to Community
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF3E0] via-[#FFFDF8] to-[#EAD7C3]">
      <TopNav />
      <Container>
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#8B5E3C] to-[#5C4033] bg-clip-text text-transparent">
            {media.title}
          </h2>
          <p className="text-gray-600 mt-2">
            <span className="font-semibold text-[#8B5E3C] uppercase">
              {media.type}
            </span>{" "}
            — Part of <span className="italic">{communityId}</span> collection
          </p>
        </div>

        {/* Player Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-[#D2B48C] overflow-hidden mb-8">
          <div className="p-6 flex flex-col items-center justify-center">
            {media.type === "image" && (
              <img
                src={media.url}
                alt={media.title}
                className="w-full max-w-3xl rounded-lg shadow-md"
              />
            )}
            {media.type === "audio" && (
              <audio
                controls
                src={media.url}
                className="w-full max-w-2xl mt-4 rounded-lg"
              />
            )}
            {media.type === "video" && (
              <video
                controls
                src={media.url}
                className="w-full max-w-3xl rounded-lg shadow-md"
              />
            )}
          </div>
        </div>

        {/* Transcript Section */}
        {media.transcript && (
          <section className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow border border-gray-200">
            <h4 className="text-2xl font-semibold text-[#8B5E3C] mb-3">
              Transcript
            </h4>
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 text-sm leading-relaxed text-gray-700 whitespace-pre-line max-h-80 overflow-y-auto">
              {media.transcript}
            </div>
          </section>
        )}

        {/* Back Button */}
        <div className="text-center mt-8">
          <Link
            to={`/community/${communityId}`}
            className="inline-block bg-gradient-to-r bg-gradient-to-r from-[#8B5E3C] to-[#5C4033] text-white px-6 py-2 rounded-full font-medium shadow hover:scale-105 transition-all"
          >
            ← Back to Community
          </Link>
        </div>
      </Container>
    </div>
  );
}


// --------------------------
// Admin Screens
// --------------------------
export function AdminLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace with real authentication later
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FAF3E0] via-[#FFFDF8] to-[#EAD7C3]">
      <form
        onSubmit={handleLogin}
        className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl w-full max-w-sm border border-[#D2B48C]"
      >
        <h3 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-[#8B5E3C] to-[#5C4033] bg-clip-text text-transparent">
          Admin Login
        </h3>

        <div className="space-y-4">
          <input
            placeholder="Email"
            type="email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A67B5B] outline-none"
          />
          <input
            placeholder="Password"
            type="password"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A67B5B] outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-gradient-to-r bg-gradient-to-r from-[#8B5E3C] to-[#5C4033] text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Sign In
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          Access restricted to authorized Kaavish members.
        </p>
      </form>
    </div>
  );
}

export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF3E0] via-[#FFFDF8] to-[#EAD7C3]">
      <TopNav isAdmin />
      <Container>
        <h2 className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-[#8B5E3C] to-[#5C4033] bg-clip-text text-transparent">
          Admin Dashboard
        </h2>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-lg font-semibold text-[#8B5E3C]">📂 Communities</h4>
            <p className="text-2xl font-bold text-gray-800 mt-2">
              {DUMMY_COMMUNITIES.length}
            </p>
          </div>

          <div className="p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-lg font-semibold text-[#8B5E3C]">🎞 Media Items</h4>
            <p className="text-2xl font-bold text-gray-800 mt-2">
              {Object.values(DUMMY_MEDIA).flat().length}
            </p>
          </div>

          <div className="p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-lg font-semibold text-green-700">🕒 Pending Reviews</h4>
            <p className="text-2xl font-bold text-gray-800 mt-2">0</p>
          </div>
        </div>

        {/* Actions */}
        <div className="text-center space-x-4">
          <Link
            to="/admin/communities/new"
            className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2 rounded-full font-medium shadow hover:scale-105 transition"
          >
            + Add Community
          </Link>
          <Link
            to="/admin/media/upload"
            className="inline-block bg-gradient-to-r bg-gradient-to-r from-[#8B5E3C] to-[#5C4033] text-white px-5 py-2 rounded-full font-medium shadow hover:scale-105 transition"
          >
            ⬆ Upload Media
          </Link>
        </div>
      </Container>
    </div>
  );
}


export function AdminAddCommunity() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to API
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF3E0] via-[#FFFDF8] to-[#EAD7C3]">
      <TopNav isAdmin />
      <Container>
        <h2 className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-[#8B5E3C] to-[#5C4033] bg-clip-text text-transparent">
          Add / Edit Community
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-[#D2B48C] space-y-5"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Community Name
            </label>
            <input
              placeholder="e.g., Kolhi (Tharparkar)"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A67B5B] outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Description
            </label>
            <textarea
              placeholder="Brief background of the community"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A67B5B] outline-none resize-none"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Thumbnail URL
            </label>
            <input
              placeholder="Paste an image URL"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A67B5B] outline-none"
            />
          </div>

          <div className="flex justify-center space-x-4 pt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:scale-105 transition-all"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin/dashboard")}
              className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export function AdminUploadMedia() {
  const navigate = useNavigate();

  const handleUpload = (e) => {
    e.preventDefault();
    // TODO: upload to server + save metadata
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF3E0] via-[#FFFDF8] to-[#EAD7C3]">
      <TopNav isAdmin />
      <Container>
        <h2 className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-[#8B5E3C] to-[#5C4033] bg-clip-text text-transparent">
          Upload Media
        </h2>

        <form
          onSubmit={handleUpload}
          className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-[#D2B48C] space-y-5"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Select Community
            </label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A67B5B] outline-none">
              <option value="">-- Select Community --</option>
              {DUMMY_COMMUNITIES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              placeholder="e.g., Traditional Tattoo Art"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A67B5B] outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Media Type
            </label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A67B5B] outline-none">
              <option value="image">Image</option>
              <option value="audio">Audio</option>
              <option value="video">Video</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Upload File
            </label>
            <input
              type="file"
              className="w-full text-sm text-gray-700 bg-gray-50 border border-gray-300 rounded-lg p-2 cursor-pointer"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Transcript / Notes
            </label>
            <textarea
              placeholder="Optional notes or transcript"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A67B5B] outline-none resize-none"
            ></textarea>
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-gradient-to-r bg-gradient-to-r from-[#8B5E3C] to-[#5C4033] text-white px-8 py-2 rounded-full font-semibold shadow hover:scale-105 transition-all"
            >
              Upload
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
}


// --------------------------
// About page
// --------------------------
export function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF3E0] via-[#FFFDF8] to-[#EAD7C3]">
      <TopNav />
      <Container>
        <section className="max-w-3xl mx-auto text-center bg-white/70 backdrop-blur-sm rounded-2xl p-10 shadow-md border border-[#D2B48C]">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#8B5E3C] to-[#5C4033] bg-clip-text text-transparent mb-4">
            About Living Archives
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <span className="font-semibold text-[#8B5E3C]">Living Archives</span> is a digital storytelling platform that 
            preserves the heritage of Sindh’s diverse communities through immersive multimedia — 
            including photographs, oral histories, audio-visual documentation, and 3D virtual tours.
          </p>

          <p className="text-gray-600 text-base leading-relaxed mb-6">
            The project is a <span className="font-medium text-[#8B5E3C]">Kaavish</span> initiative, 
            designed and developed with the <span className="font-medium text-[#5C4033]">MERN stack</span>, 
            integrating modern web technologies to ensure accessibility, interactivity, and scalability.
          </p>

          <div className="flex justify-center space-x-4 mt-8">
            <Link
              to="/explore"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#8B5E3C] to-[#5C4033] text-white text-sm font-medium hover:opacity-90 transition-all shadow-sm"
            >
              Explore Communities
            </Link>
            <Link
              to="/search"
                className="px-5 py-2.5 rounded-full border border-[#8B5E3C] text-[#5C4033] text-sm font-medium hover:bg-[#FAF3E0] transition-all shadow-sm"
            >
              Search Archives
            </Link>
          </div>
        </section>

        <div className="mt-10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Living Archives · A Kaavish Project
        </div>
      </Container>
    </div>
  );
}


// --------------------------
// Root App with routes (default export)
// --------------------------
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/community/:communityId" element={<CommunityPage />} />
        <Route path="/community/:communityId/media" element={<CommunityPage />} />
        <Route path="/community/:communityId/media/:mediaId" element={<MediaDetailPage />} />
        <Route path="/community/:communityId/tour" element={<VirtualTourPage />} />

        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/communities/new" element={<AdminAddCommunity />} />
        <Route path="/admin/media/upload" element={<AdminUploadMedia />} />

        {/* Fallback */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
