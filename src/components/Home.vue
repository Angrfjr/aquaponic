<template>
    <div class="w-screen h-screen flex">
        <!-- Side bar -->
        <div class="w-[400px] h-full bg-gray-200 text-white" v-show="showSide">
            <div class="h-[120px] bg-white flex justify-start  items-center ">
                <a href="/home">
                    <div class="px-[80px]">
                        <img alt="Deskripsi Gambar" class="w-[150px] h-auto"
                            src="https://telkomiot.evomo.id/cde6949543c780b482860036d332c742.png" />
                    </div>
                </a>
            </div>
            <div class="h-[calc(100vh-50px)] bg-gradient-to-t from-white via-sky-900 to-sky-900 py-[20px]">
                <div class="flex flex-col justify-between h-full px-[20px] space-y-[10px]">
                    <div class=" flex flex-col justify-between space-y-[10px]">
                        <div>
                            <h3 class="text-white text-2xl font-poppins text-left py-2">Menu</h3>
                        </div>
                        <router-link to="/dashboard"
                            class="inline-flex relative items-center py-[10px] px-[10px] w-full text-xl font-bold font-poppins rounded-md border-white hover:bg-white hover:text-sky-900  transition duration-400 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="mr-2 w-[40px] h-[40px]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                            </svg>
                            Dashboard
                        </router-link>
                        <span></span>
                        <router-link to="/analysis"
                            class="inline-flex relative items-center py-[10px] px-[10px] w-full text-xl font-bold font-poppins rounded-md border-white hover:bg-white hover:text-sky-900  transition duration-400 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="mr-2 w-[40px] h-[40px]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                            </svg>
                            Analysis
                        </router-link>
                        <span></span>
                        <router-link to="/report"
                            class="inline-flex relative items-center py-[10px] px-[10px] w-full text-xl font-bold font-poppins rounded-md border-white hover:bg-white hover:text-sky-900 transition duration-400 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="mr-2 w-[40px] h-[40px]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                            </svg>
                            Report
                        </router-link>
                        <span></span>
                        <router-link to="/device"
                            class="inline-flex relative items-center py-[10px] px-[10px] w-full text-xl font-bold font-poppins rounded-md rounded-b-lg hover:bg-white hover:text-sky-900 transition duration-400 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="mr-2 w-[40px] h-[40px]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                            </svg>
                            Device
                        </router-link>
                        <span></span>
                        <div>
                            <h3 class="text-white text-2xl font-poppins text-left py-2">Setting</h3>
                        </div>
                        <router-link to="/alert"
                            class="inline-flex relative items-center py-[10px] px-[10px] w-full text-xl font-bold font-poppins rounded-md border-white hover:bg-white hover:text-sky-900  transition duration-400 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="mr-2 w-[40px] h-[40px]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                            </svg>
                            Alert
                        </router-link>
                        <span></span>
                        <router-link to="/data"
                            class="inline-flex relative items-center py-[10px] px-[10px] w-full text-xl font-bold font-poppins rounded-md border-white hover:bg-white hover:text-sky-900 transition duration-400 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="mr-2 w-[40px] h-[40px]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            List Data User
                        </router-link>
                        <span></span>
                        <router-link to="/treshold"
                            class="inline-flex relative items-center py-[10px] px-[10px] w-full text-xl font-bold font-poppins rounded-md border-white hover:bg-white hover:text-sky-900 transition duration-400 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="mr-2 w-[40px] h-[40px]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                            </svg>
                            Treshold
                        </router-link>
                        <span></span>
                        <router-link to="/indicator"
                            class="inline-flex relative items-center py-[10px] px-[10px] w-full text-xl font-bold font-poppins rounded-md rounded-b-lg border-white hover:bg-white hover:text-sky-900 transition duration-400 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="mr-2 w-[40px] h-[40px]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
                            </svg>
                            Indicator
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-full bg-#134A6E">
            <div
                class="h-[120px] bg-gradient-to-l from-sky-900  to-white flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b ">
                <!-- Hambuger menu -->
                <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
                    <svg xmns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class=" w-[25px] h-[25px]">
                        <path
                            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                </div>
                <!-- Search bar -->

                <div class="w-[calc(100%-30px)] flex">
                    <div class="w-[calc(100%-200px)] flex justify-center ">
                        <!-- Search bar -->
                        <form class="flex items-center w-[500px]">
                            <label for="voice-search" class="sr-only">Search</label>
                            <div class="relative w-full">
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-auto text-gray-500 dark:text-gray-400"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <input type="text" id="voice-search"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search..." required>

                            </div>
                        </form>
                    </div>
                    <!-- User login -->
                    <div class="w-[200px] ">
                        <div class="flex items-center justify-start space-x-4" @click="toggleDrop">
                            <img class="w-10 h-10 rounded-full border-2 border-gray-50"
                                src="https://yt3.ggpht.com/hqsxh-Vnbw9OK0_X4DAWh6RkmEUVnL-82SRCyh-IKr9fIXR8zhUCRdBEwgWWL_14q_L8Piod=s108-c-k-c0x00ffffff-no-rj"
                                alt="">
                            <div class="font-semibold dark:text-white text-left">
                                <div class="text-white dark:text-gray-400">Tessss</div>
                                <div class="text-xs text-white dark:text-gray-400">Admin</div>
                            </div>
                        </div>
                        <!-- Drop down -->
                        <div v-show="showDropDown"
                            class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div class="py-1 text-left" role="none">
                                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                                <a href="#" class="text-gray-700 hover:bg-sky-500 hover:text-white block px-4 py-2 text-sm"
                                    role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                                <a href="#" class="text-gray-700 hover:bg-sky-500 hover:text-white block px-4 py-2 text-sm"
                                    role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                                <a href="#" class="text-gray-700 hover:bg-sky-500 hover:text-white block px-4 py-2 text-sm"
                                    role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                                <form action="#" role="none">
                                    <button @click="signout" type="submit"
                                        class="text-gray-700 hover:bg-sky-500 hover:text-white block w-full px-4 py-2 text-left text-sm"
                                        role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="h-[calc(100vh-50px)] bg-gray-50 p-[20px]">
                <div class="border border-gray-300 rounded-md p-[20px] h-full">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <!-- Main  -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            showDropDown: false,
            showSide: true
        }
    },
    methods: {
        // hide show side bar
        toggleSideBar() {
            this.showSide = !this.showSide
        },
        // toggle user 
        toggleDrop() {
            this.showDropDown = !this.showDropDown
        },
        signout() {
            // Implement your login logic here
            // For simplicity, just navigate to the dashboard
            this.$router.push('/');
        },
    },
}
</script>
  
<style>@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');</style>