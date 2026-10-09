import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false); 
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    // min-h-screen ensures it takes the full device height on mobile
    <div className="min-h-screen w-full bg-[#15181D] flex items-center lg:items-end justify-center lg:p-6 font-['Outfit']">
      
      <div 
        // flex-col on mobile, flex-row on desktop. Height adapts to mobile scrolling!
        className="w-full max-w-[1872px] min-h-screen lg:min-h-[auto] lg:h-[974px] lg:rounded-t-[25px] p-3 sm:p-4 lg:p-5 flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-5 relative"
        style={{
          background: 'linear-gradient(180deg, #49D9E0 0%, #15181D 70%)'
        }}
      >
        {/* 
          LEFT SIDE: Cinematic Avatar Image 
          Visible on all screens now! Acts as a top header on mobile.
        */}
        <div className="relative w-full h-[28vh] min-h-[200px] lg:h-auto lg:flex-[1.79] rounded-[15px] overflow-hidden bg-black/20 shadow-2xl shrink-0">
          <img 
            src="/photos/image/Posters/Avatar.jpg" 
            alt="Avatar Cinematic" 
            // object-[center_20%] anchors the crop to the top/face area so it never looks blindly zoomed!
            className="absolute inset-0 w-full h-full object-cover object-[center_20%] lg:object-[center_20%]"
          />
          
          {/* Back Button - Moved inside the image so it positions perfectly on both mobile and desktop */}
          <button 
            onClick={() => navigate('/')}
            className="absolute top-4 left-4 lg:top-8 lg:left-8 z-20 text-white font-bold uppercase tracking-wider text-xs lg:text-sm bg-black/40 backdrop-blur-md px-4 py-2 lg:px-5 lg:py-2.5 rounded-full hover:bg-black/60 transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to Home</span>
          </button>
        </div>

        {/* 
          RIGHT SIDE: The White Form Box 
          Flex-grow ensures it fills the rest of the mobile screen. 
          overflow-y-auto allows smooth scrolling on smaller Android devices.
        */}
        <div className="w-full lg:flex-1 bg-[#FEFEFE] rounded-[15px] flex flex-col justify-center items-center py-8 px-5 sm:p-12 shadow-2xl flex-grow overflow-y-auto">
          
          <div className="w-full max-w-[423px]">
            
            {/* Header Section */}
            <div className="mb-8 lg:mb-10">
              <p className="text-[#8B8B8B] text-[15px] lg:text-[16px] mb-1">Welcome !</p>
              <h2 className="text-[28px] lg:text-[34px] font-medium text-[#1A1A1A] mb-1 leading-snug tracking-tight">
                {isLogin ? 'Sign in to' : 'Sign up to'}
              </h2>
              <p className="text-[#8B8B8B] text-[13px] lg:text-[14px]">Bufflicks</p>
            </div>

            {/* Form Fields */}
            <form className="flex flex-col gap-4 lg:gap-5" onSubmit={(e) => e.preventDefault()}>
              
              {!isLogin && (
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-[#8B8B8B]">Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full border border-[#E5E5E5] rounded-[8px] py-3.5 px-4 text-[15px] text-[#1A1A1A] placeholder:text-[#C4C4C4] focus:outline-none focus:border-[#49D9E0] transition-colors bg-transparent"
                  />
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] text-[#8B8B8B]">
                  {isLogin ? 'User name' : 'Username'}
                </label>
                <input 
                  type="text" 
                  placeholder={isLogin ? "Enter your user name" : "Enter your username"} 
                  className="w-full border border-[#E5E5E5] rounded-[8px] py-3.5 px-4 text-[15px] text-[#1A1A1A] placeholder:text-[#C4C4C4] focus:outline-none focus:border-[#49D9E0] transition-colors bg-transparent"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] text-[#8B8B8B]">Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Enter your Password" 
                    className="w-full border border-[#E5E5E5] rounded-[8px] py-3.5 pl-4 pr-12 text-[15px] text-[#1A1A1A] placeholder:text-[#C4C4C4] focus:outline-none focus:border-[#49D9E0] transition-colors bg-transparent"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#C4C4C4] hover:text-[#8B8B8B] p-1"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-[#8B8B8B]">Confirm Password</label>
                  <div className="relative">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Confirm your Password" 
                      className="w-full border border-[#E5E5E5] rounded-[8px] py-3.5 pl-4 pr-12 text-[15px] text-[#1A1A1A] placeholder:text-[#C4C4C4] focus:outline-none focus:border-[#49D9E0] transition-colors bg-transparent"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#C4C4C4] hover:text-[#8B8B8B] p-1"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              )}

              {/* Login Extras */}
              {isLogin && (
                <div className="flex items-center justify-between mt-1">
                  <label className="flex items-center gap-2 text-[13px] text-[#8B8B8B] cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-[#E5E5E5] text-[#49D9E0] focus:ring-[#49D9E0] cursor-pointer" />
                    Remember me
                  </label>
                  <button type="button" className="text-[13px] text-[#8B8B8B] hover:text-[#1A1A1A] transition-colors">
                    Forgot Password ?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-[#5D6370] hover:bg-[#4A4E59] text-white font-medium text-[15px] py-4 rounded-[8px] transition-colors mt-2 lg:mt-4 active:scale-[0.99]"
              >
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
            </form>

            {/* Toggle Mode Footer */}
            <div className="flex items-center justify-center gap-1.5 text-[13px] text-[#8B8B8B] mt-6 lg:mt-8 pb-4 lg:pb-0">
              <span>{isLogin ? "Don't have an Account ?" : "Already have an Account ?"}</span>
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="font-semibold text-[#1A1A1A] hover:underline p-1"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}