import React from 'react';
import Discover from './components/Discover';
import { Routes, Route, useNavigate } from 'react-router-dom';
import BufflicksLayout from './components/bufflicksLayout';
import MovieDetail from './components/MovieDetail';
import Auth from './components/Auth';
import { Gem, Play, Eye } from 'lucide-react';

// 1. Vault Items
const VAULT_ITEMS = [
  { id: 1, title: 'Toy Story 5', price: 15, isNew: true, image: '/photos/image/Posters/toy-story.webp' },
  { id: 2, title: 'Thunderbolts', price: 15, isNew: true, image: '/photos/image/Posters/thunderbolts.webp' },
  { id: 3, title: 'Avatar', price: 15, isNew: true, image: '/photos/image/Posters/avatar.webp' },
  { id: 4, title: 'Mononoke', price: 15, isNew: true, image: '/photos/image/Posters/mononoke.webp' },
  { id: 5, title: 'Zootopia', price: 10, isNew: true, image: '/photos/image/Posters/zootopia.webp' },
  { id: 6, title: 'To be Hero x', price: 15, isNew: true, image: '/photos/image/Posters/to be hero x.jpg' },
  { id: 7, title: 'Runner', price: 12, isNew: true, image: '/photos/image/Posters/runner.webp' },
  { id: 8, title: 'The uprising', price: 15, isNew: true, image: '/photos/image/Posters/uprising.webp' }
];

// 2. Recommended Items
const RECOMMENDED_ITEMS = [
  { id: 10, title: 'One Piece', price: 15, isNew: true, image: '/photos/image/Posters/one-piece.webp' },
  { id: 11, title: 'The Flash', price: 10, isNew: false, image: '/photos/image/Posters/flash.webp' },
  { id: 12, title: 'Batman', price: 15, isNew: false, image: '/photos/image/Posters/batman.webp' },
  { id: 13, title: 'Resident Evil', price: 15, isNew: true, image: '/photos/image/Posters/resident-evil.webp' },
  { id: 14, title: 'Thunderbolts', price: 15, isNew: true, image: '/photos/image/Posters/thunderbolts.webp' }
];

// 3. First Local Heat Items Row
const LOCAL_HEAT_ITEMS_1 = [
  { id: 20, title: 'Spider-Man', price: 15, isNew: false, image: '/photos/image/Posters/spiderman1.webp' },
  { id: 21, title: 'Uprising', price: 12, isNew: true, image: '/photos/image/Posters/uprising.webp' },
  { id: 22, title: 'Breaking Bad', price: 15, isNew: false, image: '/photos/image/Posters/breaking-bad.webp' },
  { id: 23, title: 'Resident Evil', price: 15, isNew: true, image: '/photos/image/Posters/resident-evil.webp' },
  { id: 24, title: 'Lanterns', price: 15, isNew: true, image: '/photos/image/Posters/lanterns.webp' },
  { id: 25, title: 'Sandman', price: 15, isNew: false, image: '/photos/image/Posters/sandman.jpg' },
  { id: 26, title: 'F1', price: 15, isNew: false, image: '/photos/image/Posters/f1.webp' },
  { id: 27, title: 'Mobland', price: 15, isNew: true, image: '/photos/image/Posters/mobland.webp' }
];

// 4. Second Local Heat Items Row
const LOCAL_HEAT_ITEMS_2 = [
  { id: 30, title: 'Pikachu', price: 15, isNew: true, image: '/photos/image/Posters/pikachu.webp' },
  { id: 31, title: 'Alice', price: 15, isNew: false, image: '/photos/image/Posters/alice.webp' },
  { id: 32, title: 'Kaiju No. 8', price: 15, isNew: false, image: '/photos/image/Posters/kaiju.webp' },
  { id: 33, title: 'Shawshank', price: 15, isNew: false, image: '/photos/image/Posters/shawshank.webp' },
  { id: 34, title: 'Voyager', price: 15, isNew: false, image: '/photos/image/Posters/voyager.webp' },
  { id: 35, title: 'Toy Story 5', price: 15, isNew: true, image: '/photos/image/Posters/toy-story.webp' },
  { id: 36, title: 'Scandal', price: 15, isNew: true, image: '/photos/image/Posters/scandal.webp' },
  { id: 37, title: 'Secret Level', price: 15, isNew: true, image: '/photos/image/Posters/secret-level.jpg' }
];

// 5. Flicks Spotlight Items 
const FLICKS_SPOTLIGHT = [
  { id: 40, title: 'Spider-Man Across the Spider-Verse', price: 15, tier: '#1', image: '/photos/image/Posters/spiderman1.webp' },
  { id: 41, title: 'Game of Thrones', price: 15, tier: '#2', image: '/photos/image/Posters/got.webp' },
  { id: 42, title: 'Sinners', price: 15, tier: '#3', image: '/photos/image/Posters/sinners.webp' },
  { id: 43, title: 'Arcane', price: 15, tier: '#4', image: '/photos/image/Posters/arcane.webp' }
];

// 6. Coming Soon Items
const COMING_SOON = [
  { id: 50, title: 'Secret Level', price: 15, isNew: true, image: '/photos/image/Posters/secret-level.jpg' },
  { id: 51, title: 'Secret Level', price: 15, isNew: true, image: '/photos/image/Posters/secret-level.jpg' },
  { id: 52, title: 'Secret Level', price: 15, isNew: true, image: '/photos/image/Posters/secret-level.jpg' },
  { id: 53, title: 'Secret Level', price: 15, isNew: true, image: '/photos/image/Posters/secret-level.jpg' },
  { id: 54, title: 'Secret Level', price: 15, isNew: true, image: '/photos/image/Posters/secret-level.jpg' },
  { id: 55, title: 'Secret Level', price: 15, isNew: true, image: '/photos/image/Posters/secret-level.jpg' },
  { id: 56, title: 'Secret Level', price: 15, isNew: true, image: '/photos/image/Posters/secret-level.jpg' },
  { id: 57, title: 'Secret Level', price: 15, isNew: true, image: '/photos/image/Posters/secret-level.jpg' }
];

// 7. Bites Short-Form Video Items
const BITES_ITEMS = [
  { id: 60, title: 'Spider-Man: Across the Spider-V...', views: '267M views', image: '/photos/image/Posters/spider.jpg' },
  { id: 61, title: 'Predator: Badlands', views: '107M views', image: '/photos/image/Posters/predator.webp' },
  { id: 62, title: 'Secret level', views: '26M views', image: '/photos/image/Posters/secret-level 1.jpg' },
  { id: 63, title: 'Alice in Borderland', views: '26M views', image: '/photos/image/Posters/alice.webp' },
  { id: 64, title: 'Spider-Man: Homecoming', views: '203M views', image: '/photos/image/Posters/spiderman1.webp' },
  { id: 65, title: 'Dune: Part Two', views: '142M views', image: '/photos/image/Posters/runner.webp' },
  { id: 66, title: 'The Batman', views: '118M views', image: '/photos/image/Posters/batman.webp' }
];

const GENRES = ['HIGH OCTANE', 'MACABRE', 'MYTHS & LORE', 'CYBER BEYOND'];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-[1600px] mx-auto font-['Outfit'] pb-10 flex flex-col gap-8 pt-4 px-4 2xl:px-0">
      
      {/* 1. Hero Banner Image */}
      <div className="w-full aspect-[1687/538] rounded-[8px] overflow-hidden relative shadow-lg bg-[#17171e]">
        <img 
          src="/photos/image/hero-banner.png" 
          alt="A Brand New World" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* 2. Fresh in Vault */}
      <section>
        <SectionHeader title="Fresh in Vault" />
        <div className="flex overflow-x-auto lg:overflow-visible lg:grid lg:grid-cols-8 gap-3.5 pb-4 lg:pb-0 snap-x scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {VAULT_ITEMS.map((item) => (
            <PosterCard key={item.id} item={item} onClick={() => navigate(`/vault/${item.id}`)} />
          ))}
        </div>
      </section>

      {/* 3. Continue Watching & Recommended Split Row */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 flex flex-col gap-4 bg-white/5 rounded-[8px] p-6">
          <SectionHeader title="Continue Watching" hideSeeAll />
          <div className="w-full flex-1 min-h-[220px] rounded-[8px] bg-[#17171e] relative overflow-hidden group cursor-pointer">
            <img 
              src="/photos/image/Posters/spiderman.png" 
              alt="Continue Watching" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" 
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play size={20} className="fill-white text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/40">
              <div className="h-full bg-[#ff0055] w-[45%]" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-4 bg-white/5 rounded-[8px] p-6 overflow-hidden">
          <SectionHeader title="Recommended" />
          <div className="flex overflow-x-auto lg:overflow-visible lg:grid lg:grid-cols-5 gap-3.5 pb-4 lg:pb-0 snap-x scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {RECOMMENDED_ITEMS.map((item) => (
              <PosterCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Local Heat Row 1 */}
      <section>
        <SectionHeader title="Local Heat" />
        <div className="flex overflow-x-auto lg:overflow-visible lg:grid lg:grid-cols-8 gap-3.5 pb-4 lg:pb-0 snap-x scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {LOCAL_HEAT_ITEMS_1.map((item) => (
            <PosterCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 5. Genres: Clean 4-Column Desktop Grid, Scrollable on Mobile */}
      <section>
        <SectionHeader title="Genre" hideSeeAll />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {GENRES.map((genre, index) => (
            <div 
              key={index} 
              className="w-full aspect-[410/295] rounded-[8px] bg-[#17171e] relative overflow-hidden group cursor-pointer"
            >
              <img 
                src={`/photos/image/genre-${index + 1}.webp`} 
                alt={genre} 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center">
                <span className="text-white font-black tracking-widest text-xs sm:text-sm uppercase drop-shadow-md z-10 px-2 text-center">
                  {genre}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Local Heat Row 2 */}
      <section>
        <SectionHeader title="Local Heat" />
        <div className="flex overflow-x-auto lg:overflow-visible lg:grid lg:grid-cols-8 gap-3.5 pb-4 lg:pb-0 snap-x scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {LOCAL_HEAT_ITEMS_2.map((item) => (
            <PosterCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 7. Flicks Spotlight */}
      <section className="bg-white/5 rounded-[8px] p-6 flex flex-col gap-4 overflow-hidden">
        <SectionHeader title="Flicks Spotlight" />
        <div className="flex overflow-x-auto lg:overflow-visible lg:grid lg:grid-cols-4 gap-4 pb-4 lg:pb-0 snap-x scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {FLICKS_SPOTLIGHT.map((item) => (
            <SpotlightCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 8. Coming Soon */}
      <section>
        <SectionHeader title="Coming Soon" />
        <div className="flex overflow-x-auto lg:overflow-visible lg:grid lg:grid-cols-8 gap-3.5 pb-4 lg:pb-0 snap-x scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {COMING_SOON.map((item) => (
            <PosterCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 9. Bites Section */}
      <section>
        <SectionHeader title="Bites" />
        <div className="flex overflow-x-auto lg:overflow-visible lg:grid lg:grid-cols-7 gap-4 pb-4 lg:pb-0 snap-x scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {BITES_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="w-[140px] sm:w-[160px] lg:w-full shrink-0 lg:shrink snap-start group relative aspect-[267/472] rounded-[8px] overflow-hidden cursor-pointer hover:-translate-y-1.5 transition-all duration-300 bg-[#17171e]"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={16} className="fill-white text-white ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col gap-1 z-10">
                <h4 className="text-[11px] font-bold text-white truncate drop-shadow-md">{item.title}</h4>
                <div className="flex items-center gap-1.5 text-gray-300 text-[10px]">
                  <Eye size={12} />
                  <span>{item.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

function SectionHeader({ title, hideSeeAll }) {
  return (
    <div className="flex items-center justify-between mb-4 px-1">
      <h2 className="text-[15px] font-bold tracking-wide text-white">{title}</h2>
      {!hideSeeAll && (
        <button className="text-[11px] font-bold tracking-wider text-white/60 hover:text-white uppercase transition-colors">
          See All
        </button>
      )}
    </div>
  );
}

function PosterCard({ item, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="w-[130px] sm:w-[150px] lg:w-full shrink-0 lg:shrink snap-start group relative aspect-[2/3] rounded-[8px] overflow-hidden cursor-pointer hover:-translate-y-1.5 transition-all duration-300 bg-[#17171e]"
    >
      <img 
        src={item.image} 
        alt={item.title} 
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
      {item.isNew && (
        <div className="absolute top-2.5 right-2.5 bg-[#ff0055] text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider z-10">
          NEW
        </div>
      )}
      <div className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full flex items-center gap-1 z-10 font-['Outfit']">
        <Gem size={9} className="text-[#ff8800] fill-[#ff8800]" />
        <span className="text-[10px] font-bold text-gray-200">{item.price}</span>
      </div>
    </div>
  );
}

function SpotlightCard({ item }) {
  const getTierBadgeStyle = (tier) => {
    switch (tier) {
      case '#1': return 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white';
      case '#2': return 'bg-gradient-to-r from-amber-500 to-yellow-300 text-black';
      case '#3': return 'bg-gradient-to-r from-slate-300 to-slate-500 text-black';
      case '#4': return 'bg-gradient-to-r from-amber-700 to-amber-900 text-white';
      default: return 'bg-white/20 text-white';
    }
  };

  return (
    <div className="w-[240px] sm:w-[280px] lg:w-full shrink-0 lg:shrink snap-start group relative aspect-[410/295] rounded-[8px] bg-[#17171e] cursor-pointer hover:-translate-y-1 transition-all duration-300 font-['Outfit']">
      <div className={`absolute top-4 right-4 z-20 text-[10px] font-black px-2.5 py-0.5 rounded-[8px] uppercase tracking-wider ${getTierBadgeStyle(item.tier)}`}>
        {item.tier}
      </div>
      <div className="absolute left-3 top-3 bottom-3 aspect-[181/271] rounded-[8px] overflow-hidden bg-black/40 group-hover:scale-102 transition-transform">
        <img 
          src={item.image} 
          alt={item.title} 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full flex items-center gap-1 z-10">
          <Gem size={9} className="text-[#ff8800] fill-[#ff8800]" />
          <span className="text-[10px] font-bold text-gray-200">{item.price}</span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route 
        path="/*" 
        element={
          <BufflicksLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/vault/:id" element={<MovieDetail />} /> 
              <Route path="/discover" element={<Discover />} />
            </Routes>
          </BufflicksLayout>
        } 
      />
    </Routes>
  );
}