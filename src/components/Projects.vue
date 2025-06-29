<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// Projects section component
const navigateToProject = (projectId) => {
  router.push(`/projects/${projectId}`)
}
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="content-layout">
      <div class="left-side">
        <div class="section-header">
          <h2 class="section-title">
          <span class="highlight-full">Projects</span>
          </h2>
        </div>

        <!-- Curved Arrow pointing to project cards -->
        <div class="curved-arrow">
          <img src="@/assets/svgs/arrow.svg" alt="Arrow" class="arrow-image" />
        </div>

        <div class="section-description">
          <p class="section-text">
            Worked on diverse web and mobile projects across industries.
          </p>
        </div>
      </div>

      <div class="right-side">
        <!-- Projects grid 2x2 -->
        <div class="projects-grid">
          <div class="project-card" @click="navigateToProject('laundry-loop')">
            <div class="project-image">
              <img src="/src/assets/laundryapp/main.png" alt="LaundryLoop Mobile App" />
            </div>
            <div class="project-content">
              <h3 class="project-title">LaundryLoop: Mobile app</h3>
              <div class="project-tag tag-pink">UX/Product Thinking</div>
            </div>
          </div>
          
          <div class="project-card" @click="navigateToProject('compedge')">
            <div class="project-image">
              <img src="/src/assets/compedge/main.png" alt="Compedge Landing Page" />
            </div>
            <div class="project-content">
              <h3 class="project-title">Compedge: Landing page</h3>
              <div class="project-tag tag-blue">Marketing UI</div>
            </div>
          </div>
          
          <div class="project-card" @click="navigateToProject('bloomora')">
            <div class="project-image">
              <img src="/src/assets/bloomora/main.png" alt="Bloomora Bath Bomb Shop" />
            </div>
            <div class="project-content">
              <h3 class="project-title">Bloomora: Bath Bomb Shop</h3>
              <div class="project-tag tag-yellow">Visual + Conversion</div>
            </div>
          </div>
          
          <div class="project-card" @click="navigateToProject('ritva')">
            <div class="project-image">
              <img src="/src/assets/ritva/main.png" alt="Ritva MH Creatives" />
            </div>
            <div class="project-content">
              <h3 class="project-title">Ritva MH: Creatives</h3>
              <div class="project-tag tag-green">Graphic Design</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Projects Section */
.projects-section {
  padding: 4rem 0;
  margin-top: 2rem;
}

.content-layout {
  display: flex;
  align-items: flex-start;
  gap: 4rem;
  width: 100%;
  padding: 0 2rem;
}

.left-side {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.right-side {
  flex: 1;
  display: flex;
  justify-content: center;
}

.section-header {
  text-align: left;
  margin-top: 6rem;
  margin-left: 60px;
}

.section-title {
  font-family: 'Handlee', cursive;
  font-size: 3rem;
  font-weight: bold;
  color: #000000;
  margin: 0;
}

.highlight-full {
  position: relative;
  display: inline-block;
  font-family: 'Handlee', cursive;
  font-size: 3rem;
  font-weight: bold;
}

.highlight-full::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 80%;
  background: rgba(255, 201, 240, 1);
  transform: translateY(-50%) rotate(-1deg);
  z-index: -1;
  border-radius: 2px;
}

.curved-arrow {
  display: flex;
  justify-content: flex-start;
  margin-left: 100px;
  margin-top: 2rem;
  position: relative;
}

.arrow-image {
  width: 80px;
  height: 60px;
  transform: rotate(240deg); /* Placeholder angle - adjust as needed */
}

.section-description {
  margin-left: 60px;
  margin-top: 2rem;
  max-width: 300px;
}

.section-text {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0%;
  color: #555;
  margin: 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  max-width: 900px;
  width: 100%;
}

.project-card {
  aspect-ratio: 1;
  background: transparent;
  border: 3px solid #000;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.project-card:hover {
  transform: scale(1.02);
}

.project-image {
  flex: 1;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 10px;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-content {
  padding: 1rem;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
}

.project-title {
  font-family: 'Handlee', cursive;
  font-size: 1.1rem;
  font-weight: bold;
  color: #000;
  margin: 0;
  width: 40%;
}

.project-tag {
  background: #ff69b4;
  color: #ffffff;
  padding: 0.5rem 1rem;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 26.85px;
  letter-spacing: 0%;
  border-radius: 0 20px 20px 20px;
  white-space: nowrap;
  position: relative;
  max-width: 50%;
  text-align: center;
  border: 2px solid #333;
}

.tag-pink {
  background: #ff69b4;
  color: #ffffff;
  border: 2px solid #d91a72;
}

.tag-blue {
  background: #4a90e2;
  color: #ffffff;
  border: 2px solid #1a5490;
}

.tag-yellow {
  background: #f5d616;
  color: #ffffff;
  border: 2px solid #b8a012;
}

.tag-green {
  background: #7ed321;
  color: #ffffff;
  border: 2px solid #4a9a15;
}

.project-tag::after {
  content: '';
  position: absolute;
  top: -15px;
  left: -15px;
  width: 18px;
  height: 18px;
  background-image: url('@/assets/svgs/Cursor.svg');
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 1;
  filter: drop-shadow(0 0 1px #000) drop-shadow(0 0 1px #000);
}

.tag-pink::after {
  background-color: #ff69b4;
  mask: url('@/assets/svgs/Cursor.svg') no-repeat center;
  mask-size: contain;
  background-image: none;
  filter: drop-shadow(0 0 1px #000) drop-shadow(0 0 1px #000);
}

.tag-blue::after {
  background-color: #4a90e2;
  mask: url('@/assets/svgs/Cursor.svg') no-repeat center;
  mask-size: contain;
  background-image: none;
  filter: drop-shadow(0 0 1px #000) drop-shadow(0 0 1px #000);
}

.tag-yellow::after {
  background-color: #f5d616;
  mask: url('@/assets/svgs/Cursor.svg') no-repeat center;
  mask-size: contain;
  background-image: none;
  filter: drop-shadow(0 0 1px #000) drop-shadow(0 0 1px #000);
}

.tag-green::after {
  background-color: #7ed321;
  mask: url('@/assets/svgs/Cursor.svg') no-repeat center;
  mask-size: contain;
  background-image: none;
  filter: drop-shadow(0 0 1px #000) drop-shadow(0 0 1px #000);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .content-layout {
    gap: 3rem;
  }
  
  .projects-grid {
    max-width: 700px;
  }
}

@media (max-width: 968px) {
  .content-layout {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    padding: 0 1rem;
  }
  
  .curved-arrow {
    display: none;
  }
  
  .section-header {
    margin-left: 0;
    margin-top: 2rem;
    text-align: center;
  }
  
  .section-description {
    margin-left: 0;
    text-align: center;
    max-width: 100%;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .projects-grid {
    max-width: 600px;
    gap: 1.5rem;
  }
  
  .project-title {
    font-size: 1rem;
  }
  
  .project-tag {
    font-size: 12px;
    padding: 0.4rem 0.8rem;
  }
}

@media (max-width: 768px) {
  .projects-section {
    padding: 2rem 0;
  }
  
  .content-layout {
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-text {
    font-size: 20px;
  }
  
  .projects-grid {
    gap: 1rem;
    max-width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
  
  .project-card {
    aspect-ratio: 1;
    min-height: 200px;
  }
  
  .project-title {
    font-size: 0.9rem;
    width: 45%;
  }
  
  .project-tag {
    font-size: 11px;
    padding: 0.3rem 0.6rem;
    max-width: 50%;
  }
  
  .project-content {
    padding: 0.8rem;
    min-height: 50px;
  }
}

@media (max-width: 600px) {
  .projects-grid {
    grid-template-columns: 1fr;
    max-width: 350px;
    gap: 1.5rem;
  }
  
  .project-card {
    aspect-ratio: 1.2;
    min-height: 280px;
  }
  
  .project-title {
    font-size: 1.1rem;
    width: 50%;
  }
  
  .project-tag {
    font-size: 12px;
    padding: 0.4rem 0.8rem;
    max-width: 45%;
  }
  
  .project-content {
    padding: 1rem;
    min-height: 60px;
  }
}

@media (max-width: 480px) {
  .projects-section {
    padding: 1.5rem 0;
  }
  
  .content-layout {
    padding: 0 0.5rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .section-text {
    font-size: 18px;
  }
  
  .projects-grid {
    max-width: 300px;
    gap: 1rem;
  }
  
  .project-card {
    min-height: 250px;
  }
  
  .project-title {
    font-size: 1rem;
  }
  
  .project-tag {
    font-size: 11px;
    padding: 0.3rem 0.6rem;
  }
}
</style>
