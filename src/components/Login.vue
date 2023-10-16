<template>
       <div class="flex justify-center items-center h-screen bg-image">
            <div class="ellipse ellipse1"></div>
            <div class="ellipse ellipse2"></div>
            <div class="rectangle"></div>
            <div class="w-96 p-8 bg-gray-200 rounded-lg shadow-md">
                <img src="https://telkomiot.evomo.id/cde6949543c780b482860036d332c742.png" alt="Login Image"
                    class="mb-4 rounded-t-lg w-full">
                <span></span>
                <form @submit.prevent="signin">
                    <label for="username" class="block text-sm font-semibold text-gray-600 mb-2">Username:</label>
                    <input v-model="username" type="text" id="username" class="w-full p-2 border rounded-md mb-4">

                    <label for="password" class="block text-sm font-semibold text-gray-600 mb-2">Password:</label>
                    <input v-model="password" type="password" id="password" class="w-full p-2 border rounded-md mb-6">

                    <button type="submit"
                        class="w-full bg-green-400 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
                        Log In
                    </button>
                </form>
            </div>
        </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        signin() {
            // Implement your login logic here
            // For simplicity, just navigate to the dashboard
            this.$router.push('/home');
        },
    },
};
</script>

<style scoped>
.bg-image {
  background-image: url('D:\Magang\Projek Vue\Aquaponic\AquaponicWapres\src\assets\background.png');
  background-size: cover; /* or contain, depending on your preference */
  background-position: center center;
  background-repeat: no-repeat;
}

</style>