<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Themeum Blur Effect Design</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; }
        
        /* Smooth transition for the blur effect */
        .magic-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
    </style>
</head>
<body class="bg-black min-h-screen flex items-center justify-center p-4">

    <!-- Main Container -->
    <div class="w-full max-w-6xl bg-[#0f0f11] rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
        
        <!-- Background Ambient Glow (Optional Aesthetic) -->
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/50 to-transparent pointer-events-none"></div>

        <!-- Left Side: Content & Branding -->
        <div class="z-10 mb-12 lg:mb-0 lg:w-1/3 text-center lg:text-left">
            <p class="text-gray-400 text-lg mb-2 font-medium tracking-wide">More Black Friday savings!</p>
            <h1 class="text-4xl md:text-5xl font-normal text-white mb-8 leading-tight">
                More products by
            </h1>
            
            <!-- Logo Area -->
            <div class="flex items-center justify-center lg:justify-start space-x-3">
                <div class="w-10 h-10 bg-white rounded flex items-center justify-center">
                    <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
                </div>
                <span class="text-4xl font-bold text-white tracking-tight">themeum</span>
            </div>
        </div>

        <!-- Right Side: Magic Blur Cards Wrapper -->
        <!-- 'group' class here controls the children -->
        <div class="group/cards flex flex-col md:flex-row gap-6 z-10 w-full lg:w-auto perspective-1000">

            <!-- Card 1: Blue (Tutor LMS) -->
            <div class="magic-card relative w-full md:w-72 h-96 bg-[#0056fd] rounded-3xl p-6 flex flex-col items-center text-center cursor-pointer
                        group-hover/cards:blur-sm group-hover/cards:scale-[0.98] group-hover/cards:opacity-60 
                        hover:!blur-none hover:!scale-105 hover:!opacity-100 hover:shadow-[0_0_50px_rgba(0,86,253,0.6)] z-0 hover:z-20">
                
                <!-- Badge -->
                <div class="absolute top-6 bg-[#eaff96] text-black font-bold px-3 py-1 rounded-full text-sm shadow-lg">
                    50% off!
                </div>

                <!-- Card Content -->
                <div class="flex-1 flex flex-col items-center justify-center mt-4">
                    <!-- Icon -->
                    <div class="mb-4 text-white">
                        <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 7l11 5 11-5-11-5zm0 18.5l-5.5-2.5 5.5-2.5 5.5 2.5-5.5 2.5zM12 11l-9 4.1 9 4.1 9-4.1-9-4.1z"/></svg>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-1">tutor LMS</h3>
                    <p class="text-blue-100 text-xs mt-4 px-2 leading-relaxed opacity-90">
                        The ultimate all-in-one LMS solution for WordPress.
                    </p>
                </div>

                <!-- Button -->
                <div class="flex items-center text-white font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn More 
                    <svg class="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
            </div>

            <!-- Card 2: Green (Growfund) -->
            <div class="magic-card relative w-full md:w-72 h-96 bg-[#008744] rounded-3xl p-6 flex flex-col items-center text-center cursor-pointer
                        group-hover/cards:blur-sm group-hover/cards:scale-[0.98] group-hover/cards:opacity-60 
                        hover:!blur-none hover:!scale-105 hover:!opacity-100 hover:shadow-[0_0_50px_rgba(0,135,68,0.6)] z-0 hover:z-20">
                
                <!-- Badges -->
                <div class="absolute top-6 flex gap-2">
                    <div class="bg-[#eaff96] text-black font-bold px-3 py-1 rounded-full text-sm shadow-lg">
                        50% off!
                    </div>
                    <div class="border border-white/30 text-white font-medium px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                        New!
                    </div>
                </div>

                <!-- Card Content -->
                <div class="flex-1 flex flex-col items-center justify-center mt-4">
                    <!-- Icon -->
                    <div class="mb-4 text-white">
                        <svg class="w-12 h-12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 class="text-3xl font-bold text-white mb-1 flex items-center gap-1">
                        <span class="text-xl">G</span> Growfund
                    </h3>
                    <p class="text-green-100 text-xs mt-4 px-2 leading-relaxed opacity-90">
                        Best donation & crowdfunding plugin in WordPress.
                    </p>
                </div>

                <!-- Button -->
                <div class="flex items-center text-white font-semibold text-sm">
                    Learn More 
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
            </div>

        </div>

    </div>

</body>
</html>
