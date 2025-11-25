import React from "react";
import { Link } from "react-router-dom";
import TopNav from "../components/TopNav";
import Container from "../components/Container";
import { DUMMY_COMMUNITIES } from "../data/dummyData";
import bannerImg from "../assets/Mithi,_Sindh_2018.jpg";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF3E0] via-[#FFFDF8] to-[#EAD7C3]">
      <TopNav />

      {/* Hero Section with Banner */}
      <div className="relative">
        <img
          src={bannerImg} // put your banner here
          alt="Living Archives Banner"
          className="w-full h-64 md:h-96 object-cover rounded-b-3xl shadow-lg"
        />
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-0">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#8B5E3C] to-[#5C4033] bg-clip-text text-transparent">
            Living Archives
          </h1>
          <p className="text-white md:text-lg shadow-md px-4 md:px-0">
            Documenting Sindh's communities through immersive multimedia and 3D experiences.
          </p>
          <div className="flex mt-6 space-x-4">
            <Link
              to="/explore"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#8B5E3C] to-[#5C4033] text-white font-medium shadow-lg hover:scale-105 transition-all"
            >
              Explore Communities
            </Link>
            <Link
              to="/search"
              className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-[#5C4033] transition-all"
            >
              Search Archives
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Communities */}
      <Container>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mt-12 mb-8 bg-gradient-to-r from-[#8B5E3C] to-[#5C4033] bg-clip-text text-transparent">
          Featured Communities
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DUMMY_COMMUNITIES.slice(0, 3).map((c) => (
            <Link
              key={c.id}
              to={`/community/${c.id}`}
              className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl bg-white/70 backdrop-blur-sm border border-[#D2B48C] transition-transform transform hover:-translate-y-1 duration-300"
            >
              <img
                src={c.thumbnail} // community thumbnail
                alt={c.name}
                className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#8B5E3C]">{c.name}</h3>
                <p className="text-gray-700 text-sm mt-1 line-clamp-2">{c.description}</p>
                <span className="text-[#5C4033] font-medium mt-2 inline-block group-hover:underline">
                  View Details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>

      {/* About Project */}
      <Container>
        <section className="mt-12 bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-[#D2B48C] text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#8B5E3C] to-[#5C4033] bg-clip-text text-transparent">
            About Living Archives
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            A Kaavish initiative preserving Sindh’s cultural heritage with multimedia documentation and immersive 3D tours.
          </p>
          <div className="flex justify-center mt-6 space-x-4">
            <Link
              to="/about"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-[#8B5E3C] to-[#5C4033] text-white font-medium shadow hover:scale-105 transition-all"
            >
              Learn More
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
}
