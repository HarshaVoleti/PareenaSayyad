<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="portfolio-container">
    <!-- Paper background with dotted pattern -->
    <div class="paper-sheet">
      <!-- Black edge line on the left -->
      <div class="paper-edge"></div>
      
      <!-- Dotted pattern overlay -->
      <div class="dotted-pattern"></div>
      
      <!-- Navigation Bar inside paper -->
      <nav class="top-navigation">
        <div class="nav-brand">
          <span class="star-icon">⭐</span>
          <span class="brand-name">pareena sayyad</span>
        </div>
        
        <div class="nav-links">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/projects" class="nav-link">Projects</RouterLink>
          <button class="hire-me-btn">Hire me</button>
        </div>
      </nav>
      
      <!-- Content area -->
      <div class="paper-content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.portfolio-container {
  min-height: 100vh;
  background: #ffffff;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.top-navigation {
  position: relative;
  z-index: 10;
  padding: 20px 40px 20px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 8px;
}

.star-icon {
  font-size: 24px;
}

.brand-name {
  font-size: 24px;
  font-family: 'Handlee', cursive;
  font-weight: bold;
  color: #000000;
  letter-spacing: -0.5px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-link {
  color: #000000;
  text-decoration: none;
  font-size: 22px;
  font-weight: 500;
  font-family: 'Inter', system-ui, sans-serif;
  transition: color 0.3s ease;
  position: relative;
  padding: 4px 8px;
}

.nav-link:hover {
  color: #666666;
}

.nav-link.router-link-active {
  color: #000000;
  font-weight: 600;
}

.nav-link.router-link-active::before {
  content: '';
  position: absolute;
  top: 70%;
  left: 0;
  width: 100%;
  height: 30%;
  background: rgba(255, 201, 240, 1);
  transform: translateY(-50%) rotate(-1deg);
  z-index: -1;
  border-radius: 2px;
}

.hire-me-btn {
  background: #000000;
  color: #ffffff;
  border: none;
  /* padding: 8px 16px; */
  border-radius: 0;
  font-family: 'Handlee', cursive;
  font-weight: normal;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  transform: rotate(-1deg);
}

.hire-me-btn:hover {
  background: #222222;
  transform: rotate(-0.5deg) scale(1.02);
}

.paper-sheet {
  position: relative;
  width: 90%;
  max-width: 90%;
  padding: 0;
  min-height: 100vh;
  background: #ffffff;
  margin: 0;
}

.paper-edge {
  position: absolute;
  left: 40px;
  top: 0;
  width: 2px;
  height: 100%;
  background: #000000;
  z-index: 2;
}

.dotted-pattern {
  position: absolute;
  top: 0;
  left: 25px;
  right: 40px;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, #cccccc 1px, transparent 1px);
  background-size: 15px 15px;
  background-position: 7px 7px;
  opacity: 0.6;
  z-index: 1;
}

.paper-content {
  position: relative;
  z-index: 3;
  padding: 0px 48px 0px 80px;
  min-height: calc(100vh - 120px);
}

@media (max-width: 768px) {
  .top-navigation {
    padding: 16px 20px 16px 60px;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
  
  .nav-links {
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .brand-name {
    font-size: 20px;
  }
  
  .nav-link {
    font-size: 14px;
  }
  
  .hire-me-btn {
    padding: 10px 20px;
    font-size: 14px;
  }
  
  .paper-content {
    padding: 0px 32px 0px 60px;
    min-height: calc(100vh - 140px);
  }
}

@media (max-width: 480px) {
  .top-navigation {
    padding: 12px 16px 12px 50px;
  }
  
  .nav-links {
    gap: 16px;
    width: 100%;
    justify-content: space-between;
  }
  
  .star-icon {
    font-size: 20px;
  }
  
  .brand-name {
    font-size: 18px;
  }
  
  .paper-content {
    padding: 0px 24px 0px 50px;
  }
}


</style>
