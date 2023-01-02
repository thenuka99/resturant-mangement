<template>
  <div class="navmenu">
    <nav class="bg-grey-light">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                class="h-8 w-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <nav>
                  <router-link to="/">Home</router-link> |
                  <router-link to="/employeelist">Employees</router-link> |
                  <router-link to="/resturantlist">Resturants</router-link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigation: [
        { name: "Home", href: "/", current: true },
        { name: "Employees", href: "/employeelist", current: false },
        { name: "Projects", href: "#", current: false },
        { name: "Calendar", href: "#", current: false },
        { name: "Reports", href: "#", current: false },
      ],
    };
  },
};
</script>

<style src="../assets/styles/main.css"/>