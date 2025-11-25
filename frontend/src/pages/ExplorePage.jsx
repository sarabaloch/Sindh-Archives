// ExplorePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import TopNav from "../components/TopNav";
import BackButton from "../components/BackButton";
import Container from "../components/Container";
import { DUMMY_COMMUNITIES, DUMMY_MEDIA } from "../data/dummyData";

export default function ExplorePage() {
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