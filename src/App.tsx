import React from "react";
import SparkleNavbar from "./Pages/Shared/Navbar/Navbar";
import Footer from "./Pages/Shared/Footer/Footer";
import { ThreeDMarquee } from "./Components/lightswind/3d-marquee";
import "./Components/lightswind.css";
import { ThreeDScrollTriggerContainer, ThreeDScrollTriggerRow } from "./Components/lightswind/3d-scroll-trigger";
import Draggable3DImageRing from "./Components/lightswind/3d-image-ring";
import AuroraShader from "./Components/lightswind/aurora-shader";
import { BorderBeam } from "./Components/lightswind/border-beam";
import AnimatedNotification from "./Components/lightswind/animated-notification";
import Dock from "./Components/lightswind/dock";
import { Crown, Home, Mail, Settings } from "lucide-react";
import GlowingCards, { GlowingCard } from "./Components/lightswind/glowing-cards";
import ImageReveal from "./Components/lightswind/image-reveal";
import ImageTrailEffect from "./Components/lightswind/image-trail-effect";
import InteractiveGradient from "./Components/lightswind/interactive-gradient-card";
import MagicLoader from "./Components/lightswind/magic-loader";

function App() {
  const imageUrls = [
    "/images/Green-Delight.jpg",
    "/images/Sizzling-Steak.jpg",
    "/images/Sweet-Heaven.jpg",
    "/images/Vegetable-Soup.jpg",
    "/images/Pasta-Dish.jpg",
    "/images/Lemonade.jpg",
  ];

  const clickableImages = [
    { src: "/images/Green-Delight.jpg", alt: "Green Delight" },
    { src: "/images/Sizzling-Steak.jpg", alt: "Sizzling Steak" },
    { src: "/images/Sweet-Heaven.jpg", alt: "Sweet Heaven" },
    { src: "/images/Vegetable-Soup.jpg", alt: "Vegetable Soup" },
    { src: "/images/Pasta-Dish.jpg", alt: "Classic Pasta" },
    { src: "/images/Lemonade.jpg", alt: "Citrus Fresh" },
  ];
  const dockItems = [
    {
      icon: <Home size={24} />,
      label: 'Home',
      onClick: () => console.log('Home clicked')
    },
    {
      icon: <Settings size={24} />,
      label: 'Settings',
      onClick: () => console.log('Settings clicked')
    },
    {
      icon: <Mail size={24} />,
      label: 'Messages',
      onClick: () => console.log('Messages clicked')
    }
  ];
  return (
    <div className="flex mt-10 mb-10 flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 md:px-10 lg:px-20">
        <SparkleNavbar
          items={["Home", "About", "Services", "Contact", "Sign in", "Sign Out"]}
          color="#FF5733"
        />
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center gap-16 px-4 md:px-10 lg:px-20 mt-10">
        <AuroraShader
          colorStops={['#5227FF', '#7cff67', '#5227FF']}
          amplitude={1.0}
          blend={0.5}
          speed={1.0}
        />

        <Draggable3DImageRing images={imageUrls} />

        <ThreeDMarquee
          images={clickableImages}
          onImageClick={(image, index) => {
            console.log("Clicked:", image.alt, "at index:", index);
          }}
        />

        <ThreeDScrollTriggerContainer>
          <ThreeDScrollTriggerRow baseVelocity={5} direction={1}>
            <div className="px-4 py-2 bg-blue-500 text-white rounded-lg">
              Item 1
            </div>
            <div className="px-4 py-2 bg-green-500 text-white rounded-lg">
              Item 2
            </div>
            <div className="px-4 py-2 bg-red-500 text-white rounded-lg">
              Item 3
            </div>
          </ThreeDScrollTriggerRow>
        </ThreeDScrollTriggerContainer>


        <div className="mt-10 mb-10 max-w-7xl">

        </div>

        <div className="mt-10 mb-10">
          <Dock
            items={dockItems}
            position="bottom"
            magnification={70}
            baseItemSize={50}
          />
        </div>

        <div className="relative w-full max-w-3xl p-1 mt-10 mb-10 rounded-lg overflow-hidden">
          <BorderBeam
            colorFrom="#7400ff"
            colorTo="#9b41ff"
            size={50}
            duration={6}
            borderThickness={5}
            glowIntensity={5}
          />
          <div className="relative bg-card p-4 rounded-md z-10 text-center">
            Content with animated border
          </div>
        </div>


        {/* Notification */}
        <div>
          <AnimatedNotification
            autoGenerate={true}
            maxNotifications={3}
            variant="glass"
            position="top-right"
            showAvatars={true}
            allowDismiss={true}
            customMessages={["Welcome!", "Task completed!"]}
            onNotificationClick={(notification) => console.log(notification)}
          />
        </div>

        {/* Glowing-Card */}
        <div className="mt-10 mb-10 max-w-7xl">
          <GlowingCards>
            <GlowingCard glowColor="#10b981">
              <h3>Performance</h3>
              <p>Lightning-fast components...</p>
            </GlowingCard>
            <GlowingCard glowColor="#8b5cf6">
              <h3>Design</h3>
              <p>Beautiful, accessible components...</p>
            </GlowingCard>
          </GlowingCards>

          <GlowingCards
            enableGlow={true}
            glowRadius={30}
            glowOpacity={0.8}
            animationDuration={500}
            gap="3rem"
            responsive={true}
          >
            <GlowingCard glowColor="#f59e0b" className="space-y-4">
              <div className="flex items-center space-x-2">
                <Crown className="w-6 h-6 text-amber-500" />
                <h3>Premium Features</h3>
              </div>
              <p>Enterprise-grade components...</p>
            </GlowingCard>
          </GlowingCards>
        </div>

        {/* ImageReveal */}
        <div>
          <ImageReveal />
        </div>

        {/* ImageTrailEffect */}
        <div className="">
          <ImageTrailEffect
            imageSources={[
              '/images/trail1.jpg',
              '/images/trail2.jpg',
              '/images/trail3.jpg'
            ]}
            content={<h1 className="text-3xl font-bold">Hover Me!</h1>}
          />
        </div>


        {/*  */}
        <div className="">
          <InteractiveGradient>
            <div className="p-6 text-white">
              <h3 className="text-xl font-bold">Interactive Card</h3> 
              <p>Hover or move your mouse around to see the gradient effect</p>
            </div>
          </InteractiveGradient>

          {/* // With custom colors and options */}
          <InteractiveGradient
            color="#1890ff"
            glowColor="#107667ed"
            followMouse={true}
            hoverOnly={false}
            intensity={100}
            backgroundColor="#151419"
            width="20rem"
            height="20rem"
            borderRadius="2.25rem"
          >
            <div className="p-6 text-white">Content here</div>
          </InteractiveGradient>
        </div>


        {/*  */}
        <div className="">
          <MagicLoader />

          {/* // Custom Size and Speed */}
          <MagicLoader
            size={300}
            speed={1.5}
          />

          {/* // Fire Theme */}
          <MagicLoader
            size={250}
            particleCount={2}
            speed={1.2}
            hueRange={[0, 40]}
          />

          {/* // Ocean Theme */}
          <MagicLoader
            size={200}
            speed={0.8}
            hueRange={[180, 220]}
          />

          {/* // Mobile Optimized */}
          <MagicLoader
            size={150}
            particleCount={1}
            speed={0.7}
            className="md:hidden"
          />
        </div>


        {/*  */}
        <div className="">

        </div>


      </main>

      {/* Footer */}
      <footer className="mt-auto w-full">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
