<script setup>
const links = [
  { label: "HOME", to: "#home" },
  { label: "ABOUT US", to: "#about" },
  { label: "SERVICES", to: "#services" },
  { label: "PORTFOLIO", to: "#portfolio" },
  { label: "FAQ", to: "#faq" },
  { label: "NEWS", to: "#news" },
  { label: "CONTACT US", to: "#contact" },
]

const isOpen = ref(false)

function goToHash(hash) {
  isOpen.value = false
  if (!process.client) return

  const id = hash?.replace("#", "")
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: "smooth", block: "start" })
}

function onQuote() {

  goToHash("#contact")
}
</script>

<template>
  <header class="topbar">
    <div class="topbar__inner">

      <NuxtLink class="brand" to="/" aria-label="Home">
        SUBHAN<span class="brand__dot">.</span>
      </NuxtLink>


      <nav class="nav" aria-label="Main navigation">
        <a
          v-for="l in links"
          :key="l.label"
          class="nav__link"
          :href="l.to"
          @click.prevent="goToHash(l.to)"
        >
          {{ l.label }}
        </a>
      </nav>


      <div class="right">
        <button class="quote" type="button" @click="onQuote">
          GET A QUOTE <span class="arrow">→</span>
        </button>


        <button
          class="burger"
          type="button"
          :aria-expanded="isOpen"
          aria-label="Open menu"
          @click="isOpen = !isOpen"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>


    <div v-if="isOpen" class="mobile">
      <a
        v-for="l in links"
        :key="l.label"
        class="mobile__link"
        :href="l.to"
        @click.prevent="goToHash(l.to)"
      >
        {{ l.label }}
      </a>
      <button class="mobile__quote" type="button" @click="onQuote">
        GET A QUOTE →
      </button>
    </div>
  </header>
</template>

<style scoped>
.topbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--sand);
}


.topbar__inner {
  height: 86px;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 48px;

  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  column-gap: 24px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.brand {
  font-family: var(--font-brand);
  font-size: 56px;
  letter-spacing: 1px;
  text-decoration: none;
  color: var(--ink);
  line-height: 1;
}

.nav {
  justify-self: center;
  display: flex;
  align-items: center;
  gap: 44px;
}

.nav__link {
  font-family: var(--font-nav);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2.2px;
  text-decoration: none;
  color: var(--ink);
  text-transform: uppercase;
  opacity: 0.95;
}

.nav__link:hover {
  opacity: 1;
}

.right {
  display: flex;
  align-items: center;
  gap: 14px;
}

.quote {
  background: #0b0b0b;
  color: #fff;
  border: 0;
  border-radius: 999px;
  padding: 14px 22px;
  font-family: var(--font-nav);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.4px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.quote .arrow {
  font-size: 16px;
  line-height: 1;
}


.burger {
  display: none;
  width: 44px;
  height: 44px;
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
}

.burger span {
  display: block;
  height: 2px;
  background: var(--ink);
  margin: 6px 0;
  opacity: 0.85;
}

.mobile {
  max-width: 1320px;
  margin: 0 auto;
  padding: 10px 48px 22px;
  background: var(--sand);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.mobile__link {
  display: block;
  padding: 12px 0;
  font-family: var(--font-nav);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2.2px;
  text-decoration: none;
  color: var(--ink);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  text-transform: uppercase;
}

.mobile__quote {
  margin-top: 14px;
  width: 100%;
  border: 0;
  border-radius: 999px;
  padding: 14px 18px;
  background: #0b0b0b;
  color: #fff;
  font-family: var(--font-nav);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.4px;
  cursor: pointer;
}

/*Breakpoint */
@media (max-width: 1100px) {
  .nav {
    display: none;
  }
  .quote {
    display: none;
  }
  .burger {
    display: inline-block;
  }
  .brand {
    font-size: 44px;
  }
  .topbar__inner {
    height: 76px;
    padding: 0 22px;
  }
  .mobile {
    padding: 10px 22px 22px;
  }
}
</style>
